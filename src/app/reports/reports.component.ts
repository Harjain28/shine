import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart, { ChartData } from 'chart.js/auto';
import { HeaderComponent } from '../shared/header/header.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule,HeaderComponent,MatProgressBarModule,MatExpansionModule,MatFormFieldModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;
  @ViewChild('chartCanvas2') chartCanvas2!: ElementRef;
  @ViewChild('chartCanvas3') chartCanvas3!: ElementRef;

  @ViewChild('pieChartCanvas') pieChartCanvas!: ElementRef; 
  @ViewChild('histogramCanvas') histogramCanvas!: ElementRef; 
  @ViewChild('donut') donut!: ElementRef;
  @ViewChild('gaugeCanvas') gaugeCanvas!: ElementRef;
  @ViewChild('semiDoughnutCanvas') semiDoughnutCanvas!: ElementRef;
  @ViewChild('mccCanvas') mccCanvas!: ElementRef;





  private chart!: Chart;
  private chart2!:Chart;
  private chart3!:Chart;

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

  }

  private createSemiDoughnutChart(): void {
    const dataValues = [50,40]; // Example data values
    const labels = ['A']; // Example labels
    const backgroundColors = [ '#12BA9B','#FFD700']
    // Example background colors
  
    const chartData: ChartData = {
    //  labels: labels,
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
    const dataValues = [ 200000, 1100000, 670000, 300000, 200000 ]; 
    const dataValues2 = [ 1100000, 820000, 670000, 450000, 200000 ]; 

    const backgroundColors = dataValues.map(value => this.getColor(value));
    const backgroundColors2 = dataValues2.map(value => this.getColor(value));

    const backgroundColorsMixed = dataValues2.map(value => this.getMixedColor(value));

  
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

    const chartData2: ChartData = {
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
        data: dataValues2,
        backgroundColor: backgroundColorsMixed,
        borderWidth: 1,
        
      }]
    };

    const chartData3: ChartData = {
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
        data: dataValues2,
        backgroundColor: backgroundColors2,
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

    this.chart2 = new Chart(this.chartCanvas2.nativeElement, {
      type: 'bar',
      data: chartData2,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
       
      }
    });

    this.chart3 = new Chart(this.chartCanvas3.nativeElement, {
      type: 'bar',
      data: chartData3,
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
        borderWidth: 1,
        
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
            display: false
          },
          x: {
            display: false
          },  
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
      return '#400993'
    }
    else if (value >= 800000 && value < 1000000) {
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
