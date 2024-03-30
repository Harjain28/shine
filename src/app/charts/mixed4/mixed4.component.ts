import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart, { ChartData, RadialTickOptions } from 'chart.js/auto';

@Component({
  selector: 'app-mixed4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mixed4.component.html',
  styleUrls: ['./mixed4.component.scss']
})
export class Mixed4Component {

  @ViewChild('chartCanvas4') chartCanvas4!: ElementRef;

  private chart4!:Chart;


  ngOnInit(): void{

  }

  ngAfterViewInit(): void {
  

    this.mixedChart();

  }

   mixedChart(): void{
    const dataValues = [ 20, 110, 67, 30, 20, 35 , 10]; 

    const dataValues4 = [ 110, 82, 67, 45]; 


    const backgroundColorsMixed = dataValues4.map(value => this.getMixedColor(value));



    const chartData4: ChartData = {
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
        data: dataValues ,
        backgroundColor: backgroundColorsMixed,
        borderWidth: 1,
        
      }]
    };



    this.chart4 = new Chart(this.chartCanvas4.nativeElement, {
      type: 'bar',
      data: chartData4,
      options: {
        plugins: {
          legend: {
            display: false // Set to false to hide the legend
          }
        },
        scales: {
          x:{
            grid:{
              display: false
            }

          },
          y: {
            grid: {
              display: false
            },
            beginAtZero: true,
            ticks: {
              callback: function(value: any, index: any, values: any) {
                return value + ' L';
              }
            } as RadialTickOptions
          }
        },
       
      }
    });

   
  }


   private getMixedColor(value: number): string {
    if(value > 100){
      return '#12BA9B'
    }
    else if (value >= 80 && value <= 100) {
      return '#6A2FC2'; 
    } else if (value >= 60 && value < 80) {
      return '#C3E128'; 
    } else if (value >= 40 && value < 60) {
      return '#FF7B24'; 
    } else {
      // Default color if value does not fall into any range
      return '#EC1111'; // Black color (you can change it to any default color)
    }
  }
}
