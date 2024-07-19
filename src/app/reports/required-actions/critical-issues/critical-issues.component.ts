import { Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { reportStatciData } from 'src/app/JsonFiles/reportpageStaticData'; // Adjust path as per your file structure
import { ReportService } from '../shared.service';

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
  selector: 'app-critical-issues',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './critical-issues.component.html',
  styleUrls: ['./critical-issues.component.scss', '../required-actions.component.scss'],
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
  tabs: Tab[] = [];
  cardData: any = {};
  actionSummaryData: any;
  filteredCards: Card[] = []; 
  filteredInsights: any;
  selectedCard: Card | null = null;
  @Output() scrollToSectionEvent = new EventEmitter<string>();
  
  constructor(public reportService: ReportService, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.ActionReqReportsData) {
    this.reportService.initializeData(reportStatciData, this.ActionReqReportsData);
    }

    const actionSummaryData = this.ActionReqReportsData?.insights?.actionSummary;
    if (actionSummaryData) {
    this.filteredInsights = this.reportService.concatenateInsights(actionSummaryData , 'negative');

    if (this.filteredInsights) {
      this.updateTabCounts();
      this.filteredCards = this.filteredInsights.creditReport; 
    }
    console.log( this.filteredInsights , "filteredInsights");
  }
  }


  onCriticalClick(header: any) {
    this.scrollToSectionEvent.emit(header);
  }

  handleClick(index: number): void {
    // Handle tab click
    if (this.filteredInsights) {
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
  }

  updateTabCounts(): void {
    if (this.filteredInsights) {
      this.reportService.tabs[0].count = this.filteredInsights.creditReport.length;
      this.reportService.tabs[1].count= this.filteredInsights.bankingHistory.length;
      this.reportService.tabs[2].count = this.filteredInsights.gstHistory.length;
    }
  }

  openModal(card: Card): void {
    this.selectedCard = card;
    this.showKnowMoreModal = true;
  }

  closeModal(): void {
    this.showKnowMoreModal = false;
    this.selectedCard = null;
  }

 
  toggleDetails(index?: number) {
    this.showCriticalBoxFirst = !this.showCriticalBoxFirst;
    if (index !== undefined) {
      this.handleClick(index); 
    }
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
      "<span><img class='navTxtImg' src='./assets/images/homeImage/left-arrow.svg'></span>",
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
