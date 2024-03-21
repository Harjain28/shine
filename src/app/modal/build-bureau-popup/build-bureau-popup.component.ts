import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-build-bureau-popup',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './build-bureau-popup.component.html',
  styleUrls: ['./build-bureau-popup.component.scss']
})
export class BuildBureauPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<BuildBureauPopupComponent>,
  ) { }

  ngOnInit(): void {
  }

  closeDialoge(): void {
    this.dialogRef.close();
  }

}