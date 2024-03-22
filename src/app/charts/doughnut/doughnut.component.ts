import { Component, ElementRef, ViewChild } from '@angular/core';
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

  private donutChart!: Chart;

  ngAfterViewInit(): void {
  

    this.createDonutChart();

  }

  private createDonutChart():void{
    const donutDataValues = [300000, 500000, 800000,800000]; 
    // const donutLabels = ['A', 'B', 'C', 'D']; 
    const donutColors = ['#452574', '#12BA9B', '#C3E128', '#9E77D6']; 

   
    const donutChartData: ChartData = {
      // labels: labels,
      datasets: [{
        data: donutDataValues,
        backgroundColor: donutColors
      }]
    };

    this.donutChart = new Chart(this.donut.nativeElement, {
      type: 'doughnut',
      data: donutChartData
    });
  }

}
