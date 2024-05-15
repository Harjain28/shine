import { Component, HostListener, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { StorageService } from 'src/app/services/storage.service';
import { MatDialog } from '@angular/material/dialog';
import { UrlService } from 'src/app/services/url.service';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NavigationService } from 'src/app/services/navigation.service';
import { ApiService } from 'src/app/services/api.service';
import { EnterMobileComponent } from 'src/app/modal/enter-mobile/enter-mobile.component';

@Component({
  selector: 'app-header2',
  standalone: true,
  imports: [CommonModule,MatIconModule,LazyLoadImageModule,RouterModule,CarouselModule,MaterialModule],
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss']
})
export class Header2Component {
  sticky: boolean = false;
  elementPosition: any;
  currentUrl!: string;
  productArray: any = [];
  ProductTitle: any;
  customDialogClass: string | null = null;
  smeproductArray: any = [
    {
      ProductTitle: "Secured Business Loans",
      url: "/in/sme-business-loan/secured-business-loan",
      category: [
        {
          product: "Secured Term Loans",
          url: "/in/sme-business-loan/secured-business-loan/secured-term-loan",
        },
        {
          product: "Machinery / Equipment Loan",
          url: "/in/sme-business-loan/secured-business-loan/machinery-loan-for-msme",
        },
        {
          product: "Loan Against Property",
          url: "/in/sme-business-loan/secured-business-loan/apply-loan-against-property",
        },
        {
          product: "Secured Cash Credit",
          url: "/in/sme-business-loan/cash-credit-loan",
        },
        {
          product: "Working Capital Loans",
          url: "/in/sme-business-loan/secured-business-loan/online-working-capital-loan-terms",
        },
        {
          product: "Secured Overdraft",
          url: "/in/sme-business-loan/secured-business-loan/od-limit-overdraft-loans-facility",
        },
      ],
    },
    {
      ProductTitle: "Unsecured Business Loans",
      url: "none",
      category: [
        {
          product: "Unsecured Term Loans",
          url: "/in/sme-business-loan/unsecured-business-loans/unsecured-term-loan",
        },
        {
          product: "Invoice Discounting",
          url: "/in/sme-business-loan/unsecured-business-loans/invoice-discounting",
        },
        {
          product: "Line of Credit",
          url: "/in/sme-business-loan/unsecured-business-loans/line-of-credit-loan",
        },
        {
          product: "Unsecured Cash Credit",
          url: "/in/sme-business-loan/cash-credit-loan",
        },
      ],
    },

    {
      ProductTitle: "Balance Transfer",
      url: "/in/sme-business-loan/balance-transfer",
      category: [],
    },
    // {
    //   ProductTitle: "Corporate Credit Card",
    //   url: "/sme-business-loan/apply-corporate-credit-card",
    //   category: [],
    // },
    {
      ProductTitle: "Syndication Loan",
      url: "/in/sme-business-loan/unsecured-business-loans/syndicated-multifunding-business-loan",
      category: [],
    },
    {
      ProductTitle: "Gold Loan",
      url: "/in/sme-business-loan/gold-loan-interest-rates",
      category: [],
    },
  ];
  smeProductWithCategory: any = [
    {
      ProductTitle: "Secured Business Loans",
      url: "none",
      category: [
        {
          product: "Secured Term Loans",
          url: "/in/sme-business-loan/secured-business-loan/secured-term-loan",
        },
        {
          product: "Machinery / Equipment Loan",
          url: "/in/sme-business-loan/secured-business-loan/machinery-loan-for-msme",
        },
        {
          product: "Loan Against Property",
          url: "/in/sme-business-loan/secured-business-loan/apply-loan-against-property",
        },
        {
          product: "Secured Cash Credit",
          url: "/in/sme-business-loan/cash-credit-loan",
        },
        {
          product: "Working Capital Loans",
          url: "/in/sme-business-loan/secured-business-loan/online-working-capital-loan-terms",
        },
        {
          product: "Secured Overdraft",
          url: "/in/sme-business-loan/secured-business-loan/od-limit-overdraft-loans-facility",
        },
      ],
    },
    {
      ProductTitle: "Unsecured Business Loans",
      url: "none",
      category: [
        {
          product: "Unsecured Term Loans",
          url: "/in/sme-business-loan/unsecured-business-loans/unsecured-term-loan",
        },
        {
          product: "Invoice Discounting",
          url: "/in/sme-business-loan/unsecured-business-loans/invoice-discounting",
        },
        {
          product: "Line of Credit",
          url: "/in/sme-business-loan/unsecured-business-loans/line-of-credit-loan",
        },
        {
          product: "Unsecured Cash Credit",
          url: "/in/sme-business-loan/cash-credit-loan",
        },
      ],
    },
  ];

  smeProductWithoutCategory: any = [
    {
      ProductTitle: "Balance Transfer",
      url: "/in/sme-business-loan/balance-transfer",
      category: [],
    },

    {
      ProductTitle: "Syndication Loan",
      url: "/in/sme-business-loan/unsecured-business-loans/syndicated-multifunding-business-loan",
      category: [],
    },
    {
      ProductTitle: "Gold Loan",
      url: "/in/sme-business-loan/gold-loan-interest-rates",
      category: [],
    },
  ];
  
