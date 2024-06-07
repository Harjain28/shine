import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart, { ChartData, RadialTickOptions } from 'chart.js/auto';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent {

  @ViewChild('chartCanvas3') chartCanvas3!: ElementRef;

  @Input() barJSONData: any;

  private chart3!: Chart;
  barValues: any;
  barLabels: any;
  barvalues: any;
  fullData: any;

  ngOnInit(): void {
    this.barvalues = this.barJSONData?.creditCount.slice(6, 12);
    this.barLabels = this.barJSONData?.months.slice(6, 12);
  }

  ngAfterViewInit(): void {
    const canvas = this.chartCanvas3.nativeElement as HTMLCanvasElement;
    canvas.width = 270;
    canvas.height = 130;
    this.mixedChart();
  }

  mixedChart(): void {
    const dataValues = [...this.barvalues];
    const sortedValues = dataValues.slice().sort((a, b) => b - a);
    const backgroundColors = dataValues.map(value => this.getColor(value, sortedValues));
    const value = 2;

    const chartData3: ChartData = {
      labels: [...this.barLabels],
      datasets: [
        {
          type: 'line',
          data: Array.from({ length: 6 }, (_, index) => ({ x: index, y: value })),
          borderColor: '#EC1111',
          borderWidth: 1,
          fill: false,
          pointStyle: "line"
        },
        {
          type: 'bar',
          data: dataValues,
          backgroundColor: backgroundColors,
          borderWidth: 1,
        }
      ]
    };

    this.chart3 = new Chart(this.chartCanvas3.nativeElement, {
      type: 'bar',
      data: chartData3,
      options: {
        plugins: {
          legend: {
            display: false, // Set to false to hide the legend
          },
          tooltip: {
            mode: 'nearest',
            intersect: false,
            callbacks: {
              label: function (context: any) {
                let label = context.dataset.label || '';
                if (context.dataset.type === 'line') {
                  return '2';
                }
                if (label) {
                  label += ': ';
                }
                if (context.parsed.y !== null) {
                  label += new Intl.NumberFormat('en-IN').format(context.parsed.y);
                }
                return label;
              },
              title: function (context: any) {
                if (context[0].dataset.type === 'line') {
                  return ''; 
                }
                return context[0].label;
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
      }
    });
  }

  getColor(value: number, sortedValues: any) {
    const index = sortedValues.indexOf(value);
    if (value <= 2) {
      return '#ff2424'; // Red
    } else {
      switch (index) {
        case 0:
          return '#00977a'; // Green
        case 1:
        case 2:
          return '#00c9a3'; // Dark green
        case 3:
        case 4:
          return '#ff6202'; // Orange
        default:
          return '#ff6202'; // Orange
      }
    }
  }
}
