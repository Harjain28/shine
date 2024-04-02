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

  @Input() MixedJSONData4: any;

  private chart4!:Chart;
  mixedValue1: any;
  mixedValue2: any;
  mixedLineValue1: any;
  mixedLineValue2: any;
  mixedLineValue3: any;


  ngOnInit(): void{

  }

  ngAfterViewInit(): void {
  

    this.mixedChart();

  }

  mixedChart(): void{

    this.mixedValue1 = this.MixedJSONData4?.Value1;
    this.mixedValue2 = this.MixedJSONData4?.Value2;
    this.mixedLineValue1 = this.MixedJSONData4?.LineValue1;
    this.mixedLineValue2 = this.MixedJSONData4?.LineValue2;
    this.mixedLineValue3 = this.MixedJSONData4?.LineValue3;

    const dataValues = [ this.mixedValue1[0], this.mixedValue1[1], this.mixedValue1[2], this.mixedValue1[3],
    this.mixedValue1[4], this.mixedValue1[5] , this.mixedValue1[6]]; 

    const dataValues4 = [ this.mixedValue2[0], this.mixedValue2[1], this.mixedValue2[2], this.mixedValue2[3]]; 


    const backgroundColorsMixed = dataValues4.map(value => this.getMixedColor(value));



    const chartData4: ChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
      datasets: [ {
        // label: 'Horizontal Line Dataset',
        type: 'line',
        data: [{ x: this.mixedLineValue1[0].x, y: this.mixedLineValue1[0].y }, 
        { x: this.mixedLineValue1[1].x, y: this.mixedLineValue1[1].y },
        { x: this.mixedLineValue1[2].x, y: this.mixedLineValue1[2].y }, 
        { x: this.mixedLineValue1[3].x, y: this.mixedLineValue1[3].y },
        { x: this.mixedLineValue1[4].x, y: this.mixedLineValue1[4].y }, 
        { x: this.mixedLineValue1[5].x, y: this.mixedLineValue1[5].y }],
        borderColor: 'green',
        borderWidth: 1,
        fill: false,
        pointStyle:"line"
      },
      {
        // label: 'Horizontal Line Dataset',
        type: 'line',
        data: [{ x: this.mixedLineValue2[0].x, y: this.mixedLineValue2[0].y }, 
        { x: this.mixedLineValue2[1].x, y: this.mixedLineValue2[1].y },
        { x: this.mixedLineValue2[2].x, y: this.mixedLineValue2[2].y }, 
        { x: this.mixedLineValue2[3].x, y: this.mixedLineValue2[3].y },
        { x: this.mixedLineValue2[4].x, y: this.mixedLineValue2[4].y }, 
        { x: this.mixedLineValue2[5].x, y: this.mixedLineValue2[5].y }], 
        borderColor: 'yellow',
        borderWidth: 1,
        fill: false,
        pointStyle:"line"
        
      },{
        // label: 'Horizontal Line Dataset',
        type: 'line',
        data: [{ x: this.mixedLineValue3[0].x, y: this.mixedLineValue3[0].y }, 
        { x: this.mixedLineValue3[1].x, y: this.mixedLineValue3[1].y },
        { x: this.mixedLineValue3[2].x, y: this.mixedLineValue3[2].y }, 
        { x: this.mixedLineValue3[3].x, y: this.mixedLineValue3[3].y },
        { x: this.mixedLineValue3[4].x, y: this.mixedLineValue3[4].y }, 
        { x: this.mixedLineValue3[5].x, y: this.mixedLineValue3[5].y }], 
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
