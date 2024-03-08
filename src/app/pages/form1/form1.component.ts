import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.module';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, FormsModule],
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {

  user = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: ''
  };

  ngOnInit(): void {

   }

 

  onSubmit() {
    // Handle form submission logic here
    console.log('User:', this.user);
  }
 
}