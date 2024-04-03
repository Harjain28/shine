import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
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

  constructor(  private api: ApiService,  public router: Router, private datePipe: DatePipe   , private route: ActivatedRoute,

    ){
      this.route.queryParamMap.subscribe((params) => {
        this.paramsObject = { ...params };
      });
      this.currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss.SSS\'Z\'', 'UTC')
    }


    ngonInit() :void{
      
    }

    paymentURL(){
      this.router.navigate(['in/selection'])
    }

    getForPaymentMethod() {
      
      let requestData: any = {}; 
        requestData["dateTime"] = this.currentDate ;
        requestData["amount"] = 9000;
        requestData["isMultiSettlement"] = "0";
        requestData["custMobile"] = "";
        requestData["apiKey"] = "";
        requestData["productId"] = "";
        requestData["instrumentId"] = "";
        requestData["cardType"] = "";
        requestData["txnType"] = "";
        requestData["udf1"] = "";
        requestData["udf2"] = "";
        requestData["udf3"] = "";
        requestData["udf4"] = "";
        requestData["udf5"] = "";
        requestData["udf6"] = "";
        requestData["merchantId"] = "";
        requestData["custMail"] = "";
        requestData["returnUrl"] = "";
        requestData["channelId"] = "";
        requestData["txnId"] = "";
        requestData["cardDetails"] = "";
      
        const params = {  ...this.paramsObject.params };
        this.api
          .postForPayment(
            `api/Remediation/Payment`,requestData,
            params
          )
          .subscribe({
            next: (res: any) => {
              this.reqData = res?.reqData;
              this.paymentGUrl = res?.url;
              localStorage.setItem("reqData",this.reqData);
              localStorage.setItem("merchantId",res?.merchantId);
              //window.location.href = res?.url;
             this.paymentURL();
              // this.confirmPayment();
           
            },
            error: (error:any) => {
            },
            complete: () => {
            //  ("Request complete");
            },
          });
      
    }

    confirmPayment(){
      const defaultparams = {
        payloadString: this.reqData,
        mobile: "9444444444",
      };
      const params = { ...defaultparams, ...this.paramsObject.params };
          this.api
            .remediation(
              `api/Remediation/PaymentConfirmation`,
              params
            )
            .subscribe({
              next: (res: any) => {
                this.router.navigate(['/in/bank_statement'])

              },
              error: (error:any) => {
              },
              complete: () => {
              //  ("Request complete");
              },
            });
        
      
    }
  

    paymentStatusCheck(){
      const defaultparams = {
        payload: "",
      };
      const params = { ...defaultparams, ...this.paramsObject.params };
      this.api.remediation(
          `api/Remediation/PaymentStatusCheck`,
          params
        )
        .subscribe({
          next: (res: any) => {
        
         
          },
          error: (error:any) => {
          },
          complete: () => {
          //  ("Request complete");
          },
        });
    }
  
 
  }
  
  