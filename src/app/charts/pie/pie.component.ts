import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart, { ChartData } from 'chart.js/auto';
import { ChartsJsonData } from 'src/app/JsonFiles/ChartJSONData';

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
  pieValues: any = [];
  pieColor: any;


  ngAfterViewInit(): void {
  

    this.createPieChart();

  }

  private createPieChart(): void {

    this.pieValues = this.pieJSONData?.byAmount;
  
    this.pieColor = ChartsJsonData?.Pie?.Color;

    const pieDataValues = [...this.pieValues]; 
    const pieColors = ['#6A2FC2', '#12BA9B', '#C3E128']; 
    const pieChartData: ChartData = {
      // labels: pieLabels,
      datasets: [{
        data: pieDataValues,
        backgroundColor: ['#783ecf', '#24c8aa', '#b6d031'],
        borderColor:['#783ecf', '#24c8aa', '#b6d031'],
        hoverBackgroundColor: ['#783ecf', '#24c8aa', '#b6d031'], // Set hover background color
    hoverBorderColor: ['#783ecf', '#24c8aa', '#b6d031'],
        
      },
      { 
        data: pieDataValues,
        backgroundColor: pieColors,
        borderColor:pieColors,
        hoverBackgroundColor: ['#783ecf', '#24c8aa', '#b6d031'], // Set hover background color
    hoverBorderColor: ['#783ecf', '#24c8aa', '#b6d031'],

      },
      // { 
      //   data: pieDataValues,
      //   backgroundColor: ['#8641ec', '#95ecdc', '#d9eb7e'],
      //   borderColor:['#8641ec', '#95ecdc', '#d9eb7e'],
      //   // hoverBackgroundColor:['#8641ec', '#95ecdc', '#d9eb7e'],
      //   hoverBorderWidth:0
      // },
      // {
      //   data: pieDataValues,
      //   backgroundColor: ['#91a622', '#2c8e7c', '#682ebe'],
      //   borderColor:['#91a622', '#2c8e7c', '#682ebe'],   
      //   hoverBackgroundColor:['#91a622', '#2c8e7c', '#682ebe'],
      //   hoverBorderWidth:0

      // }
    ]
    };

    this.pieChart = new Chart(this.pieChartCanvas.nativeElement, {
      type: 'pie',
      data: pieChartData
    });
  }
}
