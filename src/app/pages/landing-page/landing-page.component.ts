import { CommonModule } from '@angular/common';
import { EventService } from 'src/app/services/event.service';
import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalStorageService } from "src/app/services/local-storage.service";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { isPlatformBrowser } from "@angular/common";
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { FaqComponent } from 'src/app/reports/faq/faq.component';
import { TestimonialComponent } from 'src/app/shared/testimonial/testimonial.component';
import { shineLendingPageJSON } from '../../JsonFiles/lendingpage';
import { PopupCopyComponent } from 'src/app/modal/popup-copy/popup-copy.component';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule,LazyLoadImageModule,CarouselModule,FaqComponent,TestimonialComponent,LazyLoadImageModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  openAccording: boolean = false;

  customOptionKeys: OwlOptions = {
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
        items: 1,
        skip_validateItems: true,
      },
      400: {
        items: 1,
        skip_validateItems: true,
      },
      740: {
        items: 1,
        skip_validateItems: true,
      },
      940: {
        items: 1,
        skip_validateItems: true,
      },
    },
  };

  customOptionTable: OwlOptions = {
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
        items: 1.1,
        skip_validateItems: true,
      },
      400: {
        items: 1.1,
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

  customOptionPlan: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: true,
    dots: true,
    autoplay: true,
    navSpeed: 300,
    nav: false,
    margin: 15,

    autoplayTimeout: 8000,
    autoplaySpeed: 1500,
    // navText: ["", ""],
    // navText: ["<img class='navTxtImg' src='./assets/images/icons/left-chevron-svgrepo-com.svg'>", "<img class='navTxtImg' src='./assets/images/icons/left-chevron-svgrepo-com.svg'>"],
    responsive: {
      0: {
        items: 1.1,
        skip_validateItems: true,
      },
      400: {
        items: 1.2,
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

  smeProduct: any;
  smeProductPage: any  = {};
  productPageType: string = 'smeproduct';
  SecuredProductBannerData: any;
  Shine_Features_Section: any;
  SmeLendersData: any;
  Secured_Loan_Description: any;
  HelpSections: any;
  Benefits_Secured_Business_Loan: any = [];
  Secured_Loan_Product_Options: any;
  Eligibility_SectionData: any;
  Collateral_SectionData: any;
  Documents_SectionData: any;
  Other_Loan_Products_Available_Section: any;
  Sme_SyndicateData: any;
  Sme_Testimonial: any;
  Useful_Links: any;
  productTitle: any;
  Host_Url!: string;
  productSubTitle: any;
  SMEProductmetaDataFromJSON: any;
  moreContent: any;
  aaa:any;
  readMore: boolean = false;
  Key_Stats_Section: any;
  show: boolean = false;
  MSMEPageMetaData: any;
  emiCalulatorData: any;
  Comparison_Section: any;
  showDesktop: boolean = false;
  isBrowser: boolean = false;
  Shinebanner: any;
  businessLoanJson: any;
  AnalyseSection: any;
  WhatToExpectSection: any;
  HowShineWillHelpSection: any;
  Parameter: any;
  ShineFeaturesSection: any;
  ProductTiles: any;
  faqs: any;
  TestimonialsJson: any;
  summarySection: any;
  shine_comparison: any;
  WhoisShineForSection: any;
  constructor(
    public eventService: EventService,
    public router: Router,
    private dialog: MatDialog,
    public localStorage: LocalStorageService,
    private cdr: ChangeDetectorRef,
    private state: LocalStorageService,
    private breakpointObserver: BreakpointObserver,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
      
  }
  ngOnInit(): void {

    this.state.removeItem();
     console.log(shineLendingPageJSON.Shine_Banner,"ll")
 //   this.localStorage.removeSomeItem();
    this.breakpointObserver
    .observe(['(min-width: 500px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.showDesktop = true;
      } else {
        this.showDesktop = false;
      }
    });
    //this.MSMEPageMetaData = metaData?.MSMEpageMetaData;
    this.eventService?.addmetaTag(this.MSMEPageMetaData?.title , this.MSMEPageMetaData?.description , this.MSMEPageMetaData?.keywords);
    this.getBusinessLoanData();

  }

  ngAfterViewInit(): void {  
    this.isBrowser = isPlatformBrowser(this.platformId); 
    this.cdr.detectChanges();
 }

 openDialog(){
  // this.getBorrowerInformation();
  const dialogRef = this.dialog.open(PopupCopyComponent, {
    width: 'auto',
    height: 'auto',
  });
}

openPopup(data:any){
  localStorage.setItem("popupData",data);
  this.openDialog();
}

 goToPlans(){
  this.router.navigate(['/in/pricing1'])
 }
  showAboutClass(body: any) {
    this.moreContent = body;
    this.readMore = true;
  }



  getBusinessLoanData(){
    this.businessLoanJson = shineLendingPageJSON;

    this.Shinebanner = this.businessLoanJson?.Shine_Banner;
    this.AnalyseSection = this.businessLoanJson?.Analyse_Section;
    this.WhatToExpectSection = this.businessLoanJson?.What_To_Expect_Section;
    this.shine_comparison = this.businessLoanJson?.Shine_Comparison_Section;
    this.HowShineWillHelpSection = this.businessLoanJson?.How_Shine_Will_Help_Section;
    this.Parameter = this.HowShineWillHelpSection?.Parameter.map((res: {Parameter: any; Icon: any; }) =>({
      icon : res?.Icon,
      parameter: res?.Parameter
    }));
    this.ShineFeaturesSection = this.businessLoanJson?.Shine_Features_Section;
    this.ProductTiles = this.ShineFeaturesSection?.Product_Tiles.map((res: {Pop_up_copy: any; Icon: any; Product_copy: any; })=>({
      icon: res?.Icon,
      productCopy: res?.Product_copy,
      popupCopy: res?.Pop_up_copy
    }));

    this.summarySection = this.businessLoanJson?.Summary_Section;

    this.TestimonialsJson = this.businessLoanJson.Shine_Testimonial;

    this.faqs = this.businessLoanJson?.Faqs?.FAQs;

    this.WhoisShineForSection = this.businessLoanJson?.Who_is_Shine_For_Section


  }

}