  sectorArray: any = [
    {
      industryPageName: "Manufacturing",
      url: "/in/sme-business-loans-for-industries/business-loan-for-manufacturing-companies",
    },
    {
      industryPageName: "Retail",
      url: "/in/sme-business-loans-for-industries/loan-for-retail-business",
    },
    {
      industryPageName: "Service",
      url: "/in/sme-business-loans-for-industries/loan-for-service-sector",
    },
    {
      industryPageName: "Distribution",
      url: "/in/sme-business-loans-for-industries/loan-for-wholesale-and-distribution-business",
    },
  ];

  resourceArray: any = [
  
    {
      resource: "EMI calculator",
      url: "/in/business-loan-emi-interest-rate-calculator",
    },
    {
      resource: "Product Finder",
      url: "/in/sme-business-loan-product-finder",
    }, 
  
  ];

   aboutArray: any = [
    {
      name: "About CreditEnable",
      url: "/in/about-creditenable",
    },
    // {
    //   name: "Latest News",
    //   url: "/in/latest-news",
    // },
    // {
    //   name: "Careers",
    //   url: "/in/career",
    // },
   
    // {
    //   name: "Frequently Asked Questions",
    //   url: "/in/sme-business-loan-product-finderrrrr",
    // },
  ];


  showNav: boolean = false;
  showMenu: boolean = false;
  hoverEffect: boolean = true;
  showSidenavbar: boolean = false;
  blogUrl!: string;
  sidebarOpen = false;
  isLoginShow: any;
  isLoggedin!: boolean;
  editEventSubscription!: Subscription;
  loader!: boolean;
  paramsObject: any;

  constructor(public router: Router, private api: ApiService,private navigationService:NavigationService ,private state : LocalStorageService, private storage : StorageService, @Inject(DOCUMENT) private document: Document, private route: ActivatedRoute ,public dialog: MatDialog, public urlService: UrlService)  {
    this.route.queryParamMap.subscribe((params) => {
      this.paramsObject = { ...params };
    });

  }

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    this.sticky = window.pageYOffset >= 12;
  }



  ngOnInit(): void {
    this.currentUrl = this.router.url;
    this.editEventSubscription = this.storage.getEditEvent().subscribe(() => {
      // this.loginOrNot();
    });
  // this.blogUrl = "https://appicsoftwares.in/designer/wordpress/creditenable/blog/";
  this.blogUrl = "https://staging.creditenable.com/in/blog/";
  }

  // loginOrNot() {
  //   this.isLoginShow = this.state.get("stagingJourneyId");

  // }

  goToSME(){
    window.location.href = 'https://www.creditenable.com/in/sme-business-loan/secured-business-loan';
  }
  
  goToPricing(isLinkClicked: boolean): void {
    this.navigationService.setLinkClicked(isLinkClicked);
    this.router.navigate(['/in/pricing_group']);
  }
  
  
  goToContact(){
    this.router.navigate(['/in/contact-us'])
  }

  goToAbout(){
    window.location.href = 'https://www.creditenable.com/in/about-creditenable';
  }

  goToPravicy(){
    window.location.href = 'https://www.creditenable.com/assets/images/pdf/CreditEnable_Privacy_Policy_2023.pdf';
  }

  loginBtn(){
    this.loader = true; // Show loader
    setTimeout(() => {
      this.loader = false; // Hide loader after 2 seconds
      const dialogRef = this.dialog.open(EnterMobileComponent, {
        width: '320px',
        height: 'auto',
      });
    }, 1500);
  }



  openDropdown() {
    this.showNav = true;
  }

  closeDropdown() {
    this.showNav = false;
  }


  toggleSidebar() {
      document.body.classList.toggle('sidebar-open');
  } 

  removeTogglesidebar() {
    document.body.classList.remove('sidebar-open');
  }

  backgroundBlur() {
    document.body.classList.toggle('blur');
} 

removeBackgroundBlur() {
  document.body.classList.remove('notblur');
}


  handleEvent(data: any) {
    this.ProductTitle = data.ProductTitle;
    this.smeproductArray.forEach((element:any) => {
      if (element.ProductTitle === this.ProductTitle) {
        this.productArray = element.category;
        if (this.productArray.length > 0) {
          this.showMenu = true;
          this.showNav = true;
        } else {
          this.showMenu = false;
          this.showNav = false;
        }
      }
    });
    if (data.url !== "none") {
      this.router.navigate([data.url] , {queryParamsHandling: "preserve"});
      this.removeTogglesidebar();
      this.hoverEffect = false;
    }
  }

  redirectEvent(menu: any) {
    this.router.navigate([menu?.url], {queryParamsHandling: "preserve"});
    this.hoverEffect = false;
    this.showNav = false;
    this.removeTogglesidebar();

  }

  
  // openDialog(){
  //   this.customDialogClass = 'mat-dialog';
  //   const dialogRef = this.dialog.open(LoginComponent, {
  //     backdropClass: this.customDialogClass,
  //     width: '40px',
  //     height: '40px',
  //   });
  // }


}
