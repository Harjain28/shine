import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-shine-header',
  standalone: true,
  imports: [CommonModule,MatIconModule,MaterialModule, RouterModule],
  templateUrl: './shine-header.component.html',
  styleUrls: ['./shine-header.component.scss'],
})
export class ShineHeaderComponent {
  name: any;
  requestData: any;
  parsedData: any;
sticky: any;

  constructor(public router: Router){}

  ngOnInit(): void{
    this.requestData = localStorage.getItem("reqData");
    this.parsedData = JSON.parse(this.requestData);
    if(this.parsedData){
      this.name = this.parsedData.firstName.toLowerCase().replace(/\b\w/g, (char: string) => char.toUpperCase());  
    }
}
removeTogglesidebar() {
  document.body.classList.remove('sidebar-open');
}




logout(){
  this.removeTogglesidebar();
  this.router.navigate(['/in'])
}
}
