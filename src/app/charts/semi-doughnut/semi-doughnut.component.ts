import { Component, ElementRef, ViewChild } from '@angular/core';
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

  private semiDoughnutChart!: Chart;


  ngAfterViewInit(): void {

    this.createSemiDoughnutChart();

  }

  private createSemiDoughnutChart(): void {
    const dataValues = [50,40]; // Example data values
    const labels = ['A']; // Example labels
    const backgroundColors = [ '#12BA9B','#FFD700']
    // Example background colors
  
    const chartData: ChartData = {
    //  labels: labels,
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
