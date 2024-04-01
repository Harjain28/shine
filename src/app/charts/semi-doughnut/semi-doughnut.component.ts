import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart, { ChartData } from 'chart.js/auto';

@Component({
  selector: 'app-semi-doughnut',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './semi-doughnut.component.html',
  styleUrls: ['./semi-doughnut.component.scss']
})
export class SemiDoughnutComponent {
  @ViewChild('semiDoughnutCanvas') semiDoughnutCanvas!: ElementRef;

  @Input() semiDoughtnutJSONData :any;
  private semiDoughnutChart!: Chart;
  sdValues: any;
  sdColor: any;


  ngAfterViewInit(): void {

    this.createSemiDoughnutChart();

  }

  private createSemiDoughnutChart(): void {

    this.sdValues = this.semiDoughtnutJSONData?.Values;
    this.sdColor = this.semiDoughtnutJSONData?.Color;

    const dataValues = [this.sdValues[0],this.sdValues[1]]; 
    const backgroundColors = [ this.sdColor[0], this.sdColor[1]]
  
    const chartData: ChartData = {
      datasets: [{
        data: dataValues,
        backgroundColor: backgroundColors,
      }]
    };
  
    this.semiDoughnutChart = new Chart(this.semiDoughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: chartData,
      options: {
        cutout: '80%',
        rotation: 85 * Math.PI,
        circumference: 59 * Math.PI,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'Semi-Doughnut Chart'
          }
        }
      }as any
    });
   
  }
}
