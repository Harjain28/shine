import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Renderer2,
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
import { Router, RouterModule } from '@angular/router';
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
import { cust40FixedJson } from '../JsonFiles/9874673188-fixed';
import { cust41Json } from '../JsonFiles/9972099888';
import { cust13FixedJson } from '../JsonFiles/9427043914-fixed';
import { cust11FixedJson } from '../JsonFiles/8746099464-fixed';
import { cust42Json } from '../JsonFiles/9422078781';
import { cust43Json } from '../JsonFiles/7694823608';
import { cust44Json } from '../JsonFiles/8149535510';
import { cust45Json } from '../JsonFiles/9879007515';
import { cust46Json } from '../JsonFiles/9890434152';
import { cust34FixedJson } from '../JsonFiles/9509612970-fixed';
import { cust30FixedJson } from '../JsonFiles/9014135897-fixed';
import { cust38FixedJson } from '../JsonFiles/9810394413-fixed';
import { cust40Fixed2Json } from '../JsonFiles/9874673188-fixed2';
import { cust16Fixed3Json } from '../JsonFiles/6352416401-fixed3';
import { cust17Fixed3Json } from '../JsonFiles/7002057931-fixed3';
import { cust18Fixed3Json } from '../JsonFiles/7386964691-fixed3';
import { cust19Fixed3Json } from '../JsonFiles/7630960645-fixed3';
import { cust20Fixed3Json } from '../JsonFiles/7755073434-fixed3';
import { cust21Fixed3Json } from '../JsonFiles/7827722922-fixed3';
import { cust22Fixed3Json } from '../JsonFiles/7984372723-fixed3';
import { cust23Fixed3Json } from '../JsonFiles/8002177560-fixed3';
import { cust24Fixed3Json } from '../JsonFiles/8008508500-fixed3';
import { cust25Fixed3Json } from '../JsonFiles/8090799120-fixed3';
import { cust26Fixed3Json } from '../JsonFiles/8250410163-fixed3';
import { cust27Fixed3Json } from '../JsonFiles/8791301338-fixed3';
import { cust28Fixed3Json } from '../JsonFiles/8888265422-fixed3';
import { cust29Fixed3Json } from '../JsonFiles/8977577888-fixed3';
import { cust30Fixed3Json } from '../JsonFiles/9014135897-fixed3';
import { cust31Fixed3Json } from '../JsonFiles/9045532404-fixed3';
import { cust32Fixed3Json } from '../JsonFiles/9423142181-fixed3';
import { cust33Fixed3Json } from '../JsonFiles/9439345525-fixed3';
import { cust34Fixed3Json } from '../JsonFiles/9509612970-fixed3';
import { cust35Fixed3Json } from '../JsonFiles/9609368419-fixed3';
import { cust36Fixed3Json } from '../JsonFiles/9679617825-fixed3';
import { cust37Fixed3Json } from '../JsonFiles/9727198579-fixed3';
import { cust38Fixed3Json } from '../JsonFiles/9810394413-fixed3';
import { cust39Fixed3Json } from '../JsonFiles/9850517709-fixed3';
import { cust40Fixed3Json } from '../JsonFiles/9874673188-fixed3';
import { cust41Fixed3Json } from '../JsonFiles/9972099888-fixed3';
import { cust47Json } from '../JsonFiles/8408883086';
import { cust48Json } from '../JsonFiles/8889956999';
import { cust49Json } from '../JsonFiles/9029015602';
import { cust50Json } from '../JsonFiles/9935025285';
import { cust50FixedJson } from '../JsonFiles/9935025285-fixed';
import { cust11Fixed2Json } from '../JsonFiles/8746099464-fixed2';
import { cust27Fixed2Json } from '../JsonFiles/8791301338-fixed2';
import { cust16Fixed2Json } from '../JsonFiles/6352416401-fixed2';
import { cust25Fixed2Json } from '../JsonFiles/8090799120-fixed2';
import { cust51Json } from '../JsonFiles/8600584080';
import { cust16Fixed4Json } from '../JsonFiles/6352416401-fixed4';
import { cust25Fixed4Json } from '../JsonFiles/8090799120-fixed4';
import { cust50Fixed2Json } from '../JsonFiles/9935025285-fixed2';
import { cust50bbghJson } from '../JsonFiles/9935025285-bbgh';
import { cust11bbgmJson } from '../JsonFiles/8746099464-bbgm';
import { cust27bbglJson } from '../JsonFiles/8791301338-bbgl';
import { cust32Fixed4Json } from '../JsonFiles/9423142181-fixed4';
import { cust33Fixed4Json } from '../JsonFiles/9439345525-fixed4';
import { cust36Fixed4Json } from '../JsonFiles/9679617825-fixed4';
import { cust44Fixed2Json } from '../JsonFiles/8149535510-fixed2';
import { cust32Fixed5Json } from '../JsonFiles/9423142181-fixed5';
import { cust52Json } from '../JsonFiles/9699555355';
import { cust53Json } from '../JsonFiles/9833700995';
import { cust54Json } from '../JsonFiles/9381054403';
import { cust5FixedJson } from '../JsonFiles/9815390378-fixed';
import { cust8FixedJson } from '../JsonFiles/9727363295-fixed';
import { cust51FixedJson } from '../JsonFiles/8600584080-fixed';
import { cust54FixedJson } from '../JsonFiles/9381054403-fixed';
import { cust54FixedJson2 } from '../JsonFiles/9381054403-fixed2';
import { cust55Json } from '../JsonFiles/8879868231';
import { cust55JsonFixed } from '../JsonFiles/8879868231-fixed';
import { cust56Json } from '../JsonFiles/9820635246';
import { cust57Json } from '../JsonFiles/9841053100';
import { RequiredActionsComponent } from './required-actions/required-actions.component';
import { report_model1 } from '../JsonFiles/report_model1';
import { NavigationService } from '../services/navigation.service';
import { ReportService } from './required-actions/shared.service';

