import { CommonModule } from '@angular/common';
import { EventService } from 'src/app/services/event.service';
import { ChangeDetectorRef, Component, ElementRef, HostListener, Inject, PLATFORM_ID, Renderer2, ViewChild } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
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
import { ClientSectionComponent } from 'src/app/shared/client-section/client-section.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PricingService } from 'src/app/services/random-pricing.service';
import { NavigationService } from 'src/app/services/navigation.service';




@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterModule, LazyLoadImageModule, CarouselModule, FaqComponent, TestimonialComponent, LazyLoadImageModule, ClientSectionComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  @ViewChild('videoPlayer') videoPlayer: ElementRef | undefined;
  openAccording: boolean = false;

  customOptionKeys: OwlOptions = {
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

  customOptionTable: OwlOptions = {
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
    navSpeed: 300,
    nav: false,
    margin: 15,

    autoplayTimeout: 8000,
    autoplaySpeed: 2000,
    // navText: ["", ""],
    // navText: ["<img class='navTxtImg' src='./assets/images/icons/left-chevron-svgrepo-com.svg'>", "<img class='navTxtImg' src='./assets/images/icons/left-chevron-svgrepo-com.svg'>"],
    responsive: {
      0: {
        items: 1.1,
        skip_validateItems: true,
        loop: true,
        autoplay: true,
      },
      400: {
        items: 1.2,
        skip_validateItems: true,
        loop: true,
        autoplay: true,
      },
      740: {
        items: 2,
        skip_validateItems: true,
        autoplay: true,
      },
      940: {
        items: 4,
        skip_validateItems: true,
      },
    },
  };
  

  smeProduct: any;
  smeProductPage: any = {};
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
  aaa: any;
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
  isUserInteracted: boolean = false;
  pricing_url: any;
  randomNumber: any;

 
  constructor(
    public eventService: EventService,
    public router: Router,
    private dialog: MatDialog,
    public localStorage: LocalStorageService,
    private cdr: ChangeDetectorRef,
    private state: LocalStorageService,
    private breakpointObserver: BreakpointObserver,
    private pricingService: PricingService,
    private navigationService:NavigationService,

    @Inject(PLATFORM_ID) private platformId: Object,
  ) {

  }
   @HostListener("window:load", ["$event"])
  checkScroll() {
   this.playVideo();
  }

  ngOnInit(): void {
    this.redirectToPricing();
    this.state.removeItem();
    //   this.localStorage.removeSomeItem();
    this.breakpointObserver
      .observe(['(min-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showDesktop = true;
        } else {
          this.showDesktop = false;
        }
      });
    //this.MSMEPageMetaData = metaData?.MSMEpageMetaData;
    this.eventService?.addmetaTag(this.MSMEPageMetaData?.title, this.MSMEPageMetaData?.description, this.MSMEPageMetaData?.keywords);
    this.getBusinessLoanData();
   
  }

  redirectToPricing(): void {
    this.navigationService.setLinkClicked(true);
    this.pricing_url = this.pricingService.getPricingUrl();
  }

  playVideo(): void {
    if (this.videoPlayer && this.videoPlayer.nativeElement) {
      const video = this.videoPlayer.nativeElement as HTMLVideoElement;
      video.play();
    } else {
      console.error('Video element not found or not initialized.');
    }
  }

  ngAfterViewInit(): void {
    document.addEventListener('click', () => {
      this.isUserInteracted = true;
      this.playVideo();
    }, { once: true });
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.cdr.detectChanges();
  }
  

  openDialog() {
    // this.getBorrowerInformation();
    const dialogRef = this.dialog.open(PopupCopyComponent, {
      width: 'auto',
      height: 'auto',
    });
  }

  openPopup(data: any) {
    localStorage.setItem("popupData", data);
    this.openDialog();
  }
  showAboutClass(body: any) {
    this.moreContent = body;
    this.readMore = true;
  }



  getBusinessLoanData() {
    this.businessLoanJson = shineLendingPageJSON;

    this.Shinebanner = this.businessLoanJson?.Shine_Banner;
    this.AnalyseSection = this.businessLoanJson?.Analyse_Section;
    this.WhatToExpectSection = this.businessLoanJson?.What_To_Expect_Section;
    this.shine_comparison = this.businessLoanJson?.Shine_Comparison_Section;
    this.HowShineWillHelpSection = this.businessLoanJson?.How_Shine_Will_Help_Section;
    this.Parameter = this.HowShineWillHelpSection?.Parameter.map((res: { Parameter: any; Icon: any; }) => ({
      icon: res?.Icon,
      parameter: res?.Parameter
    }));
    this.ShineFeaturesSection = this.businessLoanJson?.Shine_Features_Section;
    this.ProductTiles = this.ShineFeaturesSection?.Product_Tiles.map((res: { Pop_up_copy: any; Icon: any; Product_copy: any; }) => ({
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
