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

    this.histogramValues = this.HistogramJSONData?.cashFlow;

    const histogramDataValues = [...this.histogramValues]; 
    const histogramLabels = Array.from({ length: histogramDataValues.length }, () => ''); 
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
            display: false 
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
