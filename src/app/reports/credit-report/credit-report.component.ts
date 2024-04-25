import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemiDoughnutComponent } from 'src/app/charts/semi-doughnut/semi-doughnut.component';
import { DoughnutComponent } from 'src/app/charts/doughnut/doughnut.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {  CarouselComponent, CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { MatDialog } from '@angular/material/dialog';
import { CreditJourneyPopupComponent } from 'src/app/modal/credit-journey-popup/credit-journey-popup.component';
import { reportPageJson } from 'src/app/JsonFiles/report';
import { reportStatciData } from 'src/app/JsonFiles/reportpageStaticData';
import { RoundPipe } from 'src/app/pipe/round.pipe';
@Component({
  selector: 'app-credit-report',
  standalone: true,
  imports: [
    CommonModule,
    SemiDoughnutComponent,
    DoughnutComponent,
    MatProgressBarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    CarouselModule,
  ],
  templateUrl: './credit-report.component.html',
  styleUrls: ['./credit-report.component.scss', '../reports.component.scss'],
})
export class CreditReportComponent {
  @Input() creditReportsData: any;
  @ViewChild('owlCarousel') owlCarousel!: CarouselComponent;


  expandSection!: boolean;
  expandCurrentCreditSection!: boolean;
  expandBlocks!: boolean;
  doughtnutData: any;
  semiDoughtnutData: any;

  angle: number = 100;
  minAngle: number = 0;
  maxAngle: number = 900;
  reportsData: any;
  creditReportData: any;
  bureau_score: any;
  loan_repayment_history: any;
  selectedYear: number | undefined;
  month: string[] = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  year: number[] | undefined;
  default_analysis: any;
  defaultHistoryItems: any = [];
  other_analysis: any;
  credit_debt_analysis: any;
  credit_analysis: any;
  bureauScoreInsights: any;
  infoCardLRP: any;
  defaulthistoryText: any;
  solutions: any;
  impact: any;
  topBanks: any;
  suitFiledEver: any;
  summary: any = [];
  securedUnsecuredRatio: any;
  solutionsAnalysis: any;
  variety_of_active_loans: any;
  creditCardUtilization: any;
  smallLoans: any;
  credit_debt_analysis_summary: any;
  creditEnquiry: any;
  securedUnsecuredRatioData: any;
  ratiosecured: any = [];
  reportStaticData: any;
  CR_Data: any;
  LoanReplacementExpanded: any;
  credit_analysis_card: any;
  credit_analysis_card_Expanded: any;
  colorDots: string[] = ['#C3E128', '#12ba9b', '#EC1111', '#ff7b24', '#6a2fc2', '#3f51b5', '#11c897', '#d32ec3'];
  currStage: any;
  potStage: any;
  imgageIcon: any;
  bullets: any;

  constructor(private dialog: MatDialog, private el:  ElementRef) {}

