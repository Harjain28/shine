import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { StatusPopupComponent } from 'src/app/modal/status-popup/status-popup.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { EventService } from 'src/app/services/event.service';

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

  constructor(private dialog: MatDialog, private router: Router, private api: ApiService, private route: ActivatedRoute, private event: EventService){
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
    this.defaultparams = {
      mobile: '7976330044',
      payloadString:this.paramsObject.params?.respData 
    };
    // const params = { ...defaultparams };
    this.api
      .remediation(`api/Remediation/PaymentConfirmation`, this.defaultparams)
      .subscribe({
        next: (res: any) => {
          if (res?.trans_status === 'F') {
            this.isDialogShow = true;
             this.api.alert(res?.resp_message, "error");
             this.closeBureauDialog();
             this.event.updatePaymentStatus(true);
             this.router.navigate(['/in/confirm_order'], { replaceUrl: true });
          } else {
            this.api.alert('Please upload documents', "success");
            this.closeBureauDialog();
          this.router.navigate(['/in/bank_statement'],{ replaceUrl: true });
          }
          
        },
        error: (error: any) => {},
        complete: () => {
          //  ("Request complete");
        },
      });
  }


}
