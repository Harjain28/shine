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
    .observe(['(min-width: 600px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        const canvas = this.chartCanvas4.nativeElement as HTMLCanvasElement;
    canvas.width = 400; 
    canvas.height = 200; 
        
      } else {
        const canvas = this.chartCanvas4.nativeElement as HTMLCanvasElement;
        canvas.width = 270; 
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

    const value = 2;



    const chartData4: ChartData = {
      labels: [...this.mixedValue2],
      datasets: [ 
        {
          type: 'line',
          data: Array.from({ length: 12 }, () => ({ x: 0, y: value })),
          borderColor: '#EC1111',
          borderWidth: 1,
          fill: false,
          pointStyle:"line"

        },
      {
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
          tooltip: {
            callbacks: {
              label: function (context: any) {
                let label = context.dataset.label || '';
  
                if (label) {
                  label += ': ';
                }
                if (context.parsed.y !== null) {
                  label += new Intl.NumberFormat('en-IN').format(context.parsed.y);
                }
                return label;
              }
            },
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
    if (value <= 2) {
      return '#ff2424'; // Red
  }
  
  switch(true) {
      case index >= 0 && index <= 1:
          return '#00977a'; // Green
      case index >= 2 && index <= 5:
          return '#00c9a3'; // Dark green
      case index >= 6 && index <= 9:
          return '#ff6202'; // Orange
      default:
          return '#ff6202'; // Orange
  }

}

  
}