import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-credit-journey-popup',
  standalone: true,
  imports: [CommonModule,MaterialModule],
  templateUrl: './credit-journey-popup.component.html',
  styleUrls: ['./credit-journey-popup.component.scss']
})
export class CreditJourneyPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<CreditJourneyPopupComponent>,
  ) { }

  ngOnInit(): void {
  }

  closeDialoge(): void {
    this.dialogRef.close();
  }

}