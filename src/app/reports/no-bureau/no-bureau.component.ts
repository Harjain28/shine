import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-no-bureau',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './no-bureau.component.html',
  styleUrls: ['./no-bureau.component.scss']
})
export class NoBureauComponent {
  isShow: boolean = false;
}
