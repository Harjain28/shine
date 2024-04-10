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


  private chart3!:Chart;
  barValues: any;

  ngOnInit(): void{
    this.barValues = this.barJSONData?.Values;
  }

  ngAfterViewInit(): void {
    
    const canvas = this.chartCanvas3.nativeElement as HTMLCanvasElement;
    canvas.width = 250; 
    canvas.height = 130; 
    this.mixedChart();
  }

   mixedChart(): void{

    const dataValues2 = [ this.barValues[0], this.barValues[1], this.barValues[2], this.barValues[3]]; 

    const backgroundColors2 = dataValues2.map(value => this.getColor2(value));




    const chartData3: ChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr'],
      datasets: [{
        // label: 'Bar Dataset',
        type: 'bar',
        data: dataValues2,
        backgroundColor: backgroundColors2,
        borderWidth: 1,
        
      }]
    };

    this.chart3 = new Chart(this.chartCanvas3.nativeElement, {
      type: 'bar',
      data: chartData3,
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

  private getColor2(value: number): string {
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
