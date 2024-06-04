import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart, { ChartData,RadialTickOptions } from 'chart.js/auto';

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
  turnoverLineData: any;
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const canvas = this.chartCanvas.nativeElement as HTMLCanvasElement;
    canvas.width = 270;
    canvas.height = 130;
    this.mixedChart();
  }

  mixedChart(): void {
    this.mixedValue1 = this.MixedJSONData2?.turnovers.slice(6,12);
    this.mixedValue2 = this.MixedJSONData2?.months.slice(6,12);
    
    this.turnoverLineData = this.MixedJSONData2?.turnoverLineData;

    const dataValues = [...this.mixedValue1];
    
    const backgroundColorsMixed = dataValues.map(value => this.getColor(value));

    const { lowSd, mean, highSd } = this.turnoverLineData;
    const adjustedLowSd = lowSd < 0 ? null : lowSd;




    const chartData2: ChartData = {
      labels: [...this.mixedValue2],
      datasets: [
           {
            label: 'Mean Stability Limit',          
          type: 'line',
          data: Array.from({ length: 6 }, () => ({ x: 0, y: mean })),
          borderColor: '#FF7B24',
          borderWidth: 1,
          fill: false,
          pointStyle:"line"
        },
        {
          label: 'Lower Stability Limit',          
          type: 'line',
          data: Array.from({ length: 6 }, () => ({ x: 0, y: adjustedLowSd })),
          borderColor: '#EC1111',
          borderWidth: 1,
          fill: false,
          pointStyle:"line"

        },{
          label: 'Upper Stability Limit',          
          type: 'line',
          data: Array.from({ length: 6 }, () => ({ x: 0, y: highSd })),
          borderColor: '#12BA9B',
          borderWidth: 1,
          fill: false,
          pointStyle:"line"

        },
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
            display: false,
          },
          tooltip: {
            mode: 'nearest',
            intersect: false,
            
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
              },
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

  formatTurnover(turnover: any) {
    const roundedTurnover = Math.round(turnover);
    if (roundedTurnover >= 10000000) {
      return (roundedTurnover / 10000000).toFixed(0) + 'Cr';
    } else if (roundedTurnover >= 100000) {
      return (roundedTurnover / 100000).toFixed(0) + 'L';
    } else if (roundedTurnover >= 1000) {
      return (roundedTurnover / 1000).toFixed(0) + 'K';
    } else {
      return roundedTurnover.toString();
    }
  }

  getMixedColor(value: any): any {
    throw new Error('Method not implemented.');
  }


 getColor(value:any) {
  this.turnoverLineData = this.MixedJSONData2?.turnoverLineData;
  const { lowSd, mean, highSd } = this.turnoverLineData;

  if (value >= highSd) {
    return '#00977a'; // green
} else  if (value >= mean && value <= highSd) {
    return '#00c9a3'; // dark green
} else if (value >= lowSd && value <= mean) {
    return '#ff6202'; // orange
} else {
    return '#ff2424'; // Red
}
}

}
