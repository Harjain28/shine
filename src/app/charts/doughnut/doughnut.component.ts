import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart, { ChartData } from 'chart.js/auto';


@Component({
  selector: 'app-doughnut',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent {
  @ViewChild('donut') donut!: ElementRef;

  @Input() doughtnutJSONData:any;


  private donutChart!: Chart;
  doughtValues: any;
  doughtnutColor: any;

  ngOnInit():void{


  }

  ngAfterViewInit(): void {
  

    this.createDonutChart();

  }

  private createDonutChart():void{

    this.doughtValues = this.doughtnutJSONData?.Values;
    this.doughtnutColor = this.doughtnutJSONData?.Color;

    const donutDataValues = [this.doughtValues[0], this.doughtValues[1], this.doughtValues[2],this.doughtValues[3]]; 
    const donutColors = [this.doughtnutColor[0], this.doughtnutColor[1], this.doughtnutColor[2], this.doughtnutColor[3]]; 

   
    const donutChartData: ChartData = {
      datasets: [{
        data: donutDataValues,
        backgroundColor: donutColors
      }]
    };

    this.donutChart = new Chart(this.donut.nativeElement, {
      type: 'doughnut',
      data: donutChartData
    });
  }

}
