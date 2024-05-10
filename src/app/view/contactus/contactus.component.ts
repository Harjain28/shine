import { Component,  OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UrlService } from 'src/app/services/url.service';
import { metaData } from 'src/app/SEO_Reference/metadata';
import { EventService } from 'src/app/services/event.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { contactusJson } from './data';
import { MaterialModule } from 'src/app/material.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [CommonModule,MaterialModule,CarouselModule,LazyLoadImageModule],
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  // homeData: any;
  stars: any[] = [1, 2, 3, 4, 5];
  selectedValue: any;
  contactusData: any;
  ContactUspage_banner: any;
  Get_In_Touch_Section: any;
  World_Class_Section: any;

  customOptions4: OwlOptions = {
    loop: true,
    dots: false,
    autoplay: true,
    navSpeed: 300,
    nav: false,
    margin: 20,
    mouseDrag: false,
    touchDrag: true,

    autoplayTimeout:8000,
    autoplaySpeed: 1500,
    // navText: ["", ""],
    navText: ["<img class='navTxtImg' src='./assets/images/homeImage/left-arrow.svg'>", "<img class='navTxtImg' src='./assets/images/homeImage/right-arrow.svg'>"],
    responsive: {
      0: {
        items: 1,
        skip_validateItems: true,
      },
      400: {
        items: 1,
        skip_validateItems: true,
      },
      740: {
        items: 1,
        skip_validateItems: true,
      },
      940: {
        items: 1,
        skip_validateItems: true,
      },
    },
  };
  contactUsMetaData: { title: string; description: string; } | undefined;

  constructor(private localStorage: LocalStorageService , public urlService: UrlService , private router: Router, private  eventService: EventService) { }

  ngOnInit(): void {
    this.contactUsMetaData = metaData?.ContactUsMetaData;
    if (this.router.url === '/in/contact-us') {
    this.eventService?.addmetaTag(this.contactUsMetaData?.title , this.contactUsMetaData?.description);
    } else {
      const  globalContactUsMetaData = metaData?.GlobalContactMetaData;
      this.eventService?.addmetaTag(globalContactUsMetaData?.title , globalContactUsMetaData?.description);
    }
    this.contactusData = contactusJson;
    this.getContactUsData();
  }

  countStar(star: any) {
    this.selectedValue = star;
  }

  getContactUsData() {
    this.ContactUspage_banner = this.contactusData?.ContactUspage_banner;
    this.Get_In_Touch_Section = this.contactusData?.Get_In_Touch_Section;
    this.World_Class_Section = this.contactusData?.World_Class_Section;
  }

}
