import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { shinePricingPageJSON } from 'src/app/JsonFiles/pricing';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SampleReportsFormComponent } from 'src/app/modal/sample-reports-form/sample-reports-form.component';
import { MatDialog } from '@angular/material/dialog';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-pricing-common',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatCardModule,MatTabsModule,CarouselModule],
  templateUrl: './pricing-common.component.html',
  styleUrls: ['./pricing-common.component.scss', '../pricing1/pricing1.component.scss']
})
export class PricingCommonComponent {
  pricingJson: any;
  pricingHeader: any;
  pricingColumns: any;
  WhatisShineSection: any;
  HowDoesShinehelpSection: any;
  featureSection: any;

  @Output() dataEvent = new EventEmitter<any>();
  planCount: any;
  randomNumber: any;
  pricingPlan:any;
  filteredPrice:any;
  monthlyFilteredPlan: any;
  annaulFilteredPlan: any;
  monthlyPlan: any;
  annualPlan: any;

  constructor(public router: Router,private navigationService: NavigationService, private state: LocalStorageService,private dialog:MatDialog){

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
    this.showPricingPlan();
    this.state.removeSomeItem();
    this.getPricingData();
  }

  viewReportsForm(){
    this.openDialog();
   }

   
  showPricingPlan() {
    this.randomNumber = localStorage.getItem("plan_count");
    const plans:any = {
      1: { monthlyFiltered: '1,999', annualFiltered: '3,999', monthly: '999', annual: '2,999' },
      2: { monthlyFiltered: '2,999', annualFiltered: '4,999', monthly: '1,299', annual: '3,999' },
      3: { monthlyFiltered: '3,999', annualFiltered: '8,999', monthly: '2,499', annual: '7,499' },
      default: { monthlyFiltered: '1,999', annualFiltered: '3,999', monthly: '999', annual: '2,999' }
    };
    const selectedPlan = plans[Number(this.randomNumber)] || plans.default;
    this.monthlyFilteredPlan = selectedPlan.monthlyFiltered;
    this.annaulFilteredPlan = selectedPlan.annualFiltered;
    this.monthlyPlan = selectedPlan.monthly;
    this.annualPlan = selectedPlan.annual;
  }
 
   openDialog(){
     // this.getBorrowerInformation();
     const dialogRef = this.dialog.open(SampleReportsFormComponent, {
       width: '320px',
       height: 'auto',
     });
   }
   goToRegister(text:any, plan:any, filteredPlan:any, isLinkClicked:boolean){
    const pricingPlan = plan.replace(/,/g, '');
    localStorage.setItem("text",text);
    localStorage.setItem("plan",pricingPlan);
    localStorage.setItem("filteredPlan", filteredPlan);
    this.navigationService.setLinkClicked(isLinkClicked);
     this.navigationService.redirectToRegister(pricingPlan);
    // this.router.navigate(['/in/register'], { queryParamsHandling:"preserve"})
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
    }))
    
    

  }

}
