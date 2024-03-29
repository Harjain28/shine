import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-popup-copy',
  standalone: true,
  imports: [CommonModule,MaterialModule],
  templateUrl: './popup-copy.component.html',
  styleUrls: ['./popup-copy.component.scss']
})
export class PopupCopyComponent {
  constructor(
    public dialogRef: MatDialogRef<PopupCopyComponent>,
  ) { }

  ngOnInit(): void {
  }

 

  closeDialoge(): void {
    this.dialogRef.close();
  }

}