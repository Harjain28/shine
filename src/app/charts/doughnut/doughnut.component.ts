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

  ngOnInit():void{


  }

  ngAfterViewInit(): void {
  

    this.createDonutChart();

  }

  private createDonutChart():void{
    this.doughtValues = this.doughtnutJSONData?.by_amount;
    this.doughtnutColor = ChartsJsonData?.Doughtnut?.Color;

    const donutDataValues = [...this.doughtValues]; 
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
