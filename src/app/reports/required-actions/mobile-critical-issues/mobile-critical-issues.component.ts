import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-mobile-critical-issues',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, CarouselModule],
  templateUrl: './mobile-critical-issues.component.html',
  styleUrls: ['./mobile-critical-issues.component.scss']
})
export class MobileCriticalIssuesComponent {

  expandedPanel: number = 0; // Start with the first panel expanded
  showCriticalBoxFirst: boolean = true;
  showKnowMoreModal: boolean = false;

  toggleDetails() {
    this.showCriticalBoxFirst = !this.showCriticalBoxFirst;
  }

  openModal() {
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
