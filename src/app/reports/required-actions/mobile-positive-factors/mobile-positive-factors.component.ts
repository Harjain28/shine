import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  selector: 'app-mobile-positive-factors',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, CarouselModule],
  templateUrl: './mobile-positive-factors.component.html',
  styleUrls: ['./mobile-positive-factors.component.scss', '../mobile-critical-issues/mobile-critical-issues.component.scss']
})
export class MobilePositiveFactorsComponent {
  @Input() ActionReqReportsMobileData: any;
  expandedPanel: number | null = null; // Keep track of the expanded panel
  showCriticalBoxFirst: boolean = true;
  showKnowMoreModal: boolean = false;

  tabs: Tab[] = [];
  cardData: any = {};
  actionSummaryData: any;
  filteredCards: Card[] = []; 
  chunkedCards: Card[][] = []; // Add this property
  filteredInsights: any;
  selectedCard: Card | null = null;
  selectedData: Card[] =[];
  @Output() scrollToSectionEvent = new EventEmitter<string>();
  
  constructor(public reportService: ReportService) {}

  ngOnInit(): void {
    this.reportService.initializeData(reportStatciData, this.ActionReqReportsMobileData);
    const actionSummaryData = this.ActionReqReportsMobileData?.insights?.actionSummary;
    this.filteredInsights = this.reportService.concatenateInsights(actionSummaryData, 'positive');

    if (this.filteredInsights) {
      this.updateTabCounts();
      this.filteredCards = this.filteredInsights.creditReport;
      this.chunkedCards = this.chunkArray(this.filteredCards, 5); // Split the array into chunks
    }
  }

  onCriticalClick(header: any) {
    const trimmedHeader = header?.trim();
    this.scrollToSectionEvent.emit(trimmedHeader);
  }
  

  updateTabCounts(): void {
    if (this.filteredInsights) {
      this.reportService.tabs[0].count = this.filteredInsights.creditReport.length;
      this.reportService.tabs[1].count = this.filteredInsights.bankingHistory.length;
      this.reportService.tabs[2].count = this.filteredInsights.gstHistory.length;
    }
  }

  handleClick(index: number): void {
    if (this.expandedPanel === index) {
        this.expandedPanel = null;
    } else {
        this.expandedPanel = index;
        this.showCriticalBoxFirst = false; // Ensure the critical box first is set to false when any panel is opened
    }
    this.reportService.tabs.forEach((tab, i) => (tab.isActive = i === index));
    let data;
    switch (index) {
        case 0:
            data = this.filteredInsights.creditReport;
            break;
        case 1:
            data = this.filteredInsights.bankingHistory;
            break;
        case 2:
            data = this.filteredInsights.gstHistory;
            break;
        default:
            data = [];
            break;
    }
    this.updateFilteredCards(data); 
    this.toggleDetails();
}

toggleDetails() {
    if (this.expandedPanel === null) {
        this.showCriticalBoxFirst = !this.showCriticalBoxFirst;
    }
}


  updateFilteredCards(cards: Card[]): void {
    this.filteredCards = cards;
    this.chunkedCards = this.chunkArray(this.filteredCards, 5);
  }

  openModal(data: any, index: number) {
    this.selectedCard = data;
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
      "<span><img class='navTxtImg' src='./assets/images/homeImage/right-arrow.svg'></span>",
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

 chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const results: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    results.push(array.slice(i, i + chunkSize));
  }
  return results;
}
}
