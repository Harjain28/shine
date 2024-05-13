import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { shineLendingPageJSON } from 'src/app/JsonFiles/lendingpage';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { MaterialModule } from 'src/app/material.module';
import {  Router } from "@angular/router";

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
    dots: true,
    autoplay: true,
    nav: false,
    margin: 10,

    autoplayTimeout: 2000,
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

  constructor(
    public router: Router,
  ){}

  goToPlans(){
    this.router.navigate(['/in/pricing_group'])
   }

  ngOnInit(): void {
    this.businessLoanJson = shineLendingPageJSON; 
    this.WhatToExpectSection = this.businessLoanJson?.What_To_Expect_Section;


  }

}
