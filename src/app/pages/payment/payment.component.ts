
import { shinePricingPageJSON } from 'src/app/JsonFiles/pricing';
import { Component } from '@angular/core';
import { CommonModule, DatePipe, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { environment } from 'src/environments/environment';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule,MatIconModule,FormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  paramsObject: any;
  payloadString: any;
  mobileNo: any;
  currentDate: any;
  reqData: any;
  merchantId: any;
  paymentUrl: boolean = false;
  paymentGUrl: any;
  
  Headertext: any;
  filteredData: any;
  discountPrice: any;
  total: any;
  slicedData: boolean =false;
  count: number = 0;
  cuttedPrice: any;

  showForm:boolean= false;
  fullName:any;
  mobile: any;
  companyName: any;
  discountSection: boolean = false;

  couponInput: string = '';
  isButtonDisabled: boolean = true;
  calGST: any;
  couponValue1 =  "test1";
  couponValue2 = "test2";
  state: any;
  per_text: any;
  transactionFailed: boolean = false;
  parsedData: any;
  requestData:any;
  title: any;
  fName: any;
  lName: any;
  email: any;
  isInvalidCoupon: boolean = false;
  code: any;
  isSubmit!: boolean;
  planPrice: any | null;




  constructor(
    private api: ApiService,
    public router: Router,
    private http: HttpClient,
    private datePipe: DatePipe,
    private event: EventService,
    private route: ActivatedRoute,
    private navigationService:NavigationService,
    private location: Location
  ) {
    this.route.queryParamMap.subscribe((params) => {
      this.paramsObject = { ...params };
    });
    this.currentDate = this.datePipe.transform(
      new Date(),
      "yyyy-MM-ddTHH:mm:ss.SSS'Z'",
      'UTC'
    );
  }

    ngOnInit() :void{
      this.event.paymentStatus$.subscribe((status: boolean) => {
        this.transactionFailed = status;
      });

      this.requestData = localStorage.getItem("reqData");
      this.parsedData = JSON.parse(this.requestData);
   
      this.getPriceInfo();
      
      if(this.parsedData){
        this.fName = this.parsedData.firstName.toLowerCase().replace(/\b\w/g, (char: string) => char.toUpperCase());
        this.lName = this.parsedData.lastName.toLowerCase().replace(/\b\w/g, (char: string) => char.toUpperCase());
        this.fullName = this.title + ' ' + this.fName + ' ' + this.lName;
        this.mobile = this.parsedData.mobile;
        this.companyName = this.parsedData.businessName.toLowerCase().replace(/\b\w/g, (char: string) => char.toUpperCase());
        this.email = this.parsedData.email;
      }
      this.state = localStorage.getItem("state");
      this.getConfirmPaymentJson();  

      
    }

    getPriceInfo() {
      this.title = localStorage.getItem("title");
      this.Headertext = localStorage.getItem("text") ? localStorage.getItem("text") : this.parsedData?.pricingModel;
      this.planPrice =  localStorage.getItem("plan") ? localStorage.getItem("plan") :  this.parsedData?.selectedPrice;
      this.cuttedPrice = localStorage.getItem("filteredPlan");

    }

    cancelCoupon(){
      this.discountSection = false;
      if (this.planPrice) {
      this.calGST = ((this.planPrice)*18)/100;
      const totalPrice = parseFloat(this.planPrice) + this.calGST;
      this.total = totalPrice.toFixed(2);
      }
      this.code = "";
    }

    couponCode() {
      const params = { ...this.paramsObject.params };
      this.api.getwithHeader(`api/Remediation/PaymentCouponCheck?couponCode=${this.couponInput}`, params)
        .subscribe({
          next: (res: any) => {
            if (res?.success === true) {
              this.discountSection = true;
              this.code = this.couponInput;
              if (res.hasOwnProperty('percent') || res.hasOwnProperty('flatPrice')) {
                this.isInvalidCoupon = false;
                this.discountPrice = res?.percent ? (this.planPrice * res?.percent) / 100 : res?.flatPrice;
                this.calGST = ((this.planPrice - this.discountPrice) * 18) / 100;
                const totalPrice = parseFloat(this.planPrice) + this.calGST - this.discountPrice;
                this.total = totalPrice.toFixed(2);
              }
            }
          },
          error: (error: any) => {
            this.isInvalidCoupon = true;
          }
        });
    }
    

    onInputChange(): void {
      this.isButtonDisabled = !this.couponInput.trim();
    }
  

    getConfirmPaymentJson(){
      this.filteredData = shinePricingPageJSON?.Confirm_Order_JSON?.OrderText.find(item => item.Headertext === this.Headertext)
      for (const order of shinePricingPageJSON?.Confirm_Order_JSON?.OrderText) {
        if (order.Headertext === this.Headertext) {
          this.count += order.item.length;
        }
      }
      if(this.Headertext === "One-Time")
      {
        this.per_text = "month"
      }
      else{
        this.per_text = "year"
      }

      this.calGST = ((this.planPrice)*18)/100;
      const totalPrice = parseFloat(this.planPrice) + this.calGST;
      this.total = totalPrice.toFixed(2);

    }

    back(){
      this.location.back();
    }

    sliced(){
      this.slicedData = true;
    }


  getForPaymentMethod() {
    this.isSubmit = true;
    let requestData: any = {};
    requestData['amount'] = this.total;
    requestData['custMobile'] = this.mobile;
    requestData['custMail'] = this.email;
    requestData['returnUrl'] = `${environment.BASE_API_ENDPOINT}api/Remediation/PGResponse`;
    requestData['couponCode'] = this.code;

    const params = { ...this.paramsObject.params };
    this.api
      .postForPayment(`api/Remediation/Payment`, requestData, params)
      .subscribe({
        next: (res: any) => {
          this.reqData = res;
          this.isSubmit = true;
          this.paymentGUrl = res.url;
          this.navigationService.setLinkClicked(true);
          if (res?.url) {
            this.showForm = true;
            setTimeout(() => {
              this.submitForm();
            }, 1000);  
          }
        },
        error: (error: HttpErrorResponse) => {
          this.isSubmit = false;
          if (error.status === 401) {
            this.router.navigate(['in/register'])
          }
        },
        complete: () => {
          //  ("Request complete");
        },
      });
  }

  submitForm() {
    const formElement = document.getElementById('paymentForm') as HTMLFormElement;
    if (formElement) {
      formElement.submit();
    }
  }
 

}
