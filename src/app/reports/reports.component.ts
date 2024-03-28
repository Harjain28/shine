import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FaqComponent } from './faq/faq.component';
import { MatDialog } from '@angular/material/dialog';
import { DoughnutComponent } from '../charts/doughnut/doughnut.component';
import { SemiDoughnutComponent } from '../charts/semi-doughnut/semi-doughnut.component';
import { MixedComponent } from '../charts/mixed/mixed.component';
import { HistogramComponent } from '../charts/histogram/histogram.component';
import { PieComponent } from '../charts/pie/pie.component';
import { BarComponent } from '../charts/bar/bar.component';
import { Mixed2Component } from '../charts/mixed2/mixed2.component';
import { BuildBureauPopupComponent } from '../modal/build-bureau-popup/build-bureau-popup.component';
import { CreditJourneyPopupComponent } from '../modal/credit-journey-popup/credit-journey-popup.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule,Mixed2Component,BarComponent,PieComponent,HistogramComponent,
    MixedComponent,SemiDoughnutComponent,DoughnutComponent,FaqComponent,
    MatProgressBarModule,MatExpansionModule,MatFormFieldModule,MatCheckboxModule,MatIconModule,CarouselModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {

  visibleOffers!: boolean;
  expandSection!: boolean;
  expandCurrentCreditSection!: boolean;
  expandBlocks!: boolean;
  expandBusinessSection!: boolean;
  expandBalanceSection!: boolean;
  balanceSectionBlock: boolean = true;
  BusinessSectionBlock: boolean = true;
  paramsObject: any;
  expandDebtRatioSection!: boolean;

  constructor(private dialog: MatDialog, private api: ApiService ) { }

  postForReport(){
      let requestData: any = {}; 
      requestData["mobile"] = " ";
      
        const params = { ...this.paramsObject.params };
          this.api.postForReport(`api/Remediation/Report`,requestData , params) .subscribe({
              next: (res: any) => {
                if (res) {
                 
                }
              },
              error: error => {
              },
              complete: () => {
               // ('Request complete');
              }
            });
      
  }


  openBureauDialog(){
    // this.getBorrowerInformation();
    const dialogRef = this.dialog.open(BuildBureauPopupComponent, {
      width: 'auto',
      height: 'auto',
    });
  }

  customOptions4: OwlOptions = {
    loop: false,
  rewind: true,
   dots: true,
   autoplay: true,
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
       items: 1.2,
       dots: true,
     },
     400: {
       items: 1.3,
     },
     740: {
       items: 2,
     },
     940: {
       items: 3,
     },
   },
 };


  openPopup(){
    this.openBureauDialog();
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



  moreOffers(){
    this.visibleOffers = true;
  }

  
  
}