  customOptions4: OwlOptions = {
    loop: true,
    rewind: true,
    dots: true,
    autoplay: false,
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


  openDialog() {
    // this.getBorrowerInformation();
    const dialogRef = this.dialog.open(CreditJourneyPopupComponent, {
      width: 'auto',
      height: 'auto',
    });
  }

  openPopup() {
    this.openDialog();
  }

  ngOnInit(): void {
    this.reportsData = reportPageJson?.report;
    this.creditReportData = this.reportsData?.creditReport;
    this.angle = this.creditReportData?.bureauScore?.score;
    this.loan_repayment_history = this.creditReportData?.loanRepaymentHistory;
   

    this.year = this.extractYears(this.loan_repayment_history?.missedPayments);
    this.selectedYear = this.year[0];

    this.default_analysis = this.loan_repayment_history?.defaultAnalysis;
    this.other_analysis = this.loan_repayment_history?.otherAnalysis;

    function toCamelCase(str: string) {
      return str.replace(/([-_][a-z])/gi, ($1) => {
          return $1.toUpperCase()
              .replace('-', '')
              .replace('_', '');
      });
  }


for (const key in this.default_analysis.defaultHistory) {
    if (this.default_analysis.defaultHistory.hasOwnProperty(key)) {
        this.defaultHistoryItems.push({
            key: toCamelCase(key),
            value: this.default_analysis.defaultHistory[key]
        });
    }
}

this.currStage= this.reportsData?.currentStage
this.potStage = this.reportsData?.potentialStage





  
    this.credit_analysis = this.creditReportData?.creditAnalysis;
    this.credit_analysis = Object.assign({}, this.credit_analysis, {
      colorDots: ['#C3E128', '#12ba9b', '#EC1111', '#ff7b24', '#6a2fc2', '#3f51b5', '#11c897', '#d32ec3'],
      deptCompColors: ['#C3E128', '#12ba9b']

    });
    console.log(this.credit_analysis,'hhhh')
    this.securedUnsecuredRatioData =
      this.creditReportData?.securedUnsecuredRatio;
    
      this.ratiosecured = {
        byAmount: [
            {
                name: 'secured',
                value: this.securedUnsecuredRatioData?.securedOutstanding || 0,
            },
            {
                name: 'unsecured',
                value: this.securedUnsecuredRatioData?.unsecuredOutstanding || 0,
            }
        ],
        colorDots: ['#C3E128', '#12ba9b']


    };

    this.getInsights();
  }

  roundValue(value: number): number {
    return Math.round(value);
  }

  getInsights() {
    this.reportsData = reportPageJson?.insights;
    const creditreportInsights = this.reportsData?.creditReport;
    const loanRepaymentHistory = creditreportInsights?.loanRepaymentHistory;


    loanRepaymentHistory?.summary.forEach((item: any) => {
      if (item?.bullets !== null && item?.bullets.length > 0) {
        this.bullets = item?.bullets;
        if (item?.class !== null) {
          if (item.class === "negative") {
            this.imgageIcon = "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Smiley-Sad-01.png";
          } else {
            this.imgageIcon = "./assets/LandingPage/smileImg.svg";
          }
        } else {
          this.imgageIcon =   "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Smiley-Moderate-01.png";
        }
      } 
    });
    

    



    const defaultAnalysis = loanRepaymentHistory?.defaultAnalysis;
    const otherAnalysis = loanRepaymentHistory?.otherAnalysis;

    this.summary = this.concatenateInsights(
      loanRepaymentHistory?.summary.filter(
        (item: { condition_status: boolean }) => item.condition_status === true
      )
    );
    this.bureauScoreInsights = this.concatenateInsights(
      creditreportInsights?.bureauScore.filter(
        (item: { condition_status: boolean }) => item.condition_status
      )
    );
    this.infoCardLRP = this.concatenateInsights(
      loanRepaymentHistory?.infoCard.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
    this.defaulthistoryText = this.concatenateInsights(
      defaultAnalysis?.defaultHistory.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
    this.solutions = this.concatenateInsights(
      defaultAnalysis?.solutions.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
    this.impact = this.concatenateInsights(
      defaultAnalysis?.impact.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
    this.topBanks = this.concatenateInsights(
      otherAnalysis?.topBanks.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
    this.suitFiledEver = this.concatenateInsights(
      otherAnalysis?.suitFiledEver.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );

    

    const credit_analysis = creditreportInsights?.credit_analysis;

    this.securedUnsecuredRatio = this.concatenateInsights(
      credit_analysis?.securedUnsecuredRatio.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );

    this.solutionsAnalysis = this.concatenateInsights(
      credit_analysis?.solutions.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );

    this.variety_of_active_loans = this.concatenateInsights(
      credit_analysis?.variety_of_active_loans.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
    this.creditCardUtilization = this.concatenateInsights(
      credit_analysis?.creditCardUtilization.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
    this.smallLoans = this.concatenateInsights(
      credit_analysis?.smallLoans.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
    this.credit_debt_analysis_summary = this.concatenateInsights(
      credit_analysis?.credit_debt_analysis_summary.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
    this.creditEnquiry = this.concatenateInsights(
      credit_analysis?.creditEnquiry.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );

    console.log(credit_analysis, 'credit_analysis');
    // console.log(this.summary, 'summary');
    // console.log(this.suitFiledEver, 'suitFiledEver');

    this.reportStaticData = reportStatciData;
    this.CR_Data = this.reportStaticData?.credit_report_section;
    this.LoanReplacementExpanded = this.CR_Data?.loanRepaymentHistory_expanded;
    this.credit_analysis_card = this.CR_Data?.credit_analysis_card;
    this.credit_analysis_card_Expanded = this.CR_Data?.credit_analysis_expanded;

  }

  concatenateInsights(insightsArray: any) {
    return insightsArray.reduce(
        (result: any, insight: any) => {
            if (insight.class === "negative") {
                if (insight.header !== null && insight.header !== undefined) {
                    result.header = insight.header + ' ';
                }
                if (insight.subheader !== null && insight.subheader !== undefined) {
                    result.subheader = insight.subheader + ' ';
                }
                if (insight.warning !== null && insight.warning !== undefined) {
                    result.warning = insight.warning + ' ';
                }
                if (insight.class !== null && insight.class !== undefined) {
                  result.class = insight.class + ' ';
              }
            } else {
                if (!result.header && insight.header !== null && insight.header !== undefined) {
                    result.header = insight.header + ' ';
                }
                if (!result.subheader && insight.subheader !== null && insight.subheader !== undefined) {
                    result.subheader = insight.subheader + ' ';
                }
                if (!result.warning && insight.warning !== null && insight.warning !== undefined) {
                    result.warning = insight.warning + ' ';
                }
                if (insight.class !== null && insight.class !== undefined) {
                  result.class = insight.class + ' ';
              }
            }
            
            if (insight.description !== null && insight.description !== undefined) {
                result.description += insight.description + ' ';
            }
            if (insight.bullets !== null && insight.bullets !== undefined) {
                result.bullets.push(...insight.bullets);
            }
            if (insight.type !== null && insight.type !== undefined) {
                result.type += insight.type + ' ';
            }
          
            return result;
        },
        {
            header: '',
            subheader: '',
            description: '',
            bullets: [],
            class: '',
            type: '',
            warning: '',
        }
    );
}


  loanColor(name: string): string {
    switch (name) {
      case 'Credit Card':
        return '#12ba9b';
      case 'Gold Loan':
        return '#c3e128';
      case 'Housing Loan':
        return '#6a2fc2';
      case 'Personal Loan':
        return '#211261';
      default:
        return '#000000'; // Default color
    }
  }

  extractYears(payments: any[]): number[] {
    const yearsSet = new Set<number>();
    payments.forEach((payment) => {
      if (typeof payment.year === 'number') {
        yearsSet.add(payment.year);
      }
    });
    return Array.from(yearsSet);
  }

  selectYear(year: number): void {
    this.selectedYear = year;
  }

  isSelectedMonth(month: string): boolean {
    const index = this.month.indexOf(month) + 1;
    return this.loan_repayment_history?.missedPayments.some(
      (payment: { year: number | undefined; month: number }): any =>
        payment.year === this.selectedYear && payment.month === index
    );
  }
  // Function to calculate the rotation of the needle
  calculateRotation(angle: number): number {
    return angle / 5;
  }

  expand() {
    this.expandSection = true;
    this.expandBlocks = true;

    if (this.expandCurrentCreditSection == true) {
      this.expandCurrentCreditSection = false;
    }
  }

  minimize() {
    this.expandSection = false;
    this.expandBlocks = false;
  }

  expandCurrentCredit() {
    if (this.expandSection == true) {
      this.expandSection = false;
      this.expandCurrentCreditSection = true;
    } else {
      this.expandCurrentCreditSection = true;
      this.expandBlocks = true;
    }
  }

  minimizeCurrentCredit() {
    this.expandCurrentCreditSection = false;
    this.expandBlocks = false;
  }
}
