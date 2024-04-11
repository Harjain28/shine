import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-actions-required',
  standalone: true,
  imports: [CommonModule,MatProgressBarModule,MatExpansionModule,MatFormFieldModule,MatCheckboxModule,MatIconModule,CarouselModule],
  templateUrl: './actions-required.component.html',
  styleUrls: ['./actions-required.component.scss','../reports.component.scss']
})
export class ActionsRequiredComponent {

  constructor(){

  }

  customOptions4: OwlOptions = {
    loop: false,
  rewind: true,
   dots: true,
   autoplay: false,
   navSpeed: 300,
   nav: false,
   margin:10,
   mouseDrag: false,
   touchDrag: true,


   autoplayTimeout:8000,
   autoplaySpeed: 1500,
   // navText: ["", ""],
   navText: ["<img class='navTxtImg' src='./assets/images/homeIcon/left-arrow.svg'>", "<img class='navTxtImg' src='./assets/images/homeIcon/right-arrow.svg'>"],
   responsive: {
     0: {
       items: 1,
       dots: true,
     },
     400: {
       items: 1,
     },
     740: {
       items: 1,
     },
     940: {
       items: 1,
     },
   },
 };

}
