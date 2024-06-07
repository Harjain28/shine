import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { StatusPopupComponent } from 'src/app/modal/status-popup/status-popup.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { EventService } from 'src/app/services/event.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-payment-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-status.component.html',
  styleUrls: ['./payment-status.component.scss']
})
export class PaymentStatusComponent {
  paramsObject: any;
  isDialogShow: boolean = false;
  dialogRef: MatDialogRef<StatusPopupComponent> | undefined;
  defaultparams: any;
  parsedData: any;
  plan: any
  id: any;

  constructor(private dialog: MatDialog, private router: Router, private navigationService: NavigationService, private api: ApiService, private route: ActivatedRoute, private event: EventService){
    this.route.queryParamMap.subscribe((params) => {
      this.paramsObject = { ...params };
      this.confirmPayment();
    });
  }

  ngOnInit(): void{
  
    if (!this.isDialogShow) {
      this.openBureauDialog();
    }
  
  }

    
  openBureauDialog(){
    this.dialogRef = this.dialog.open(StatusPopupComponent, {
      width: 'auto',
      height: 'auto',
    });
  }
  closeBureauDialog() {
    if (this.dialogRef) {
        this.dialogRef.close(); // Close the dialog using the stored reference
    }
  }

  confirmPayment() {
    const localData:any = localStorage.getItem("reqData");
    this.parsedData = JSON.parse(localData);
    if (this.parsedData) {
    this.defaultparams = {
      mobile: this.parsedData.mobile,
      payloadString:this.paramsObject.params?.respData 
    };
    // const params = { ...defaultparams };
    this.api
      .remediation(`api/Remediation/PaymentConfirmation`, this.defaultparams)
      .subscribe({
        next: (res: any) => {
          if (res?.trans_status.toUpperCase() === 'OK') {
            this.api.alert('Please upload documents', "success");
            this.closeBureauDialog();
            this.navigationService.setLinkClicked(true);
            this.router.navigate(['/in/bank_statement'],{ replaceUrl: true });
          } else {
            this.isDialogShow = true;
             this.api.alert(res?.resp_message, "error");
             this.closeBureauDialog();
             this.event.updatePaymentStatus(true);
             this.navigationService.setLinkClicked(true);
             this.plan = localStorage.getItem("plan");
                if (this.plan) {
                  this.id = this.plan === "999" ? "1" :
                  this.plan === "1299" ? "2" :
                  this.plan === "2499" ? "3" :
                  this.plan === "2999" ? "4" :
                  this.plan === "3999" ? "5" : "6";
                }
             this.router.navigate(['/in/confirm_order', this.id], { replaceUrl: true });
          }
          
        },
        error: (error: any) => {},
        complete: () => {
          //  ("Request complete");
        },
      });
    }
  }


}
