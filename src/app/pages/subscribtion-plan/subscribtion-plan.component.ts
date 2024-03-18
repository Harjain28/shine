import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribtion-plan',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatCardModule,MatTabsModule],
  templateUrl: './subscribtion-plan.component.html',
  styleUrls: ['./subscribtion-plan.component.scss']
})
export class SubscribtionPlanComponent {
  isActive = false;

  constructor(    public router: Router,
    ){

  }

  toggle() {

    this.isActive = !this.isActive;
  }



  goToSelection(){
    this.router.navigate(['/pages/selection'])

  }
}
