import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { shineLendingPageJSON } from 'src/app/JsonFiles/lendingpage';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { MaterialModule } from 'src/app/material.module';
import {  Router } from "@angular/router";
import { PricingService } from 'src/app/services/random-pricing.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-client-section',
  standalone: true,
  imports: [CommonModule, CarouselModule,MaterialModule,],
  templateUrl: './client-section.component.html',
  styleUrls: ['./client-section.component.scss']
})
export class ClientSectionComponent {
  WhatToExpectSection: any;
  businessLoanJson: any;

  customOptionKeys1: OwlOptions = {
    loop: true,
    rewind: true,
    dots: true,
    autoplay: true,
    navSpeed: 100,
    nav: false,
    margin: 10,
    items: 1,
   autoWidth:true,
   mouseDrag: true,
   touchDrag: true,

   autoplayTimeout:8000,
   autoplaySpeed: 2000,
    // navText: ["", ""],
    // navText: ["<img class='navTxtImg' src='./assets/images/icons/left-chevron-svgrepo-com.svg'>", "<img class='navTxtImg' src='./assets/images/icons/left-chevron-svgrepo-com.svg'>"],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
  };
  shineBanner: any;
  pricing_url: any;
  randomNumber: any;

  constructor(
    public router: Router, private pricingService: PricingService, private navigationService:NavigationService
  ){}

 

  ngOnInit(): void {
    this.randomNumber = Number(localStorage.getItem("plan_count"));
    this.businessLoanJson = shineLendingPageJSON; 
    this.WhatToExpectSection = this.businessLoanJson?.What_To_Expect_Section;
    this.shineBanner = this.businessLoanJson?.Shine_Banner;


  }

  goToPlans(){
    this.navigationService.setLinkClicked(true);
    this.pricing_url = this.pricingService.getPricingUrl();
    this.router.navigate([this.pricing_url], { queryParamsHandling:"preserve"});
 }

}
