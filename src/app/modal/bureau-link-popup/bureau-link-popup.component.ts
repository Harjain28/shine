import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-bureau-link-popup',
  standalone: true,
  imports: [CommonModule,MaterialModule],
  templateUrl: './bureau-link-popup.component.html',
  styleUrls: ['./bureau-link-popup.component.scss']
})
export class BureauLinkPopupComponent {
  
  constructor(
    public dialogRef: MatDialogRef<BureauLinkPopupComponent>,
  ) { }

  ngOnInit(): void {
  }

  closeDialoge(): void {
    this.dialogRef.close();
  }

}
