import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Mixed2Component } from 'src/app/charts/mixed2/mixed2.component';
import { Mixed3Component } from 'src/app/charts/mixed3/mixed3.component';
import { Mixed4Component } from 'src/app/charts/mixed4/mixed4.component';
import { MixedComponent } from 'src/app/charts/mixed/mixed.component';
import { HistogramComponent } from 'src/app/charts/histogram/histogram.component';
import { PieComponent } from 'src/app/charts/pie/pie.component';
import { BarComponent } from 'src/app/charts/bar/bar.component';

@Component({
  selector: 'app-banking-business',
  standalone: true,
  imports: [CommonModule,MatProgressBarModule,MatExpansionModule,
    MatFormFieldModule,MatCheckboxModule,MatIconModule,CarouselModule,
    Mixed2Component,Mixed3Component,Mixed4Component,MixedComponent,HistogramComponent,
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




  constructor(){

  }

  
  ngOnInit(): void {
    this.barData = this.bankingBusinessChartsData?.Bar;
    this.pieData = this.bankingBusinessChartsData?.Pie;
    this.histogramData = this.bankingBusinessChartsData?.Histogram;
    this.mixedData = this.bankingBusinessChartsData?.Mixed;
    this.mixedData2 = this.bankingBusinessChartsData?.Mixed2;
    this.mixedData3 = this.bankingBusinessChartsData?.Mixed3;
    this.mixedData4 = this.bankingBusinessChartsData?.Mixed4;
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
