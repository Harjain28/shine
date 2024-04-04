import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-status-popup',
  standalone: true,
  imports: [CommonModule,MaterialModule],
  templateUrl: './status-popup.component.html',
  styleUrls: ['./status-popup.component.scss']
})
export class StatusPopupComponent {

  constructor(
    public dialogRef: MatDialogRef<StatusPopupComponent>,
  ) { }


  ngOnInit(): void {

  }

  closeDialoge(): void {
    this.dialogRef.close();
  }


}