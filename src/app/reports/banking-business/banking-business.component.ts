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
import { reportStatciData } from 'src/app/JsonFiles/reportpageStaticData';

@Component({
  selector: 'app-banking-business',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    CarouselModule,
    Mixed2Component,
    Mixed3Component,
    Mixed4Component,
    MixedComponent,
    Mixed5Component,
    HistogramComponent,
    PieComponent,
    BarComponent,
  ],
  templateUrl: './banking-business.component.html',
  styleUrls: ['./banking-business.component.scss', '../reports.component.scss'],
})
export class BankingBusinessComponent {
  @Input() bankingBusinessData: any;

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
  businessLinedata: any;
  ratiosecured: any;
  securedUnsecuredRatioData: any;
  bankingData: any;
  volatility: any;
  volitility_lenders_perspective: any;
  dip: any;
  turnover_lenders_perspective: any;
  count_volatility: any;
  bankingHistory_summary: any;
  abb: any;
  debt_to_revenue_ratio: any;
  debt_to_revenue_summary: any;
  cheque_bounces: any;
  cashflow: any;
  card_view: any;
  bank_balance_observation: any;
  bank_balance_lenders_perspective: any;
  minimum_balance: any;
  minimum_balance_lenders_perspective: any;
  abb_summary: any;
  dcard_view: any;
  debt_to_revenue_ratio_lenders_perspective: any;
  aboveMinMonths: any = [];
  months: any =[];
  monthsWithYear: any = [];
  banking_section: any;
  banking_section_data: any;
  affordability_section: any;
  risk_section: any;
  cashflow_section: any;
  monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  constructor() {}
  customOptions4: OwlOptions = {
    loop: false,
    rewind: true,
    dots: true,
    autoplay: false,
    navSpeed: 300,
    nav: false,
    margin: 10,
    mouseDrag: false,
    touchDrag: true,

    autoplayTimeout: 8000,
    autoplaySpeed: 1500,
    // navText: ["", ""],
    navText: [
      "<img class='navTxtImg' src='./assets/images/homeImage/left-arrow.svg'>",
      "<img class='navTxtImg' src='./assets/images/homeImage/right-arrow.svg'>",
    ],
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
    this.getBankingHistory();

    this.getInsights();
    this.getBankingSection();
  }


  getBankingSection(){
    this.banking_section = reportStatciData;
    this.banking_section_data = this.banking_section?.banking_section;
    this.affordability_section = this.banking_section_data?.affordability_section;
    this.risk_section = this.banking_section_data?.risks_section;
    this.cashflow_section = this.banking_section_data?.cashflow_section;
  }

