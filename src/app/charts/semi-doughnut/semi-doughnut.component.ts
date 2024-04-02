import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart, { ChartData, registerables } from 'chart.js/auto';

@Component({
  selector: 'app-semi-doughnut',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './semi-doughnut.component.html',
  styleUrls: ['./semi-doughnut.component.scss']
})
export class SemiDoughnutComponent {

  @ViewChild('chartCa', { static: true }) chartCa!: ElementRef;

  ngOnInit(): void {
    this.createChart();
  }

  private createChart(): void {
    const ctx = this.chartCa.nativeElement.getContext('2d');

    Chart.register(...registerables);
    

    const gradient = ctx.createLinearGradient(0,0,300,0);
    gradient.addColorStop(0, 'rgba(255, 215, 0, 0.9)'); 
    gradient.addColorStop(1, 'rgba(0, 128, 0, 0.9)'); 
     new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [600, 300],
            backgroundColor: gradient, 
            hoverBackgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        cutout: '80%',
        rotation: 85 * Math.PI,
        circumference: 59 * Math.PI,
        plugins: {
          legend: {
            display: false,
          },
        
        },
        events: [],

        
      },
    });
    
  }

  
}

