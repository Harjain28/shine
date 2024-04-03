import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent {
  reqData: any;
  paramsObject: any;
  merchantId: any;

  constructor(  private api: ApiService,private http: HttpClient,
      public router: Router, private route: ActivatedRoute){
      this.route.queryParamMap.subscribe((params) => {
        this.paramsObject = { ...params };
      });
    }

    ngOnInit(): void{
      this.reqData = localStorage.getItem("reqData");
      this.merchantId = localStorage.getItem("merchantId");
    }

    goToForm1(){
      this.router.navigate(['/in/register'])
    }


    // onSubmit() {
    //   const formData = new FormData();
    //   formData.append('merchantId', this.merchantId);
    //   formData.append('reqData', this.reqData);
  
    //   this.http.post('https://pa-preprod.1pay.in/payment/payprocessorV2', formData)
    //     .subscribe(
    //       response => {
    //         // Handle success response
    //         console.log('Payment successful!', response);
    //         this.confirmPayment()
    //       },
    //       error => {
    //         // Handle error response
    //         console.error('Payment failed!', error);
    //       }
    //     );
    // }

      
    // confirmPayment(){
    //   const defaultparams = {
    //     payloadString: this.reqData,
    //     mobile: "9444444444",
    //   };
    //   const params = { ...defaultparams, ...this.paramsObject.params };
    //       this.api
    //         .remediation(
    //           `api/Remediation/PaymentConfirmation`,
    //           params
    //         )
    //         .subscribe({
    //           next: (res: any) => {
    //             this.router.navigate(['/in/bank_statement'])

    //           },
    //           error: (error:any) => {
    //           },
    //           complete: () => {
    //           //  ("Request complete");
    //           },
    //         });
        
      
    // }
}
