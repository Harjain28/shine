import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule, LazyLoadImageModule,CarouselModule,MaterialModule,MatIconModule,MatSlideToggleModule],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
  homeData: any;
  stars: any[] = [1, 2, 3, 4, 5];
  selectedValue: any;
  @Input() testimonialData: any;
  

  
  constructor(private cdr: ChangeDetectorRef) { }

  customOptions3: OwlOptions = {
     loop: false,
   rewind: true,
    dots: false,
    autoplay: true,
    nav: true,
    margin:20,
    items: 2,
    autoWidth:true,
    mouseDrag: false,
    touchDrag: true,

    autoplayTimeout:8000,
    autoplaySpeed: 1500,
    // startPosition: -1,
    // navText: ["", ""],
    navText: ["<img class='navTxtImg' src='./assets/images/homeIcon/left-arrow.svg'>", "<img class='navTxtImg' src='./assets/images/homeIcon/right-arrow.svg'>"],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 2,
      },
    },
  };
  ngOnInit(): void {
    this.cdr.detectChanges();
  }


  countStar(star: any) {
    this.selectedValue = star;
  }

}
