import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart, { ChartData, RadialTickOptions } from 'chart.js/auto';
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";

@Component({
  selector: 'app-mixed3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mixed3.component.html',
  styleUrls: ['./mixed3.component.scss']
})
export class Mixed3Component {

  @ViewChild('chartCanvas3') chartCanvas3!: ElementRef;

  @Input() MixedJSONData3: any;

  private chart3!:Chart;
  mixedValue1: any;
  mixedValue2: any;
  mixedLineValue1: any;
  mixedLineValue2: any;
  mixedLineValue3: any;
  businessLinedata: any;
  
  constructor(    private breakpointObserver: BreakpointObserver,
    ){}

  ngOnInit(): void{

  }

  ngAfterViewInit(): void {
  
    this.breakpointObserver
    .observe(['(min-width: 400px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        const canvas = this.chartCanvas3.nativeElement as HTMLCanvasElement;
    canvas.width = 600; 
    canvas.height = 260; 
        
      } else {
        const canvas = this.chartCanvas3.nativeElement as HTMLCanvasElement;
    canvas.width = 340; 
    canvas.height = 250; 
      }
    });
    this.mixedChart();

  }

  mixedChart(): void{
    this.mixedValue1 = this.MixedJSONData3?.averageBalance;
    this.mixedValue2 = this.MixedJSONData3?.months;
    

    const dataValues = [...this.mixedValue1]; 


    this.businessLinedata = this.MixedJSONData3?.businessLinedata;

    const sortedValues = dataValues.slice().sort((a, b) => b - a);
    const backgroundColorsMixed = dataValues.map(value => this.getMixedColor(value, sortedValues));

    const { lowSd, mean, highSd, min } = this.businessLinedata;





    const chartData3: ChartData = {
      labels: [...this.mixedValue2],
      datasets: [
        {
          // label: 'Horizontal Line Dataset',
          type: 'line',
          data: Array.from({ length: 12 }, () => ({ x: 0, y: mean })),
          borderColor: 'green',
          borderWidth: 1,
          fill: false,
          pointStyle:"line"
        },
        {
          // label: 'Horizontal Line Dataset',
          type: 'line',
          data: Array.from({ length: 12 }, () => ({ x: 0, y: lowSd })),
          borderColor: 'yellow',
          borderWidth: 1,
          fill: false,
          pointStyle:"line"

        },{
          // label: 'Horizontal Line Dataset',
          type: 'line',
          data: Array.from({ length: 12 }, () => ({ x: 0, y: highSd })),
          borderColor: 'red',
          borderWidth: 1,
          fill: false,
          pointStyle:"line"

        },
        {
          // label: 'Horizontal Line Dataset',
          type: 'line',
          data: Array.from({ length: 12 }, () => ({ x: 0, y: min })),
          borderColor: 'gray',
          borderWidth: 1,
          fill: false,
          pointStyle:"line"

        },
      {
        // label: 'Bar Dataset',
        type: 'bar',
        data: dataValues ,
        backgroundColor: backgroundColorsMixed,
        borderWidth: 1,
        
      }]
    };



    this.chart3 = new Chart(this.chartCanvas3.nativeElement, {
      type: 'bar',
      data: chartData3,
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
