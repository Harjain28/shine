import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { reportPageJson } from 'src/app/JsonFiles/report';
import { reportStatciData } from 'src/app/JsonFiles/reportpageStaticData';

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

  months: string[] = ['OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR'];
  year: any;
  month: any;
  missedGstFilings: any;
  info_card: any;
  @Input() gstData: any;
  gst_section: any;
  gstSectionHeadings: any;
  monthArray!: string[];  
  warningColor!: string;
  warningText!: string;


  constructor(){

  }

  ngOnInit(): void{
    this.gstDetails = this.gstData?.report?.gstHistory;

  
    this.month=this.gstDetails?.missedGstFilings?.month;

    const gstInsights = this.gstData.insights?.gstHistory;

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

    if(this.info_card?.class === "negative")
    {
      this.warningColor  = "#ec1111"  //red
    } else if(this.info_card?.class === "positive") {
      this.warningColor  = "var(--main2)"  //green
    }else{
      this.warningColor  = "#FF7B24"  //green
    }
    console.log(this.info_card,"fff")

    this.gst_section = reportStatciData;
    this.gstSectionHeadings = this.gst_section?.gst_section;

    const currentDate = new Date();

    this.monthArray = this.calculateMonths(currentDate.getMonth(), 7  );
    console.log(this.monthArray,"kkk")


  }

  calculateMonths(startMonth: number, numberOfMonths: number): string[] {
    const months: string[] = [];
    const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const aheadMonth = (startMonth + 1);
    months.push(monthNames[aheadMonth]);
    for (let i = 0; i < numberOfMonths; i++) {
      const monthIndex = (startMonth - i + 12) % 12;
      months.push(monthNames[monthIndex]);
    }
    months.reverse();

    return months;
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


  isSelectedMonth(month: string): boolean {
    const index = this.months.indexOf(month) + 1;
    return this.gstDetails?.missedGstFilings.some((payment: { month: number; }): any => payment.month === index);
  }

}
