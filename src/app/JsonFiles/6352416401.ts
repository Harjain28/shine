export const cust16Json = {
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
        "unsecuredToTurnoverRatio": 2.3467561665367542
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
            "turnover": 71934,
            "creditCount": 36,
            "averageBalance": 1424.86,
            "cashflow": 101.76
          },
          {
            "month": "Oct-23",
            "turnover": 151561,
            "creditCount": 43,
            "averageBalance": 3147.35,
            "cashflow": 2971.15
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
            "turnover": 154890,
            "creditCount": 44,
            "averageBalance": 2097.01,
            "cashflow": -5576.69
          },
          {
            "month": "Apr-24",
            "turnover": 64475,
            "creditCount": 20,
            "averageBalance": 3732.78,
            "cashflow": 58.61
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
          "turnover": 223495,
          "creditCount": 79,
          "averageBalance": 1574.35,
          "cashflow": 3072.91
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
          "turnover": 382239,
          "creditCount": 92,
          "averageBalance": 3468.16,
          "cashflow": 80.01
        },
        "h1": {
          "month": "H1",
          "turnover": 223495,
          "creditCount": 79,
          "averageBalance": 862.595,
          "cashflow": 3072.91
        },
        "h2": {
          "month": "H2",
          "turnover": 552670,
          "creditCount": 121,
          "averageBalance": 8228.226666666667,
          "cashflow": 13949.99
        },
        "turnover": {
          "stdev": 71685.1709658959,
          "mean": 64680.416666666664,
          "lowSd": -7004.754299229234,
          "highSd": 136365.58763256256,
          "cv": 1.1082979155086234,
          "min": 100000,
          "sum": 776165,
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
          "stdev": 4467.54677637608,
          "mean": 1418.575,
          "lowSd": -3048.97177637608,
          "highSd": 5886.12177637608,
          "cv": 3.1493201109395557,
          "min": 0,
          "sum": 17022.9,
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
    "reportDate": "2024-04-30T00:00:00Z",
    "loanProbability": [
      {
        "lender": "Aditya Birla Finance Ltd",
        "currentProbability": 0.1,
        "potentialProbability": 0.2
      },
      {
        "lender": "Protium",
        "currentProbability": 0.1,
        "potentialProbability": 0.2
      },
      {
        "lender": "CreditSaison",
        "currentProbability": 0.1,
        "potentialProbability": 0.2
      },
      {
        "lender": "Lendingkart",
        "currentProbability": 0.1,
        "potentialProbability": 0.2
      },
      {
        "lender": "Fairassets Technologies India Private Limited",
        "currentProbability": 0.1,
        "potentialProbability": 0.2
      },
      {
        "lender": "Indifi",
        "currentProbability": 0.1,
        "potentialProbability": 0.2
      },
      {
        "lender": "Flexiloans",
        "currentProbability": 0.1,
        "potentialProbability": 0.2
      },
      {
        "lender": "Bajaj Finance",
        "currentProbability": 0.1,
        "potentialProbability": 0.2
      },
      {
        "lender": "Tata Capital",
        "currentProbability": 0.1,
        "potentialProbability": 0.2
      },
      {
        "lender": "LTFS",
        "currentProbability": 0.1,
        "potentialProbability": 0.2
      },
      {
        "lender": "Deutsche Bank",
        "currentProbability": 0.1,
        "potentialProbability": 0.2
      },
      {
        "lender": "Poonawalla Fincorp",
        "currentProbability": 0.1,
        "potentialProbability": 0.2
      },
      {
        "lender": "NeoGrowth",
        "currentProbability": 0.1,
        "potentialProbability": 0.2
      },
      {
        "lender": "Ambit Finvest",
        "currentProbability": 0.1,
        "potentialProbability": 0.2
      },
      {
        "lender": "Godrej Finance Limited",
        "currentProbability": 0.1,
        "potentialProbability": 0.2
      },
      {
        "lender": "KreditBee",
        "currentProbability": 0.1,
        "potentialProbability": 0.2
      },
      {
        "lender": "IIFL",
        "currentProbability": 0.1,
        "potentialProbability": 0.2
      }
    ],
    "reportScore": null
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
          "class": "marginally_positive",
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
            "class": "mild_negative",
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
              "description": "You can do better! Improve your standing with the lenders by implementing the steps recommended. You are currently at 1 and may be able to reach 2 in the next 3 months and get closer to your ideal loan.",
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
            "header": " Diverse Credit Portfolio",
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
            "description": "Your credit application frequency is within reasonable bounds, indicating a strong financial standing. Lenders view this positively.",
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
        }
      ]
    },
    "bankingHistory": {
      "card_view": [
        {
          "condition": null,
          "header": null,
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
          "description": "Your business has a low credit count, reflecting dependency on a small number of customers which lenders may perceive as risky.",
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
              "A low monthly balance increses the perceived risk in lending to you.",
              "Consider your long-term financial health when managing your funds. "
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
            "class": "Negative Case",
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
              "Your unsecured debt is >25%. Do a financial review to avoid stress on your cashflow.",
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
              "Your debt-to-turnover ratio on your secured loans is <60%.",
              "If it is <25%, you may be eligible to take more secured debt. ",
              "Maintain this ratio to keep up your eligibility for better loan options.   "
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
          "description": "You have a balanced cashflow reflecting a thiriving business. Lenders should be more inclined to offer such businesses better loan terms..",
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
    }
  }
}