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
  darkerShadeColor: any;

  ngOnInit():void{

   
  }

  ngAfterViewInit(): void {
  

    this.createDonutChart();

  }

  private createDonutChart():void{
    this.doughtValues = this.doughtnutJSONData?.byAmount;

    console.log(this.doughtValues,"jj")
    
    
    
    this.doughtnutColor = this.doughtnutJSONData?.colorDots;
    this.darkerShadeColor = this.doughtnutJSONData?.darkerShadeColor;


    const donutDataValues = [...this.doughtValues]; 
    const donutColors = [...this.doughtnutColor];
    const donutDarkerShadeColor = [...this.darkerShadeColor]

   
    const donutChartData: ChartData = {  

      datasets: [{
        data: donutDataValues,
        backgroundColor: donutColors,
        borderWidth: 0,

      },
      {
        data: donutDataValues,
        backgroundColor: donutDarkerShadeColor,
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
