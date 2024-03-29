import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shine';

  constructor(
    public router: Router){}

  isShineHeaderVisible(): boolean {
    return this.router.url.includes('report') 
  }

  isHeaderVisible(): boolean {
    return !this.router.url.includes('report') 
  }

  isHeader2Visible(): boolean {
    return this.router.url.includes('/in')
  }



  // isFooterVisible(): boolean {
  //   return !this.router.url.includes('business-loan-form-completion') && !this.router.url.includes('log-in') && !this.router.url.includes('eligibility');
  // }
}
