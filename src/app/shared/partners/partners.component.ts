import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent, CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {

  customOptions2: OwlOptions = {
    loop: false,
    rewind: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 300,
    nav: false,
    autoplayTimeout:8000,
    autoplaySpeed: 1500,
    
    // navText: ["", ""],
    // navText: ["<img class='navTxtImg' src='./assets/images/homeIcon/left-a.svg'>", "<img class='navTxtImg' src='./assets/images/homeIcon/right-a.svg'>"],
    responsive: {
      0: {
        items: 2,
      
      },
      400: {
        items: 3,
      },
      740: {
        items: 5,
      },
      940: {
        items: 5,
      },
    },
  };

}
