import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { shinePricingPageJSON } from 'src/app/JsonFiles/pricing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing1',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatCardModule,MatTabsModule,CarouselModule],
  templateUrl: './pricing1.component.html',
  styleUrls: ['./pricing1.component.scss']
})
export class Pricing1Component {
  pricingJson: any;
  pricingHeader: any;
  pricingColumns: any;
  WhatisShineSection: any;
  HowDoesShinehelpSection: any;
  featureSection: any;
  constructor(public router: Router){

  }

  ngOnInit(): void{
    this.getPricingData();
    console.log(this.pricingHeader.col,"gg")
  }

  goToSelection(){
    this.router.navigate(['/in/register'])

  }
  getPricingData(){
    this.pricingJson = shinePricingPageJSON;
    this.pricingHeader = this.pricingJson?.Pricing_Header;
    this.pricingColumns = this.pricingHeader?.col.map((res: { item: any[]; })=>({
      keyFeature: res?.item[0],
      value1: res?.item[1],
      value2: res?.item[2]

    }));

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
