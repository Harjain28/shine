import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from 'src/app/material.module';
import { EventService } from 'src/app/services/event.service';
import { Config } from "ng-otp-input/lib/models/config";
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subscription, take, timer } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { NgOtpInputModule } from 'ng-otp-input';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-sample-reports-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, MatFormFieldModule, 
    FormsModule,MatIconModule,MatOptionModule,MaterialModule,MatInputModule,
    MatIconModule,NgOtpInputModule,FormsModule,ReactiveFormsModule, MatSliderModule],
  templateUrl: './sample-reports-form.component.html',
  styleUrls: ['./sample-reports-form.component.scss']
})
export class SampleReportsFormComponent {

  viewForm!: FormGroup;
  isOTPShow: boolean = false;
  percentage: number = 0;
  percentageSubject: BehaviorSubject<number> = new BehaviorSubject<number>(
    this.percentage
  );
  circumference!: number;
  offset!: number;
  lendersData: any; 
  phoneOtp: any;
  otpVerify!: FormGroup;
  formsValue: any;
  stagingJourneyId: any;
  phoneNumber: any;
  loanAmount: any;
  borrowerDetails: any;
  token: any;
  countDown!: Subscription;
  progressCount!: Subscription;
  counter = 30;
  tick = 1000;
  istimer!: boolean;
  isCompletion: boolean = false;
  isOtpSubmit: boolean = false;

  paramsObject: any;
  API_URL: any;
  otpValue!: string;
  otpCode: any;
   isOtpBox: boolean = true;
  businesstypes: any;
  isResend: boolean = false; 
  ncjData: any;
  showEligible: boolean = false;
  customDialogClass!: string;
  sliderValue: number = 0;
  config: Config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: "",
    inputStyles: {
      width: "45px",
      height: "45px",
      "font-size": "18px",
    },
  };

  score: any;
  showThumbLabel: boolean = false;
  requestData:any ={};

  constructor(public eventService: EventService,public router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    public dialogRef: MatDialogRef<SampleReportsFormComponent>,
  ) { 
    this.route.queryParamMap.subscribe((params) => {
      this.paramsObject = { ...params };
    });
  }

  ngOnInit(): void {
    
    this.otpVerifyForm();

    this.form();

   }

   cancel(){
    this.closeDialoge();
   }

   back(){
    this.isOTPShow = false;
   }

   otpVerifyForm() {
    this.otpVerify = new FormGroup({
     
    });
  }

  onSliderInput(event: any) {
  }

  submitOtp() {

    this.closeDialoge();

    this.router.navigate(['in/report_model1'])

    // this.isOtpSubmit = true;
    // const formValue = this.otpVerify.value;
    // const requestData = {};
    // const defaultparams = {
    //   mobile: localStorage.getItem("mobile"),
    //   otp: this.phoneOtp,
    // };
    // const params = { ...defaultparams, ...this.paramsObject.params };

    // if (!this.phoneOtp || this.phoneOtp.length < 6) {
    //   this.api.alert("Please Complete otp", "error");
    // }

    // if (this.phoneOtp && this.phoneOtp.length > 5) {
    //   this.api.post(`api/Remediation/ValidateLogin`, requestData, params).subscribe({
    //     next: (res: any) => {
    //       if (res.success == true) {
    //       //  const stateData = Buffer.from(res.token).toString("base64");
    //         this.router.navigate(['/in/confirm_order']);
    //         console.log("Otp Verfied")

    //       } else {
    //         this.api.alert("Please add valid information", "error");
    //         this.isOtpSubmit = false;
    //       }
    //     },
    //     error: (error) => {
    //       this.api.alert(error, "error");
    //       this.api.alert("try again", "error");
    //       this.isOtpSubmit = false;
    //     },
    //     complete: () => {
    //     //  ("Request complete");
    //     },
    //   });
    // } else {
    //   // this.otpVerify.markAllAsTouched();
    //   this.isOtpSubmit = false;
    // }
  }

  


  onInputChange(event: Event) {
   
    console.log(this.sliderValue);
  }

  
  shouldDisplayThumbLabel(): boolean {
    return this.score > 0;
  }


 

  timeCounter() {
    this.istimer = true;
    this.countDown = timer(0, this.tick)
      .pipe(take(this.counter))
      .subscribe(() => {
        --this.counter;
        if (this.counter == 0) {
          this.istimer = false;
          this.isResend = false;
          this.countDown.unsubscribe();
        }
      });
  }

  onOtpChange(otp: any) {
    this.phoneOtp = otp;
  }

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (
      ("00" + minutes).slice(-2) +
      ":" +
      ("00" + Math.floor(value - minutes * 60)).slice(-2)
    );
  }

  resendOtp() {
    // (this.istimer);
    //  if (!this.istimer) {
    //    this.counter = 60;
    //    this.timeCounter();
       
    //    this.istimer = true;
    //    this.isResend = true;
    //    const defaultparams = {
    //     forceGenerate: false,
    //      resend: true,
    //      workflowName: ""
    //    };
    //    const params = { ...defaultparams, ...this.paramsObject.params };
    //    this.api.postMethod(`api/Remediation/GetOTP`, this.requestData, params).subscribe({
    //      next: (res: any) => {
    //        if (res.success == true) {
    //          this.isOtpSubmit = false;
            

    //        } else {
    //          this.istimer = false;
    //          this.isResend = false;
    //          this.api.alert("try again", "error");
    //          this.isOtpSubmit = false;
    //        }
    //      },
    //      error: (error) => {
    //        this.istimer = false;
    //        this.countDown.unsubscribe();
    //        this.isResend = false;
    //        this.api.alert("try again", "error");
    //        this.isOtpSubmit = false;
    //      },
    //      complete: () => {
    //       // ("Request complete");
    //      },
    //    });
    //  }
   }

   otpScreen(){
    this.isOTPShow = true;
   }

   form() {
    this.viewForm = new FormGroup({

      firstName: new FormControl("", [Validators.required,Validators.pattern("^[a-zA-Z ]+$"),]),
      lastName: new FormControl("", [Validators.required,Validators.pattern("^[a-zA-Z ]+$"),]),
      phoneNumber: new FormControl("", [Validators.required,Validators.pattern("^[6-9]\\d{9}$"),Validators.maxLength(10),]),
      emailId: new FormControl("", {validators: [Validators.required,Validators.pattern("^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"),],updateOn: "blur",}),
       });
  }

  closeDialoge(): void {
    this.dialogRef.close();
  }

}
