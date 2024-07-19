// src/app/services/report.service.ts

import { Injectable } from '@angular/core';

interface Tab {
  title: string;
  count: number;
  imageUrl: string;
  isActive: boolean;
}

interface Card {
  title: string;
  description: string;
  buttonText: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  summary_section: any;
  summary_section_Data: any;
  reportsData: any;
  imgUrlDesktop: any;
  imgUrlMobile: any;
  rankingSection: any;
  banking: any;
  bureau: any;
  gst: any;
  actionSummaryData: any;
  filteredInsights: any;
  selectedCard: Card | null = null;

  tabs: Tab[] = [
    {
      title: 'Bureau',
      count: 0,
      imageUrl: 'https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/credit_score.png',
      isActive: true,
    },
    {
      title: 'Banking',
      count: 0,
      imageUrl: 'https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/banking_blue.png',
      isActive: false,
    },
    {
      title: 'GST',
      count: 0,
      imageUrl: 'https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/gst.png',
      isActive: false,
    },
  ];

  cardData = {
    Bureau: [
      {
        title: '1. Your Bureau Score',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique massa eu rhoncus dapibus. Cras non mi maximus lorem aliquam sodales. Aliquam placerat risus id.',
        buttonText: 'Know how to fix this',
      },
      {
        title: '2. Underwritten by Banks',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique massa eu rhoncus dapibus.',
        buttonText: 'Know how to fix this',
      },
      {
        title: '3. Disputes with Lenders',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique massa eu rhoncus dapibus. Cras non mi maximus lorem aliquam sodales. Aliquam placerat risus id.',
        buttonText: 'Know how to fix this',
      },
      {
        title: '4. Your Bureau Score',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique massa eu rhoncus dapibus. Cras non mi maximus lorem aliquam sodales. Aliquam placerat risus id.',
        buttonText: 'Know how to fix this',
      },
    ],
    Banking: [
      {
        title: '1. Your Bureau Score',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique massa eu rhoncus dapibus. Cras non mi maximus lorem aliquam sodales. Aliquam placerat risus id.',
        buttonText: 'Know how to fix this',
      },
      {
        title: '2. Underwritten by Banks',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique massa eu rhoncus dapibus.',
        buttonText: 'Know how to fix this',
      },
      {
        title: '3. Your Bureau Score',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique massa eu rhoncus dapibus. Cras non mi maximus lorem aliquam sodales. Aliquam placerat risus id.',
        buttonText: 'Know how to fix this',
      },
    ],
    GST: [
      {
        title: '1. Your Bureau Score',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique massa eu rhoncus dapibus. Cras non mi maximus lorem aliquam sodales. Aliquam placerat risus id.',
        buttonText: 'Know how to fix this',
      },
      {
        title: '2. Underwritten by Banks',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique massa eu rhoncus dapibus.',
        buttonText: 'Know how to fix this',
      },
    ],
  };

  constructor() {}

  initializeData(reportStatciData: any, ActionReqReportsData: any) {
    this.summary_section = reportStatciData;
    this.summary_section_Data = this.summary_section?.fold2_summary;
    this.actionSummaryData = ActionReqReportsData?.insights?.actionSummary;
    this.reportsData = ActionReqReportsData?.report;
    this.banking = this.reportsData?.bankingSummary;
    this.bureau = this.reportsData?.bureauSummary;
    this.gst = this.reportsData?.gstSummary;
  }
 
// Function to filter and concatenate insights
concatenateInsights(actionSummary: any, type:any) {
    let result:any = {
      creditReport: [],
      gstHistory: [],
      bankingHistory: []
    };
  
    Object.keys(actionSummary).forEach((key) => {
      const section = actionSummary[key];
      if (Array.isArray(section)) {
        section.forEach((insight: any) => {
          if (insight.class === type && insight.condition_status) {
            result[key].push({
              ...insight,
              objectName: key
            });
          }
        });
      } else {
        Object.keys(section).forEach((subKey) => {
          const subSection = section[subKey];
  
          if (Array.isArray(subSection)) {
            subSection.forEach((insight: any) => {
              if (insight.class === type && insight.condition_status) {
                result[key].push({
                  ...insight,
                  objectName: `${key}.${subKey}`
                });
              }
            });
          } else {
            Object.keys(subSection).forEach((deepKey) => {
              const deepSection = subSection[deepKey];
  
              if (Array.isArray(deepSection)) {
                deepSection.forEach((insight: any) => {
                  if (insight.class === type && insight.condition_status) {
                    result[key].push({
                      ...insight,
                      objectName: `${key}.${subKey}.${deepKey}`
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  
    return result;
  }
  
  
    // getFilteredInsights(actionSummaryData: any) {
    //   const filteredCreditReport = this.concatenateInsights([
    //     ...actionSummaryData?.creditReport?.defaultAnalysis,
    //     ...actionSummaryData?.creditReport?.otherAnalysis?.topBanks,
    //     ...actionSummaryData?.creditReport?.otherAnalysis?.suitFiledEver,
    //     ...actionSummaryData?.creditReport?.bureauScore,
    //     ...actionSummaryData?.creditReport?.creditCardUtilization,
    //     ...actionSummaryData?.creditReport?.smallLoans,
    //     ...actionSummaryData?.creditReport?.creditRemark,
    //     ...actionSummaryData?.creditReport?.creditEnquiry,
    //   ]);
    
    //   const filteredGstHistory = this.concatenateInsights(actionSummaryData.gstHistory);
    
    //   const filteredBankingHistory = this.concatenateInsights([
    //     ...actionSummaryData?.bankingHistory.volatility,
    //     ...actionSummaryData?.bankingHistory.minimum_balance,
    //     ...actionSummaryData?.bankingHistory.Q_on_Q_dip,
    //     ...actionSummaryData?.bankingHistory.count_volatility,
    //     ...actionSummaryData?.bankingHistory?.abb,
    //     ...actionSummaryData?.bankingHistory?.debt_to_revenue_ratio,
    //     ...actionSummaryData?.bankingHistory?.cheque_bounces,
    //   ]);
    
    //   return {
    //     creditReport: filteredCreditReport,
    //     gstHistory: filteredGstHistory,
    //     bankingHistory: filteredBankingHistory,
    //   };
    // }
    
  
  
    
  

  updateTabCounts(): void {
    if (this.filteredInsights) {
      this.tabs[0].count = this.filteredInsights.creditReport.length;
      this.tabs[1].count = this.filteredInsights.bankingHistory.length;
      this.tabs[2].count = this.filteredInsights.gstHistory.length;
    }
  }

  getFilteredCards(index: number) {
    switch (index) {
      case 0:
        return this.filteredInsights.creditReport;
      case 1:
        return this.filteredInsights.bankingHistory;
      case 2:
        return this.filteredInsights.gstHistory;
      default:
        return [];
    }
  }
}
