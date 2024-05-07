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
  cvColor!: string;
  cvText!: string;
  dipColor!: string;
  dipText!: string;
  abbcardView: any;
  abbColor!: string;
  abbText!: string;
  dcColor!: string;
  dcText!: string;
  cbText!: string;
  cbColor!: string;
  cfColor!: string;
  cfText!: string;
  bhImageIcon: any;
  abbImgageIcon: any;
  dtrImgageIcon: any;
  unsecuredRatioPercent: any;
  securedRatioPercent: any;
  volatilityColor: any;
  count_VolColor: any;
  voColor: any;
  summaryIcon: any;

  constructor() {}
  customOptions4: OwlOptions = {
    loop: false,
    rewind: false,
    dots: true,
    autoplay: false,
    navSpeed: 300,
    nav: true,
    margin: 8,
    mouseDrag: false,
    touchDrag: true,

    autoplayTimeout: 8000,
    autoplaySpeed: 1500,
    // navText: ["", ""],
    navText: [
      "<span><img class='navTxtImg' src='./assets/images/homeImage/left-arrow.svg'> 1 more</span>",
      "<span> 1 more <img class='navTxtImg' src='./assets/images/homeImage/right-arrow.svg'></span>",
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

    this.bankingData = this.bankingBusinessData;

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
    this.graphData = this.bankingData?.report?.bankingHistory?.graphData;

    this.banking_history = this.bankingData?.report?.bankingHistory;

    this.monthly_expenses = this.banking_history?.monthlyExpenses;
    console.log(this.monthly_expenses,"uu")
    this.turnoverLineData = this.graphData?.turnover;
    this.businessLinedata = this.graphData?.abb;
    this.securedUnsecuredRatioData =this.bankingData?.report?.creditReport?.securedUnsecuredRatio;
    this.unsecuredRatioPercent = (this.securedUnsecuredRatioData?.unsecuredOutstanding*100)/this.turnoverLineData?.sum;
    this.securedRatioPercent = (this.securedUnsecuredRatioData?.securedOutstanding*100)/this.turnoverLineData?.sum;
   // this.aboveMinMonths = this.getMonthsAboveMin(this.graphData);
    
    

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

  private setColorAndText(classValue: string): { color: string } {
    let color: string;
  
    switch (classValue.trim()) {
      case "negative":
        color = "#ec1111"; // Red
        break;
      case "positive":
        color = "var(--main2)"; // Green
        break;
      default:
        color = "#FF7B24"; // Orange
    }
  
    return { color };
  }

  setSummaryIcon(data: any) {
    if (data?.class !== null) {
      switch (data?.class) {
        case 'negative':
          this.summaryIcon = 'https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Smiley-Sad-01.png';
          break;
        case 'positive':
          this.summaryIcon = './assets/LandingPage/smileImg.svg';
          break;
        case 'stable':
          this.summaryIcon = 'https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Smiley-Moderate-01.png';
          break;
        default:
          this.summaryIcon = '';
      }
    } else {
      this.summaryIcon = '';
    }
    return this.summaryIcon;
  }
  

  getInsights() {
    const bankingReportsInsights = this.bankingData?.insights?.bankingHistory;

    const abb = bankingReportsInsights?.abb;
    const debt_to_revenue_ratio = bankingReportsInsights?.debt_to_revenue_ratio;

    this.volatility = this.concatenateInsights(
      bankingReportsInsights?.volatility.filter(
        (item: { condition_status: boolean }) => item.condition_status === true
      )
    );
    const volatilityClass = this.volatility?.class;
    const { color: volatilityColor} = this.setColorAndText(volatilityClass);
    this.volatilityColor = volatilityColor;


    this.volitility_lenders_perspective = this.concatenateInsights(
      bankingReportsInsights?.volitility_lenders_perspective.filter(
        (item: { condition_status: boolean }) => item.condition_status
      )
    );
    this.dip = this.concatenateInsights(
      bankingReportsInsights?.dip.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
    const dipClass = this.dip?.class;
    const { color: dipColor} = this.setColorAndText(dipClass);
    this.dipColor = dipColor;



    this.turnover_lenders_perspective = this.concatenateInsights(
      bankingReportsInsights?.turnover_lenders_perspective.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
    this.count_volatility = this.concatenateInsights(
      bankingReportsInsights?.count_volatility.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
    const count_volatilityClass = this.count_volatility?.class;
    const { color: count_VolColor} = this.setColorAndText(count_volatilityClass);
    this.count_VolColor = count_VolColor;
    console.log(this.count_volatility,"ff2")


    this.bankingHistory_summary = this.concatenateInsights(
      bankingReportsInsights?.bankingHistory_summary.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );

    const bhFilteredData = bankingReportsInsights?.bankingHistory_summary.filter((item: { condition_status: boolean; }) => item.condition_status === true);
        this.bhImageIcon = this.setSummaryIcon(bhFilteredData[0]);


    this.card_view = this.concatenateInsights(
      bankingReportsInsights?.card_view.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );

    const cardViewClass = this.card_view?.class;
    const { color: cardViewColor } = this.setColorAndText(cardViewClass);
    this.cvColor = cardViewColor;
    

    this.abbcardView = this.concatenateInsights(
      abb?.card_view.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
    const abbcardViewClass = this.abbcardView?.class;
    const { color: abbColor } = this.setColorAndText(abbcardViewClass);
    this.abbColor = abbColor;

    console.log(this.abbcardView,"ff2")

    this.bank_balance_observation = this.concatenateInsights(
      abb?.volatility_observation.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );

    const bank_balance_observationClass = this.bank_balance_observation?.class;
    const { color: voColor } = this.setColorAndText(bank_balance_observationClass);
    this.voColor = voColor;

    console.log(this.bank_balance_observation,"fft")

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

    const abbFilteredData = abb?.abb_summary.filter((item: { condition_status: boolean; }) => item.condition_status === true);
    this.abbImgageIcon = this.setSummaryIcon(abbFilteredData[0]);

    this.dcard_view = this.concatenateInsights(
      debt_to_revenue_ratio?.card_view.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );
    console.log(this.dcard_view,"fff")

    console.log(this.dcard_view.warning,"fff")

    const dcardViewClass = this.dcard_view?.class;
    const { color: dcColor } = this.setColorAndText(dcardViewClass);
    this.dcColor = dcColor;

    this.debt_to_revenue_ratio_lenders_perspective = this.concatenateInsights(
      debt_to_revenue_ratio?.debt_to_revenue_ratio_lenders_perspective.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );


    this.debt_to_revenue_summary = this.concatenateInsights(
      bankingReportsInsights?.debt_to_revenue_summary.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );

    const debt_to_revenueFilteredData = bankingReportsInsights?.debt_to_revenue_summary.filter((item: { condition_status: boolean; }) => item.condition_status === true);
    this.dtrImgageIcon = this.setSummaryIcon(debt_to_revenueFilteredData[0]);


    this.cheque_bounces = this.concatenateInsights(
      bankingReportsInsights?.cheque_bounces.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );

    const cheque_bouncesClass = this.cheque_bounces?.class;
    const { color: cbColor } = this.setColorAndText(cheque_bouncesClass);
    this.cbColor = cbColor;


    this.cashflow = this.concatenateInsights(
      bankingReportsInsights?.cashflow.filter(
        (item: { condition_status: any }) => item.condition_status
      )
    );

    const cashflowClass = this.cashflow?.class;
    const { color: cfColor } = this.setColorAndText(cashflowClass);
    this.cfColor = cfColor;

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



  getMonthsAboveMin(month: string):boolean {
    const aboveMinMonths: string[] = [];
    const minBalance = this.businessLinedata?.min;
    for (let i = 0; i < this.graphData.monthly.length; i++) {
      if (this.graphData.monthly[i]?.averageBalance > minBalance) {
        aboveMinMonths.push(this.graphData.monthly[i]?.month);
      }
    }
    const extractedMonths: string[] = aboveMinMonths.map(month => month.split('-')[0]);

  return extractedMonths.includes(month);

}

  formatAboveMinMonths(aboveMinMonths:any) {
    this.months = [];
    this.monthsWithYear = [];
    for (let i = 0; i < aboveMinMonths.length; i++) {
      const [monthStr, yearStr] = aboveMinMonths[i].split('-');
      const year = parseInt(yearStr);
      const fullYear = year < 50 ? 2000 + year : 1900 + year;
      this.months.push(monthStr.toUpperCase());
      const monthWithYear =  monthStr + '-' + fullYear;
    return  this.monthsWithYear.push(monthWithYear);
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

  roundValue(value: number): number {
    return Math.round(value);
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
