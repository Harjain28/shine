import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart, { ChartData } from 'chart.js/auto';
import { HeaderComponent } from '../shared/header/header.component';



@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;
  @ViewChild('pieChartCanvas') pieChartCanvas!: ElementRef; 
  @ViewChild('histogramCanvas') histogramCanvas!: ElementRef; 
  @ViewChild('donutChartCanvas') donutChartCanvas!: ElementRef;
  @ViewChild('gaugeCanvas') gaugeCanvas!: ElementRef;
  @ViewChild('semiDoughnutCanvas') semiDoughnutCanvas!: ElementRef;
  @ViewChild('mccCanvas') mccCanvas!: ElementRef;





  private chart!: Chart;
  private pieChart!: Chart;
  private histogramChart!: Chart; 
  private donutChart!: Chart;
  private mcc!: Chart;
 private semiDoughnutChart!: Chart;




  constructor() { }

  

  ngAfterViewInit(): void {
  

    this.mixedChart();
    this.createPieChart();
    this.createHistogramChart();
    this.createDonutChart();
    this.createSemiDoughnutChart();
    this.mixedColorBarChart();

  }

  private createSemiDoughnutChart(): void {
    const dataValues = [50,40]; // Example data values
    const labels = ['A']; // Example labels
    const backgroundColors = [ '#12BA9B','#FFD700']
    // Example background colors
  
    const chartData: ChartData = {
      labels: labels,
      datasets: [{
        data: dataValues,
        backgroundColor: backgroundColors,
      }]
    };
  
    this.semiDoughnutChart = new Chart(this.semiDoughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: chartData,
      options: {
        cutout: '80%',
        rotation: 85 * Math.PI,
        circumference: 59 * Math.PI,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'Semi-Doughnut Chart'
          }
        }
      }as any
    });
   
  }
  

  private mixedChart(): void{
    const dataValues = [200000, 450000, 670000, 820000, 1100000]; // Example data values
    const backgroundColors = dataValues.map(value => this.getColor(value));
  
    // Increase line length by extending the x-axis values
  
    const chartData1: ChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr'],
      datasets: [ {
        // label: 'Horizontal Line Dataset',
        type: 'line',
        data: [{ x: 0, y: 1500000 }, { x: 8, y: 1500000 },{ x: 0, y: 1500000 }, { x: 8, y: 1500000 },{ x: 0, y: 1500000 }, { x: 8, y: 1500000 }],
        borderColor: 'green',
        borderWidth: 1,
        fill: false,
        pointStyle:"line"
      },
      {
        // label: 'Horizontal Line Dataset',
        type: 'line',
        data: [{ x: 0, y: 600000 }, { x: 8, y: 600000 },{ x: 0, y: 600000 }, { x: 8, y: 600000 },{ x: 0, y: 600000 }, { x: 8, y: 600000 }], 
        borderColor: 'yellow',
        borderWidth: 1,
        fill: false,
        pointStyle:"line"
        
      },{
        // label: 'Horizontal Line Dataset',
        type: 'line',
        data: [{ x: 0, y: 800000 }, { x: 8, y: 800000 },{ x: 0, y: 800000 }, { x: 8, y: 800000 },{ x: 0, y: 800000 }, { x: 8, y: 800000 }], 
        borderColor: 'red',
        borderWidth: 1,
        fill: false,
        pointStyle:"line"

        
        
      },{
        // label: 'Bar Dataset',
        type: 'bar',
        data: dataValues,
        backgroundColor: backgroundColors,
        borderWidth: 1,
        
      }]
    };
  
    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'bar',
      data: chartData1,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
       
      }
    });
  }

  private mixedColorBarChart(): void{
    const dataValues = [200000, 400000, 600000, 800000, 1100000]; // Example data values
    const backgroundColors = dataValues.map(value => this.getMixedColor(value));
  
    // Increase line length by extending the x-axis values
  
    const chartData: ChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr'],
      datasets: [ {
        // label: 'Horizontal Line Dataset',
        type: 'line',
        data: [{ x: 0, y: 1500000 }, { x: 8, y: 1500000 },{ x: 0, y: 1500000 }, { x: 8, y: 1500000 },{ x: 0, y: 1500000 }, { x: 8, y: 1500000 }],
        borderColor: 'green',
        borderWidth: 1,
        fill: false,
        pointStyle:"line"
      },
      {
        // label: 'Horizontal Line Dataset',
        type: 'line',
        data: [{ x: 0, y: 600000 }, { x: 8, y: 600000 },{ x: 0, y: 600000 }, { x: 8, y: 600000 },{ x: 0, y: 600000 }, { x: 8, y: 600000 }], 
        borderColor: 'yellow',
        borderWidth: 1,
        fill: false,
        pointStyle:"line"    
      },{
        // label: 'Horizontal Line Dataset',
        type: 'line',
        data: [{ x: 0, y: 800000 }, { x: 8, y: 800000 },{ x: 0, y: 800000 }, { x: 8, y: 800000 },{ x: 0, y: 800000 }, { x: 8, y: 800000 }], 
        borderColor: 'red',
        borderWidth: 1,
        fill: false,
        pointStyle:"line"
      },{
        // label: 'Bar Dataset',
        type: 'bar',
        data: dataValues,
        backgroundColor: backgroundColors,
        borderWidth: 1,
        
      }]
    };
  
    this.mcc = new Chart(this.mccCanvas.nativeElement, {
      type: 'bar',
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
       
      }
    });
  }


  
  
  

  private createDonutChart():void{
    const donutDataValues = [300000, 500000, 800000,800000]; 
    // const donutLabels = ['A', 'B', 'C', 'D']; 
    const donutColors = ['#452574', '#12BA9B', '#C3E128', '#9E77D6']; 

   
    const donutChartData: ChartData = {
      // labels: donutLabels,
      datasets: [{
        data: donutDataValues,
        backgroundColor: donutColors
      }]
    };

    this.donutChart = new Chart(this.donutChartCanvas.nativeElement, {
      type: 'doughnut',
      data: donutChartData
    });
  }

  private createHistogramChart(): void {
    const histogramDataValues = [-10, -20, 40, 90, 47, 60, -70, -80, -90, 26, 40, 30]; 
    const histogramLabels = ['', '', '', '','', '', '', '','', '', '', '']; 
    const backgroundColors = histogramDataValues.map(value => (value < 0 ? 'red' : 'green'));

    const histogramChartData: ChartData = {
      labels: histogramLabels,
      datasets: [{
        data: histogramDataValues,
        backgroundColor: backgroundColors, 
        borderColor: 'rgba(75, 192, 192, 1)', 
        borderWidth: 1
      }]
    };
  
    this.histogramChart = new Chart(this.histogramCanvas.nativeElement, {
      type: 'bar',
      data: histogramChartData,
      options: {
        indexAxis: 'x', 
        scales: {
          y: {
            beginAtZero: true, 
             
          }
        }
      }
    });
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
  
  

  private getColor(value: number): string {
    if(value > 1000000){
      return '#12BA9B'
    }
    else if (value >= 800000 && value <= 1000000) {
      return '#6A2FC2'; 
    } else if (value >= 600000 && value < 800000) {
      return '#A070E8'; 
    } else if (value >= 400000 && value < 600000) {
      return '#9E77D6'; 
    } else {
      // Default color if value does not fall into any range
      return '#A070E2'; // Black color (you can change it to any default color)
    }
  }
  

   private getMixedColor(value: number): string {
    if(value > 1000000){
      return '#12BA9B'
    }
    else if (value >= 800000 && value <= 1000000) {
      return '#6A2FC2'; 
    } else if (value >= 600000 && value < 800000) {
      return '#C3E128'; 
    } else if (value >= 400000 && value < 600000) {
      return '#FF7B24'; 
    } else {
      // Default color if value does not fall into any range
      return '#EC1111'; // Black color (you can change it to any default color)
    }
  }

  
  
}
