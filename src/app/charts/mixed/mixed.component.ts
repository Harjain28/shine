import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart, { ChartData, RadialTickOptions } from 'chart.js/auto';

@Component({
  selector: 'app-mixed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mixed.component.html',
  styleUrls: ['./mixed.component.scss']
})
export class MixedComponent {

  @ViewChild('chartCanvas2') chartCanvas2!: ElementRef;

  @Input() MixedJSONData: any;

  private chart2!:Chart;
  mixedValue1: any;
  mixedValue2: any;
  businessLinedata:any;

  ngOnInit(): void{
  }

  ngAfterViewInit(): void {
    const canvas = this.chartCanvas2.nativeElement as HTMLCanvasElement;
    canvas.width = 280; 
    canvas.height = 130; 
    this.mixedChart();

  }

   mixedChart(): void{

    this.mixedValue1 = this.MixedJSONData?.averageBalance.slice(0,6);
    this.mixedValue2 = this.MixedJSONData?.months.slice(0,6);


    this.businessLinedata = this.MixedJSONData?.businessLinedata;

    const dataValues = [...this.mixedValue1]; 
    const backgroundColorsMixed = dataValues.map(value => this.getColor(value));

    const { lowSd, mean, highSd } = this.businessLinedata;


    const chartData2: ChartData = {
      labels: [...this.mixedValue2],
      datasets: [
        {
          // label: 'Horizontal Line Dataset',
          type: 'line',
          data: Array.from({ length: 6 }, () => ({ x: 0, y: mean })),
          borderColor: '#ff6202',
          borderWidth: 1,
          fill: false,
          pointStyle:"line"
        },
        {
          // label: 'Horizontal Line Dataset',
          type: 'line',
          data: Array.from({ length: 6 }, () => ({ x: 0, y: lowSd })),
          borderColor: 'red',
          borderWidth: 1,
          fill: false,
          pointStyle:"line"

        },{
          // label: 'Horizontal Line Dataset',
          type: 'line',
          data: Array.from({ length: 6 }, () => ({ x: 0, y: highSd })),
          borderColor: 'green',
          borderWidth: 1,
          fill: false,
          pointStyle:"line"

        },
        {
          // label: 'Horizontal Line Dataset',
          type: 'line',
          data: [{ x: 0, y:this.businessLinedata?.min},
            { x: 0, y: this.businessLinedata?.min},
            { x: 0, y: this.businessLinedata?.min },
            { x: 0, y: this.businessLinedata?.min},
            { x: 0, y: this.businessLinedata?.min},
            { x: 0, y: this.businessLinedata?.min }],
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



    this.chart2 = new Chart(this.chartCanvas2.nativeElement, {
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
            } as RadialTickOptions
          }
        },
       
      }
    });

   
  }



  getColor(value:any) {
    this.businessLinedata = this.MixedJSONData?.businessLinedata;
    const { lowSd, mean, highSd } = this.businessLinedata;
  
    if (value >= highSd) {
          return '#01ad00'; // green
      } else  if (value >= mean && value <= highSd) {
          return '#006a39'; // dark green
      } else if (value >= lowSd && value <= mean) {
          return '#ff6202'; // orange
      } else {
          return '#ff2424'; // Red
      }
  }
}
