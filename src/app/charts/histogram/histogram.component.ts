import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart, { ChartData } from 'chart.js/auto';

@Component({
  selector: 'app-histogram',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.scss']
})
export class HistogramComponent {

  @ViewChild('histogramCanvas') histogramCanvas!: ElementRef; 

  @Input() HistogramJSONData: any;

  private histogramChart!: Chart; 
  histogramValues: any;

  ngAfterViewInit(): void {
  

    this.createHistogramChart();

  }

  private createHistogramChart(): void {

    this.histogramValues = this.HistogramJSONData?.Values;

    const histogramDataValues = [this.histogramValues[0], this.histogramValues[1], this.histogramValues[2], this.histogramValues[3],
    this.histogramValues[4], this.histogramValues[5], this.histogramValues[6], this.histogramValues[7], this.histogramValues[8],
    this.histogramValues[9], this.histogramValues[10], this.histogramValues[11]]; 
    const histogramLabels = ['', '', '', '','', '', '', '','', '', '', '']; 
    const backgroundColors = histogramDataValues.map(value => (value < 0 ? 'red' : 'green'));

    const histogramChartData: ChartData = {
      labels: histogramLabels,
      datasets: [{
        data: histogramDataValues,
        backgroundColor: backgroundColors, 
        borderColor: 'rgba(75, 192, 192, 1)', 
        borderWidth: 1,
        
      }]
    };
  
    this.histogramChart = new Chart(this.histogramCanvas.nativeElement, {
      type: 'bar',
      data: histogramChartData,
      options: {
        indexAxis: 'x', 
        
        plugins: {
          legend: {
            display: false // Set to false to hide the legend
          }
        },

        scales: {
          y: {
            beginAtZero: true,
            display: false
          },
          x: {
            display: false
          },  
        }
      }
    });
  }
}
