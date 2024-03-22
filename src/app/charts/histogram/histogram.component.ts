import { Component, ElementRef, ViewChild } from '@angular/core';
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

  private histogramChart!: Chart; 

  ngAfterViewInit(): void {
  

    this.createHistogramChart();

  }

  private createHistogramChart(): void {
    const histogramDataValues = [-10, -20, 40, 90, 47, 60, -70, -80, -90, 26, 40, 30]; 
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
