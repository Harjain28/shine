import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ReportService } from '../shared.service';
import { reportStatciData } from 'src/app/JsonFiles/reportpageStaticData';



interface Tab {
  title: string;
  count: number;
  imageUrl: string;
  isActive: boolean;
}

interface Card {
  header: string;
  description: string;
  subheader: string;
  bullets: any;
}

@Component({
  selector: 'app-mobile-critical-issues',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, CarouselModule],
  templateUrl: './mobile-critical-issues.component.html',
  styleUrls: ['./mobile-critical-issues.component.scss']
})


export class MobileCriticalIssuesComponent implements OnInit {
  @Input() ActionReqReportsMobileData: any;
  expandedPanel: number = 0; // Start with the first panel expanded
  showCriticalBoxFirst: boolean = true;
  showKnowMoreModal: boolean = false;

  tabs: Tab[] = [];
  cardData: any = {};
  actionSummaryData: any;
  filteredCards: Card[] = []; 
  filteredInsights: any;
  selectedCard: Card | null = null;
  selectedData: Card[] =[];

  constructor(public reportService: ReportService) {}

  ngOnInit(): void {
    this.reportService.initializeData(reportStatciData, this.ActionReqReportsMobileData);
    const actionSummaryData = this.ActionReqReportsMobileData?.insights?.actionSummary;
    this.filteredInsights = this.reportService.concatenateInsights(actionSummaryData, 'negative');

    if (this.filteredInsights) {
      this.updateTabCounts();
      this.filteredCards = this.filteredInsights.creditReport; 
    }
    console.log( this.filteredCards , "filteredCardss");
  }

  updateTabCounts(): void {
    if (this.filteredInsights) {
      this.reportService.tabs[0].count = this.filteredInsights.creditReport.length;
      this.reportService.tabs[1].count= this.filteredInsights.bankingHistory.length;
      this.reportService.tabs[2].count = this.filteredInsights.gstHistory.length;
    }
  }

  toggleDetails() {
    this.showCriticalBoxFirst = !this.showCriticalBoxFirst;
  }

  handleClick(index: number): void {
    this.toggleDetails()
    this.reportService.tabs.forEach((tab, i) => (tab.isActive = i === index));
    switch (index) {
      case 0:
        this.filteredCards = this.filteredInsights.creditReport;
        break;
      case 1:
        this.filteredCards = this.filteredInsights.bankingHistory;
        break;
      case 2:
        this.filteredCards = this.filteredInsights.gstHistory;
        break;
      default:
        this.filteredCards = [];
        break;
    }
  }
  openModal(data: any, index: number) {
    this.selectedData = data;
    this.showKnowMoreModal = true;
  }


  closeModal() {
    this.showKnowMoreModal = false;
  }

  setExpandedPanel(panelIndex: number) {
    this.expandedPanel = panelIndex;
  }

  customOptions1: OwlOptions = {
    loop: false,
    rewind: false,
    dots: false,
    autoplay: false,
    navSpeed: 300,
    nav: false,
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
        dots: true,
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
