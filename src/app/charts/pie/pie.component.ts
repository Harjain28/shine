import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart, { ChartData } from 'chart.js/auto';

@Component({
  selector: 'app-pie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent {

  @ViewChild('pieChartCanvas') pieChartCanvas!: ElementRef; 

  private pieChart!: Chart; 

  ngAfterViewInit(): void {
  

    this.createPieChart();

  }

  private createPieChart(): void {
    const pieDataValues = [45, 25, 100]; 
    // const pieLabels = ['Category A', 'Category B', 'Category C']; 
    const pieColors = ['#C3E128', '#12BA9B', '#A070E8']; 

    const pieChartData: ChartData = {
      // labels: pieLabels,
      datasets: [{
        data: pieDataValues,
        backgroundColor: pieColors,
        borderColor:pieColors

      },{
        data: [45, 25, 100],
        backgroundColor: ['#91a622', '#2c8e7c', '#682ebe'],
        borderColor:['#91a622', '#2c8e7c', '#682ebe'],
        hoverBackgroundColor:['#91a622', '#2c8e7c', '#682ebe'],
        hoverBorderWidth:0
      },{
        data: [45, 25, 100],
        backgroundColor: ['#91a622', '#2c8e7c', '#682ebe'],
        borderColor:['#91a622', '#2c8e7c', '#682ebe'],   
        hoverBackgroundColor:['#91a622', '#2c8e7c', '#682ebe'],
        hoverBorderWidth:0

      }]
    };

    this.pieChart = new Chart(this.pieChartCanvas.nativeElement, {
      type: 'pie',
      data: pieChartData
    });
  }
}
