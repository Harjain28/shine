import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Mixed2Component } from 'src/app/charts/mixed2/mixed2.component';
import { Mixed3Component } from 'src/app/charts/mixed3/mixed3.component';
import { Mixed4Component } from 'src/app/charts/mixed4/mixed4.component';
import { MixedComponent } from 'src/app/charts/mixed/mixed.component';
import { HistogramComponent } from 'src/app/charts/histogram/histogram.component';
import { PieComponent } from 'src/app/charts/pie/pie.component';
import { BarComponent } from 'src/app/charts/bar/bar.component';
import { reportPageJson } from 'src/app/JsonFiles/report';
import { Mixed5Component } from 'src/app/charts/mixed5/mixed5.component';

@Component({
  selector: 'app-banking-business',
  standalone: true,
  imports: [CommonModule,MatProgressBarModule,MatExpansionModule,
    MatFormFieldModule,MatCheckboxModule,MatIconModule,CarouselModule,
    Mixed2Component,Mixed3Component,Mixed4Component,MixedComponent,Mixed5Component,HistogramComponent,
    PieComponent,BarComponent],
  templateUrl: './banking-business.component.html',
  styleUrls: ['./banking-business.component.scss','../reports.component.scss']
})
export class BankingBusinessComponent {

  @Input() bankingBusinessChartsData: any;

  expandBusinessSection!: boolean;
  expandBalanceSection!: boolean;
  balanceSectionBlock: boolean = true;
  BusinessSectionBlock: boolean = true;
  expandDebtRatioSection!: boolean;
  doughtnutJSONData: any;
  doughtnutData: any;
  barData: any;
  pieData: any;
  histogramData: any;
  mixedData: any;
  mixedData3: any;
  mixedData4: any;
  mixedData2: any;
  graphData: any;
  banking_history: any;
  monthly_expenses: any;
  isExpand: boolean = false;
  mixedData5: any;
  turnoverLineData: any;
  businessLinedata:any;
  constructor(){

  }
  customOptions4: OwlOptions = {
    loop: false,
  rewind: true,
   dots: true,
   autoplay: false,
   navSpeed: 300,
   nav: false,
   margin:10,
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



  
  ngOnInit(): void {
    // this.barData = this.bankingBusinessChartsData?.Bar;
    this.pieData = this.bankingBusinessChartsData?.Pie;
    this.histogramData = this.bankingBusinessChartsData?.Histogram;
    // this.mixedData = this.bankingBusinessChartsData?.Mixed;
    // this.mixedData2 = this.bankingBusinessChartsData?.Mixed2;
    this.mixedData3 = this.bankingBusinessChartsData?.Mixed3;
    this.mixedData4 = this.bankingBusinessChartsData?.Mixed4;



    this.banking_history = reportPageJson?.report.bankingHistory;
    this.graphData = this.banking_history?.graph_data;
    this.monthly_expenses = this.banking_history?.monthly_expenses;
    this.turnoverLineData = this.graphData?.turnover;
    this.businessLinedata = this.graphData?.abb;
    

    const simplifiedMonthlyData = this.graphData?.monthly.map((item: {
      cashflow: any;
      average_balance: any;
      credit_count: any; month: any; turnover: any; 
}): any => {
      return {
          month: this.formatMonth(item.month),
          turnover:  item.turnover,
          creditCount: item.credit_count,
          averageBalance: item.average_balance,
          cashflow: item.cashflow,
      };
  });

  const firstSixObjects = simplifiedMonthlyData;
  const monthsArray = firstSixObjects.map((item: { month: any; }) => item.month);
  const turnoversArray = firstSixObjects.map((item: { turnover: any; }) => item.turnover);
  const creditCountArray = firstSixObjects.map((item: { creditCount: any; }) => item.creditCount);
  const cashFlowArray = firstSixObjects.map((item: { cashflow: any; }) => item.cashflow);
  const averageBalanceArray = firstSixObjects.map((item: { averageBalance: any; }) => item.averageBalance);
  // Creating an object with two arrays
  const resultObject = {
      months: monthsArray,
      turnovers: turnoversArray,
      creditCount: creditCountArray,
      cashFlow: cashFlowArray,
      averageBalance: averageBalanceArray,
      turnoverLineData: this.turnoverLineData,
      businessLinedata: this.businessLinedata

  };

  this.mixedData2 = resultObject;
  this.barData = resultObject;
  this.histogramData = resultObject;
  this.mixedData = resultObject;
  this.mixedData3 = resultObject;
  this.mixedData4 = resultObject;
  this.mixedData5 = resultObject;

    console.log(cashFlowArray, 'kkk');
  }



  formatMonth(month:any) {
    const date = new Date(month);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthNames[date.getMonth()];
}

formatAmount(value:any) {
  const roundedTurnover = Math.round(value);
  if (roundedTurnover >= 10000000) {
    return (roundedTurnover / 10000000).toFixed(0) + ' Cr';
  } else if (roundedTurnover >= 100000) {
    return (roundedTurnover / 100000).toFixed(0) + ' L';
  } else if (roundedTurnover >= 1000) {
    return (roundedTurnover / 1000).toFixed(0) + ' K';
  } else {
    return roundedTurnover.toString();
  }  
}


  expandBankingBusniess(){

    localStorage.setItem("isExpand", "true")
    this.expandBusinessSection = true;
    this.balanceSectionBlock = false;
    this.BusinessSectionBlock = false;
  }

  minimizeBusinessBanking(){
    localStorage.setItem("isExpand", "false")
    this.expandBusinessSection = false;
    this.balanceSectionBlock = true; 
       this.BusinessSectionBlock = true;
  }

  expandBankingBalance(){
    this.expandBalanceSection = true;
    this.balanceSectionBlock = false;
    this.expandBusinessSection = false;
    this.BusinessSectionBlock = false;
  }

  minimizeBankingBalance(){
    this.expandBalanceSection = false;
    this.balanceSectionBlock = true;
    this.BusinessSectionBlock = true;
  }

  expandBankingBlanceBlock(){
    this.expandBusinessSection = false;
    this.expandBalanceSection = true;
  }

  expandBusinessSectionBlock(){
    localStorage.setItem("isExpand", "true")
    this.expandBalanceSection = false;
    this.expandBusinessSection = true;
  }

  

  expandDebtRatioBlock(){
    this.expandDebtRatioSection = true;
  }

  mnimizeDebtRatioBlock(){
    this.expandDebtRatioSection = false;
  }



}
