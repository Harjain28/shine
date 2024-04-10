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

  angle: number = 450;
  minAngle: number = 0;
  maxAngle: number = 900;
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

 // Function to calculate the rotation of the needle
 calculateRotation(angle: number): number {
  return (angle - 0) / 5; 
}


  openPopup(){
    this.openDialog();
  }

  
  ngOnInit(): void {
    this.doughtnutData = this.creditReportsChartsData?.Doughtnut;
    this.semiDoughtnutData = this.creditReportsChartsData?.Semi_Doughtnut;
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
