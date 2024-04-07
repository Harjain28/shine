import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { shinePricingPageJSON } from 'src/app/JsonFiles/pricing';


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

  constructor(){
    this.getPricingData();

  }

  ngOnInit(): void{
    
    this.Headertext = localStorage.getItem("text");
    this.getConfirmPaymentJson();
   
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

  getConfirmPaymentJson(){
    this.filteredData = shinePricingPageJSON?.Confirm_Order_JSON?.OrderText.find(item => item.Headertext === this.Headertext)
    
    if(this.Headertext === "Monthly")
    {
      this.cuttedPrice = '₹1499'
    }
    else{
      this.cuttedPrice = '₹4999'

    }
    this.discountPrice = (this.filteredData?.Price*5)/100;
    this.total = parseInt(this.filteredData?.Price) + this.discountPrice;
  }

}