interface Fold1 {
  [key: string]: any[];
}

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
    RouterModule,
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
  postiveTotal: any;
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
  @ViewChild('requiredActions') requiredActions!: RequiredActionsComponent;
  scrollToSectionEvent = new EventEmitter<string>();
  @ViewChild('sectionsContainer', { static: false })
  sectionsContainer!: ElementRef;
  @ViewChild(CreditReportComponent)
  creditReportComponent!: CreditReportComponent;
  @ViewChild(BankingBusinessComponent)
  bankingBusinessComponent!: BankingBusinessComponent;
  result: any[] = [];
  top3criticalIssue: any = [];
  showApplyButton: boolean = false;
  // @ViewChild(CreditReportComponent) creditReportComponent!: CreditReportComponent;
  constructor(
    private api: ApiService,
    public reportService: ReportService,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
    public router: Router,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    // if(!this.storage.isToken())
    //   {
    //     this.router.navigate(['/in'])
    //   }
    this.requestData = localStorage.getItem('reqData');
    this.parsedData = JSON.parse(this.requestData);

    if (this.parsedData) {
      this.mobileNo = this.parsedData.mobile;
    }
    this.getFaq();
    // this.api.reportApi();
    const url = this.router.url;
    if (url.includes('/report') && url !== '/in/report_model1') {
      this.postForReport();
    } else {
      this.navigateToSampleReportWithParams();
    }

    const result = this.reportService.processProbabilityData(this.reportsData);
    this.showApplyButton = result.showApplyButton;
  }

  scrollToSection(section: string): void {
    this.requiredActions.scrollToSection(section);
  }

  getReportData(reportData: any) {
    this.showEligible = false;
    this.gstDetails = reportData?.report?.gstHistory;
    if (!this.gstDetails) {
      this.isShowNoGST = true;
    }
    this.bureauScore = reportData?.report?.creditReport?.bureauScore?.score;
    if (!this.bureauScore) {
      this.isShowNoBureau = true;
    }

    this.headerSection = reportStatciData?.header_section;
    this.disclaimer = reportStatciData?.disclaimer?.description;

    // const { bankingSummary, bureauSummary, gstSummary } = reportData?.report;
    // this.postiveTotal =
    //   bankingSummary.positive + bureauSummary.positive + gstSummary.positive;
    // this.criticalTotal =
    //   bankingSummary.critical + bureauSummary.critical + gstSummary.critical;
    let filteredArray: any = [];

    for (const key in this.reportsData?.insights?.fold1) {
      const array = this.reportsData?.insights?.fold1[key];
      if (Array.isArray(array)) {
        const filtered = array.filter(
          (item: any) => item?.condition_status === true
        );
        filteredArray = filteredArray.concat(filtered);
      }
    }

    filteredArray.sort((a: any, b: any) => {
      const countA = parseInt(a.class);
      const countB = parseInt(b.class);
      return countA - countB;
    });

    this.top3criticalIssue = filteredArray.slice(0, 3);
    const actionSummaryData = this.reportsData?.insights?.actionSummary;
    if (actionSummaryData) {
      const filteredCritical = this.reportService.concatenateInsights(
        actionSummaryData,
        'negative'
      );
      const filteredPositive = this.reportService.concatenateInsights(
        actionSummaryData,
        'positive'
      );
      this.criticalTotal =
        filteredCritical?.creditReport.length +
        filteredCritical?.bankingHistory.length +
        filteredCritical?.gstHistory.length;
      this.postiveTotal =
        filteredPositive?.creditReport.length +
        filteredPositive?.bankingHistory.length +
        filteredPositive?.gstHistory.length;
    } else {
      if (this.reportsData?.report) {
        const { bankingSummary, bureauSummary, gstSummary } = this.reportsData.report;
        this.postiveTotal =
          bankingSummary?.positive + bureauSummary?.positive + gstSummary?.positive;
        this.criticalTotal =
          bankingSummary?.critical + bureauSummary?.critical + gstSummary?.critical;
      }
    }
    const compareStage = this.headerSection?.background.find(
      (image: { stage: any }) =>
        image.stage === reportData?.report?.currentStage
    );

    if (compareStage) {
      this.imgUrlDesktop = compareStage.desktop;
      this.imgUrlMobile = compareStage.mobile_content;
    }

    this.Key_Insights_box =
      this.headerSection?.Key_Insights_box?.Key_Insights.find(
        (image: { stage: any }) =>
          image.stage === reportData?.report?.potentialStage.toString()
      );

    this.levelArray = [
      {
        stage: '1',
        color: '#ff7a24',
      },
      {
        stage: '2',
        color: '#221460',
      },
      {
        stage: '3',
        color: '#6e2ec4',
      },
      {
        stage: '4',
        color: '#c5e522',
      },
      {
        stage: '5',
        color: '#15b89a',
      },
    ];

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

    this.scrollToSectionEvent.subscribe((header) =>
      this.scrollToSections(header)
    );

    this.cdr.detectChanges();
  }

  scrollToSections(header: string) {
    console.log('Header received:', header);
    if (this.creditReportComponent) {
      this.creditReportComponent.setExpandSection(header);
    }
    if (this.bankingBusinessComponent) {
      this.bankingBusinessComponent.setBankingExpandSection(header);
    }

    setTimeout(() => {
      // Ensure the section is now available in the DOM
      const section = document.getElementById(header);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Pehle se class remove karen agar pehle add hui ho
        document
          .querySelectorAll('.section-hover')
          .forEach((el) => el.classList.remove('section-hover'));

        // Nayi class add karen
        section.classList.add('section-hover');

        const pointerDiv = document.createElement('div');
        pointerDiv.style.position = 'absolute';
        pointerDiv.style.top = '10px';
        pointerDiv.style.right = '10px';
        pointerDiv.style.width = '30px';
        pointerDiv.style.height = '30px';
        pointerDiv.style.backgroundColor = '#FF7B24';
        pointerDiv.style.borderRadius = '50%';
        pointerDiv.style.boxShadow = '0 0 10px rgba(0, 123, 255, 0.5)';
        pointerDiv.style.pointerEvents = 'none';
        pointerDiv.style.transition = 'opacity 0.5s ease-out'; // Fade out effect

        section.appendChild(pointerDiv);
        setTimeout(() => {
          pointerDiv.style.opacity = '0'; // Fade out
          setTimeout(() => pointerDiv.remove(), 2000);
        }, 2000);

        setTimeout(() => {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            console.log('Section is in view.');
          } else {
            console.error('Section is not in view.');
          }
        }, 500);
      } else {
        console.error(`Section with ID "${header}" not found.`);
      }
    }, 100);
  }

  getChartsData() {
    this.ChartsData = ChartsJsonData;
  }

  navigateToSampleReportWithParams() {
    const fileName = this.router.parseUrl(this.router.url).queryParams['name'];
    const queryParams = {
      name: fileName,
    };
    const reportsDataMap: any = {
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
      '9874673188-fixed.json': cust40FixedJson,
      '9972099888.json': cust41Json,
      '9422078781.json': cust42Json,
      '7694823608.json': cust43Json,
      '8149535510.json': cust44Json,
      '9879007515.json': cust45Json,
      '9890434152.json': cust46Json,
      '9509612970-fixed.json': cust34FixedJson,
      '9014135897-fixed.json': cust30FixedJson,
      '9810394413-fixed.json': cust38FixedJson,
      '9874673188-fixed2.json': cust40Fixed2Json,
      '6352416401-fixed3.json': cust16Fixed3Json,
      '7002057931-fixed3.json': cust17Fixed3Json,
      '7386964691-fixed3.json': cust18Fixed3Json,
      '7630960645-fixed3.json': cust19Fixed3Json,
      '7755073434-fixed3.json': cust20Fixed3Json,
      '7827722922-fixed3.json': cust21Fixed3Json,
      '7984372723-fixed3.json': cust22Fixed3Json,
      '8002177560-fixed3.json': cust23Fixed3Json,
      '8008508500-fixed3.json': cust24Fixed3Json,
      '8090799120-fixed3.json': cust25Fixed3Json,
      '8250410163-fixed3.json': cust26Fixed3Json,
      '8791301338-fixed3.json': cust27Fixed3Json,
      '8888265422-fixed3.json': cust28Fixed3Json,
      '8977577888-fixed3.json': cust29Fixed3Json,
      '9014135897-fixed3.json': cust30Fixed3Json,
      '9045532404-fixed3.json': cust31Fixed3Json,
      '9423142181-fixed3.json': cust32Fixed3Json,
      '9439345525-fixed3.json': cust33Fixed3Json,
      '9509612970-fixed3.json': cust34Fixed3Json,
      '9609368419-fixed3.json': cust35Fixed3Json,
      '9679617825-fixed3.json': cust36Fixed3Json,
      '9727198579-fixed3.json': cust37Fixed3Json,
      '9810394413-fixed3.json': cust38Fixed3Json,
      '9850517709-fixed3.json': cust39Fixed3Json,
      '9874673188-fixed3.json': cust40Fixed3Json,
      '9972099888-fixed3.json': cust41Fixed3Json,
      '8408883086.json': cust47Json,
      '8889956999.json': cust48Json,
      '9029015602.json': cust49Json,
      '9935025285.json': cust50Json,
      '9935025285-fixed.json': cust50FixedJson,
      '8746099464-fixed2.json': cust11Fixed2Json,
      '8791301338-fixed2.json': cust27Fixed2Json,
      '6352416401-fixed2.json': cust16Fixed2Json,
      '8090799120-fixed2.json': cust25Fixed2Json,
      '8600584080.json': cust51Json,
      '6352416401-fixed4.json': cust16Fixed4Json,
      '8090799120-fixed4.json': cust25Fixed4Json,
      '9935025285-fixed2.json': cust50Fixed2Json,
      '9935025285-bbgh.json': cust50bbghJson,
      '8746099464-bbgm.json': cust11bbgmJson,
      '8791301338-bbgl.json': cust27bbglJson,
      '9423142181-fixed4.json': cust32Fixed4Json,
      '9439345525-fixed4.json': cust33Fixed4Json,
      '9679617825-fixed4.json': cust36Fixed4Json,
      '8149535510-fixed2.json': cust44Fixed2Json,
      '9423142181-fixed5.json': cust32Fixed5Json,
      '9699555355.json': cust52Json,
      '9833700995.json': cust53Json,
      '9815390378-fixed.json': cust5FixedJson,
      '9727363295-fixed.json': cust8FixedJson,
      '8600584080-fixed.json': cust51FixedJson,
      'avg_bureau.json': avgBureauJSON,
      'no_bureau.json': noBureauJSON,
      'poor_bureau.json': poorBureauJSON,
      'no_gst.json': noGSTJSON,
      'vpoor_bureau.json': vpoorBureauJSON,
      '9381054403.json': cust54Json,
      '9381054403-fixed.json': cust54FixedJson,
      '9381054403-fixed2.json': cust54FixedJson2,
      '8879868231.json': cust55Json,
      '8879868231-fixed.json': cust55JsonFixed,
      '9820635246.json': cust56Json,
      '9841053100.json': cust57Json,
    };

    if (this.router.url === '/in/report_model1') {
      this.reportsData = report_model1;
    } else {
      this.reportsData = reportsDataMap[fileName] || this.reportData;
    }
    console.log(this.reportsData, 'reportsData');

    let filteredArray: any = [];

    for (const key in this.reportsData?.insights?.fold1) {
      const array = this.reportsData?.insights?.fold1[key];
      if (Array.isArray(array)) {
        const filtered = array.filter(
          (item: any) => item?.condition_status === true
        );
        filteredArray = filteredArray.concat(filtered);
      }
    }

    filteredArray.sort((a: any, b: any) => {
      const countA = parseInt(a.class);
      const countB = parseInt(b.class);
      return countA - countB;
    });

    this.top3criticalIssue = filteredArray.slice(0, 3);

    const actionSummaryData = this.reportsData?.insights?.actionSummary;
    if (actionSummaryData) {
      const filteredCritical = this.reportService.concatenateInsights(
        actionSummaryData,
        'negative'
      );
      const filteredPositive = this.reportService.concatenateInsights(
        actionSummaryData,
        'positive'
      );
      this.criticalTotal =
        filteredCritical?.creditReport.length +
        filteredCritical?.bankingHistory.length +
        filteredCritical?.gstHistory.length;
      this.postiveTotal =
        filteredPositive?.creditReport.length +
        filteredPositive?.bankingHistory.length +
        filteredPositive?.gstHistory.length;
    } else {
      if (this.reportsData?.report) {
        const { bankingSummary, bureauSummary, gstSummary } = this.reportsData.report;
        this.postiveTotal =
          bankingSummary?.positive + bureauSummary?.positive + gstSummary?.positive;
        this.criticalTotal =
          bankingSummary?.critical + bureauSummary?.critical + gstSummary?.critical;
      }
    }

    this.getReportData(this.reportsData);

    this.gstDetails = this.reportsData?.report?.gstHistory;
    if (!this.gstDetails) {
      this.isShowNoGST = true;
    }

    this.bureauScore =
      this.reportsData?.report?.creditReport?.bureauScore?.score;
    if (!this.bureauScore) {
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
    requestData['mobile'] = this.mobileNo;
    //  const params = { ...this.paramsObject.params };
    this.api.postForReport(`api/Remediation/Report`, requestData).subscribe({
      next: (res: any) => {
        if (res) {
          this.showEligible = false;
          this.reportsData = res;
          this.getReportData(this.reportsData);
        }
      },
      error: (error) => {
        this.router.navigate(['/in']);
      },
      complete: () => {
        // ('Request complete');
      },
    });
  }

  redirectToPricing() {
    this.navigationService.setLinkClicked(true);
    this.router.navigate(['/in/pricing_group']);
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
