import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shine-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shine-header.component.html',
  styleUrls: ['./shine-header.component.scss']
})
export class ShineHeaderComponent {
  name: any;
  requestData: any;
  parsedData: any;

  constructor(public router: Router){}

  ngOnInit(): void{
    this.requestData = localStorage.getItem("reqData");
    this.parsedData = JSON.parse(this.requestData);
    if(this.parsedData){
      this.name = this.parsedData.firstName.toLowerCase().replace(/\b\w/g, (char: string) => char.toUpperCase());  
    }
}

logout(){
  this.router.navigate(['/in'])
}
}
