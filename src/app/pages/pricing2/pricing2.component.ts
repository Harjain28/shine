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

  constructor(){

  }

  ngOnInit(): void{
    this.getPricingData();
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

}