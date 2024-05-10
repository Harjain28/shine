import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart, { ChartData } from 'chart.js/auto';


@Component({
  selector: 'app-doughnut',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent {
  @ViewChild('donut') donut!: ElementRef;

  @Input() doughtnutJSONData:any;


  private donutChart!: Chart;
  doughtValues: any;
  doughtnutColor:any;
  colorDots: any;

  ngOnInit():void{

   
  }

  ngAfterViewInit(): void {
  

    this.createDonutChart();

  }

  private createDonutChart():void{
    this.doughtValues = this.doughtnutJSONData?.byAmount;
    
    this.doughtnutColor = this.doughtnutJSONData?.colorDots;


    const donutDataValues = [...this.doughtValues]; 
    const donutColors = [...this.doughtnutColor];

   
    const donutChartData: ChartData = {  

      datasets: [{
        data: donutDataValues,
        backgroundColor: donutColors,
        borderWidth: 0,

      },
      {
        data: donutDataValues,
        backgroundColor: [
          '#a5c91e', 
          '#0e9b7c', 
          '#b90d0d', 
          '#e3621c', 
          '#5b249d', 
          '#364599', 
          '#0fad87', 
          '#b527b6'  
        ],
        borderWidth: 0,
        

      }],
    };

    this.donutChart = new Chart(this.donut.nativeElement, {
      type: 'doughnut',
      data: donutChartData,
      options: {
        elements: {
          arc: {
            borderWidth: 0, // Hide borders between segments
          }
        },
        
      }
    });
  }

}
