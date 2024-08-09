export const cust16Fixed2Json = {
  "report": {
    "creditReport": {
      "bureauScore": {
        "score": 721
      },
      "loanRepaymentHistory": {
        "missedPayments": [
          {
            "year": 2024,
            "month": 3,
            "monthName": "Mar",
            "date": "2024-03-01T00:00:00",
            "dpDs": 1,
            "maxDPD": 9
          }
        ],
        "defaultAnalysis": {
          "defaultHistory": {
            "recentDefault": true,
            "defaultEver": true,
            "thirtyDaysDelayed": false,
            "last12MDPD": false,
            "delayedSeverity": false,
            "overdueExceedsThreshold": false
          },
          "impact": {
            "currentStage": 0,
            "potentialStage": 0
          }
        },
        "otherAnalysis": {
          "topBanks": false,
          "suitFiledEver": false,
          "creditCardUtilization": 0.78,
          "creditCardUtilizationExceeding": true,
          "smallLoans": 0,
          "smallLoansExceeding": false
        }
      },
      "creditAnalysis": {
        "byAmount": [
          {
            "name": "Credit card",
            "value": 111935
          },
          {
            "name": "Personal loan",
            "value": 63822
          },
          {
            "name": "Business Loan - General",
            "value": 793987
          },
          {
            "name": "Business Loan Priority Sector - SmallBusiness",
            "value": 851726
          }
        ],
        "byCount": [
          {
            "name": "Credit card",
            "value": 2
          },
          {
            "name": "Personal loan",
            "value": 1
          },
          {
            "name": "Business Loan - General",
            "value": 2
          },
          {
            "name": "Business Loan Priority Sector - SmallBusiness",
            "value": 1
          }
        ],
        "hasCreditCard": true
      },
      "businessRiskRemark": true,
      "creditEnquiry": 4,
      "bureauVintage": 85,
      "dateOfBirth": "1990-12-21T00:00:00Z",
      "securedUnsecuredRatio": {
        "securedOutstanding": 0,
        "unsecuredOutstanding": 1821470,
        "ratio": 1,
        "securedToTurnoverRatio": 0,
        "unsecuredToTurnoverRatio": 2.346946664227125
      }
    },
    "gstHistory": null,
    "bankingHistory": {
      "graphData": {
        "monthly": [
          {
            "month": "May-23",
            "turnover": 0,
            "creditCount": 0,
            "averageBalance": 150.84,
            "cashflow": 0
          },
          {
            "month": "Jun-23",
            "turnover": 0,
            "creditCount": 0,
            "averageBalance": 150.84,
            "cashflow": 0
          },
          {
            "month": "Jul-23",
            "turnover": 0,
            "creditCount": 0,
            "averageBalance": 150.84,
            "cashflow": 0
          },
          {
            "month": "Aug-23",
            "turnover": 0,
            "creditCount": 0,
            "averageBalance": 150.84,
            "cashflow": 0
          },
          {
            "month": "Sep-23",
            "turnover": 71895,
            "creditCount": 36,
            "averageBalance": 1424.86,
            "cashflow": 62.7599999999948
          },
          {
            "month": "Oct-23",
            "turnover": 151561,
            "creditCount": 43,
            "averageBalance": 3147.35,
            "cashflow": 2971.14999999999
          },
          {
            "month": "Nov-23",
            "turnover": 170431,
            "creditCount": 29,
            "averageBalance": 4777.42,
            "cashflow": 13869.98
          },
          {
            "month": "Dec-23",
            "turnover": 0,
            "creditCount": 0,
            "averageBalance": 17093.73,
            "cashflow": 0
          },
          {
            "month": "Jan-24",
            "turnover": 0,
            "creditCount": 0,
            "averageBalance": 17093.73,
            "cashflow": 0
          },
          {
            "month": "Feb-24",
            "turnover": 162874,
            "creditCount": 28,
            "averageBalance": 4574.69,
            "cashflow": 5598.09
          },
          {
            "month": "Mar-24",
            "turnover": 154866,
            "creditCount": 44,
            "averageBalance": 2097.01,
            "cashflow": -5600.69
          },
          {
            "month": "Apr-24",
            "turnover": 64475,
            "creditCount": 20,
            "averageBalance": 3732.78,
            "cashflow": 58.6100000000006
          }
        ],
        "q1": {
          "month": "Q1",
          "turnover": 0,
          "creditCount": 0,
          "averageBalance": 150.84,
          "cashflow": 0
        },
        "q2": {
          "month": "Q2",
          "turnover": 223456,
          "creditCount": 79,
          "averageBalance": 1574.35,
          "cashflow": 3033.909999999985
        },
        "q3": {
          "month": "Q3",
          "turnover": 170431,
          "creditCount": 29,
          "averageBalance": 12988.293333333333,
          "cashflow": 13869.98
        },
        "q4": {
          "month": "Q4",
          "turnover": 382215,
          "creditCount": 92,
          "averageBalance": 3468.16,
          "cashflow": 56.0100000000006
        },
        "h1": {
          "month": "H1",
          "turnover": 223456,
          "creditCount": 79,
          "averageBalance": 862.595,
          "cashflow": 3033.909999999985
        },
        "h2": {
          "month": "H2",
          "turnover": 552646,
          "creditCount": 121,
          "averageBalance": 8228.226666666667,
          "cashflow": 13925.99
        },
        "turnover": {
          "stdev": 71682.3262525166,
          "mean": 64675.166666666664,
          "lowSd": -7007.159585849933,
          "highSd": 136357.49291918328,
          "cv": 1.1083438968462898,
          "min": 100000,
          "sum": 776102,
          "belowMinCount": 8
        },
        "abb": {
          "stdev": 5849.30032629182,
          "mean": 4545.410833333333,
          "lowSd": -1303.8894929584867,
          "highSd": 10394.711159625153,
          "cv": 1.2868584470729332,
          "min": 10000,
          "sum": 54544.93,
          "belowMinCount": 10
        },
        "cashflow": {
          "stdev": 4471.65089694045,
          "mean": 1413.3249999999987,
          "lowSd": -3058.325896940451,
          "highSd": 5884.975896940448,
          "cv": 3.163922591718433,
          "min": 0,
          "sum": 16959.899999999987,
          "belowMinCount": 1
        },
        "creditCount": {
          "stdev": 17.7310148860377,
          "mean": 16.6666666666667,
          "lowSd": -1.064348219371,
          "highSd": 34.3976815527044,
          "cv": 1.06386089316226,
          "min": 2,
          "sum": 200,
          "belowMinCount": 6
        }
      },
      "chequeBounces": {
        "chequeBounces6M": 0,
        "chequeBounces12M": 0,
        "chequeBouncesRatio": 0
      },
      "monthlyExpenses": [
        {
          "name": "Utility Expenses",
          "value": 1462.81
        },
        {
          "name": "EMIs",
          "value": 11080
        },
        {
          "name": "Other Expenses",
          "value": 2.94
        }
      ]
    },
    "propertyOwned": true,
    "score": 164,
    "currentStage": 1,
    "potentialStage": 2,
    "currentLoanProbability": "Low",
    "currentLoanProbabilitySummary": {
      "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "warning": "Lorem ipsum"
    },
    "bankingSummary": {
      "critical": 4,
      "medium": 1,
      "positive": 1,
      "summary": "Lower turnover combined with balance maintenance issues could signal financial distress. It’s critical to address these challenges by improving revenue streams and stabilising banking practices."
    },
    "bureauSummary": {
      "critical": 0,
      "medium": 3,
      "positive": 2,
      "summary": "Your credit report shows recent defaults and an imbalanced credit mix, which may worry lenders. Take immediate action to address the defaults."
    },
    "gstSummary": {
      "critical": 1,
      "medium": 0,
      "positive": 0,
      "summary": "If your business has not engaged in GST filing because it's new or doesn't meet the threshold, ensure you know the conditions and obligations for GST compliance as your business grows. This forward-looking approach will demonstrate financial foresight to potential lenders."
    },
    "reportDate": "2024-04-30T00:00:00",
    "loanProbability": [
      {
        "lender": "CreditSaison",
        "currentProbability": 0.13,
        "potentialProbability": 0.23
      },
      {
        "lender": "Lendingkart",
        "currentProbability": 0.13,
        "potentialProbability": 0.22
      },
      {
        "lender": "Indifi",
        "currentProbability": 0.13,
        "potentialProbability": 0.21
      },
      {
        "lender": "Flexiloans",
        "currentProbability": 0.13,
        "potentialProbability": 0.23
      },
      {
        "lender": "Ambit Finvest",
        "currentProbability": 0.13,
        "potentialProbability": 0.23
      },
      {
        "lender": "Aditya Birla Finance Ltd",
        "currentProbability": 0.12,
        "potentialProbability": 0.23
      },
      {
        "lender": "Fairassets Technologies India Private Limited",
        "currentProbability": 0.12,
        "potentialProbability": 0.23
      },
      {
        "lender": "Poonawalla Fincorp",
        "currentProbability": 0.12,
        "potentialProbability": 0.23
      },
      {
        "lender": "KreditBee",
        "currentProbability": 0.12,
        "potentialProbability": 0.23
      },
      {
        "lender": "Protium",
        "currentProbability": 0.11,
        "potentialProbability": 0.21
      },
      {
        "lender": "Bajaj Finance",
        "currentProbability": 0.11,
        "potentialProbability": 0.21
      },
      {
        "lender": "LTFS",
        "currentProbability": 0.11,
        "potentialProbability": 0.23
      },
      {
        "lender": "Godrej Finance Limited",
        "currentProbability": 0.11,
        "potentialProbability": 0.21
      },
      {
        "lender": "Tata Capital",
        "currentProbability": 0.1,
        "potentialProbability": 0.2
      },
      {
        "lender": "Deutsche Bank",
        "currentProbability": 0.1,
        "potentialProbability": 0.2
      },
      {
        "lender": "NeoGrowth",
        "currentProbability": 0.1,
        "potentialProbability": 0.22
      },
      {
        "lender": "IIFL",
        "currentProbability": 0.1,
        "potentialProbability": 0.21
      }
    ],
    "reportScore": [
      {
        "condition": "shineReport.creditReport.bureauScore.score>700 && shineReport.creditReport.bureauScore.score<=750",
        "section": "Bureau Score",
        "parent": "Bureau",
        "score": 40,
        "maxScore": 48
      },
      {
        "condition": "shineReport.creditReport.bureauScore.score>0 && shineReport.creditReport.bureauVintage >= 60",
        "section": "Bureau Vintage",
        "parent": "Bureau",
        "score": 10,
        "maxScore": 10
      },
      {
        "condition": "shineReport.creditReport.loanRepaymentHistory != null ? !shineReport.creditReport.loanRepaymentHistory.defaultAnalysis.defaultHistory.thirtyDaysDelayed : false",
        "section": "Repayment History",
        "parent": "Bureau",
        "score": 16,
        "maxScore": 72
      },
      {
        "condition": "shineReport.creditReport.loanRepaymentHistory != null ? !shineReport.creditReport.loanRepaymentHistory.defaultAnalysis.defaultHistory.delayedSeverity : false",
        "section": "Repayment History",
        "parent": "Bureau",
        "score": 8,
        "maxScore": 72
      },
      {
        "condition": "shineReport.creditReport.loanRepaymentHistory != null ? !shineReport.creditReport.loanRepaymentHistory.defaultAnalysis.defaultHistory.last12MDPD : false",
        "section": "Repayment History",
        "parent": "Bureau",
        "score": 12,
        "maxScore": 72
      },
      {
        "condition": "shineReport.creditReport.loanRepaymentHistory != null ? !shineReport.creditReport.loanRepaymentHistory.defaultAnalysis.defaultHistory.overdueExceedsThreshold : false",
        "section": "Repayment History",
        "parent": "Bureau",
        "score": 4,
        "maxScore": 72
      },
      {
        "condition": "shineReport.creditReport.creditAnalysis != null ? shineReport.creditReport.creditAnalysis.byCount.length>2 : false",
        "section": "Credit Mix Analysis",
        "parent": "Bureau",
        "score": 8,
        "maxScore": 32
      },
      {
        "condition": "shineReport.creditReport.loanRepaymentHistory != null ? shineReport.creditReport.loanRepaymentHistory.otherAnalysis.smallLoans<5 : false",
        "section": "Credit Mix Analysis",
        "parent": "Bureau",
        "score": 8,
        "maxScore": 32
      },
      {
        "condition": "shineReport.creditReport.loanRepaymentHistory != null ? shineReport.creditReport.creditEnquiry < 10 : false",
        "section": "Loan Enquiries",
        "parent": "Bureau",
        "score": 8,
        "maxScore": 8
      },
      {
        "condition": "shineReport.creditReport.securedUnsecuredRatio != null ? shineReport.creditReport.securedUnsecuredRatio.securedToTurnoverRatio<=0.60 : false",
        "section": "Debt to Turnover Analysis",
        "parent": "Banking",
        "score": 24,
        "maxScore": 48
      },
      {
        "condition": "shineReport.bankingHistory.chequeBounces.chequeBouncesRatio<0.03",
        "section": "Cheque Bounces",
        "parent": "Banking",
        "score": 8,
        "maxScore": 16
      },
      {
        "condition": "shineReport.bankingHistory.chequeBounces.chequeBounces6M<6",
        "section": "Cheque Bounces",
        "parent": "Banking",
        "score": 8,
        "maxScore": 16
      },
      {
        "condition": "Tier 1/2",
        "section": "Tier",
        "parent": "Profile",
        "score": 10,
        "maxScore": 0
      }
    ]
  },
  "insights": {
    "creditReport": {
      "bureauScore": [
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": "Promising Start!",
          "subheader": null,
          "description": "Your score is above average. You're on the right track, to improve your credit score and loan prospects further diversify your loans.",
          "bullets": null,
          "class": "positive",
          "type": null,
          "warning": null,
          "condition_status": true,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        }
      ],
      "loanRepaymentHistory": {
        "infoCard": [
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": "Improving Track Record!",
            "subheader": null,
            "description": "You've been good with your recent repayments. However, delayed payments were detected earlier. Continue to keep up with your EMIs to strengthen your loan prospects.",
            "bullets": null,
            "class": "stable",
            "type": null,
            "warning": "Improving!",
            "condition_status": true,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          }
        ],
        "defaultAnalysis": {
          "defaultHistory": [
            {
              "condition": null,
              "header": null,
              "subheader": null,
              "description": null,
              "bullets": null,
              "class": null,
              "type": null,
              "warning": null,
              "condition_status": false,
              "emoji": null
            },
            {
              "condition": null,
              "header": null,
              "subheader": null,
              "description": "Looks like you've been late on some EMI payments. This brings down your creditworthiness, making it harder to get a loan.",
              "bullets": null,
              "class": "negative",
              "type": null,
              "warning": null,
              "condition_status": true,
              "emoji": null
            }
          ],
          "solutions": [
            {
              "condition": null,
              "header": "Your repayment history indicates some past issues, which may lead lenders to perceive your business as risky.",
              "subheader": null,
              "description": null,
              "bullets": [
                "Set up auto-repayments or reminders.",
                "Avoid taking new high-interest loans for the next 6-9 months to improve your situation.",
                "If difficulties continue, talk to your lender(s). Ask about other repayment options like daily/weekly EMI instead of monthly."
              ],
              "class": "negative",
              "type": null,
              "warning": null,
              "condition_status": true,
              "emoji": null
            },
            {
              "condition": null,
              "header": null,
              "subheader": null,
              "description": null,
              "bullets": null,
              "class": null,
              "type": null,
              "warning": null,
              "condition_status": false,
              "emoji": null
            }
          ],
          "impact": [
            {
              "condition": null,
              "header": null,
              "subheader": null,
              "description": "You can do better! Improve your standing with the lenders by implementing the steps recommended. You are currently at level \"1\" and may be able to reach level \"2\" in the next 3 months and get closer to your ideal loan.",
              "bullets": null,
              "class": "negative",
              "type": null,
              "warning": null,
              "condition_status": true,
              "emoji": null
            },
            {
              "condition": null,
              "header": null,
              "subheader": null,
              "description": null,
              "bullets": null,
              "class": null,
              "type": null,
              "warning": null,
              "condition_status": false,
              "emoji": null
            }
          ]
        },
        "otherAnalysis": {
          "topBanks": [
            {
              "condition": null,
              "header": null,
              "subheader": null,
              "description": null,
              "bullets": null,
              "class": null,
              "type": null,
              "warning": null,
              "condition_status": false,
              "emoji": null
            },
            {
              "condition": null,
              "header": null,
              "subheader": null,
              "description": null,
              "bullets": [
                "You are currently not borrowing from a bank.",
                "While borrowing from an NBFC and repaying on time builds your credit profile, securing a loan from a bank boosts lender confidence and reduces interest rates.",
                "You can also enquire with your existing banking partner to check your eligibility."
              ],
              "class": "negative",
              "type": null,
              "warning": null,
              "condition_status": true,
              "emoji": null
            }
          ],
          "suitFiledEver": [
            {
              "condition": null,
              "header": null,
              "subheader": null,
              "description": null,
              "bullets": null,
              "class": null,
              "type": null,
              "warning": null,
              "condition_status": false,
              "emoji": null
            },
            {
              "condition": null,
              "header": null,
              "subheader": null,
              "description": "No lender has taken legal action against you in the past 36 months! This means you've been responsible about your EMI obligations.",
              "bullets": null,
              "class": "positive",
              "type": null,
              "warning": null,
              "condition_status": true,
              "emoji": null
            }
          ]
        },
        "summary": [
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": {
              "desktop": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Smiley-Sad-01.png",
              "mobile": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Sad-Smiley-Mobile.png"
            }
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": [
              "Your repayment history signals financial instability that could deter lenders from approving you for a loan.",
              "Focus on creating a solid plan to catch up on overdue payments and engage with lenders about possible solutions.",
              "Consistent improvement in these areas can gradually rebuild your creditworthiness and improve your chances of getting a loan."
            ],
            "class": "negative",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": {
              "desktop": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Smiley-Sad-01.png",
              "mobile": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Sad-Smiley-Mobile.png"
            }
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": {
              "desktop": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/summary_smily.png",
              "mobile": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Positive-Smiley-Mobile.png"
            }
          }
        ]
      },
      "credit_analysis": {
        "card_view": [
          {
            "condition": null,
            "header": "High reliance on Unsecured Debt",
            "subheader": null,
            "description": "Unsecured loans means high ROIs and EMIs, leading to increased risk of late payments or defaults on new loans.",
            "bullets": null,
            "class": "negative",
            "type": null,
            "warning": "Needs Attention!",
            "condition_status": true,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          }
        ],
        "securedUnsecuredRatio": [
          {
            "condition": null,
            "header": "High Reliance on Unsecured Debt",
            "subheader": null,
            "description": "Unsecured debt entails high ROIs and EMIs. Too many unsecured loans increases the risk of late payments or defaults on new loans.",
            "bullets": null,
            "class": "negative",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          }
        ],
        "solutions": [
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": [
              "Consolidate your small loans into one larger loan and reduce interest rates.",
              "If you own assets, consider shifting your unsecured loans to secured loans. Call us on +91 84509 67207 for help with this."
            ],
            "class": "negative",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          }
        ],
        "variety_of_active_loans": [
          {
            "condition": null,
            "header": "Diverse Credit Portfolio",
            "subheader": null,
            "description": "A variety of active loan types indicates a well-rounded financial history and experience in managing different credit forms.",
            "bullets": null,
            "class": "positive",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          }
        ],
        "creditCardUtilization": [
          {
            "condition": null,
            "header": "Minimise Credit Card Balances",
            "subheader": null,
            "description": "Overutilising your credit cards increases your risk profile. Keep your balances below 60% of your limit. Consider adding more credit lines and splitting usage to stay under this threshold.",
            "bullets": null,
            "class": "negative",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          }
        ],
        "smallLoans": [
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": "Strategic Credit Management",
            "subheader": null,
            "description": "Borrowing a limited number of small loans within your means demonstrates prudent financial strategy, provided you acquire five or fewer loans.",
            "bullets": null,
            "class": "positive",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          }
        ],
        "credit_debt_analysis_summary": [
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": {
              "desktop": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/summary_smily.png",
              "mobile": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Positive-Smiley-Mobile.png"
            }
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": [
              "You have not yet achieved the optimal balance in your credit mix/have high credit card use.",
              "Lenders prefer borrowers to have more balanced credit mix and a lower credit card utilisation level.",
              "Consolidate high-interest debts and apply for credit sparingly to improve your financial health."
            ],
            "class": "negative",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": {
              "desktop": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Smiley-Sad-01.png",
              "mobile": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Sad-Smiley-Mobile.png"
            }
          }
        ],
        "creditEnquiry": [
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": "Your credit application frequency is within reasonable bounds. Lenders view this positively.",
            "bullets": null,
            "class": "positive",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          }
        ],
        "creditRemark": [
          {
            "condition": null,
            "header": "Remarks on Report",
            "subheader": null,
            "description": "Your profile has mismatches of your address, email, phone numbers across your numerous credit lines. Take corrective steps to avoid confusion.",
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          }
        ]
      }
    },
    "gstHistory": {
      "noGST": [
        {
          "condition": null,
          "header": "Unable to Retrieve Your GST Details",
          "subheader": null,
          "description": "Based on the Business PAN you have provided, it appears your GST is not linked to your PAN.",
          "bullets": null,
          "class": null,
          "type": "left_card",
          "warning": null,
          "condition_status": true,
          "emoji": null
        },
        {
          "condition": null,
          "header": "Obtain Your GST Registration",
          "subheader": "It's a straightforward, affordable, and speedy process!",
          "description": null,
          "bullets": null,
          "class": null,
          "type": "right_card",
          "warning": null,
          "condition_status": true,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": "You may Need a GST Registration Soon!",
          "subheader": null,
          "description": "Looks like your turnover is going to hit 40L soon! Ensure you are familiar with the GST requirements and start prepping your business to get a GST registration if needed.",
          "bullets": null,
          "class": null,
          "type": "info_card",
          "warning": null,
          "condition_status": true,
          "emoji": null
        }
      ],
      "missedGstFilings": [
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        }
      ],
      "cancelledGST": [
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        }
      ],
      "info_card": [
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        }
      ]
    },
    "bankingHistory": {
      "card_view": [
        {
          "condition": null,
          "header": "Upward Trend",
          "subheader": null,
          "description": "A low volitility makes you attractive, indicating chances of better loan terms.",
          "bullets": null,
          "class": "positive",
          "type": null,
          "warning": "Good Job!",
          "condition_status": true,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        }
      ],
      "volatility": [
        {
          "condition": null,
          "header": "You're in Growth",
          "subheader": null,
          "description": "Your turnover is fluctuating, but there has been growth in your business over the last 6 months.",
          "bullets": null,
          "class": "positive",
          "type": null,
          "warning": null,
          "condition_status": true,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        }
      ],
      "volitility_lenders_perspective": [
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": [
            "Your annual turnover is below ₹12L and doesn’t meet the criteria for loan eligibility.",
            "Lenders like high growth companies but prefer stable growth.",
            "Focus on generating consistent growth in your turnover for better loan terms."
          ],
          "class": "positive",
          "type": null,
          "warning": null,
          "condition_status": true,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": [
            "Lenders like high growth companies but prefer stable growth.",
            "Focus on generating consistent growth in your turnover for better loan terms."
          ],
          "class": "positive",
          "type": null,
          "warning": null,
          "condition_status": true,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        }
      ],
      "dip": [
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": "Your quarter-on-quarter turnover indicates a stable and healthy cashflow.",
          "bullets": null,
          "class": "positive",
          "type": null,
          "warning": null,
          "condition_status": true,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        }
      ],
      "turnover_lenders_perspective": [
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": [
            "There is some fluctuation in your Q-on-Q turnover.",
            "This enhances your standing as a borrower, making you eligible for larger loan amounts and lower interest rates."
          ],
          "class": "positive",
          "type": null,
          "warning": null,
          "condition_status": true,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        }
      ],
      "count_volatility": [
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": "Revenue Mix: Needs Improvement",
          "subheader": null,
          "description": "Your business has a low credit count, reflecting dependency on a small number of customers which lenders may perceive as risky. Lenders prefer businesses with more than 2 monthly counts of credit.",
          "bullets": null,
          "class": "negative",
          "type": null,
          "warning": null,
          "condition_status": true,
          "emoji": null
        }
      ],
      "bankingHistory_summary": [
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": [
            "Continue maintaining stability to showcase growth to lenders.",
            "Maintaining or enhancing this growth can solidify your position for credit opportunities."
          ],
          "class": "positive",
          "type": null,
          "warning": null,
          "condition_status": true,
          "emoji": {
            "desktop": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/summary_smily.png",
            "mobile": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Positive-Smiley-Mobile.png"
          }
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": {
            "desktop": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Smiley-Sad-01.png",
            "mobile": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Sad-Smiley-Mobile.png"
          }
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": {
            "desktop": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Smiley-Moderate-01.png",
            "mobile": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Stable-Smiley-Mobile.png"
          }
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": "Your annual turnover is below ₹12L and doesn’t meet the criteria for loan eligibility.",
          "bullets": null,
          "class": "negative",
          "type": null,
          "warning": null,
          "condition_status": true,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": [
            "You have a small customer base, increasing the lending risk and implying potential challenges in EMI payment if you lose any customer."
          ],
          "class": "negative",
          "type": null,
          "warning": null,
          "condition_status": true,
          "emoji": null
        }
      ],
      "abb": {
        "card_view": [
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": "Can Improve",
            "subheader": null,
            "description": "We've noticed your average banking balance dipped below ₹10,000 in some months.",
            "bullets": null,
            "class": "negative",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          }
        ],
        "volatility_observation": [
          {
            "condition": null,
            "header": null,
            "subheader": "You're in Growth",
            "description": "Your average banking balance is fluctuating, but there has been growth in your business over the last 6 months.",
            "bullets": null,
            "class": "positive",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          }
        ],
        "volatility_lenders_perspective": [
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": [
              "Despite your growth in recent months, your banking balance seems to be fluctuating which some digital lenders may find risky.",
              "Maintain a stable Average Banking Balance at least 6 months before applying for a loan to be eligible for better terms."
            ],
            "class": "positive",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          }
        ],
        "minimum_balance": [
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": "Oops! Looks like your monthly balance dipped <₹10,000 in the past 12 months.",
            "bullets": null,
            "class": "negative",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          }
        ],
        "minimum_balance_lenders_perspective": [
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": [
              "Your minimum month-on-month balance impacts your loan prospects.",
              "A low monthly balance increases the perceived risk in lending to you.",
              "Consider your long-term financial health when managing your funds."
            ],
            "class": "negative",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          }
        ],
        "abb_summary": [
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": {
              "desktop": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/summary_smily.png",
              "mobile": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Positive-Smiley-Mobile.png"
            }
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": {
              "desktop": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Smiley-Sad-01.png",
              "mobile": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Sad-Smiley-Mobile.png"
            }
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": {
              "desktop": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Smiley-Moderate-01.png",
              "mobile": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Stable-Smiley-Mobile.png"
            }
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": [
              "Even though fluctuating, your bank balance shows growth. However, you've not maintained an ABB above  ₹10,000 which is a minimum criteria to be eligible for a loan.",
              "Your ABB is important for your EMI. Lenders use it to determine how much you can borrow. They usually multiply it by 2 to 4. So, if your ABB is higher, you can borrow more."
            ],
            "class": "negative",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": {
              "desktop": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Smiley-Sad-01.png",
              "mobile": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Sad-Smiley-Mobile.png"
            }
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": {
              "desktop": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Smiley-Sad-01.png",
              "mobile": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Sad-Smiley-Mobile.png"
            }
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": {
              "desktop": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Smiley-Sad-01.png",
              "mobile": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Sad-Smiley-Mobile.png"
            }
          }
        ]
      },
      "debt_to_revenue_ratio": {
        "card_view": [
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": "Needs Better Management",
            "subheader": null,
            "description": "Your business may be too dependent on unsecured debt. You likely won’t be eligible for more unsecured debt. Try and pay off your debt quickly and ensure timeliness of payments. ",
            "bullets": null,
            "class": "negative",
            "type": null,
            "warning": "Needs Improvement",
            "condition_status": true,
            "emoji": null
          },
          {
            "condition": null,
            "header": "Header: Good Debt Management",
            "subheader": null,
            "description": "Your secured debt ratio is below 60%. If your ratio is below 25%, then you may be eligible to take more secured loans.",
            "bullets": null,
            "class": "positive",
            "type": null,
            "warning": "Good Job!",
            "condition_status": true,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          }
        ],
        "debt_to_revenue_ratio_lenders_perspective": [
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": [
              "Your unsecured debt is more than 25%. Do a financial review to avoid stress on your cashflow.",
              "If possible, convert some unsecured debt into secured, to reduce the risk in lending to you and lower ROIs for you."
            ],
            "class": "negative",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": [
              "Your secured debt-to-turnover ratio is less than 60%.",
              "You may be eligible to take more secured debt."
            ],
            "class": "positive",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          }
        ]
      },
      "debt_to_revenue_summary": [
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": {
            "desktop": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/summary_smily.png",
            "mobile": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Positive-Smiley-Mobile.png"
          }
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": [
            "Your unsecured debt is too high.",
            "Focus on revenue growth. Explore higher-margin products, enhance sales strategies, or consolidate high-interest debts for more manageable loans.",
            "This will reduce financial stress & make you a more eligible borrower."
          ],
          "class": "negative",
          "type": null,
          "warning": null,
          "condition_status": true,
          "emoji": {
            "desktop": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Smiley-Sad-01.png",
            "mobile": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Sad-Smiley-Mobile.png"
          }
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": [
            "You're doing an excellent job of managing your secured debts in proportion to your turnover.",
            "You may be eligible to take more secured loans."
          ],
          "class": "positive",
          "type": null,
          "warning": null,
          "condition_status": true,
          "emoji": {
            "desktop": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/summary_smily.png",
            "mobile": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Positive-Smiley-Mobile.png"
          }
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": {
            "desktop": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Smiley-Sad-01.png",
            "mobile": "https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/Sad-Smiley-Mobile.png"
          }
        }
      ],
      "cheque_bounces": [
        {
          "condition": null,
          "header": "Low Cheque Bounces",
          "subheader": null,
          "description": null,
          "bullets": [
            "A low bounce rate indicates reliable transactions and good account management.",
            "Keeping your recent cheque bounces low increases your creditworthiness."
          ],
          "class": "positive",
          "type": null,
          "warning": "Good Job!",
          "condition_status": true,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        }
      ],
      "cashflow": [
        {
          "condition": null,
          "header": "Positive Trend",
          "subheader": null,
          "description": "You have a balanced cashflow reflecting a thiriving business. Lenders should be more inclined to offer such businesses better loan terms.",
          "bullets": null,
          "class": "positive",
          "type": null,
          "warning": "Good Job!",
          "condition_status": true,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        }
      ]
    },
    "actionSummary": {
      "creditReport": {
        "bureauScore": [
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": "Your Bureau Score",
            "subheader": "What you're doing right",
            "description": "Your bureau score shows how healthy (or unhealthy) your business is. It's important because a poor score will affect your prospects.",
            "bullets": [
              "You're on the right track! To improve your credit score and loan prospects further diversify your loans.",
              "Ensure timely repayments of ongoing loans to improve your profile further and become eligible for the best terms."
            ],
            "class": "positive",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          }
        ],
        "defaultHistory": [
          {
            "condition": null,
            "header": "Loan Repayment History",
            "subheader": "How to fix this?",
            "description": "Your repayment history shows how well you've paid back loans in the past, telling lenders if you're a trustworthy borrower.",
            "bullets": [
              "Prioritise your payments and engaging with your existing lenders to discuss potential options if you anticipate problems.",
              "Set up auto-payments for EMIs to ensure you never miss a deadline.",
              "Steady improvement will rebuild your creditworthiness and improve your chances of getting a loan over time."
            ],
            "class": "negative",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          }
        ],
        "topBanks": [
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": "Underwritten By Banks",
            "subheader": "How to fix this?",
            "description": "Banks maintain stringent lending standards. Obtaining a loan from a bank signifies your strong financial standing.",
            "bullets": [
              "You are currently not borrowing from a bank.",
              "While borrowing from an NBFC and repaying on time builds your credit profile, securing a loan from a bank boosts lender confidence in you and gets you better interest rates.",
              "If possible, try to get your next loan from a bank. Consider enquiring with your existing banking partner to check your business loan eligibility."
            ],
            "class": "negative",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          }
        ],
        "suitFiledEver": [
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": "Disputes with Lenders",
            "subheader": "What you're doing right",
            "description": "If one or more lenders have initiated legal action against you, it shows lenders your inability to manage debts in past. ",
            "bullets": [
              "You have no legal suits filed against you. Legal suits reflects poorly on your profile, but no legal suits are found in your recent past records.",
              "This makes you a responsible borrower and boosts your creditworthiness with lenders."
            ],
            "class": "positive",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          }
        ],
        "securedUnsecuredRatio": [
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": "Unsecured to Secured Debt",
            "subheader": "How to fix this?",
            "description": "This ratio shows the balance of secured and unsecured debt in your profile. A well rounded ratio means you are not over-leveraged.",
            "bullets": [
              "Your financial management needs improvement.",
              "Consolidate your small loans into one larger loan to reduce interest rates.",
              "If you own assets, consider converting your unsecured loans to secured loans. We can help with this."
            ],
            "class": "negative",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          }
        ],
        "creditCardUtilization": [
          {
            "condition": null,
            "header": "Credit Card Utilisation",
            "subheader": "How to fix this?",
            "description": "Utilisation rates of credit cards affect your credit score and further lender confidence. Limiting credit card usage to an optimal threshold increases creditworthiness",
            "bullets": [
              "Don't use your credit card too much. Keep your balances below 60% of your limit.",
              "Overutilising it increases your risk profile and reduces your creditworthiness.",
              "If you have more than one credit lines, split your usage across the to stay under this threshold."
            ],
            "class": "negative",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          }
        ],
        "smallLoans": [
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": "Micro Loans",
            "subheader": "What you're doing right",
            "description": "The number of micro laons taken reflect you business' fiscal planning capabilities and the need for constant influx",
            "bullets": [
              "Borrowing within your means demonstrates a sensible financial strategy.",
              "Don't take more than 5 small loans to keep your creditworthiness up."
            ],
            "class": "positive",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          }
        ],
        "creditEnquiry": [
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": "Credit Enquiries",
            "subheader": "What you're doing right",
            "description": "Your credit enquiries, show the submission of loan applications. Multiple enquiries may signal financial strain on a business.",
            "bullets": [
              "Your loan enquiries are within reasonable bounds.",
              "A reasonable number of applications over time boosts lender confidence in you."
            ],
            "class": "positive",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          }
        ],
        "creditRemark": [
          {
            "condition": null,
            "header": "Remarks on Report",
            "subheader": "How to fix this?",
            "description": "Remarks are the accuracy of infomation on your credit report,across all your credit lines. Mismatches lead to lender concerns.",
            "bullets": [
              "Take corrective steps to minimise negative impact on your profile.",
              "Mismatches are often viewed unfavourably by lenders and are a sign of low reliability.",
              "Contact the bureau or your lender to correct the inaccuracies."
            ],
            "class": "negative",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          }
        ]
      },
      "gstHistory": {
        "missedGstFilings": [
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          }
        ]
      },
      "bankingHistory": {
        "volatility": [
          {
            "condition": null,
            "header": "Business Stability Analysis",
            "subheader": "What you're doing right",
            "description": "Your business stability shows the patterns of, inflow of business and growth. It is majorly analysed using banking balance patterns.",
            "bullets": [
              "Your Q-on-Q turnover appears to be growing. Lenders like this!",
              "This enhances your creditworthiness as a borrower.",
              "Keep growing your turnover consistently for better loan terms."
            ],
            "class": "postive",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          }
        ],
        "dip": [
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": "Quarter on Quarter Dip",
            "subheader": "How to fix this?",
            "description": "Your Q-on-Q turnover shows the quarterly performance of your business. It's a measure that helps leners analyse how a business is faring, and thus their creditworthiness.",
            "bullets": [
              "There is some positive fluctuation in your Q-on-Q turnover.",
              "This enhances your standing as a borrower, making you eligible for larger loan amounts and lower interest rates."
            ],
            "class": "positive",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          }
        ],
        "count_volatility": [
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": "Credit Count Analysis",
            "subheader": "How to fix this?",
            "description": "Credit count shows the number of credits made to your business account within a specified period, from varied sources.",
            "bullets": [
              "A low credit count highlights your dependency on a few customers, making you a financial risk for lenders.",
              "Diversify your revenue streams so that you have more than 2 credit deposits a month into your accounts.",
              "If you use more than one account for your business transactions, upload those bank statements as well for a more accurate assessment."
            ],
            "class": "negative",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          }
        ],
        "abb": [
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": "Average Banking Balance",
            "subheader": "What you're doing right",
            "description": "ABB analyses whether you maintain a min. banking balance per the requirements, each month and are capable of managing cashflow effectively.",
            "bullets": [
              "Though your banking balance is fluctuating, it still shows growth in the recent months.",
              "Do you best to stablise your Average Banking Balance to be eligible for better loan terms."
            ],
            "class": "positive",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          }
        ],
        "minimum_balance": [
          {
            "condition": null,
            "header": "Minimum Banking Balance",
            "subheader": "How to fix this?",
            "description": "This creteria checks whether you are maintaining minimum monthly balance of ₹10,000, every month. This shows lenders that you are not going below the threshold.",
            "bullets": [
              "Your minimum monthly account balance fell below ₹10,000, negatively impacting your loan eligibility.",
              "Strategically manage your funds to ensure you maintian the minimum balance always. iIf you use more than one account for your business, upload those statements as well for a more accurate assessment.",
              "Consider starting an emergency savings fund to top-up your balance any time you fear falling short."
            ],
            "class": "negative",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          }
        ],
        "debt_to_revenue_ratio": [
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": "Debt To Turnover",
            "subheader": "How to fix this?",
            "description": "By comparing your business' debt levels (secured & unsecured) to its revenue, this ratio assesses how leveraged you are with respect to your income.",
            "bullets": [
              "Your unsecured debt is more than 25%.",
              "Do a financial review and adjust to minimise stress on your cashflow and bring down your loan exposure.",
              "If possible, convert some unsecured debt into secured to reduce your reliance on unsecured debt and improve your loan prospects."
            ],
            "class": "negative",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          },
          {
            "condition": null,
            "header": "Debt To Turnover",
            "subheader": "What you're doing right",
            "description": "By comparing your business' debt levels (secured & unsecured) to its revenue, this ratio assesses how leveraged you are with respect to your income.",
            "bullets": [
              "Your secured debt-to-turnover ratio is less than 60%.",
              "Lenders perceive you as sound and stable, leading to improved loan prospects."
            ],
            "class": "positive",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          },
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          }
        ],
        "cheque_bounces": [
          {
            "condition": null,
            "header": null,
            "subheader": null,
            "description": null,
            "bullets": null,
            "class": null,
            "type": null,
            "warning": null,
            "condition_status": false,
            "emoji": null
          },
          {
            "condition": null,
            "header": "Cheque Bounces",
            "subheader": "What you're doing right",
            "description": "This shows how often cheques you've made were returned unpaid, giving insight into your financial management.",
            "bullets": [
              "Your cheque bounce rate is low indicating strong financial management and reliability.",
              "Keeping your bank account up and cheque bounces low to maintain your creditworthiness."
            ],
            "class": "positive",
            "type": null,
            "warning": null,
            "condition_status": true,
            "emoji": null
          }
        ]
      }
    },
    "fold1": {
      "volatility": [
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": "Banking > Lorem ipsum dolor sit amet",
          "subheader": "Turnover < 12L",
          "description": "Low business turnover. Focus on strategies to increase turnover for better financial stability.",
          "bullets": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          ],
          "class": "9",
          "type": null,
          "warning": null,
          "condition_status": true,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": "Banking > Lorem ipsum dolor sit amet",
          "subheader": "Credit Count > 2 every month",
          "description": "High credit transaction count. Frequent credit transactions are a positive sign.",
          "bullets": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          ],
          "class": "25",
          "type": null,
          "warning": null,
          "condition_status": true,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        }
      ],
      "repayment_history": [
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": "Bureau > Lorem ipsum dolor sit amet",
          "subheader": "Default ever",
          "description": "Defaults detected. Prioritize clearing outstanding defaults to improve your credit profile.",
          "bullets": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          ],
          "class": "8",
          "type": null,
          "warning": null,
          "condition_status": true,
          "emoji": null
        },
        {
          "condition": null,
          "header": "Bureau > Lorem ipsum dolor sit amet",
          "subheader": "No 30+ DPD in 12m",
          "description": "No payments delayed by 30+ days in last 12 months. Timely payments enhance your credit score.",
          "bullets": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          ],
          "class": "46",
          "type": null,
          "warning": null,
          "condition_status": true,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": "Bureau > Lorem ipsum dolor sit amet",
          "subheader": "NO Severe Delays (90-180)",
          "description": "No severe delays in payments. This indicates responsible credit behavior.",
          "bullets": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          ],
          "class": "23",
          "type": null,
          "warning": null,
          "condition_status": true,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": "Bureau > Lorem ipsum dolor sit amet",
          "subheader": "NO Last 12m DPD",
          "description": "No delays in last 12 months. Consistent timely payments are impressive.",
          "bullets": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          ],
          "class": "24",
          "type": null,
          "warning": null,
          "condition_status": true,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": "Bureau > Lorem ipsum dolor sit amet",
          "subheader": "No Overdue > 25k",
          "description": "No overdue amounts over 25k. Ensure all dues are cleared to maintain a healthy credit profile.",
          "bullets": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          ],
          "class": "21",
          "type": null,
          "warning": null,
          "condition_status": true,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        }
      ],
      "abb": [
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": "Banking > Lorem ipsum dolor sit amet",
          "subheader": "Min Balance < 10,000",
          "description": "Minimum balance not maintained. Ensure a minimum balance of Rs. 10,000 in the account to improve your profile.",
          "bullets": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          ],
          "class": "13",
          "type": null,
          "warning": null,
          "condition_status": true,
          "emoji": null
        }
      ],
      "debt_to_turnover_ratio": [
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": "Banking > Lorem ipsum dolor sit amet",
          "subheader": "Unsecured Loan Ratio to Turnover > 25%",
          "description": "High unsecured loan ratio to turnover. Reduce unsecured loans and improve turnover ratio.",
          "bullets": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          ],
          "class": "20",
          "type": null,
          "warning": null,
          "condition_status": true,
          "emoji": null
        },
        {
          "condition": null,
          "header": "Banking > Lorem ipsum dolor sit amet",
          "subheader": "Secured Loan Ratio to Turnover ≤ 60%",
          "description": "Balanced secured loan ratio to turnover. Ensure secured loans remain within this ratio.",
          "bullets": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          ],
          "class": "33",
          "type": null,
          "warning": null,
          "condition_status": true,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        }
      ],
      "cheque_bounces": [
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        }
      ],
      "bureau_score": [
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": "Bureau > Lorem ipsum dolor sit amet",
          "subheader": "Bureau Score (700-749)",
          "description": "Good credit score in the range of 700-749. Your credit score is good. Keep up your positive financial habits to push it even higher.",
          "bullets": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          ],
          "class": "40",
          "type": null,
          "warning": null,
          "condition_status": true,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        }
      ],
      "gst_analysis": [
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        }
      ],
      "business_vintage": [
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        }
      ],
      "bureau_vintage": [
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        },
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        }
      ],
      "negative_scoring": [
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        }
      ],
      "loan_enquiries": [
        {
          "condition": null,
          "header": null,
          "subheader": null,
          "description": null,
          "bullets": null,
          "class": null,
          "type": null,
          "warning": null,
          "condition_status": false,
          "emoji": null
        }
      ]
    }
  },
  "userInfo": {
    "id": "665030baaa7c2ec32beffea6",
    "createdAt": "2024-05-24T06:16:26.186Z",
    "lastUpdatedAt": "2024-05-24T11:03:41.735Z",
    "perfiosTransactionId": "6TLJ1716548621618",
    "email": "jigarmakwana21121990@gmail.co",
    "prefix": null,
    "firstName": "JIGAR ",
    "lastName": "MAKVAN",
    "businessName": "SIDDHESHWARIELECTROPLATINGWORKE ",
    "pincode": "380026",
    "businessPan": "BMPPM3206A",
    "businessVintage": null,
    "propertyOwnership": "Owned",
    "turnover": 1300000,
    "utmSource": null,
    "utmCampaign": null,
    "utmMedium": null,
    "pricingModel": "one-time",
    "selectedPrice": 1,
    "mobile": "6352416401"
  }
}