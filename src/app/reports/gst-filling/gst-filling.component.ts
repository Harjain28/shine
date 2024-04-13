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
  missedGstFilings: any;
  info_card: any;


  constructor(){

  }

  ngOnInit(): void{
    this.reportsData = reportPageJson?.report;
    this.gstDetails = this.reportsData?.gstHistory;

    if(this.gstDetails?.current_gst_status){
      this.currStatus = "Active"
    }else{
      this.currStatus = "Inactive"
    }

    this.month=this.gstDetails?.missedGstFilings?.month;
    const gstInsights = this.reportsData?.gstHistory;

    this.missedGstFilings = this.concatenateInsights(
      gstInsights?.missedGstFilings.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );

    this.info_card = this.concatenateInsights(
      gstInsights?.info_card.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );


  }

 concatenateInsights(insightsArray: any) {
    return insightsArray.reduce(
      (result: any, insight: any) => {
        if (insight.header !== null && insight.header !== undefined) {
          result.header += insight.header + ' ';
        }
        if (insight.subheader !== null && insight.subheader !== undefined) {
          result.subheader += insight.subheader + ' ';
        }
        if (insight.description !== null && insight.description !== undefined) {
          result.description += insight.description + ' ';
        }
        if (insight.bullets !== null && insight.bullets !== undefined) {
          result.bullets.push(...insight.bullets);
        }
        if (insight.class !== null && insight.class !== undefined) {
          result.class += insight.class + ' ';
        }
        if (insight.type !== null && insight.type !== undefined) {
          result.type += insight.type + ' ';
        }
        if (insight.warning !== null && insight.warning !== undefined) {
          result.warning += insight.warning + ' ';
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

  isSelectedMonth(month: string): boolean {
    const index = this.months.indexOf(month) + 1;
    return this.gstDetails?.missed_gst_filings.some((payment: { month: number; }): any => payment.month === index);
  }

}
