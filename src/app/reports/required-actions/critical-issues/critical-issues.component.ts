import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent, CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-critical-issues',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './critical-issues.component.html',
  styleUrls: ['./critical-issues.component.scss', '../required-actions.component.scss']
})
export class CriticalIssuesComponent {

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
