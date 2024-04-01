import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FaqComponent } from './faq/faq.component';
import { MatDialog } from '@angular/material/dialog';
import { DoughnutComponent } from '../charts/doughnut/doughnut.component';
import { SemiDoughnutComponent } from '../charts/semi-doughnut/semi-doughnut.component';
import { MixedComponent } from '../charts/mixed/mixed.component';
import { HistogramComponent } from '../charts/histogram/histogram.component';
import { PieComponent } from '../charts/pie/pie.component';
import { BarComponent } from '../charts/bar/bar.component';
import { Mixed2Component } from '../charts/mixed2/mixed2.component';
import { BuildBureauPopupComponent } from '../modal/build-bureau-popup/build-bureau-popup.component';
import { CreditJourneyPopupComponent } from '../modal/credit-journey-popup/credit-journey-popup.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from '../services/api.service';
import { shineLendingPageJSON } from '../JsonFiles/lendingpage';
import { Mixed3Component } from '../charts/mixed3/mixed3.component';
import { Mixed4Component } from '../charts/mixed4/mixed4.component';
import { CreditReportComponent } from './credit-report/credit-report.component';
import { GstFillingComponent } from './gst-filling/gst-filling.component';
import { BankingBusinessComponent } from './banking-business/banking-business.component';
import { ActionsRequiredComponent } from './actions-required/actions-required.component';
import { ProbabilityOfLoanComponent } from './probability-of-loan/probability-of-loan.component';



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

  constructor(private dialog: MatDialog, private api: ApiService ) { }

  ngOnInit(): void {
    this.getFaq();
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
