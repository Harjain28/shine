import {  Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.module';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Location } from "@angular/common";


@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, 
    FormsModule,MatIconModule,MatOptionModule,MaterialModule,MatInputModule],
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {
  form1!: FormGroup;
  showValidatePANError!: boolean ;
  showValidatepinError!: boolean;
  isSubmit: boolean  = false;
  paramsObject: any;
  errorVisible = false;
  validatePin!: boolean;
  validatePAN!: boolean;
  error: any; // Define error property here


  unformattedX: string = ''; 
  formattedX!: string; 
  showBusniessNameError!: boolean;



  constructor(private route: ActivatedRoute,public location: Location, public eventService: EventService, public router: Router, private api: ApiService ){
    this.route.queryParamMap.subscribe((params) => {
      this.paramsObject = { ...params };
    });
  }

  ngOnInit(): void {

    this.form();

   }

   form() {
    this.form1 = new FormGroup({

      title: new FormControl("", [Validators.required]),
      firstName: new FormControl("", [Validators.required,Validators.pattern("^[a-zA-Z ]+$"),]),
      lastName: new FormControl("", [Validators.required,Validators.pattern("^[a-zA-Z ]+$"),]),
      phoneNumber: new FormControl("", [Validators.required,Validators.pattern("^[6-9]\\d{9}$"),Validators.maxLength(10),]),
      emailId: new FormControl("", {validators: [Validators.required,Validators.pattern("^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"),],updateOn: "blur",}),
      pincode: new FormControl("", [Validators.required]),
      busninessName: new FormControl("", [Validators.required]),
      businessTurnover: new FormControl("", [Validators.required]),
      propertyOwnership: new FormControl("", [Validators.required]),
      businessPan: new FormControl("", [Validators.required]),
      businessVintage: new FormControl("", [Validators.required]),



      });
  }

  goToOtp(){
    this.router.navigate(['/pages/otp'])
  }

  formatNumber(x: number): string {
    const xStr = x.toString();
    let lastThree = xStr.substring(xStr.length - 3);
    const otherNumbers = xStr.substring(0, xStr.length - 3);
    if (otherNumbers !== '') {
      lastThree = ',' + lastThree;
    }
    const formattedNumber = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
    return formattedNumber;
  }

  onInputChange(event: any) {
    this.unformattedX = event.target.value.replace(/,/g, '');
    this.formattedX = this.formatNumber(+this.unformattedX);
  }

  getOtpbyPhone() {
    this.isSubmit = true;
    const formValue = this.form1.value;
    const defaultparams = {
      forceGenerate: false,
      resend: false
    };

    const params = { ...defaultparams, ...this.paramsObject.params };
    let requestData: any = {}; 
    requestData["mobile"] = formValue.phoneNumber;
    requestData["email"] = formValue.emailId;
    requestData["firstName"] = formValue.firstName.toUpperCase();
    requestData["lastName"] =  formValue.lastName.toUpperCase();
    requestData["businessName"] =  formValue.busninessName;
    requestData["pincode"] =  formValue.pincode;
    requestData["businessPan"] =  formValue.businessPan;
    requestData["propertyOwnership"] =  formValue.propertyOwnership;
    requestData["turnover"] =  this.unformattedX;
    requestData["businessVintage"] =  formValue.businessVintage;

    localStorage.setItem("reqData",JSON.stringify(requestData));
    localStorage.setItem("title",formValue.title);


    if (this.validatePin) {
      this.showValidatepinError = false;
    } else {
      this.validatePin = false;
      this.showValidatepinError = true;
    }

    if (this.validatePAN) {
      this.showValidatePANError = false;
    } else {
      this.validatePAN = false;
      this.showValidatePANError = true;
    }

    if (this.form1.valid && this.validatePAN && this.validatePin) { 
    this.api.post(`api/Remediation/GetOTP`, requestData, params).subscribe({ next: (res: any) => {
          if (res.success) {

            this.router.navigate(['/in/otp']);
            this.isSubmit = true;
          } else          
            // this.api.alertOk("Oops! You’ve recently used CreditEnable to apply for a business loan. Please try again in a few weeks. Contact us if you need help!", "error");
          
            this.isSubmit = false;
          
        },
        error: error => {
          // this.api.alertOk("Oops! You’ve recently used CreditEnable to apply for a business loan. Please try again in a few weeks. Contact us if you need help!", "error");
          // Handle any errors 
          // this.isSubmit = false;
          if(error.errors.Pincode){
            this.showValidatepinError = true;
          }
          if(error.errors.BusinessPan){
          this.showValidatePANError = true;
          }
          if(error.errors.BusinessName){
            this.error = error.errors.BusinessName;
            this.showBusniessNameError = true;

          }
           this.isSubmit = false;


        },
        complete: () => {
          ('Request complete');
        }
      });
      }
       else {
        this.form1.markAllAsTouched();
        
          this.errorVisible = true;
        
        this.isSubmit = false;
      }
  }

  validatePanNumber() {
    const formValue = this.form1.value;
    this.validatePAN = true;
    this.showValidatePANError = false;

    const params = { ...this.paramsObject.params };
    if (formValue.businessPan.length > 5 && formValue.businessPan) {
      this.api
      .get(
        `api/Validator/PAN?pan=${formValue.businessPan.toUpperCase()}&isBusiness=true`,
        params
      )
        .subscribe({
          next: (res: any) => {
            if (res.valid == true) {

            if (typeof res === "boolean") {
              this.validatePAN = res;
            }
            if (res && typeof res === "object" && "valid" in res) {
              this.validatePAN = res.valid;
            }
          }else{
            this.validatePAN = false;
              this.showValidatePANError = true;
          }
        },
          error: (error:any) => {
            this.validatePAN = true;
          },
          complete: () => {
          //  ("Request complete");
          },
        });
    }
  }

  validatePincode() {
    const formValue = this.form1.value;
    this.validatePin = false;
    this.showValidatepinError = false;
    const params = { ...this.paramsObject.params };
    if (formValue.pincode.length > 5) {
      this.api
        .get(
          `api/Validator/Pincode?pincode=${formValue.pincode}`,
          params
        )
        .subscribe({
          next: (res: any) => {
            if (res.valid == true) {
              this.validatePin = true;
              this.showValidatepinError = false;
              localStorage.setItem("state",res.state);
            } else {
              this.validatePin = false;
              this.showValidatepinError = true;
            }
          },
          error: (error:any) => {
            this.validatePin = true;
          },
          complete: () => {
          //  ("Request complete");
          },
        });
    }
  }


 

 
 
}