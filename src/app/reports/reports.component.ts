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

  constructor(private api: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getFaq();
    this.getChartsData();
    this.postForReport();
    this.getHeaderSectionData();
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

  getHeaderSectionData() {
    this.reportStaticData = reportStatciData;
    this.reportsData = reportPageJson?.report;

    this.headerSection = reportStatciData?.header_section;
    this.disclaimer = reportStatciData?.disclaimer?.description;

    const { bankingSummary, bureauSummary, gstSummary } = this.reportsData;
    this.criticalTotal =
      bankingSummary.critical + bureauSummary.critical + gstSummary.critical;
    this.mediumTotal =
      bankingSummary.medium + bureauSummary.medium + gstSummary.medium;

    const compareStage = this.headerSection?.background.find(
      (image: { stage: any }) => image.stage === this.reportsData?.currentStage
    );
    if (compareStage) {
      this.imgUrlDesktop = compareStage.desktop;
      this.imgUrlMobile = compareStage.mobile_content;
    }
  }

  postForReport() {
    this.showEligible = false;
    let requestData: any = {};
    requestData['mobile'] = '8128187880';
    //  const params = { ...this.paramsObject.params };
    this.api.postForReport(`api/Remediation/Report`, requestData).subscribe({
      next: (res: any) => {
        if (res) {
          this.showEligible = true;
          console.log(res);
          this.reportData = res;
        }
      },
      error: (error) => {
        this.showEligible = true;
      },
      complete: () => {
        // ('Request complete');
      },
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
