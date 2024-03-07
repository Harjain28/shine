import { CommonModule } from '@angular/common';
import { EventService } from 'src/app/services/event.service';
import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalStorageService } from "src/app/services/local-storage.service";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { isPlatformBrowser } from "@angular/common";
import { msmeloansJson } from '../msmedata';
import { SMEproductJSON } from '../data';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule,LazyLoadImageModule,CarouselModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  openAccording: boolean = false;

  customOptions: OwlOptions = {
    loop: false,
    rewind: true,
    mouseDrag: false,
    touchDrag: true,
    dots: true,
    autoplay: true,
    navSpeed: 300,
    nav: false,

    autoplayTimeout:8000,
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

  customOptionKeys: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 300,
    nav: false,

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

  customOptions4: OwlOptions = {
    loop: false,
  rewind: true,
   dots: false,
   autoplay: true,
   navSpeed: 300,
   nav: true,
   margin:8,
   mouseDrag: false,
   touchDrag: true,

   autoplayTimeout:8000,
   autoplaySpeed: 1500,
   // navText: ["", ""],
   navText: ["<img class='navTxtImg' src='./assets/images/homeIcon/left-arrow.svg'>", "<img class='navTxtImg' src='./assets/images/homeIcon/right-arrow.svg'>"],
   responsive: {
     0: {
       items: 1,
       dots: true,
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

  smeProduct: any;
  smeProductPage: any  = {};
  productPageType: string = 'smeproduct';
  SecuredProductBannerData: any;
  Secured_Loan_Feature: any;
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
  readMore: boolean = false;
  Key_Stats_Section: any;
  show: boolean = false;
  MSMEPageMetaData: any;
  emiCalulatorData: any;
  Comparison_Section: any;
  showDesktop: boolean = false;
  isBrowser: boolean = false;
  constructor(
    public eventService: EventService,
    public router: Router,
    public localStorage: LocalStorageService,
    private cdr: ChangeDetectorRef,
    private breakpointObserver: BreakpointObserver,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
      
  }
  ngOnInit(): void {
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
    this.getSmeProductsData();

  }

  ngAfterViewInit(): void {  
    this.isBrowser = isPlatformBrowser(this.platformId); 
    this.cdr.detectChanges();
 }
  showAboutClass(body: any) {
    this.moreContent = body;
    this.readMore = true;
  }

  getSmeProductsData() {
    this.smeProduct  = msmeloansJson;
    const smeProduct1 = SMEproductJSON;
        this.Benefits_Secured_Business_Loan = [];
    this.SecuredProductBannerData =
      this.smeProduct?.Homepage_Banner;
      this.emiCalulatorData = this.smeProduct?.EMI_Calculator_Section;
      this.smeProductPage  =  {name: 'smeproduct' , alt: this.emiCalulatorData?.imageText};
      this.Key_Stats_Section  = this.smeProduct?.Key_Stats_Section;
    this.Secured_Loan_Feature = this.smeProduct?.Secured_Loan_Feature;
    this.SmeLendersData = this.smeProduct?.Lender_Section;
    this.Secured_Loan_Description = this.smeProduct?.Secured_Loan_Description;
    this.HelpSections = smeProduct1?.["machinery-loan-for-msme"]?.How_We_will_help_You;
    this.smeProduct?.Benefits_Secured_Business_Loan.forEach((element: { Description_Header: any; Description_Body: any; }) => {
      this.Benefits_Secured_Business_Loan.push({Description_Header: element?.Description_Header, Description_Body: element?.Description_Body, Long_Text: false});
    });
    this.Comparison_Section = this.smeProduct?.Comparison_Section;
    this.Secured_Loan_Product_Options =
      this.smeProduct?.Secured_Loan_Product_Options;
    this.Eligibility_SectionData =
      this.smeProduct?.Eligibility_Collateral_Section?.Eligibility_Section;
    this.Collateral_SectionData =
      this.smeProduct?.Eligibility_Collateral_Section?.Collateral_Section;
    this.Documents_SectionData = this.smeProduct?.Documents_Section;
    this.Other_Loan_Products_Available_Section =
      this.smeProduct?.Your_Business_Loan_Options;
    this.Sme_SyndicateData = this.smeProduct?.Syndication_Homepage;
    this.Sme_Testimonial = this.smeProduct?.Homepage_Testimonial;
    this.Useful_Links = this.smeProduct?.Useful_Links;
  
  }

}
