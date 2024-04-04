import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
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

  @Output() dataEvent = new EventEmitter<any>();

  constructor(public router: Router){

  }

  customOptionPlan: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    dots: true,
    autoplay: true,
    navSpeed: 300,
    nav: false,
    margin: 10,

    autoplayTimeout: 8000,
    autoplaySpeed: 1500,
    // navText: ["", ""],
    // navText: ["<img class='navTxtImg' src='./assets/images/icons/left-chevron-svgrepo-com.svg'>", "<img class='navTxtImg' src='./assets/images/icons/left-chevron-svgrepo-com.svg'>"],
    responsive: {
      0: {
        items: 2,
        skip_validateItems: true,
      },
      400: {
        items: 2,
        skip_validateItems: true,
      },
      740: {
        items: 2,
        skip_validateItems: true,
      },
      940: {
        items: 3,
        skip_validateItems: true,
      },
    },
  };

  ngOnInit(): void{
    this.getPricingData();
    console.log(this.pricingHeader.col,"gg")
  }

  goToPayment(text:any){
    localStorage.setItem("text",text);

    this.router.navigate(['/in/register'])

  }
  getPricingData(){
    this.pricingJson = shinePricingPageJSON;
    this.pricingHeader = this.pricingJson?.Pricing_Header;
    this.pricingColumns = this.pricingHeader?.col;

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
