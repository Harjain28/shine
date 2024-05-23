import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GTMService } from './services/gtm.service';
import { StorageService } from './services/storage.service';
import { LoaderService } from './services/loader.service';
import { ApplicationInsightsService } from './services/application-insights.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shine';
 
  constructor(
    public router: Router,private gtm: GTMService,private loaderService: LoaderService, private storage:StorageService, private appInsightsService: ApplicationInsightsService ){
      this.gtm.addGTMScript();
    }
    isLoading$ = this.loaderService.isLoading;


    ngOnInit(): void {
    }
  
  isShineHeaderVisible(): boolean {
    return this.router.url.includes('report') || this.storage.isToken();
  }

  isHeaderVisible(): boolean {
    return  !this.storage.isToken();
  }

  isHeader2Visible(): boolean {
    return  !this.storage.isToken();
  }



  // isFooterVisible(): boolean {
  //   return !this.router.url.includes('business-loan-form-completion') && !this.router.url.includes('log-in') && !this.router.url.includes('eligibility');
  // }
}
