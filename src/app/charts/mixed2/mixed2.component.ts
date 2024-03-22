import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart, { ChartData, RadialTickOptions } from 'chart.js/auto';

@Component({
  selector: 'app-mixed2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mixed2.component.html',
  styleUrls: ['./mixed2.component.scss']
})
export class Mixed2Component {

  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  private chart!:Chart;


  ngOnInit(): void{

  }

  ngAfterViewInit(): void {
  

    this.mixedChart();

  }

  private mixedChart(): void{
    const dataValues1 = [ 20, 110, 67, 30, 20, 35 , 10]; 

    const backgroundColors = dataValues1.map(value => this.getColor(value));

  
    // Increase line length by extending the x-axis values
  
    const chartData1: ChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
      datasets: [ {
        // label: 'Horizontal Line Dataset',
        type: 'line',
        data: [{ x: 0, y: 150 }, { x: 8, y: 150 },{ x: 0, y: 150 }, { x: 8, y: 150 },{ x: 0, y: 150 }, { x: 8, y: 150 }],
        borderColor: 'green',
        borderWidth: 1,
        fill: false,
        pointStyle:"line"
      },
      {
        // label: 'Horizontal Line Dataset',
        type: 'line',
        data: [{ x: 0, y: 60 }, { x: 8, y: 60 },{ x: 0, y: 60 }, { x: 8, y: 60 },{ x: 0, y: 60 }, { x: 8, y: 60 }], 
        borderColor: 'yellow',
        borderWidth: 1,
        fill: false,
        pointStyle:"line"
        
      },{
        // label: 'Horizontal Line Dataset',
        type: 'line',
        data: [{ x: 0, y: 80 }, { x: 8, y: 80 },{ x: 0, y: 80 }, { x: 8, y: 80 },{ x: 0, y: 80 }, { x: 8, y: 80 }], 
        borderColor: 'red',
        borderWidth: 1,
        fill: false,
        pointStyle:"line"

        
        
      },{
        // label: 'Bar Dataset',
        type: 'bar',
        data: dataValues1,
        backgroundColor: backgroundColors,
        borderWidth: 1,
        
      }]
    };

  
   
  
    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'bar',
      data: chartData1,
      options: {
        plugins: {
          legend: {
            display: false // Set to false to hide the legend
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value: any, index: any, values: any) {
                return value + ' L';
              }
            } as RadialTickOptions
           
          }
        },
        
      // Other chart options
  } 
    });

  }

  private getColor(value: number): string {
    if(value > 100){
      return '#400993'
    }
    else if (value >= 80 && value < 100) {
      return '#6A2FC2'; 
    } else if (value >= 60 && value < 80) {
      return '#A070E8'; 
    } else if (value >= 40 && value < 60) {
      return '#9E77D6'; 
    } else {
      return '#A070E2'; 
    }
  }
}
