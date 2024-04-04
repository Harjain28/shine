import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { StatusPopupComponent } from 'src/app/modal/status-popup/status-popup.component';

@Component({
  selector: 'app-payment-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-status.component.html',
  styleUrls: ['./payment-status.component.scss']
})
export class PaymentStatusComponent {

  constructor(private dialog: MatDialog){

  }

  ngOnInit(): void{
    this.openBureauDialog();
  }

    
  openBureauDialog(){
    const dialogRef = this.dialog.open(StatusPopupComponent, {
      width: 'auto',
      height: 'auto',
    });
  }



}
