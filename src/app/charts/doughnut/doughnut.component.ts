import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart, { ChartData } from 'chart.js/auto';
import { ChartsJsonData } from 'src/app/JsonFiles/ChartJSONData';


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
  colorDots: any;

  ngOnInit():void{

    const colorDotsString = localStorage.getItem('colorDots');
    if (colorDotsString) {
      this.colorDots = JSON.parse(colorDotsString);
      console.log(this.colorDots,"hhh")
    }
  }

  ngAfterViewInit(): void {
  

    this.createDonutChart();

  }

  private createDonutChart():void{
    this.doughtValues = this.doughtnutJSONData?.byAmount;
    this.doughtnutColor = ChartsJsonData?.Doughtnut?.Color;

    console.log(this.doughtValues,"hhh")
    const donutDataValues = [...this.doughtValues]; 
    const donutColors = [...this.colorDots];

   
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
