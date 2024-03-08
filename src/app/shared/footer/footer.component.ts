import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {  AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {  ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,MatIconModule,RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  paramsObject: any;
  partnersUrl!: string;
  isBrowser: any;
  globalUrl: any;
  contactUrl: any;
  isLoading: boolean = false;
  constructor(public router: Router , private route: ActivatedRoute , @Inject(PLATFORM_ID) private platformId: Object , public event: EventService, public urlService: UrlService) {  
    this.route.queryParamMap.subscribe((params) => {
      this.paramsObject = { ...params };
      const param = new URLSearchParams();
      for (let key in this.paramsObject?.params) {
        if (this.paramsObject?.params.hasOwnProperty(key)) {
          param.set(key, this.paramsObject?.params[key]);
        }
      }
  
      const paramStr = param.toString();
      let globalUrl = 'https://corp.creditenable.com';
      let partnersUrl = 'https://loans.creditenable.com/in/partners';
      let contactUrl = "https://corp.creditenable.com/contact/";
      if (paramStr) {   
       this.globalUrl = `${globalUrl}?${paramStr}`;
       this.partnersUrl = `${partnersUrl}?${paramStr}`;
       this.contactUrl = `${contactUrl}?${paramStr}`;
      } else {
        this.globalUrl = `${globalUrl}${paramStr}`;
        this.partnersUrl = `${partnersUrl}${paramStr}`;
         this.contactUrl = `${contactUrl}${paramStr}`;
      }
    });


  }


  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = true;
   }, 2000);

    // this.isBrowser = isPlatformBrowser(this.platformId);
  }


  ngAfterViewInit(): void {  
    this.isBrowser = isPlatformBrowser(this.platformId);

 }

}
