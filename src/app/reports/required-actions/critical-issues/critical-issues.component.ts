import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent, CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { reportStatciData } from 'src/app/JsonFiles/reportpageStaticData';

@Component({
  selector: 'app-critical-issues',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './critical-issues.component.html',
  styleUrls: ['./critical-issues.component.scss', '../required-actions.component.scss']
})
export class CriticalIssuesComponent implements OnInit {

  showCriticalBoxFirst: boolean = true;
  showKnowMoreModal: boolean = false;
  summary_section:any;
  summary_section_Data: any;
  reportsData: any;
  imgUrlDesktop: any;
  imgUrlMobile: any;
  rankingSection: any;
  banking: any;
  bureau: any;
  gst: any;

  @Input() ActionReqReportsData: any;


  ngOnInit(): void {
    this.summary_section = reportStatciData;
    this.summary_section_Data = this.summary_section?.summary_section;
    this.reportsData = this.ActionReqReportsData?.report;

    this.banking = this.reportsData?.bankingSummary;
    this.bureau = this.reportsData?.bureauSummary;
    this.gst = this.reportsData?.gstSummary;


    //rankingSection
    this.rankingSection = reportStatciData?.summary_section;
    const compareStage = this.rankingSection?.ranking_card?.ranking_images.find(
      (image: { stage: any }) => image.stage === this.reportsData?.currentStage
    );
    if (compareStage) {
      this.imgUrlDesktop = compareStage.desktop;
      this.imgUrlMobile = compareStage.mobile;
    }
  }
  
  
  toggleDetails() {
    this.showCriticalBoxFirst = !this.showCriticalBoxFirst;
  }

  openModal() {
    this.showKnowMoreModal = true;
  }

  closeModal() {
    this.showKnowMoreModal = false;
  }

  customOptions4: OwlOptions = {
    loop: false,
    rewind: false,
    dots: false,
    autoplay: false,
    navSpeed: 300,
    nav: true,
    mouseDrag: false,
    touchDrag: true,

    autoplayTimeout: 8000,
    autoplaySpeed: 1500,
    navText: [
      "<span><img class='navTxtImg' src='./assets/images/homeImage/right-arrow.svg'></span>",
      "<span> <img class='navTxtImg' src='./assets/images/homeImage/right-arrow.svg'></span>",
    ],
    responsive: {
      0: {
        items: 1,
        dots: true,
      },
      400: {
        items: 1,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
  };
  
}
