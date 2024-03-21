import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart, { ChartData, RadialTickOptions } from 'chart.js/auto';
import { HeaderComponent } from '../shared/header/header.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FaqComponent } from './faq/faq.component';
import { MatDialog } from '@angular/material/dialog';
import { BureauLinkPopupComponent } from '../modal/bureau-link-popup/bureau-link-popup.component';



@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule,HeaderComponent,FaqComponent,MatProgressBarModule,MatExpansionModule,MatFormFieldModule,MatCheckboxModule,MatIconModule],
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
  visibleOffers!: boolean;
  expandSection!: boolean;
  expandCurrentCreditSection!: boolean;
  expandBlocks!: boolean;
  expandBusinessSection!: boolean;
  expandBalanceSection!: boolean;
  balanceSectionBlock: boolean = true;
  BusinessSectionBlock: boolean = true;




  constructor(private dialog: MatDialog ) { }

  

  ngAfterViewInit(): void {
  

    this.mixedChart();
    this.createPieChart();
    this.createHistogramChart();
    this.createDonutChart();
    this.createSemiDoughnutChart();

  }

  openBureauDialog(){
    // this.getBorrowerInformation();
    const dialogRef = this.dialog.open(BureauLinkPopupComponent, {
      width: '90%',
      height: '80%',
    });
  }


  openPopup(){
    this.openBureauDialog();
  }
  

  expand(){
    this.expandSection = true;
    this.expandBlocks = true 

    if(this.expandCurrentCreditSection == true){
       this.expandCurrentCreditSection = false;
    }
  
  }

  minimize(){
    this.expandSection = false;
    this.expandBlocks = false;

  }

  expandCurrentCredit(){

    if(this.expandSection == true){
      this.expandSection = false;
      this.expandCurrentCreditSection = true;
    }
    else{
      this.expandCurrentCreditSection = true;
      this.expandBlocks = true;

    }
  }


  minimizeCurrentCredit(){

    this.expandCurrentCreditSection = false;
    this.expandBlocks = false;


  }

  expandBankingBusniess(){
    this.expandBusinessSection = true;
    this.balanceSectionBlock = false;
    this.BusinessSectionBlock = false;
  }

  minimizeBusinessBanking(){
    this.expandBusinessSection = false;
    this.balanceSectionBlock = true; 
       this.BusinessSectionBlock = true;


  }

  expandBankingBalance(){
    this.expandBalanceSection = true;
    this.balanceSectionBlock = false;
    this.expandBusinessSection = false;
    this.BusinessSectionBlock = false;

    
  }

  minimizeBankingBalance(){
    this.expandBalanceSection = false;
    this.balanceSectionBlock = true;
    this.BusinessSectionBlock = true;


  }

  expandBankingBlanceBlock(){
    this.expandBusinessSection = false;
    this.expandBalanceSection = true;

  }

  expandBusinessSectionBlock(){
    this.expandBalanceSection = false;
    this.expandBusinessSection = true;

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
    const dataValues = [ 20, 110, 67, 30, 20, 35 , 10]; 
    const dataValues1 = [ 20, 110, 67, 30, 20, 35 , 10]; 

    const dataValues2 = [ 110, 82, 67, 45]; 

    const backgroundColors = dataValues1.map(value => this.getColor(value));
    const backgroundColors2 = dataValues2.map(value => this.getColor2(value));

    const backgroundColorsMixed = dataValues2.map(value => this.getMixedColor(value));

  
    // Increase line length by extending the x-axis values
  
    const chartData1: ChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
      datasets: [ {
        // label: 'Horizontal Line Dataset',
        type: 'line',
        data: [{ x: 0, y: 150 }, { x: 8, y: 150 },{ x: 0, y: 150 }, { x: 8, y: 150 },{ x: 0, y: 150 }, { x: 8, y: 150 }],
        borderColor: 'green',
        borderWidth: 1,
        fill: false,
        pointStyle:"line"
      },
      {
        // label: 'Horizontal Line Dataset',
        type: 'line',
        data: [{ x: 0, y: 60 }, { x: 8, y: 60 },{ x: 0, y: 60 }, { x: 8, y: 60 },{ x: 0, y: 60 }, { x: 8, y: 60 }], 
        borderColor: 'yellow',
        borderWidth: 1,
        fill: false,
        pointStyle:"line"
        
      },{
        // label: 'Horizontal Line Dataset',
        type: 'line',
        data: [{ x: 0, y: 80 }, { x: 8, y: 80 },{ x: 0, y: 80 }, { x: 8, y: 80 },{ x: 0, y: 80 }, { x: 8, y: 80 }], 
        borderColor: 'red',
        borderWidth: 1,
        fill: false,
        pointStyle:"line"

        
        
      },{
        // label: 'Bar Dataset',
        type: 'bar',
        data: dataValues1,
        backgroundColor: backgroundColors,
        borderWidth: 1,
        
      }]
    };

    const chartData2: ChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
      datasets: [ {
        // label: 'Horizontal Line Dataset',
        type: 'line',
        data: [{ x: 0, y: 150 }, { x: 8, y: 150 },{ x: 0, y: 150 }, { x: 8, y: 150 },{ x: 0, y: 150 }, { x: 8, y: 150 }],
        borderColor: 'green',
        borderWidth: 1,
        fill: false,
        pointStyle:"line"
      },
      {
        // label: 'Horizontal Line Dataset',
        type: 'line',
        data: [{ x: 0, y: 60 }, { x: 8, y: 60 },{ x: 0, y: 60 }, { x: 8, y: 60 },{ x: 0, y: 60 }, { x: 8, y: 60 }], 
        borderColor: 'yellow',
        borderWidth: 1,
        fill: false,
        pointStyle:"line"
        
      },{
        // label: 'Horizontal Line Dataset',
        type: 'line',
        data: [{ x: 0, y: 80 }, { x: 8, y: 80 },{ x: 0, y: 80 }, { x: 8, y: 80 },{ x: 0, y: 80 }, { x: 8, y: 80 }], 
        borderColor: 'red',
        borderWidth: 1,
        fill: false,
        pointStyle:"line"

        
        
      },{
        // label: 'Bar Dataset',
        type: 'bar',
        data: dataValues ,
        backgroundColor: backgroundColorsMixed,
        borderWidth: 1,
        
      }]
    };

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
   
  
    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'bar',
      data: chartData1,
      options: {
        plugins: {
          legend: {
            display: false // Set to false to hide the legend
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value: any, index: any, values: any) {
                return value + ' L';
              }
            } as RadialTickOptions
           
          }
        },
        
      // Other chart options
  } 
    });

    this.chart2 = new Chart(this.chartCanvas2.nativeElement, {
      type: 'bar',
      data: chartData2,
      options: {
        plugins: {
          legend: {
            display: false // Set to false to hide the legend
          }
        },
        scales: {
          y: {
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
          y: {
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
        
        plugins: {
          legend: {
            display: false // Set to false to hide the legend
          }
        },

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

   private getMixedColor(value: number): string {
    if(value > 100){
      return '#12BA9B'
    }
    else if (value >= 80 && value <= 100) {
      return '#6A2FC2'; 
    } else if (value >= 60 && value < 80) {
      return '#C3E128'; 
    } else if (value >= 40 && value < 60) {
      return '#FF7B24'; 
    } else {
      // Default color if value does not fall into any range
      return '#EC1111'; // Black color (you can change it to any default color)
    }
  }

  moreOffers(){
    this.visibleOffers = true;
  }

  
  
}