  getBankingHistory() {
    this.banking_history = reportPageJson?.report.bankingHistory;
    this.graphData = this.banking_history?.graphData;

    this.monthly_expenses = this.banking_history?.monthly_expenses;
    this.turnoverLineData = this.graphData?.turnover;
    this.businessLinedata = this.graphData?.abb;
    this.securedUnsecuredRatioData =
      reportPageJson?.report?.creditReport?.securedUnsecuredRatio;
    this.aboveMinMonths = this.getMonthsAboveMin(this.graphData);
    
  

    this.ratiosecured = {
      byAmount: [
        {
          name: 'Total Turnover',
          value: this.turnoverLineData?.sum,
        },
        {
          name: 'Secured Loans',
          value: this.securedUnsecuredRatioData?.securedOutstanding || 0,
        },
        {
          name: 'Unsecured Loans',
          value: this.securedUnsecuredRatioData?.unsecuredOutstanding || 0,
        },
      ],
    };
    const simplifiedMonthlyData = this.graphData?.monthly.map(
      (item: {
        cashflow: any;
        averageBalance: any;
        creditCount: any;
        month: any;
        turnover: any;
      }): any => {
        return {
          month: this.formatMonth(item.month),
          turnover: item.turnover,
          creditCount: item.creditCount,
          averageBalance: item.averageBalance,
          cashflow: item.cashflow,
        };
      }
    );

    const firstSixObjects = simplifiedMonthlyData;
    const monthsArray = firstSixObjects.map(
      (item: { month: any }) => item.month
    );
    const turnoversArray = firstSixObjects.map(
      (item: { turnover: any }) => item.turnover
    );
    const creditCountArray = firstSixObjects.map(
      (item: { creditCount: any }) => item.creditCount
    );
    const cashFlowArray = firstSixObjects.map(
      (item: { cashflow: any }) => item.cashflow
    );
    const averageBalanceArray = firstSixObjects.map(
      (item: { averageBalance: any }) => item.averageBalance
    );
    // Creating an object with two arrays
    const resultObject = {
      months: monthsArray,
      turnovers: turnoversArray,
      creditCount: creditCountArray,
      cashFlow: cashFlowArray,
      averageBalance: averageBalanceArray,
      turnoverLineData: this.turnoverLineData,
      businessLinedata: this.businessLinedata,
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

  getInsights() {
    this.bankingData = reportPageJson?.insights;
    const creditreportInsights = this.bankingData?.bankingHistory;

    const abb = creditreportInsights?.abb;
    const debt_to_revenue_ratio = creditreportInsights?.debt_to_revenue_ratio;

    this.volatility = this.concatenateInsights(
      creditreportInsights?.volatility.filter(
        (item: { condition_status: boolean }) => item.condition_status === true
      )
    );
    this.volitility_lenders_perspective = this.concatenateInsights(
      creditreportInsights?.volitility_lenders_perspective.filter(
        (item: { condition_status: boolean }) => item.condition_status
      )
    );
    this.dip = this.concatenateInsights(
      creditreportInsights?.dip.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
    this.turnover_lenders_perspective = this.concatenateInsights(
      creditreportInsights?.turnover_lenders_perspective.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
    this.count_volatility = this.concatenateInsights(
      creditreportInsights?.count_volatility.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
    this.bankingHistory_summary = this.concatenateInsights(
      creditreportInsights?.bankingHistory_summary.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );

    //abb balance
    console.log(abb, 'card_view');

    this.card_view = this.concatenateInsights(
      abb?.card_view.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );

    this.bank_balance_observation = this.concatenateInsights(
      abb?.volatility_observation.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );

    this.bank_balance_lenders_perspective = this.concatenateInsights(
      abb?.volatility_lenders_perspective.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
    this.minimum_balance = this.concatenateInsights(
      abb?.minimum_balance.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );

    this.minimum_balance_lenders_perspective = this.concatenateInsights(
      abb?.minimum_balance_lenders_perspective.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );

    this.abb_summary = this.concatenateInsights(
      abb?.abb_summary.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );

    this.dcard_view = this.concatenateInsights(
      debt_to_revenue_ratio?.card_view.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );

    this.debt_to_revenue_ratio_lenders_perspective = this.concatenateInsights(
      debt_to_revenue_ratio?.debt_to_revenue_ratio_lenders_perspective.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );


    this.debt_to_revenue_summary = this.concatenateInsights(
      creditreportInsights?.debt_to_revenue_summary.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );


    this.cheque_bounces = this.concatenateInsights(
      creditreportInsights?.cheque_bounces.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
    this.cashflow = this.concatenateInsights(
      creditreportInsights?.cashflow.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
    console.log(this.cashflow , "cashflow");
  }

  concatenateInsights(insightsArray: any) {
    return insightsArray.reduce(
        (result: any, insight: any) => {
            if (insight.class === "negative") {
                if (insight.header !== null && insight.header !== undefined) {
                    result.header = insight.header + ' ';
                }
                if (insight.subheader !== null && insight.subheader !== undefined) {
                    result.subheader = insight.subheader + ' ';
                }
                if (insight.warning !== null && insight.warning !== undefined) {
                    result.warning = insight.warning + ' ';
                }
                if (insight.class !== null && insight.class !== undefined) {
                  result.class = insight.class + ' ';
              }
            } else {
                if (!result.header && insight.header !== null && insight.header !== undefined) {
                    result.header = insight.header + ' ';
                }
                if (!result.subheader && insight.subheader !== null && insight.subheader !== undefined) {
                    result.subheader = insight.subheader + ' ';
                }
                if (!result.warning && insight.warning !== null && insight.warning !== undefined) {
                    result.warning = insight.warning + ' ';
                }
                if (insight.class !== null && insight.class !== undefined) {
                  result.class = insight.class + ' ';
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

  getMonthsAboveMin(graphData: any) {
    console.log(graphData, 'graphData');
    const aboveMinMonths: string[] = [];
    const minBalance = this.businessLinedata?.min;
    for (let i = 0; i < graphData.monthly.length; i++) {
      if (graphData.monthly[i]?.averageBalance > minBalance) {
        aboveMinMonths.push(graphData.monthly[i]?.month);
      }
    }
    this.formatAboveMinMonths(aboveMinMonths);
    return aboveMinMonths;
    
  }

  formatAboveMinMonths(aboveMinMonths:any) {
    this.months = [];
    this.monthsWithYear = [];
    for (let i = 0; i < aboveMinMonths.length; i++) {
      const [monthStr, yearStr] = aboveMinMonths[i].split('-');
      const year = parseInt(yearStr);
      const fullYear = year < 50 ? 2000 + year : 1900 + year;

      // Push the month to the months array
      this.months.push(monthStr.toUpperCase());

      // Convert the month to its full name and append the year
      const monthWithYear =  monthStr + '-' + fullYear;
      this.monthsWithYear.push(monthWithYear);
    }
  }
  formatMonth(month: any) {
    const date = new Date(month);
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    return monthNames[date.getMonth()];
  }

  formatAmount(value: any) {
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

  expandBankingBusniess() {
    localStorage.setItem('isExpand', 'true');
    this.expandBusinessSection = true;
    this.balanceSectionBlock = false;
    this.BusinessSectionBlock = false;
  }

  minimizeBusinessBanking() {
    localStorage.setItem('isExpand', 'false');
    this.expandBusinessSection = false;
    this.balanceSectionBlock = true;
    this.BusinessSectionBlock = true;
  }

  expandBankingBalance() {
    this.expandBalanceSection = true;
    this.balanceSectionBlock = false;
    this.expandBusinessSection = false;
    this.BusinessSectionBlock = false;
  }

  minimizeBankingBalance() {
    this.expandBalanceSection = false;
    this.balanceSectionBlock = true;
    this.BusinessSectionBlock = true;
  }

  expandBankingBlanceBlock() {
    this.expandBusinessSection = false;
    this.expandBalanceSection = true;
  }

  expandBusinessSectionBlock() {
    localStorage.setItem('isExpand', 'true');
    this.expandBalanceSection = false;
    this.expandBusinessSection = true;
  }

  expandDebtRatioBlock() {
    this.expandDebtRatioSection = true;
  }

  mnimizeDebtRatioBlock() {
    this.expandDebtRatioSection = false;
  }
}
