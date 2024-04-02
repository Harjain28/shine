import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-pricing2',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatCardModule,MatTabsModule,CarouselModule],
  templateUrl: './pricing2.component.html',
  styleUrls: ['./pricing2.component.scss']
})
export class Pricing2Component {

}
