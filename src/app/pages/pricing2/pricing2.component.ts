import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { shinePricingPageJSON } from 'src/app/JsonFiles/pricing';
import { MatDialog } from '@angular/material/dialog';
import { SampleReportsFormComponent } from 'src/app/modal/sample-reports-form/sample-reports-form.component';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';


@Component({
  selector: 'app-pricing2',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatCardModule,MatTabsModule,CarouselModule],
  templateUrl: './pricing2.component.html',
  styleUrls: ['./pricing2.component.scss']
})
export class Pricing2Component {
  WhatisShineSection: any;
  pricingJson: any;
  HowDoesShinehelpSection: any;
  featureSection: any;

  Headertext: any;
  filteredData: any;
  discountPrice: any;
  total: any;
  cuttedPrice: any;

  constructor(private dialog: MatDialog, private router: Router, private navigationService:NavigationService ){
    this.getPricingData();

  }

  ngOnInit(): void{
    
    this.getConfirmPaymentJson();
   
  }

  viewReportsForm(){
   this.openDialog();
  }

  openDialog(){
    // this.getBorrowerInformation();
    const dialogRef = this.dialog.open(SampleReportsFormComponent, {
      width: '320px',
      height: 'auto',
    });
  }


  getPricingData(){
    this.pricingJson = shinePricingPageJSON;
    this.WhatisShineSection = this.pricingJson?.What_is_Shine_Section;
    this.HowDoesShinehelpSection = this.pricingJson?.How_Does_Shine_help_Section;

    this.featureSection = this.pricingJson?.How_Does_Shine_help_Section?.Feature_Tiles.map
    ((res: {Count: any; Icon: any; Product_copy: any; }) =>({
      icon: res?.Icon,
      productCopy: res?.Product_copy,
      count: res?.Count
    }))
    

  }

  goToRegister(text:any, isLinkClicked:boolean){
    localStorage.setItem("text",text);
    this.navigationService.setLinkClicked(isLinkClicked);
    this.router.navigate(['/in/register'])

  }

  getConfirmPaymentJson(){
    this.filteredData = shinePricingPageJSON?.Confirm_Order_JSON?.OrderText[1];
  }

}