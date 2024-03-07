import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent {

}
