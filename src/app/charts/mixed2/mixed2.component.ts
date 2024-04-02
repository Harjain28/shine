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

  @Input() MixedJSONData2:any;

  private chart!:Chart;
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

    this.mixedValue1 = this.MixedJSONData2?.Value1;
    this.mixedValue2 = this.MixedJSONData2?.Value2;
    this.mixedLineValue1 = this.MixedJSONData2?.LineValue1;
    this.mixedLineValue2 = this.MixedJSONData2?.LineValue2;
    this.mixedLineValue3 = this.MixedJSONData2?.LineValue3;

    const dataValues = [ this.mixedValue1[0], this.mixedValue1[1], this.mixedValue1[2], this.mixedValue1[3],
    this.mixedValue1[4], this.mixedValue1[5] , this.mixedValue1[6]]; 

    const dataValues2 = [ this.mixedValue2[0], this.mixedValue2[1], this.mixedValue2[2], this.mixedValue2[3]]; 


    const backgroundColorsMixed = dataValues2.map(value => this.getColor(value));



    const chartData2: ChartData = {
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



    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'bar',
      data: chartData2,
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
  getMixedColor(value: any): any {
    throw new Error('Method not implemented.');
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
