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
import { Router } from '@angular/router';

@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, FormsModule,MatIconModule,MatOptionModule,MaterialModule,MatInputModule],
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {
  form1!: FormGroup;
  showValidatePANError!: boolean ;
  showValidatepinError!: boolean;


  constructor(public eventService: EventService, public router: Router ){}

  ngOnInit(): void {

    this.form();

   }

   form() {
    this.form1 = new FormGroup({

             title: new FormControl("", [Validators.required]),

      firstName: new FormControl("", [Validators.required,Validators.pattern("^[a-zA-Z ]+$"),]),
      lastName: new FormControl("", [Validators.required,Validators.pattern("^[a-zA-Z ]+$"),]),
      phoneNumber: new FormControl("", [Validators.required,Validators.pattern("^[6-9]\\d{9}$"),Validators.maxLength(10),]),
      emailId: new FormControl("", {validators: [Validators.required,Validators.pattern("^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"),],
                           updateOn: "blur",}),
      pincode: new FormControl("", [Validators.required]),
      busninessName: new FormControl("", [Validators.required,Validators.pattern("^[a-zA-Z ]+$"),]),
      businessTurnover: new FormControl("", [Validators.required]),
      propertyOwnership: new FormControl("", [Validators.required]),
      businessPan: new FormControl("", [Validators.required]),



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
  validatePincode() {
    // const formValue = this.v1enquiryForm.value;
    // this.validatePin = false;
    // this.showValidatepinError = false;
    // const params = { ...this.paramsObject.params };
    // if (formValue.pincode.length > 5) {
    //   this.api
    //     .getwithHeader(
    //       `api/PincodeValidator?value=${formValue.pincode}`,
    //       params
    //     )
    //     .subscribe({
    //       next: (res: any) => {
    //         if (res.valid == true) {
    //           this.validatePin = true;
    //           this.showValidatepinError = false;
    //         } else {
    //           this.validatePin = false;
    //           this.showValidatepinError = true;
    //         }
    //       },
    //       error: (error) => {
    //         this.validatePin = true;
    //       },
    //       complete: () => {
    //       //  ("Request complete");
    //       },
    //     });
    // }
  }
  goToOtp(){
    this.router.navigate(['/pages/otp'])
  }

 
 
}