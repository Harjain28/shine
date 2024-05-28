import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pricing1Component } from '../pricing1/pricing1.component';
import { Pricing2Component } from '../pricing2/pricing2.component';

@Component({
  selector: 'app-pricing-common',
  standalone: true,
  imports: [CommonModule,Pricing1Component,Pricing2Component],
  templateUrl: './pricing-common.component.html',
  styleUrls: ['./pricing-common.component.scss']
})
export class PricingCommonComponent {
  planCount: any;

  constructor(){

  }

  ngOnInit(): void{
    this.planCount = localStorage.getItem("plan_count");
  }

}
