import { Component, EventEmitter, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { CarouselModule, OwlOptions } from "ngx-owl-carousel-o";
import { shinePricingPageJSON } from "src/app/JsonFiles/pricing";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalStorageService } from "src/app/services/local-storage.service";
import { SampleReportsFormComponent } from "src/app/modal/sample-reports-form/sample-reports-form.component";
import { MatDialog } from "@angular/material/dialog";
import { NavigationService } from "src/app/services/navigation.service";
import { OtpService } from "src/app/services/otp.service";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-pricing1",
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    CarouselModule,
  ],
  templateUrl: "./pricing1.component.html",
  styleUrls: ["./pricing1.component.scss"],
})
export class Pricing1Component {
  pricingJson: any;
  pricingHeader: any;
  pricingColumns: any;
  WhatisShineSection: any;
  HowDoesShinehelpSection: any;
  featureSection: any;

  @Output() dataEvent = new EventEmitter<any>();
  planCount: any;
  randomNumber: any;
  pricingPlan: any;
  filteredPrice: any;
  monthlyFilteredPlan: any;
  annaulFilteredPlan: any;
  monthlyPlan: any;
  annualPlan: any;
  savedPhoneNumber:any;
  paramsObject: any;

  constructor(
    public router: Router,
    private navigationService: NavigationService,
    private state: LocalStorageService,
    private dialog: MatDialog,
    private otpService:OtpService,
    private api: ApiService,
    private route:ActivatedRoute
  ) {
    this.route.queryParamMap.subscribe((params) => {
      this.paramsObject = { ...params };
    });
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

  ngOnInit(): void {
    this.showPricingPlan();
    this.state.removeSomeItem();
    this.getPricingData();
    const data:any = localStorage.getItem("reqData");
    this.savedPhoneNumber = JSON.parse(data);
  }

  viewReportsForm() {
    this.openDialog();
  }

  showPricingPlan() {
    if (this.router.url === "/in/pricing_group") {
      this.randomNumber = localStorage.getItem("plan_count");
    } else {
      const match = this.router.url.match(/pricing_group_(\d+)/);
      if (match) {
        this.randomNumber = match[1];
        console.log(this.randomNumber);
      }
    }

    const plans: any = {
      1: {
        monthlyFiltered: "2,999",
        annualFiltered: "4,999",
        monthly: "1,999",
        annual: "3,999",
      },
      2: {
        monthlyFiltered: "2,999",
        annualFiltered: "4,999",
        monthly: "1,299",
        annual: "3,999",
      },
      3: {
        monthlyFiltered: "3,999",
        annualFiltered: "8,999",
        monthly: "2,499",
        annual: "7,499",
      },
      default: {
        monthlyFiltered: "2,999",
        annualFiltered: "4,999",
        monthly: "1,999",
        annual: "3,999",

      },
    };
    const selectedPlan = plans[Number(this.randomNumber)] || plans.default;
    this.monthlyFilteredPlan = selectedPlan.monthlyFiltered;
    this.annaulFilteredPlan = selectedPlan.annualFiltered;
    this.monthlyPlan = selectedPlan.monthly;
    this.annualPlan = selectedPlan.annual;
  }

  openDialog() {
    // this.getBorrowerInformation();
    const dialogRef = this.dialog.open(SampleReportsFormComponent, {
      width: "320px",
      height: "auto",
    });
  }

  getOtpbyPhone(PricingModel:any, SelectedPrice:any ) {
    const defaultparams = {
      forceGenerate: false,
      resend: false,
    };
    const params = { ...defaultparams, ...this.paramsObject.params };
    let requestData: any = {};
    requestData['mobile'] = this.savedPhoneNumber?.mobile;
    requestData['PricingModel'] =  PricingModel;
    requestData['SelectedPrice'] = SelectedPrice;

    if (this.savedPhoneNumber) {
        this.api.post(`api/Remediation/GetOTP`, requestData, params).subscribe({
          next: (res: any) => {
            if (res.success) {
              this.navigationService.setLinkClicked(true);
              localStorage.setItem('reqData', JSON.stringify(requestData));
              this.fetchOtp();
              const plan:any = localStorage.getItem("plan");
              if (plan) {
               this.navigationService.redirectToOTP(plan);
              } else {
                this.navigationService.redirectToOTP(String(requestData.selectedPrice));
              }
            } 
          },
          error: (error) => {
            // this.onNextClick();
          },
          complete: () => {
            ('Request complete');
          },
        });
      }
  }

  fetchOtp(): void {
    this.otpService
      .fetchOtp(15000)
      .then((otp) => {
        console.log('OTP:', otp);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  goToRegister(
    text: any,
    plan: any,
    filteredPlan: any,
    isLinkClicked: boolean
  ) {
    const pricingPlan = plan.replace(/,/g, "");
    localStorage.setItem("text", text);
    localStorage.setItem("plan", pricingPlan);
    localStorage.setItem("filteredPlan", filteredPlan);
    console.log(this.savedPhoneNumber, "savedPhoneNumber");
    this.navigationService.setLinkClicked(isLinkClicked);
    if (this.savedPhoneNumber) {
      this.getOtpbyPhone(text , pricingPlan);
    } else {
      this.navigationService.redirectToRegister_start(pricingPlan);
    }

    // this.router.navigate(['/in/register_start'], { queryParamsHandling:"preserve"})
  }

  getPricingData() {
    this.pricingJson = shinePricingPageJSON;
    this.pricingHeader = this.pricingJson?.Pricing_Header;
    this.pricingColumns = this.pricingHeader?.col;

    this.WhatisShineSection = this.pricingJson?.What_is_Shine_Section;
    this.HowDoesShinehelpSection =
      this.pricingJson?.How_Does_Shine_help_Section;

    this.featureSection =
      this.pricingJson?.How_Does_Shine_help_Section?.Feature_Tiles.map(
        (res: { Count: any; Icon: any; Product_copy: any }) => ({
          icon: res?.Icon,
          productCopy: res?.Product_copy,
        })
      );
  }
}
