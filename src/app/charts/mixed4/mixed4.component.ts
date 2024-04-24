import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart, { ChartData, RadialTickOptions } from 'chart.js/auto';
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";

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

  constructor(    private breakpointObserver: BreakpointObserver,
    ){}

  ngOnInit(): void{

  }

  ngAfterViewInit(): void {

    this.breakpointObserver
    .observe(['(min-width: 500px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        const canvas = this.chartCanvas4.nativeElement as HTMLCanvasElement;
    canvas.width = 400; 
    canvas.height = 200; 
        
      } else {
        const canvas = this.chartCanvas4.nativeElement as HTMLCanvasElement;
        canvas.width = 309; 
        canvas.height = 206; 
      }
    });
    this.mixedChart();


    this.mixedChart();

  }

  mixedChart(): void{

    this.mixedValue1 = this.MixedJSONData4?.creditCount;
    this.mixedValue2 = this.MixedJSONData4?.months;
    const dataValues = [...this.mixedValue1];

  

    const sortedValues = dataValues.slice().sort((a, b) => b - a);
    const backgroundColorsMixed = dataValues.map(value => this.getMixedColor(value, sortedValues));




    const chartData4: ChartData = {
      labels: [...this.mixedValue2],
      datasets: [ 
      //   {
      //   // label: 'Horizontal Line Dataset',
      //   type: 'line',
      //   data: [{ x: this.mixedLineValue1[0].x, y: this.mixedLineValue1[0].y }, 
      //   { x: this.mixedLineValue1[1].x, y: this.mixedLineValue1[1].y },
      //   { x: this.mixedLineValue1[2].x, y: this.mixedLineValue1[2].y }, 
      //   { x: this.mixedLineValue1[3].x, y: this.mixedLineValue1[3].y },
      //   { x: this.mixedLineValue1[4].x, y: this.mixedLineValue1[4].y }, 
      //   { x: this.mixedLineValue1[5].x, y: this.mixedLineValue1[5].y }],
      //   borderColor: 'green',
      //   borderWidth: 1,
      //   fill: false,
      //   pointStyle:"line"
      // },
      // {
      //   // label: 'Horizontal Line Dataset',
      //   type: 'line',
      //   data: [{ x: this.mixedLineValue2[0].x, y: this.mixedLineValue2[0].y }, 
      //   { x: this.mixedLineValue2[1].x, y: this.mixedLineValue2[1].y },
      //   { x: this.mixedLineValue2[2].x, y: this.mixedLineValue2[2].y }, 
      //   { x: this.mixedLineValue2[3].x, y: this.mixedLineValue2[3].y },
      //   { x: this.mixedLineValue2[4].x, y: this.mixedLineValue2[4].y }, 
      //   { x: this.mixedLineValue2[5].x, y: this.mixedLineValue2[5].y }], 
      //   borderColor: 'yellow',
      //   borderWidth: 1,
      //   fill: false,
      //   pointStyle:"line"
        
      // },
      // {
      //   // label: 'Horizontal Line Dataset',
      //   type: 'line',
      //   data: [{ x: this.mixedLineValue3[0].x, y: this.mixedLineValue3[0].y }, 
      //   { x: this.mixedLineValue3[1].x, y: this.mixedLineValue3[1].y },
      //   { x: this.mixedLineValue3[2].x, y: this.mixedLineValue3[2].y }, 
      //   { x: this.mixedLineValue3[3].x, y: this.mixedLineValue3[3].y },
      //   { x: this.mixedLineValue3[4].x, y: this.mixedLineValue3[4].y }, 
      //   { x: this.mixedLineValue3[5].x, y: this.mixedLineValue3[5].y }], 
      //   borderColor: 'red',
      //   borderWidth: 1,
      //   fill: false,
      //   pointStyle:"line"

        
        
      // },
      {
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
            display: false, // Set to false to hide the legend
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
            beginAtZero: true,
            ticks: {
              callback: function (value: any, index: any, values: any) {
                const roundedTurnover = Math.round(value);
                if (roundedTurnover >= 10000000) {
                  return (roundedTurnover / 10000000).toFixed(0) + ' Cr';
                } else if (roundedTurnover >= 100000) {
                  return (roundedTurnover / 100000).toFixed(0) + ' L';
                } else if (roundedTurnover >= 1000) {
                  return (roundedTurnover / 1000).toFixed(0) + ' K';
                } else {
                  return roundedTurnover.toString();
                }
              },
            } as RadialTickOptions,
          },
        },
      },
    });

   
  }


  getMixedColor(value: number, sortedValues:any) {
    const index = sortedValues.indexOf(value);
    if(index === 0){
      return '#12BA9B'
    }
    else if (index > 0 && index <= 2) {
      return '#6A2FC2'; 
    } else if (index > 2 && index <= 4) {
      return '#C3E128'; 
    } else if (index > 4 && index <= 6) {
      return '#FF7B24'; 
    } else {
      // Default color if value does not fall into any range
      return '#EC1111'; // Black color (you can change it to any default color)
    }
  }
}