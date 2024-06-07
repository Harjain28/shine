import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemiDoughnutComponent } from 'src/app/charts/semi-doughnut/semi-doughnut.component';
import { DoughnutComponent } from 'src/app/charts/doughnut/doughnut.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CarouselComponent, CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { MatDialog } from '@angular/material/dialog';
import { CreditJourneyPopupComponent } from 'src/app/modal/credit-journey-popup/credit-journey-popup.component';
import { reportStatciData } from 'src/app/JsonFiles/reportpageStaticData';
import { Router } from '@angular/router';

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
  @ViewChild('scrollTargetSection') scrollTargetSection!: ElementRef;
  @ViewChild('scrollTargetSection1') scrollTargetSection1!: ElementRef;
  @ViewChild('scrollTargetSection2') scrollTargetSection2!: ElementRef;




  isVisible = false;
  reportDate: any;
  cc!: boolean;
  bsColor: any;
  lrhImgageIcon: any;
  caImgageIcon: any;
  summaryIcon: any;
  mergedByName: any = [];

  toggleTooltip(): void {
    this.isVisible = !this.isVisible;
  }

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
  colorDots: string[] = ['#211261', '#6A2FC2', '#AD6EEA', '#12BA9B', '#56D6B7', '#C3E028', '#E2E2E2', '#3F3F3F', '#FF7B24', '#EC1111'];
  deptCompColors: string[] = ['#C3E128', '#12ba9b']

  currStage: any;
  potStage: any;
  imgageIcon: any;
  bullets: any;
  default_analysis_labels: any;
  staticData: any;
  warningColor!: string;
  cardView: any;
  creditRemarks: any;
  infoCardLRPColor!: string;
  infoCardLRPText!: string;
  warningText!: string;
  res: any;
  previousYears!: any[]
  monthNames: string[] = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  byCount!: any[];





  constructor(private dialog: MatDialog, private el: ElementRef, private router: Router) { }

  customOptions4: OwlOptions = {
    loop: false,
    rewind: false,
    dots: true,
    autoplay: false,
    navSpeed: 300,
    nav: true,
    margin: 8,
    mouseDrag: false,
    touchDrag: true,

    autoplayTimeout: 8000,
    autoplaySpeed: 1500,
    navText: [
      "<span><img class='navTxtImg' src='./assets/images/homeImage/silderaArrow.svg'> 1 more</span>",
      "<span> 1 more <img class='navTxtImg' src='./assets/images/homeImage/silderaArrow.svg'></span>",
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
    const dialogRef = this.dialog.open(CreditJourneyPopupComponent, {
      width: 'auto',
      height: 'auto',
    });
  }

  openPopup() {
    this.openDialog();
  }

  ngOnInit(): void {
    this.reportsData = this.creditReportsData;

    this.creditReportData = this.reportsData?.report?.creditReport;
    this.angle = this.creditReportData?.bureauScore?.score;


    this.getPastYears()

    if (this.creditReportData?.loanRepaymentHistory) {
      this.loan_repayment_history = this.creditReportData?.loanRepaymentHistory;
      this.year = this.extractYears(this.loan_repayment_history?.missedPayments);
    }
    this.selectedYear = this.previousYears[0];

    if(this.loan_repayment_history?.defaultAnalysis){
    this.default_analysis = this.loan_repayment_history?.defaultAnalysis;
    }
    this.staticData = reportStatciData?.credit_report_section;
    this.default_analysis_labels = Object.values(this.staticData?.loanRepaymentHistory_expanded?.defaultAnalysis.defaultHistory.labels);

    if(this.loan_repayment_history?.otherAnalysis){
    this.other_analysis = this.loan_repayment_history?.otherAnalysis;
    }

    function toCamelCase(str: string) {
      return str.replace(/([-_][a-z])/gi, ($1) => {
        return $1.toUpperCase()
          .replace('-', '')
          .replace('_', '');
      });
    }


    if (this.default_analysis) {
      for (const key in this.default_analysis.defaultHistory) {
        if (this.default_analysis.defaultHistory.hasOwnProperty(key)) {
          this.defaultHistoryItems.push({
            key: toCamelCase(key),
            value: this.default_analysis.defaultHistory[key]
          });
        }
      }
    }

    this.currStage = this.reportsData?.report?.currentStage
    this.potStage = this.reportsData?.report?.potentialStage






    if(this.creditReportData?.creditAnalysis){
     this.byCount = this.creditReportData?.creditAnalysis?.byCount.sort((a: { value: number; }, b: { value: number; }) => b.value - a.value),
     this.mergedByName = this.byCount.map(byCountItem => {
      const byAmountItem =  this.creditReportData?.creditAnalysis.byAmount.find((byAmountItem: { name: any; }) => byAmountItem.name === byCountItem.name);
      return {
        ...byAmountItem,
        countValue: byCountItem.value
      };
    });
    this.credit_analysis = {
      byAmount: this.mergedByName,
      colorDots: ['#211261', '#6A2FC2', '#AD6EEA', '#12BA9B', '#56D6B7', '#C3E028', '#E2E2E2', '#3F3F3F', '#FF7B24', '#EC1111'],
      darkerShadeColor: ['#1c0d67','#5a22b3','#8c4fde','#0d9470','#3e97a4','#a3b63a','#d1d1d1','#2b2b2b','#e77421','#b20e0e']
    };
  }

    this.securedUnsecuredRatioData =
      this.creditReportData?.securedUnsecuredRatio;

      if(this.securedUnsecuredRatioData)
    this.ratiosecured = {
      byAmount: [
        {
          name: 'unsecured',
          value: this.securedUnsecuredRatioData?.unsecuredOutstanding || 0,
        },
        {
          name: 'secured',
          value: this.securedUnsecuredRatioData?.securedOutstanding || 0,
        }

      ],
      colorDots: ['#C3E128', '#12ba9b'],
      darkerShadeColor: ['#abd214', '#10b18d']

    };

    this.getInsights();

  }

  roundValue(value: number): number {
    return Math.round(value);
  }

  private setColorAndText(classValue: string): { color: string } {
    const colorRegex = /(negative|positive)/i;
    const match = classValue.trim().match(colorRegex);
  
    let color: string;
  
    if (match) {
      switch (match[0].toLowerCase()) {
        case "negative":
          color = "#ec1111"; // Red
          break;
        case "positive":
          color = "var(--main2)"; // Green
          break;
        default:
          color = "#FF7B24"; // Orange
      }
    } else {
      color = "#FF7B24"; // Orange
    }
  
    return { color };
  }
  


  getPastYears() {
    this.reportDate = this.reportsData?.report?.reportDate;
    const currentDate = new Date(this.reportDate);

    const year = currentDate.getFullYear();
    this.previousYears = [];
    for (let i = 0; i <= 3; i++) {
      this.previousYears.push(year - i);
    }
  }

  extractYears(payments: any[]): number[] {
    const yearsSet = new Set<number>();
    payments.forEach((payment) => {
      if (typeof payment.year === 'number') {
        yearsSet.add(payment.year);
      }
    });
    return Array.from(yearsSet).sort((a, b) => a - b);
  }

  selectYear(year: number): void {
    this.selectedYear = year;
  }

  getLast36Months() {
    const result = [];
    
    this.reportDate = this.reportsData?.report?.reportDate.slice(0, 7);
    const currentDate = new Date(this.reportDate);
  
    for (let i = 0; i < 36; i++) {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
  
      result.push({ monthName: this.monthNames[month], monthIndex: month + 1, year: year });
  
      currentDate.setMonth(month - 1);
    }
  
    return result.reverse();
  }
  

  isMonth(month: string, year: number): boolean {
    return this.getLast36Months().some(m => m.monthName === month && m.year === year);
}

  isSelectedMonth(month: string): boolean {
    const last36Months = this.getLast36Months();
    const foundMonth = last36Months.find(m => m.monthName === month);
    if (foundMonth) {
      return this.loan_repayment_history?.missedPayments.some((payment: { year: number; month: number }) =>
        payment.year === this.selectedYear && payment.month === foundMonth.monthIndex
      );
    }
    return false;
  }




 setSummaryIcon(data: any) {
    const classRegex = /(negative|positive|stable)/i;
    const match = data?.class.match(classRegex);
    
    if (match) {
      switch (match[0].toLowerCase()) {
        case 'negative':
          this.summaryIcon = 'https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Smiley-Sad-01.png';
          break;
        case 'positive':
          this.summaryIcon = './assets/LandingPage/smileImg.svg';
          break;
        case 'stable':
          this.summaryIcon = 'https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Smiley-Moderate-01.png';
          break;
        default:
          this.summaryIcon = '';
      }
    } else {
      this.summaryIcon = '';
    }
    
    return this.summaryIcon;
  }



  getInsights() {
    const creditreportInsights = this.reportsData?.insights?.creditReport;
    const loanRepaymentHistory = creditreportInsights?.loanRepaymentHistory;


    if(loanRepaymentHistory?.summary){
    const summaryFilteredData = loanRepaymentHistory?.summary.filter((item: { condition_status: boolean; }) => item.condition_status === true);
    this.lrhImgageIcon = this.setSummaryIcon(summaryFilteredData[0]);
    }






    const defaultAnalysis = loanRepaymentHistory?.defaultAnalysis;
    const otherAnalysis = loanRepaymentHistory?.otherAnalysis;

    if(loanRepaymentHistory?.summary){
    this.summary = this.concatenateInsights(
      loanRepaymentHistory?.summary.filter(
        (item: { condition_status: boolean }) => item.condition_status === true
      )
    );
  }

    if(creditreportInsights?.bureauScore){
    this.bureauScoreInsights = this.concatenateInsights(
      creditreportInsights?.bureauScore.filter(
        (item: { condition_status: boolean }) => item.condition_status
      )
    );
  }

    const bureauScoreClass = this.bureauScoreInsights?.class;
    const { color: bsColor } = this.setColorAndText(bureauScoreClass);
    this.bsColor = bsColor;


    if(loanRepaymentHistory?.infoCard){
    this.infoCardLRP = this.concatenateInsights(
      loanRepaymentHistory?.infoCard.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
  }

    const infoCardLRPClass = this.infoCardLRP?.class;
    const { color: infoCardLRPColor } = this.setColorAndText(infoCardLRPClass);
    this.infoCardLRPColor = infoCardLRPColor;

    
    if(this.default_analysis?.defaultHistory){
    this.defaulthistoryText = this.concatenateInsights(
      defaultAnalysis?.defaultHistory.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
  }

  if(defaultAnalysis?.solutions){
    this.solutions = this.concatenateInsights(
      defaultAnalysis?.solutions.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
  }

  if(defaultAnalysis?.impact){
    this.impact = this.concatenateInsights(
      defaultAnalysis?.impact.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
  }
  if(otherAnalysis?.topBanks){
    this.topBanks = this.concatenateInsights(
      otherAnalysis?.topBanks.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
  }

  if(otherAnalysis?.suitFiledEver){
    this.suitFiledEver = this.concatenateInsights(
      otherAnalysis?.suitFiledEver.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
  }



    const credit_analysis = creditreportInsights?.credit_analysis;

    if(credit_analysis?.card_view){
    this.cardView = this.concatenateInsights(
      credit_analysis?.card_view.filter(
        (item: { condition_status: any, }) => item.condition_status
      )
    );
  }

    const cardViewClass = this.cardView?.class;
    const { color: cardViewColor } = this.setColorAndText(cardViewClass);
    this.warningColor = cardViewColor;



    if(credit_analysis?.securedUnsecuredRatio){
    this.securedUnsecuredRatio = this.concatenateInsights(
      credit_analysis?.securedUnsecuredRatio.filter(
        (item: { condition_status: any, }) => item.condition_status
      )
    );
  }


  if(credit_analysis?.solutions){
    this.solutionsAnalysis = this.concatenateInsights(
      credit_analysis?.solutions.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
  }

  if(credit_analysis?.variety_of_active_loans){
    this.variety_of_active_loans = this.concatenateInsights(
      credit_analysis?.variety_of_active_loans.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
  }

  if(credit_analysis?.creditCardUtilization){
    this.creditCardUtilization = this.concatenateInsights(
      credit_analysis?.creditCardUtilization.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
  }


  if(credit_analysis?.smallLoans){
    this.smallLoans = this.concatenateInsights(
      credit_analysis?.smallLoans.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
  }

  if(credit_analysis?.credit_debt_analysis_summary){
    this.credit_debt_analysis_summary = this.concatenateInsights(
      credit_analysis?.credit_debt_analysis_summary.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
  }

    const credit_analysisFilteredData = credit_analysis?.credit_debt_analysis_summary.filter((item: { condition_status: boolean; }) => item.condition_status === true);
    this.caImgageIcon = this.setSummaryIcon(credit_analysisFilteredData[0]);


    if(credit_analysis?.creditEnquiry){
    this.creditEnquiry = this.concatenateInsights(
      credit_analysis?.creditEnquiry.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
  }


  if(credit_analysis?.creditRemark){
    this.creditRemarks = this.concatenateInsights(
      credit_analysis?.creditRemark.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
  }


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
            result.header = insight.header;
          }
          if (insight.subheader !== null && insight.subheader !== undefined) {
            result.subheader = insight.subheader;
          }
          if (insight.warning !== null && insight.warning !== undefined) {
            result.warning = insight.warning;
          }
          if (insight.class !== null && insight.class !== undefined) {
            result.class = insight.class;
          }
        }
        else {
          if (!result.header && insight.header !== null && insight.header !== undefined) {
            result.header = insight.header;
          }
          if (!result.subheader && insight.subheader !== null && insight.subheader !== undefined) {
            result.subheader = insight.subheader;
          }
          if (!result.warning && insight.warning !== null && insight.warning !== undefined) {
            result.warning = insight.warning;
          }
          if (insight.class !== null && insight.class !== undefined) {
            result.class = insight.class;
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
        return '#000000'; 
    }
  }



  calculateRotation(value: number): number {
    const minAnglee = -90;
    const maxAnglee = 90;
    const range = maxAnglee - minAnglee;
    const scaledValue = (value - this.minAngle) / (this.maxAngle - this.minAngle);
    return minAnglee + scaledValue * range;  }

  expand() {
   
    this.expandSection = true;
    this.expandBlocks = true;

    if (this.expandCurrentCreditSection == true) {
      this.expandCurrentCreditSection = false;
    }
    if (this.scrollTargetSection) {
      this.scrollTargetSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        if (this.scrollTargetSection2) {
          this.scrollTargetSection2.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    } else {
      this.expandCurrentCreditSection = true;
      this.expandBlocks = true;
      if (this.scrollTargetSection1) {
        this.scrollTargetSection1.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
   
  }

  minimizeCurrentCredit() {
    this.expandCurrentCreditSection = false;
    this.expandBlocks = false;
  }
}
