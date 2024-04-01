import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-probability-of-loan',
  standalone: true,
  imports: [CommonModule,MatProgressBarModule,MatExpansionModule,MatFormFieldModule,MatCheckboxModule,MatIconModule,CarouselModule],
  templateUrl: './probability-of-loan.component.html',
  styleUrls: ['./probability-of-loan.component.scss','../reports.component.scss']
})
export class ProbabilityOfLoanComponent {

  visibleOffers!: boolean;

  customOptions4: OwlOptions = {
    loop: false,
  rewind: true,
   dots: true,
   autoplay: true,
   navSpeed: 300,
   nav: false,
   margin:8,
   mouseDrag: false,
   touchDrag: true,

   autoplayTimeout:8000,
   autoplaySpeed: 1500,
   // navText: ["", ""],
   navText: ["<img class='navTxtImg' src='./assets/images/homeIcon/left-arrow.svg'>", "<img class='navTxtImg' src='./assets/images/homeIcon/right-arrow.svg'>"],
   responsive: {
     0: {
       items: 1.2,
       dots: true,
     },
     400: {
       items: 1.3,
     },
     740: {
       items: 2,
     },
     940: {
       items: 3,
     },
   },
 };


  constructor(){

  }

  
  moreOffers(){
    this.visibleOffers = true;
  }

}
