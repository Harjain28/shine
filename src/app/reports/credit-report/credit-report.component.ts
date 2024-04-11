import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemiDoughnutComponent } from 'src/app/charts/semi-doughnut/semi-doughnut.component';
import { DoughnutComponent } from 'src/app/charts/doughnut/doughnut.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { MatDialog } from '@angular/material/dialog';
import { BuildBureauPopupComponent } from 'src/app/modal/build-bureau-popup/build-bureau-popup.component';
import { CreditJourneyPopupComponent } from 'src/app/modal/credit-journey-popup/credit-journey-popup.component';
import { reportPageJson } from 'src/app/JsonFiles/report';

@Component({
  selector: 'app-credit-report',
  standalone: true,
  imports: [CommonModule,SemiDoughnutComponent,DoughnutComponent,MatProgressBarModule,MatExpansionModule,MatFormFieldModule,MatCheckboxModule,MatIconModule,CarouselModule],
  templateUrl: './credit-report.component.html',
  styleUrls: ['./credit-report.component.scss', '../reports.component.scss']
})
export class CreditReportComponent {

  @Input() creditReportsChartsData: any;

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
  months: string[] = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  years: number[] | undefined;
  default_analysis: any;
  defaultHistoryItems: any =[];
  other_analysis: any;
  credit_debt_analysis:any;
  credit_analysis: any;
  secured_unsecured_ratio: any;
  turnover_analysis: any;
  other_Canalysis: any;
  
  constructor(private dialog: MatDialog){}

  customOptions4: OwlOptions = {
    loop: false,
  rewind: true,
   dots: true,
   autoplay: false,
   navSpeed: 300,
   nav: false,
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
  
  openDialog(){
    // this.getBorrowerInformation();
    const dialogRef = this.dialog.open(CreditJourneyPopupComponent, {
      width: 'auto',
      height: 'auto',
    });
  }



  openPopup(){
    this.openDialog();
  }

  
  ngOnInit(): void {
    this.reportsData = reportPageJson;
    this.creditReportData = this.reportsData?.credit_report;
    console.log(this.creditReportData, "creditReportData");
    this.angle = this.creditReportData?.bureau_score?.score;
    this.loan_repayment_history = this.creditReportData?.loan_repayment_history;
    this.credit_debt_analysis = this.creditReportData?.credit_debt_analysis;


    
    this.default_analysis = this.loan_repayment_history?.default_analysis;
    this.other_analysis = this.loan_repayment_history?.other_analysis;
    this.defaultHistoryItems = [
      { label: 'Recent Default', value: this.default_analysis.default_history.recent_default },
      { label: 'Default Ever', value: this.default_analysis.default_history.default_ever },
      { label: '30 days delayed', value: this.default_analysis.default_history.thirty_days_delayed },
      { label: 'Delayed Severity of Payment (90-180 days)', value: this.default_analysis.default_history.delayed_severity }
    ];
    this.years = this.extractYears(this.loan_repayment_history?.missed_payments);
    this.selectedYear = this.years[0];

     this.credit_analysis = this.credit_debt_analysis?.credit_analysis;
     this.secured_unsecured_ratio = this.credit_debt_analysis?.secured_unsecured_ratio;
     this.turnover_analysis = this.credit_debt_analysis?.turnover_analysis;
     this.other_Canalysis = this.credit_debt_analysis?.other_analysis;

    this.doughtnutData = this.creditReportsChartsData?.Doughtnut;
    this.semiDoughtnutData = this.creditReportsChartsData?.Semi_Doughtnut;
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
    payments.forEach(payment => {
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
    const index = this.months.indexOf(month) + 1;
    return this.loan_repayment_history?.missed_payments.some((payment: { year: number | undefined; month: number; }): any => payment.year === this.selectedYear && payment.month === index);
  }
   // Function to calculate the rotation of the needle
 calculateRotation(angle: number): number {
  return (angle - 0) / 5; 
}


  expand(){
    this.expandSection = true;
    this.expandBlocks = true 

    if(this.expandCurrentCreditSection == true){
       this.expandCurrentCreditSection = false;
    }
  
  }

  minimize(){
    this.expandSection = false;
    this.expandBlocks = false;

  }

  expandCurrentCredit(){

    if(this.expandSection == true){
      this.expandSection = false;
      this.expandCurrentCreditSection = true;
    }
    else{
      this.expandCurrentCreditSection = true;
      this.expandBlocks = true;

    }
  }


  minimizeCurrentCredit(){

    this.expandCurrentCreditSection = false;
    this.expandBlocks = false;


  }

}
