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
  imports: [CommonModule, MatProgressBarModule, MatExpansionModule, MatFormFieldModule, MatCheckboxModule, MatIconModule, CarouselModule],
  templateUrl: './gst-filling.component.html',
  styleUrls: ['./gst-filling.component.scss', '../reports.component.scss']
})
export class GstFillingComponent {
  reportsData: any;
  GSTReportData: any;
  gstDetails: any;
  currStatus: any;
  gst_filling_details: any;

  months: string[] = ['JAN',
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
  'DEC',];
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
  reportDate: any;
  reportMonth!: number;
  monthName!: string;
  reportDateCombined!: string;

  monthNumberToString: { [key: number]: string } = 
  {1: "JAN",2: "FEB",3: "MAR",4: "APR",5: "MAY",6: "JUN",7: "JUL",8: "AUG",9: "SEP",10: "OCT",11: "NOV",12: "DEC"};
  res!: { month: string; }[];
  totalUniqueMonths!: number;
  


  constructor() {

  }

  ngOnInit(): void {
    this.gstDetails = this.gstData?.report?.gstHistory;


    this.month = this.gstDetails?.missedGstFilings?.month;

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

    if (this.info_card?.class === "negative") {
      this.warningColor = "#ec1111"  //red
    } else if (this.info_card?.class === "positive") {
      this.warningColor = "var(--main2)"  //green
    } else {
      this.warningColor = "#FF7B24"  //green
    }
    this.gst_section = reportStatciData;
    this.gstSectionHeadings = this.gst_section?.gst_section;
    this.get_GstFillingData_Of_6_Months();
  }



  get_GstFillingData_Of_6_Months(){
    this.reportDate = this.gstData?.report?.reportDate;
    const date = new Date(this.reportDate);

    this.reportMonth = (date.getMonth() + 1)

    this.monthName = this.getMonthName(this.reportMonth);

    this.monthArray = this.calculateMonths(this.reportMonth, 7);
    console.log(this.monthArray, "kk")
  



    const inputArray: string[] = [];
    for (const filing of this.gstDetails?.missedGstFilings) {
      inputArray.push(filing.month);
    }

    const outputArray: { month: string }[] = [];
    
    for (let i = 0; i < inputArray.length; i++) {
      const monthNumber = Number(inputArray[i].slice(0, 2));
      const monthAbbreviation = this.monthNumberToString[monthNumber];
      outputArray.push({ month: monthAbbreviation });
    }
    this.res = outputArray

    const uniqueMonths = new Set<string>(this.gstDetails?.missedGstFilings.map((item: { month: any; }) => item.month));
    this.totalUniqueMonths = uniqueMonths.size;
  }
    
  private getMonthName(monthIndex: number): string {
    const months: string[] = [
      'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
      'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
    ];
    return months[monthIndex];
  }

  currentMonthIndex: number = new Date().getMonth();

  

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
  return this.res.some((payment: { month: any; }): any => payment.month === month);
}



}
