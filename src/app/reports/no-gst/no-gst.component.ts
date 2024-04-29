import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-no-gst',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './no-gst.component.html',
  styleUrls: ['./no-gst.component.scss']
})
export class NoGstComponent {

}
