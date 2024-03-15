import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.module';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, FormsModule,MatIconModule,MatOptionModule,MaterialModule,MatInputModule],
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {
  form1!: FormGroup;

  constructor(public eventService: EventService){}

  ngOnInit(): void {

    this.form();

   }

   form() {
    this.form1 = new FormGroup({
       
      firstName: new FormControl("", [Validators.required,Validators.pattern("^[a-zA-Z ]+$"),]),
      lastName: new FormControl("", [Validators.required,Validators.pattern("^[a-zA-Z ]+$"),]),
      emailId: new FormControl("", {validators: [Validators.required,Validators.pattern("^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"),],
                           updateOn: "blur",}),
      phoneNumber: new FormControl("", [Validators.required,Validators.pattern("^[6-9]\\d{9}$"),Validators.maxLength(10),])
      });
  }

 

 
 
}