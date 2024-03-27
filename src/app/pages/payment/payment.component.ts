import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
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

  constructor(  private api: ApiService,  public router: Router,
    ){}

    goToForm1(){
      this.router.navigate(['/in/register'])
    }

    getForPaymentMethod() {
      let requestData: any = {}; 
        requestData["dateTime"] = "";
        requestData["amount"] = "";
        requestData["isMultiSettlement"] = "";
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
          .getwithHeader2(
            `api/Remediation/Payment`,requestData,
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
  
    confirmPayment(){
      const defaultparams = {
        payloadString: this.payloadString,
        mobile: this.mobileNo,
      };
      const params = { ...defaultparams, ...this.paramsObject.params };
          this.api
            .getPayment(
              `api/Remediation/PaymentConfirmation`,
              params
            )
            .subscribe(
              (res: any) => {
               
              },
              (err) => {
              }
            );
        
      
    }
  
    paymentStatusCheck(){
      const defaultparams = {
        payload: " ",
      };
      const params = { ...defaultparams, ...this.paramsObject.params };
      this.api.getPayment(
          `api/Remediation/PaymentStatusCheck`,
          params
        )
        .subscribe(
          (res: any) => {
           
          },
          (err) => {
          }
        );
    }
  
    netBankinglink(){
      const defaultparams = {
        mobile: this.mobileNo,
        callbackEnum: 0,
      };
      const params = { ...defaultparams, ...this.paramsObject.params };
      this.api.getPayment(
          `api/Remediation/NetBankingLink`,
          params
        )
        .subscribe(
          (res: any) => {
           
          },
          (err) => {
          }
        );
    }
  
    uploadDocumentLink(){
      const defaultparams = {
        mobile: this.mobileNo,
        callbackEnum: 0,
      };
      const params = { ...defaultparams, ...this.paramsObject.params };
      this.api
        .getPayment(
          `api/Remediation/UploadDocumentLink?mobile=${this.mobileNo}&callbackEnum=0`,
          params
        )
        .subscribe(
          (res: any) => {
           
          },
          (err) => {
          }
        );
    }
  }
  
  