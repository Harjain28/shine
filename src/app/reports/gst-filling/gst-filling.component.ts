import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { reportPageJson } from 'src/app/JsonFiles/report';

@Component({
  selector: 'app-gst-filling',
  standalone: true,
  imports: [CommonModule,MatProgressBarModule,MatExpansionModule,MatFormFieldModule,MatCheckboxModule,MatIconModule,CarouselModule],
  templateUrl: './gst-filling.component.html',
  styleUrls: ['./gst-filling.component.scss','../reports.component.scss']
})
export class GstFillingComponent {
  reportsData: any;
  GSTReportData: any;
  gstDetails: any;
  currStatus: any;
  gst_filling_details: any;

  months: string[] = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'];
  year: any;
  month: any;


  constructor(){

  }

  ngOnInit(): void{
    this.reportsData = reportPageJson?.report;
    this.gstDetails = this.reportsData?.gst;

    if(this.gstDetails?.current_gst_status){
      this.currStatus = "Active"
    }else{
      this.currStatus = "Inactive"
    }

    this.month=this.gstDetails?.missed_gst_filings?.month;
  }



  isSelectedMonth(month: string): boolean {
    const index = this.months.indexOf(month) + 1;
    return this.gstDetails?.missed_gst_filings.some((payment: { month: number; }): any => payment.month === index);
  }

}
