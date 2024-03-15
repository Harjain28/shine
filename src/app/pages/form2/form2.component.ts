import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { EventService } from 'src/app/services/event.service';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, FormsModule,MatIconModule,MatOptionModule,MaterialModule,MatInputModule],
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component {
  form2!: FormGroup;
  showValidatePANError!: boolean ;


  constructor(public eventService: EventService){}

  ngOnInit(): void {

    this.form();

   }

   form() {
    this.form2 = new FormGroup({
       
      personalPan: new FormControl("", [Validators.required]),
      businessPan: new FormControl("", [Validators.required]),
      businessConstitutuion: new FormControl("", [Validators.required]),
    });
  }

  validatePanNumber() {
    // const formValue = this.v1enquiryForm.value;
    // this.validatePAN = true;
    // this.showValidatePANError = false;

    // const params = { ...this.paramsObject.params };

    // if (formValue.businesspan) {
    //   this.api
    //     .getwithHeader(
    //       `api/Gst/ValidatePan?website=true&panNumber=${formValue.businesspan.toUpperCase()}`,
    //       params
    //     )
    //     .subscribe(
    //       (res: any) => {
    //         if (typeof res === "boolean") {
    //           this.validatePAN = res;
    //         }
    //         if (res && typeof res === "object" && "valid" in res) {
    //           this.validatePAN = res.valid;
    //         }
    //       },
    //       (err) => {
    //         this.validatePAN = true;
    //       }
    //     );
    // }
  }

 
}