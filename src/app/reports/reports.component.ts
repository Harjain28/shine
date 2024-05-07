import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq/faq.component';
import { ApiService } from '../services/api.service';
import { CreditReportComponent } from './credit-report/credit-report.component';
import { GstFillingComponent } from './gst-filling/gst-filling.component';
import { BankingBusinessComponent } from './banking-business/banking-business.component';
import { ActionsRequiredComponent } from './actions-required/actions-required.component';
import { ProbabilityOfLoanComponent } from './probability-of-loan/probability-of-loan.component';
import { shineLendingPageJSON } from '../JsonFiles/lendingpage';
import { ChartsJsonData } from '../JsonFiles/ChartJSONData';
import { Subscription, take, timer } from 'rxjs';
import { reportStatciData } from '../JsonFiles/reportpageStaticData';
import { reportPageJson } from '../JsonFiles/report';
import { Router } from '@angular/router';
import { goodBureauJSON } from '../JsonFiles/good_bureau';
import { avgBureauJSON } from '../JsonFiles/avg_bureau';
import { noBureauJSON } from '../JsonFiles/no_bureau';
import { poorBureauJSON } from '../JsonFiles/poor_bureau';
import { vpoorBureauJSON } from '../JsonFiles/v_poor_bureau';
import { NoBureauComponent } from './no-bureau/no-bureau.component';
import { NoGstComponent } from './no-gst/no-gst.component';
import { MaterialModule } from '../material.module';
import { noGSTJSON } from '../JsonFiles/no_gst';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    CommonModule,
    CreditReportComponent,
    GstFillingComponent,
    BankingBusinessComponent,
    ActionsRequiredComponent,
    ProbabilityOfLoanComponent,
    FaqComponent,
    NoBureauComponent,
    NoGstComponent,
    MaterialModule,
  ],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent {
  currentIndex = 0;

  @ViewChild('progressContainer', { static: false }) progressContainer:
    | ElementRef
    | undefined;
  @ViewChild('progressBar', { static: false }) progressBar:
    | ElementRef
    | undefined;
  @ViewChild('progressText', { static: false }) progressText:
    | ElementRef
    | undefined;
  paramsObject: any;
  businessLoanJson: any;
  faqs: any;
  creditReportJson: any;
  CRData: any;
  ChartsData: any;
  progressCount!: Subscription;
  istimers!: boolean;
  ncjcount: number = 60;
  tick = 1000;
  iframeUrl!: string;

  progress = 0;
  progressInterval: any;
  loaderContent: any = [
    'Over 300,000 SMEs have confidently chosen us as their trusted financing ally!',
    'All eligible SMEs experience significantly higher loan approval rates when they apply through us!',
    'Almost 70% of SMEs coming from your city receive their first offer within a week of document submission with us!',
    'We are able to negotiate better rates for 90% of borrowers from your sector!!!!!!!!!.',
    'If you own property, you may be eligible for a Loan Against Property which has 50% lower EMIs.',
  ];

  isChecked!: boolean;
  filteredStatemenetObject: any;
  showEligible: boolean = false;
  reportData: any;
  headerSection: any;
  reportStaticData: any;
  disclaimer: any;
  reportsData: any;
  criticalTotal: any;
  mediumTotal: any;
  imgUrlDesktop: any;
  imgUrlMobile: any;
  requestData: any;
  parsedData: any;
  mobileNo: any;
  sampleData: any;
  isShowNoBureau: boolean = false;
  progressValue: number = 0;
  level: any;
  levelArray: any;
  potentialColor: any;
  isShowNoGST: boolean = false;
  Key_Insights_box: any;

  constructor(private api: ApiService, private cdr: ChangeDetectorRef,private router: Router,) {}

  ngOnInit(): void {
    this.requestData = localStorage.getItem("reqData")
    this.parsedData = JSON.parse(this.requestData);

    if(this.parsedData){
    this.mobileNo = this.parsedData.mobile;
    }

    this.getFaq();
    this.getChartsData();
    this.postForReport();
    const url = this.router.url;
    if (url.includes('/report')) {
      this.reportsData = reportPageJson
    } else{
      this.navigateToSampleReportWithParams()
    }

    this.headerSection = reportStatciData?.header_section;
    this.disclaimer = reportStatciData?.disclaimer?.description;

    const { bankingSummary, bureauSummary, gstSummary } = this.reportsData?.report;
    this.criticalTotal =
      bankingSummary.positive + bureauSummary.positive + gstSummary.positive;
    this.mediumTotal =
      bankingSummary.critical + bureauSummary.critical + gstSummary.critical;

    const compareStage = this.headerSection?.background.find(
      (image: { stage: any }) => image.stage === this.reportsData?.report?.currentStage
    );

    if (compareStage) {
      this.imgUrlDesktop = compareStage.desktop;
      this.imgUrlMobile = compareStage.mobile_content;
    }

    this.Key_Insights_box = this.headerSection?.Key_Insights_box?.Key_Insights.find(
      (image: { stage: any }) => image.stage === this.reportsData?.report?.potentialStage.toString()
    );

    console.log(this.Key_Insights_box,"ttt")


    this.levelArray = [  
      {
          "stage": 1,
          "color": "#ff7a24"
      },
      {
          "stage": 2,
          "color": "#221460"
      },
      {
          "stage": 3,
          "color": "#6e2ec4"
      },
      {
          "stage": 4,
          "color": "#c5e522"
      },
      {
          "stage": 5,
          "color": "#15b89a"
      }
    ]

    const compare = this.levelArray.find(
      (res: { stage: any }) => res.stage === compareStage.stage
    );

    if(compare){
      this.progressValue = (compare.stage/5)*100;
      this.potentialColor = compare.color;
      this.level = compare.stage;
    }
    

  }

  ngAfterViewInit(): void {
    // this.isBrowser = isPlatformBrowser(this.platformId);
    this.counters();
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.loaderContent.length;
    }, 5000);
    this.progressInterval = setInterval(() => {
      this.updateProgress();
    }, 100);

    this.cdr.detectChanges();
  }

  getChartsData() {
    this.ChartsData = ChartsJsonData;
  }

  navigateToSampleReportWithParams() {
    const fileName = this.router.parseUrl(this.router.url).queryParams['name'];
    const queryParams = {
      name: fileName 
    };

    if (fileName === 'good_bureau.json') {
      this.reportsData = goodBureauJSON;
    } else if (fileName === 'avg_bureau.json') {
      this.reportsData = avgBureauJSON;

    } else if (fileName === 'no_bureau.json') {
      this.reportsData = noBureauJSON;
      this.isShowNoBureau = true;
    } else if (fileName === 'poor_bureau.json') {
      this.reportsData = poorBureauJSON;
    }  else if (fileName === 'no_gst.json') {
      this.reportsData = noGSTJSON;
      this.isShowNoGST = true;
    } else if (fileName === 'vpoor_bureau.json') {
      this.reportsData = vpoorBureauJSON;
    } else {
      this.reportsData = reportPageJson;
    }

    console.log(this.reportsData,"klkl")

   

    // this.router.navigate(['/in/sample_report'], { queryParams: queryParams });

  }


  // getHeaderSectionData() {
  //   this.reportStaticData = reportStatciData;
  //   this.reportsData = reportPageJson?.report;
    

  //   this.headerSection = reportStatciData?.header_section;
  //   this.disclaimer = reportStatciData?.disclaimer?.description;

  //   const { bankingSummary, bureauSummary, gstSummary } = this.reportsData;
  //   this.criticalTotal =
  //     bankingSummary.critical + bureauSummary.critical + gstSummary.critical;
  //   this.mediumTotal =
  //     bankingSummary.medium + bureauSummary.medium + gstSummary.medium;

  //   const compareStage = this.headerSection?.background.find(
  //     (image: { stage: any }) => image.stage === this.reportsData?.currentStage
  //   );
  //   if (compareStage) {
  //     this.imgUrlDesktop = compareStage.desktop;
  //     this.imgUrlMobile = compareStage.mobile_content;
  //   }
  // }

  postForReport() {
    this.showEligible = false;
      let requestData: any = {}; 
      requestData["mobile"] = this.mobileNo;
      //  const params = { ...this.paramsObject.params };
          this.api.postForReport(`api/Remediation/Report`,requestData ) .subscribe({
              next: (res: any) => {
                if (res) {
                  this.showEligible = true;
                  console.log(res);
                  this.reportsData = res;
                 
                }
              },
              error: error => {
                this.showEligible = true;
              },
              complete: () => {
               // ('Request complete');
              }
            });
      
  }

 
  getFaq() {
    this.businessLoanJson = reportStatciData;
    this.faqs = this.businessLoanJson?.faq_section;
  }

  counters() {
    this.ncjcount = 60;
    this.progressCount = timer(0, this.tick)
      .pipe(take(this.ncjcount))
      .subscribe(() => {
        --this.ncjcount;
        if (this.ncjcount === 0) {
          this.istimers = false;
          this.progressCount.unsubscribe();
        }
      });
  }
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (
      ('00' + minutes).slice(-2) +
      ':' +
      ('00' + Math.floor(value - minutes * 60)).slice(-2)
    );
  }

  updateProgress() {
    this.progress += 1;

    if (this.progressBar && this.progressBar.nativeElement) {
      this.progressBar.nativeElement.style.transform = `rotate(${
        this.progress * 3.6
      }deg)`;
    }

    if (this.progressText && this.progressText.nativeElement) {
      this.progressText.nativeElement.innerText = `${this.progress}%`;
    }

    if (this.progress % 1 === 0) {
      const a = document.createElement('div');
      a.style.cssText = `position: absolute; width: 3px; height: 100%; border-top: 65px solid #12BA9B; left: 49%; top: 0%; transform: rotate(${
        this.progress * 3.6
      }deg);`;

      if (this.progressContainer && this.progressContainer.nativeElement) {
        this.progressContainer.nativeElement.appendChild(a);
      }
    }

    if (this.progress >= 100) {
      clearInterval(this.progressInterval);
    }
  }
}
