import { Component, ElementRef, Input, ViewChild } from '@angular/core';
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

  @Input() pieJSONData: any;

  private pieChart!: Chart; 
  pieValues: any;
  pieColor: any;

  ngAfterViewInit(): void {
  

    this.createPieChart();

  }

  private createPieChart(): void {

    this.pieValues = this.pieJSONData?.Values;
    this.pieColor = this.pieJSONData?.Color;

    const pieDataValues = [this.pieValues[0], this.pieValues[1], this.pieValues[2]]; 
    // const pieLabels = ['Category A', 'Category B', 'Category C']; 
    const pieColors = [this.pieColor[0], this.pieColor[1], this.pieColor[2]]; 

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
