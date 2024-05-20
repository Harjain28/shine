import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GTMService } from './services/gtm.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shine';

  constructor(
    public router: Router,private gtm: GTMService, private storage:StorageService ){
      this.gtm.addGTMScript();
    }

  isShineHeaderVisible(): boolean {
    return this.router.url.includes('report') || this.storage.isToken();
  }

  isHeaderVisible(): boolean {
    return !this.router.url.includes('report') || !this.storage.isToken();
  }

  isHeader2Visible() {
    return  !this.router.url.includes('report') || !this.storage.isToken();
  }



  // isFooterVisible(): boolean {
  //   return !this.router.url.includes('business-loan-form-completion') && !this.router.url.includes('log-in') && !this.router.url.includes('eligibility');
  // }
}
