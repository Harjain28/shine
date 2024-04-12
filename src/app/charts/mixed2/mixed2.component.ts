import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart, { ChartData, RadialTickOptions } from 'chart.js/auto';

@Component({
  selector: 'app-mixed2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mixed2.component.html',
  styleUrls: ['./mixed2.component.scss'],
})
export class Mixed2Component {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  @Input() MixedJSONData2: any;

  private chart!: Chart;
  mixedValue1: any;
  mixedValue2: any;
  mixedLineValue1: any;
  mixedLineValue2: any;
  mixedLineValue3: any;

  ngOnInit(): void {
    console.log(this.MixedJSONData2, 'MixedJSONData2');
  }

  ngAfterViewInit(): void {
    const canvas = this.chartCanvas.nativeElement as HTMLCanvasElement;
    canvas.width = 300;
    canvas.height = 130;
    this.mixedChart();
  }

  mixedChart(): void {
    this.mixedValue1 = this.MixedJSONData2?.turnovers;
    this.mixedValue2 = this.MixedJSONData2?.months;
    // this.mixedLineValue1 = this.MixedJSONData2?.LineValue1;
    // this.mixedLineValue2 = this.MixedJSONData2?.LineValue2;
    // this.mixedLineValue3 = this.MixedJSONData2?.LineValue3;
    console.log(this.mixedValue1, 'mixed');
    const dataValues = [...this.mixedValue1];

  

    const sortedValues = dataValues.slice().sort((a, b) => b - a);
    const backgroundColorsMixed = dataValues.map(value => this.getColor(value, sortedValues));



    const chartData2: ChartData = {
      labels: [...this.mixedValue2],
      datasets: [
        //    {
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

        // },{
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
          data: dataValues,
          backgroundColor: backgroundColorsMixed,
          borderWidth: 1,
        },
      ],
    };

    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'bar',
      data: chartData2,
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

  getMixedColor(value: any): any {
    throw new Error('Method not implemented.');
  }


 getColor(value:any, sortedValues:any) {
    const index = sortedValues.indexOf(value);
    if (index === 0) {
        return '#400993'; // First value color
    } else if (index > 0 && index <= 2) {
        return '#6A2FC2'; // Second and third value color
    } else if (index > 2 && index <= 4) {
        return '#A070E8'; // Fourth and fifth value color
    } else {
        return '#9E77D6'; // Rest of the values color
    }
}

}
