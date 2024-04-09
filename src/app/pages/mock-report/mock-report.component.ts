import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CreditJourneyPopupComponent } from 'src/app/modal/credit-journey-popup/credit-journey-popup.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DoughnutComponent } from 'src/app/charts/doughnut/doughnut.component';
import { SemiDoughnutComponent } from 'src/app/charts/semi-doughnut/semi-doughnut.component';
import { BarComponent } from 'src/app/charts/bar/bar.component';
import { HistogramComponent } from 'src/app/charts/histogram/histogram.component';
import { MixedComponent } from 'src/app/charts/mixed/mixed.component';
import { Mixed2Component } from 'src/app/charts/mixed2/mixed2.component';
import { Mixed3Component } from 'src/app/charts/mixed3/mixed3.component';
import { Mixed4Component } from 'src/app/charts/mixed4/mixed4.component';
import { PieComponent } from 'src/app/charts/pie/pie.component';
import { ChartsJsonData } from 'src/app/JsonFiles/ChartJSONData';
import { shineLendingPageJSON } from 'src/app/JsonFiles/lendingpage';

@Component({
  selector: 'app-mock-report',
  standalone: true,
  imports: [CommonModule,SemiDoughnutComponent,
    DoughnutComponent,MatProgressBarModule,MatExpansionModule,
    MatFormFieldModule,MatCheckboxModule,MatIconModule,CarouselModule,Mixed2Component,Mixed3Component,
    Mixed4Component,MixedComponent,HistogramComponent,
    PieComponent,BarComponent],
  templateUrl: './mock-report.component.html',
  styleUrls: ['./mock-report.component.scss']
})
export class MockReportComponent {
  charts: any;
  businessLoanJson: any;
    constructor(private dialog: MatDialog){  
    }

  @Input() creditReportsChartsData: any;

  visibleOffers!: boolean;



  expandSection!: boolean;
  expandCurrentCreditSection!: boolean;
  expandBlocks!: boolean;
  doughtnutData: any;
  semiDoughtnutData: any;


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
 @Input() bankingBusinessChartsData: any;

 expandBusinessSection!: boolean;
 expandBalanceSection!: boolean;
 balanceSectionBlock: boolean = true;
 BusinessSectionBlock: boolean = true;
 expandDebtRatioSection!: boolean;
 doughtnutJSONData: any;
 barData: any;
 pieData: any;
 histogramData: any;
 mixedData: any;
 mixedData3: any;
 mixedData4: any;
 mixedData2: any;

 faqs: any;

 @Input() faqsData :any;





  
  ngOnInit(): void {

    this.charts = ChartsJsonData;
    this.doughtnutData = this.charts?.Doughtnut;
    this.semiDoughtnutData = this.charts?.Semi_Doughtnut;
    this.barData = this.charts?.Bar;
    this.pieData = this.charts?.Pie;
    this.histogramData = this.charts?.Histogram;
    this.mixedData = this.charts?.Mixed;
    this.mixedData2 = this.charts?.Mixed2;
    this.mixedData3 = this.charts?.Mixed3;
    this.mixedData4 = this.charts?.Mixed4;
    this.getFAQ();    

  }

    
  openDialog(){
    // this.getBorrowerInformation();
    const dialogRef = this.dialog.open(CreditJourneyPopupComponent, {
      width: 'auto',
      height: 'auto',
    });
  }

  getFAQ(){
    this.businessLoanJson = shineLendingPageJSON;
    this.faqs = this.businessLoanJson?.Faqs?.FAQs.map((res: { Question: any; Answer: any; }) =>({
      question: res?.Question,
      answer: res.Answer
    }));
    
  }


  
  openPopup(){
    this.openDialog();
  }

  moreOffers(){
    this.visibleOffers = true;
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

  expandBankingBusniess(){
    this.expandBusinessSection = true;
    this.balanceSectionBlock = false;
    this.BusinessSectionBlock = false;
  }

  minimizeBusinessBanking(){
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
