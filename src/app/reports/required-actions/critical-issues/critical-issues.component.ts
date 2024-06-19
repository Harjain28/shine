import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CarouselComponent,
  CarouselModule,
  OwlOptions,
} from 'ngx-owl-carousel-o';
import { reportStatciData } from 'src/app/JsonFiles/reportpageStaticData';

interface Tab {
  title: string;
  count: number;
  imageUrl: string;
  isActive: boolean;
}
interface Card {
  title: string;
  description: string;
  buttonText: string;
}

@Component({
  selector: 'app-critical-issues',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './critical-issues.component.html',
  styleUrls: [
    './critical-issues.component.scss',
    '../required-actions.component.scss',
  ],
})
export class CriticalIssuesComponent implements OnInit {
  showCriticalBoxFirst: boolean = true;
  showKnowMoreModal: boolean = false;
  summary_section: any;
  summary_section_Data: any;
  reportsData: any;
  imgUrlDesktop: any;
  imgUrlMobile: any;
  rankingSection: any;
  banking: any;
  bureau: any;
  gst: any;

  @Input() ActionReqReportsData: any;
  data = 'Bureau data';
  tabs: Tab[] = [
    {
      title: 'Bureau',
      count: 0,
      imageUrl:
        'https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/credit_score.png',
      isActive: true,
    },
    {
      title: 'Banking',
      count: 0,
      imageUrl:
        'https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/banking_blue.png',
      isActive: false,
    },
    {
      title: 'GST',
      count: 0,
      imageUrl:
        'https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/dashboard/gst.png',
      isActive: false,
    },
  ];

  cardData: any = {
    Bureau: [
    {
      title: '1. Your Bureau Score',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique massa eu rhoncus dapibus. Cras non mi maximus lorem aliquam sodales. Aliquam placerat risus id.',
      buttonText: 'Know how to fix this',
    },
    {
      title: '2. Underwritten by Banks',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique massa eu rhoncus dapibus.',
      buttonText: 'Know how to fix this',
    },
    {
      title: '3. Disputes with Lenders',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique massa eu rhoncus dapibus. Cras non mi maximus lorem aliquam sodales. Aliquam placerat risus id.',
      buttonText: 'Know how to fix this',
    },
    {
      title: '4. Your Bureau Score',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique massa eu rhoncus dapibus. Cras non mi maximus lorem aliquam sodales. Aliquam placerat risus id.',
      buttonText: 'Know how to fix this',
    },
  ],
  Banking: [
    {
      title: '1. Your Bureau Score',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique massa eu rhoncus dapibus. Cras non mi maximus lorem aliquam sodales. Aliquam placerat risus id.',
      buttonText: 'Know how to fix this',
    },
    {
      title: '2. Underwritten by Banks',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique massa eu rhoncus dapibus.',
      buttonText: 'Know how to fix this',
    },
    {
      title: '3. Your Bureau Score',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique massa eu rhoncus dapibus. Cras non mi maximus lorem aliquam sodales. Aliquam placerat risus id.',
      buttonText: 'Know how to fix this',
    },
  ],
  GST: [
    {
      title: '1. Your Bureau Score',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique massa eu rhoncus dapibus. Cras non mi maximus lorem aliquam sodales. Aliquam placerat risus id.',
      buttonText: 'Know how to fix this',
    },
    {
      title: '2. Underwritten by Banks',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique massa eu rhoncus dapibus.',
      buttonText: 'Know how to fix this',
    },
  ],
  }

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
  filteredCards: Card[] = this.cardData.Bureau; 

  handleClick(selectedTab: Tab) {
    this.filteredCards = this.cardData[selectedTab.title]; 
    this.tabs.forEach(tab => tab.isActive = false);
    selectedTab.isActive = true;
  }

  toggleDetails(data?:any) {
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
