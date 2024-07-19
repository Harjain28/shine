import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { MaterialModule } from 'src/app/material.module';
import { reportStatciData } from 'src/app/JsonFiles/reportpageStaticData';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-probability-of-loan',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressBarModule,
    MaterialModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    CarouselModule,
  ],
  templateUrl: './probability-of-loan.component.html',
  styleUrls: [
    './probability-of-loan.component.scss',
    '../reports.component.scss',
  ],
})
export class ProbabilityOfLoanComponent {
  @Input() probOfLoanData: any;
  visibleOffers!: boolean;

  customOptions4: OwlOptions = {
    loop: false,
    rewind: true,
    dots: true,
    autoplay: true,
    navSpeed: 300,
    nav: false,
    margin: 8,
    mouseDrag: false,
    touchDrag: true,

    autoplayTimeout: 8000,
    autoplaySpeed: 1500,
    // navText: ["", ""],
    navText: [
      "<img class='navTxtImg' src='./assets/images/homeImage/left-arrow.svg'>",
      "<img class='navTxtImg' src='./assets/images/homeImage/right-arrow.svg'>",
    ],
    responsive: {
      0: {
        items: 1.2,
        dots: true,
      },
      400: {
        items: 1.3,
      },
      740: {
        items: 2,
      },
      940: {
        items: 3,
      },
    },
  };
  data: any;
  currProbData: any;
  probabilityData: any[] = [];
  staticData: any;
  showApplyButton: boolean = false;

  constructor(public router:Router, private navigationService:NavigationService) {}

  ngOnInit(): void {
    this.data = this.probOfLoanData;
    this.staticData = reportStatciData?.lenders;
    this.currProbData = this.data?.report?.loanProbability;

    this.staticData.forEach((item1: { key: string }) => {
      const matchingItem = this.currProbData.find(
        (item2: { lender: string }) => item1.key === item2.lender
      );
      if (matchingItem) {
        const combinedItem = { ...item1, ...matchingItem };
        this.probabilityData.push(combinedItem);
        if ((combinedItem.currentProbability * 100) > 20) {
          this.showApplyButton = true;
        }
      }

    });
  }

  redirectToMSME() {
    window.location.href = 'https://www.creditenable.com/in/sme-business-loan/unsecured-business-loans/msme-sme-business-loans-india-v1';
  }
  redirectToPricing() {
    this.navigationService.setLinkClicked(true);
    this.router.navigate(['/in/pricing_group']);
  }


  moreOffers() {
    this.visibleOffers = true;
  }
}
