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
import { reportPageResponseJson } from '../JsonFiles/reponse';
import { cust1Json } from '../JsonFiles/7001163340';
import { cust1FixedJson } from '../JsonFiles/7001163340-fixed';
import { cust2Json } from '../JsonFiles/7549539134';
import { cust3Json } from '../JsonFiles/7638099486';
import { cust4Json } from '../JsonFiles/8320026598';
import { cust5Json } from '../JsonFiles/9815390378';
import { StorageService } from '../services/storage.service';

import { cust6Json } from '../JsonFiles/7296930323';
import { cust7Json } from '../JsonFiles/9030368922';
import { cust8Json } from '../JsonFiles/9727363295';
import { cust9Json } from '../JsonFiles/9872044515';
import { cust10Json } from '../JsonFiles/9886775551';
import { cust11Json } from '../JsonFiles/8746099464';
import { cust12Json } from '../JsonFiles/9243101552';
import { cust13Json } from '../JsonFiles/9427043914';
import { cust14Json } from '../JsonFiles/9880725508';
import { cust15Json } from '../JsonFiles/9894874420';
import { cust16Json } from '../JsonFiles/6352416401';
import { cust17Json } from '../JsonFiles/7002057931';
import { cust17FixedJson } from '../JsonFiles/7002057931-fixed';
import { cust18Json } from '../JsonFiles/7386964691';
import { cust19Json } from '../JsonFiles/7630960645';
import { cust20Json } from '../JsonFiles/7755073434';
import { cust21Json } from '../JsonFiles/7827722922';
import { cust22Json } from '../JsonFiles/7984372723';
import { cust23Json } from '../JsonFiles/8002177560';
import { cust24Json } from '../JsonFiles/8008508500';
import { cust25Json } from '../JsonFiles/8090799120';
import { cust26Json } from '../JsonFiles/8250410163';
import { cust27Json } from '../JsonFiles/8791301338';
import { cust28Json } from '../JsonFiles/8888265422';
import { cust29Json } from '../JsonFiles/8977577888';
import { cust30Json } from '../JsonFiles/9014135897';
import { cust31Json } from '../JsonFiles/9045532404';
import { cust32Json } from '../JsonFiles/9423142181';
import { cust33Json } from '../JsonFiles/9439345525';
import { cust34Json } from '../JsonFiles/9509612970';
import { cust35Json } from '../JsonFiles/9609368419';
import { cust36Json } from '../JsonFiles/9679617825';
import { cust37Json } from '../JsonFiles/9727198579';
import { cust38Json } from '../JsonFiles/9810394413';
import { cust39Json } from '../JsonFiles/9850517709';
import { cust40Json } from '../JsonFiles/9874673188';
import { cust41Json } from '../JsonFiles/9972099888';
import { cust13FixedJson } from '../JsonFiles/9427043914-fixed';
import { cust11FixedJson } from '../JsonFiles/8746099464-fixed';
import { cust42Json } from '../JsonFiles/9422078781';
import { RequiredActionsComponent } from './required-actions/required-actions.component';

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
    RequiredActionsComponent,
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
  gstDetails: any;
  bureauScore: any;

  constructor(private api: ApiService, private cdr: ChangeDetectorRef, public router: Router,private storage: StorageService) { }

  ngOnInit(): void {
    // if(!this.storage.isToken())
    //   {
    //     this.router.navigate(['/in'])
    //   }
    this.requestData = localStorage.getItem("reqData")
    this.parsedData = JSON.parse(this.requestData);

    if (this.parsedData) {
      this.mobileNo = this.parsedData.mobile;
    }
    this.getFaq();
    // this.api.reportApi();
    const url = this.router.url;
    if (url.includes('/report')) {
      this.postForReport();    
    } else {
      this.navigateToSampleReportWithParams();
    }
  }

  getReportData(reportData:any) {
    this.showEligible = false;
    this.gstDetails = reportData?.report?.gstHistory;
    if (!this.gstDetails) {
      this.isShowNoGST = true;
    }
    this.bureauScore = reportData?.report?.creditReport?.bureauScore?.score;
    if(!this.bureauScore){
      this.isShowNoBureau = true;
    }
 
  this.headerSection = reportStatciData?.header_section;
  this.disclaimer = reportStatciData?.disclaimer?.description;

  const { bankingSummary, bureauSummary, gstSummary } = reportData?.report;
  this.criticalTotal =
    bankingSummary.positive + bureauSummary.positive + gstSummary.positive;
  this.mediumTotal =
    bankingSummary.critical + bureauSummary.critical + gstSummary.critical;

  const compareStage = this.headerSection?.background.find(
    (image: { stage: any }) => image.stage === reportData?.report?.currentStage
  );

  if (compareStage) {
    this.imgUrlDesktop = compareStage.desktop;
    this.imgUrlMobile = compareStage.mobile_content;
  }

  this.Key_Insights_box = this.headerSection?.Key_Insights_box?.Key_Insights.find(
    (image: { stage: any }) => image.stage === reportData?.report?.potentialStage.toString()
  );



  this.levelArray = [
    {
      "stage": "1",
      "color": "#ff7a24"
    },
    {
      "stage": "2",
      "color": "#221460"
    },
    {
      "stage": "3",
      "color": "#6e2ec4"
    },
    {
      "stage": "4",
      "color": "#c5e522"
    },
    {
      "stage": "5",
      "color": "#15b89a"
    }
  ]

  const compare = this.levelArray.find(
    (res: { stage: any }) => res.stage === this.Key_Insights_box.stage
  );

  if (compare) {
    this.progressValue = (compare.stage / 5) * 100;
    this.potentialColor = compare.color;
  }
  this.level = reportData?.report?.potentialStage;
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
    const reportsDataMap:any = {
      'good_bureau.json': goodBureauJSON,
      '7001163340.json': cust1Json,
      '7001163340-fixed.json': cust1FixedJson,
      '7549539134.json': cust2Json,
      '7638099486.json': cust3Json,
      '8320026598.json': cust4Json,
      '9815390378.json': cust5Json,
      '7296930323.json': cust6Json,
      '9030368922.json': cust7Json,
      '9727363295.json': cust8Json,
      '9872044515.json': cust9Json,
      '9886775551.json': cust10Json,
      '8746099464.json': cust11Json,
      '9243101552.json': cust12Json,
      '9427043914.json': cust13Json,
      '9880725508.json': cust14Json,
      '9894874420.json': cust15Json,
      '8746099464-fixed.json': cust11FixedJson,
      '9427043914-fixed.json': cust13FixedJson,
      '6352416401.json': cust16Json,
      '7002057931.json': cust17Json,
      '7002057931-Fixed.json': cust17FixedJson,
      '7386964691.json': cust18Json,
      '7630960645.json': cust19Json,
      '7755073434.json': cust20Json,
      '7827722922.json': cust21Json,
      '7984372723.json': cust22Json,
      '8002177560.json': cust23Json,
      '8008508500.json': cust24Json,
      '8090799120.json': cust25Json,
      '8250410163.json': cust26Json,
      '8791301338.json': cust27Json,
      '8888265422.json': cust28Json,
      '8977577888.json': cust29Json,
      '9014135897.json': cust30Json,
      '9045532404.json': cust31Json,
      '9423142181.json': cust32Json,
      '9439345525.json': cust33Json,
      '9509612970.json': cust34Json,
      '9609368419.json': cust35Json,
      '9679617825.json': cust36Json,
      '9727198579.json': cust37Json,
      '9810394413.json': cust38Json,
      '9850517709.json': cust39Json,
      '9874673188.json': cust40Json,
      '9972099888.json': cust41Json,
      '9422078781.json': cust42Json,
      'avg_bureau.json': avgBureauJSON,
      'no_bureau.json': noBureauJSON,
      'poor_bureau.json': poorBureauJSON,
      'no_gst.json': noGSTJSON,
      'vpoor_bureau.json': vpoorBureauJSON
    };
    this.reportsData = reportsDataMap[fileName] || this.reportData;
    this.getReportData(this.reportsData);

    this.gstDetails = this.reportsData?.report?.gstHistory;
    if (!this.gstDetails) {
      this.isShowNoGST = true;
    }

    this.bureauScore = this.reportsData?.report?.creditReport?.bureauScore?.score;
    if(!this.bureauScore){
      this.isShowNoBureau = true;
    }




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
    this.showEligible = true;
    let requestData: any = {};
    requestData["mobile"] = this.mobileNo;
    //  const params = { ...this.paramsObject.params };
    this.api.postForReport(`api/Remediation/Report`, requestData).subscribe({
      next: (res: any) => {
        if (res) {
          this.showEligible = false;
          this.reportsData = res;
            this.getReportData(this.reportsData);
        }
      },
      error: error => {
        this.router.navigate(['/in']);
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
    this.ncjcount = 90;
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
      this.progressBar.nativeElement.style.transform = `rotate(${this.progress * 3.6
        }deg)`;
    }

    if (this.progressText && this.progressText.nativeElement) {
      this.progressText.nativeElement.innerText = `${this.progress}%`;
    }

    if (this.progress % 1 === 0) {
      const a = document.createElement('div');
      a.style.cssText = `position: absolute; width: 3px; height: 100%; border-top: 65px solid #12BA9B; left: 49%; top: 0%; transform: rotate(${this.progress * 3.6
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
