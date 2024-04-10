
import { shinePricingPageJSON } from 'src/app/JsonFiles/pricing';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';

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


  constructor(
    private api: ApiService,
    public router: Router,
    private http: HttpClient,
    private datePipe: DatePipe,
    private event: EventService,
    private route: ActivatedRoute
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
      this.state = localStorage.getItem("state");

      this.fullName = localStorage.getItem("fullName");
      this.mobile = localStorage.getItem("mobile")
      this.companyName = localStorage.getItem("companyName");

      this.Headertext = localStorage.getItem("text");
      this.getConfirmPaymentJson();  

      
    }

    cancelCoupon(){
      this.discountSection = false;
      this.calGST = ((this.filteredData?.Price)*18)/100;
      this.total = parseInt(this.filteredData?.Price) + this.calGST;
    }
    
    couponCode(){
      this.discountSection = true;
      if(this.couponInput === this.couponValue1){
        this.discountPrice =100;
        this.calGST = ((this.filteredData?.Price - this.discountPrice)*18)/100;

        this.total = parseInt(this.filteredData?.Price) + this.calGST - this.discountPrice;
      }
      if(this.couponInput === this.couponValue2){
        this.discountPrice =200;
        this.calGST = ((this.filteredData?.Price - this.discountPrice)*18)/100;
        this.total = parseInt(this.filteredData?.Price) + this.calGST - this.discountPrice;

      }
    }

    onInputChange(): void {
      this.isButtonDisabled = (this.couponInput.trim() !== this.couponValue1) && (this.couponInput.trim() !== this.couponValue2);
    }
  

    getConfirmPaymentJson(){
      this.filteredData = shinePricingPageJSON?.Confirm_Order_JSON?.OrderText.find(item => item.Headertext === this.Headertext)
      for (const order of shinePricingPageJSON?.Confirm_Order_JSON?.OrderText) {
        if (order.Headertext === this.Headertext) {
          this.count += order.item.length;
        }
      }
      if(this.Headertext === "Monthly")
      {
        this.per_text = "month"
        this.cuttedPrice = '₹1499'
      }
      else{
        this.per_text = "year"
        this.cuttedPrice = '₹4999'

      }

      this.calGST = ((this.filteredData?.Price)*18)/100;
      this.total = parseInt(this.filteredData?.Price) + this.calGST;

    }

    back(){
      this.router.navigate(['in/otp'])
    }

    sliced(){
      this.slicedData = true;
    }

    paymentURL(){
      this.router.navigate(['in/selection'])
    }

  getForPaymentMethod() {
    let requestData: any = {};
    requestData['amount'] = '2.00';
    requestData['custMobile'] = localStorage.getItem("mobile");
    requestData['custMail'] = localStorage.getItem("email");
    requestData['returnUrl'] = 'http://localhost:4200/in/payment_status';


    const params = { ...this.paramsObject.params };
    this.api
      .postForPayment(`api/Remediation/Payment`, requestData, params)
      .subscribe({
        next: (res: any) => {
          this.reqData = res;
          this.paymentGUrl = res.url;
          if (res?.url) {
            this.showForm = true;
            setTimeout(() => {
              this.submitForm();
            }, 1000);  
          }
        },
        error: (error: any) => {},
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
