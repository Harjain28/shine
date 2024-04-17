import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material.module';
import { shineLendingPageJSON } from 'src/app/JsonFiles/lendingpage';

@Component({
  selector: 'app-popup-copy',
  standalone: true,
  imports: [CommonModule,MaterialModule],
  templateUrl: './popup-copy.component.html',
  styleUrls: ['./popup-copy.component.scss']
})
export class PopupCopyComponent {
  ShineFeaturesSection: any;
  businessLoanJson: any;
  ProductTiles: any;
  popupData: any;
  filteredValues: any;
  constructor(
    public dialogRef: MatDialogRef<PopupCopyComponent>,
  ) { }

  ngOnInit(): void {
   this.popupData = localStorage.getItem("popupData");
   this.getPopUpData();
   
  }

  getPopUpData(){
    this.businessLoanJson = shineLendingPageJSON;
    this.ShineFeaturesSection = this.businessLoanJson?.Shine_Features_Section;
    this.filteredValues = shineLendingPageJSON.Shine_Features_Section?.Product_Tiles.find(item => item.Product_copy === this.popupData);
  }


  closeDialoge(): void {
    this.dialogRef.close();
  }

}