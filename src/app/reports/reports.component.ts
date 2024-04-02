import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq/faq.component';
import { ApiService } from '../services/api.service';
import { CreditReportComponent } from './credit-report/credit-report.component';
import { GstFillingComponent } from './gst-filling/gst-filling.component';
import { BankingBusinessComponent } from './banking-business/banking-business.component';
import { ActionsRequiredComponent } from './actions-required/actions-required.component';
import { ProbabilityOfLoanComponent } from './probability-of-loan/probability-of-loan.component';
import { shineLendingPageJSON } from '../JsonFiles/lendingpage';
import { ChartsJsonData } from '../JsonFiles/ChartJSONData';



@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule,CreditReportComponent,GstFillingComponent,BankingBusinessComponent,ActionsRequiredComponent,
            ProbabilityOfLoanComponent,FaqComponent],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  paramsObject: any;
  businessLoanJson: any;
  faqs: any;
  creditReportJson: any;
  CRData: any;
  ChartsData: any;
 

  constructor( private api: ApiService ) { }

  ngOnInit(): void {
    this.getFaq();
    this.getChartsData();
  }

  getChartsData(){
    this.ChartsData = ChartsJsonData;
    
  }

  postForReport(){
      let requestData: any = {}; 
      requestData["mobile"] = " ";
      
        const params = { ...this.paramsObject.params };
          this.api.postForReport(`api/Remediation/Report`,requestData , params) .subscribe({
              next: (res: any) => {
                if (res) {
                 
                }
              },
              error: error => {
              },
              complete: () => {
               // ('Request complete');
              }
            });
      
  }

 getFaq(){
  this.businessLoanJson = shineLendingPageJSON;
  this.faqs = this.businessLoanJson?.Faqs?.FAQs;
 }
}
