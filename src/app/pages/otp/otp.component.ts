import { Component,  OnInit, ViewChild } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import {  FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { EventService } from 'src/app/services/event.service';
import { BehaviorSubject, Subscription, take, timer } from 'rxjs';
import { Config } from "ng-otp-input/lib/models/config";
import { NgOtpInputComponent, NgOtpInputModule } from 'ng-otp-input';
import { MatSliderModule } from '@angular/material/slider';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Buffer } from "buffer";
import { NavigationService } from 'src/app/services/navigation.service';
import { OtpService } from 'src/app/services/otp.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';



@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [CommonModule, MatIconModule,NgOtpInputModule,FormsModule,ReactiveFormsModule, MatSliderModule],
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit{
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
  parsedData: any;
  mobileNo: any;
  userData: any;
  // @ViewChild('ngOtpInput') ngOtpInputRef:any;
  @ViewChild('ngmobileOtpInput', { static: false })ngOtpInput!: NgOtpInputComponent;
  plan: any
  id: any;
  constructor(
    public eventService: EventService,
    public router: Router,
    private route: ActivatedRoute,
    private navigationService:NavigationService,
    private api: ApiService,
    private state:LocalStorageService,
    private otpService:OtpService,
    public event:EventService){
      this.route.queryParamMap.subscribe((params) => {
        this.paramsObject = { ...params };
      });
    }

    ngOnInit(): void {
      this.otpVerifyForm();
      this.state.logout();
      this.requestData = localStorage.getItem("reqData")
      this.parsedData = JSON.parse(this.requestData);
      const reloginUserData = sessionStorage.getItem("reloginUpdates");
      if (reloginUserData) {
        this.userData = JSON.parse(reloginUserData);
      }
      if(this.parsedData){
      this.mobileNo = this.parsedData.mobile;
      }
      
 
      
    }

    ngAfterViewInit(): void {
    this.fetchOtp();
     
    }
    
    fetchOtp(): void {
      this.otpService.fetchOtp(15000) 
        .then(otp => {
          setTimeout(() => {
            this.ngOtpInput.setValue(+otp);
            }, 200);
          this.onOtpChange(otp);
          console.log('OTP:', otp);
        })
        .catch(err => {
          console.log(err);
        });
    }

  otpVerifyForm() {
    this.otpVerify = new FormGroup({
      //  otp: new FormControl("", [Validators.required, Validators.maxLength(6)]),
      // terms: new FormControl({ value: true, disabled: false }, [
      //   Validators.required,
      //   Validators.requiredTrue,
      // ]),
      // terms: new FormControl({value: true, disabled: false} , [Validators.required]),
      // whatsappConsent: new FormControl({value: true, disabled: false}, [Validators.required]),
    });
  }

  onSliderInput(event: any) {
    // Your slider input handling logic here
  }

  submitOtp() {
    this.isOtpSubmit = true;
    const formValue = this.otpVerify.value;
    const requestData = {};
    const defaultparams = {
      mobile: this.mobileNo,
      otp: this.phoneOtp,
    };
    const params = { ...defaultparams, ...this.paramsObject.params };

    if (!this.phoneOtp || this.phoneOtp.length < 6) {
      this.api.alert("Please Complete otp", "error");
    }

    if (this.phoneOtp && this.phoneOtp.length > 5) {
      this.api.post(`api/Remediation/ValidateLogin`, requestData, params).subscribe({
        next: (res: any) => {
          if (res.success == true) {
            localStorage.setItem("token",res?.token);
            localStorage.setItem("reqData", JSON.stringify(res?.userInfo));
            this.navigationService.setLinkClicked(true);
            if (this.userData && this.userData?.lastReportId) {
                this.router.navigate(['/in/report', res?.userId]);
            } else if (this.userData?.paid) {
              this.router.navigate(['/in/bank_statement']);
            }  else {
              this.plan = localStorage.getItem("plan");
              if (this.plan) {
               this.navigationService.redirectToPayment(this.plan);
              } else {
                this.navigationService.redirectToPayment(String(this.userData?.userData?.selectedPrice));
              }
              localStorage.setItem("userId",res?.userId);
            }
            this.isOtpSubmit = true;
          } else {
            this.api.alert("Please add valid information", "error");
            this.isOtpSubmit = false;
          }
        },
        error: (error) => {
          this.api.alert(error, "error");
          this.api.alert("try again", "error");
          this.isOtpSubmit = false;
        },
        complete: () => {
        //  ("Request complete");
        },
      });
    } else {
      // this.otpVerify.markAllAsTouched();
      this.isOtpSubmit = false;
    }
  }


  onInputChange(event: Event) {
    // Handle slider value changes here
    // For example, you can log the new value to the console
  }
  goToPricing(){
    // this.router.navigate(['/pages/plans']);
  }
  
  // Function to determine whether to display thumbLabel
  shouldDisplayThumbLabel(): boolean {
    // You can adjust this condition based on your requirements
    return this.score > 0;
  }
  // formatLabel(value: number | null) {
  //   if (value === 900) {
  //     return `${value} (Max)`;
  //   } else {
  //     return value ? `${value}` : '0';
  //   }
  // }

  // formatLabel(value: number): string {
  //   if (value >= 1000) {
  //     return Math.round(value / 1000) + 'k';
  //   }

  //   return `${value}`;
  // }

  getScoreText(): string {
    if (this.score > 800) {
      return 'Great Score';
    } else if (this.score >= 751 && this.score <= 800) {
      return 'Good Score';
    } else if (this.score >= 701 && this.score <= 750) {
      return 'Average';
    } else {
    return 'n/a';
    }
  }
  scoreColor: string = '';

  setScoreColor(color: string): void {
    // Set the color dynamically
    this.scoreColor = color;
  }

  getScoreColor(): string {
    if (this.score > 800) {
      return '#12ba9b';
    } else if (this.score >= 751 && this.score <= 800) {
      return '#12ba9b';
    } else if (this.score >= 701 && this.score <= 750) {
      return 'purple';
    } else {
      return 'purple';
    }
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
    (this.istimer);
     if (!this.istimer) {
       this.counter = 60;
       this.timeCounter();
       
       this.istimer = true;
       this.isResend = true;

       const defaultreLoginparams = {
        mobile: this.mobileNo,
        forceGenerate: false,
         resend: true,
     
         
       };
       const reloginParams = { ...defaultreLoginparams, ...this.paramsObject.params };
       if (this.userData) {
        const data = {};
        this.api
        .postForLogin(`api/Remediation/ReloginOTP`, data, reloginParams)
        .subscribe({
          next: (res: any) => {
            if (res.success) {
              this.isOtpSubmit = false;
              sessionStorage.setItem('reloginUpdates', JSON.stringify(res));
            } else {
              this.istimer = false;
              this.isResend = false;
              this.api.alert("try again", "error");
              this.isOtpSubmit = false;
            }
          },
          error: (error) => {
            this.istimer = false;
            this.countDown.unsubscribe();
            this.isResend = false;
            this.api.alert("try again", "error");
            this.isOtpSubmit = false;
          },
          complete: () => {
            // ("Request complete");
          },
        });
       } else {
        const defaultparams = {
          forceGenerate: false,
           resend: true,
          //  workflowName: ""
         };
         const params = { ...defaultparams, ...this.paramsObject.params };
        this.api.postMethod(`api/Remediation/GetOTP`, this.requestData, params).subscribe({
          next: (res: any) => {
            if (res.success) {
             const stateData = Buffer.from(res.token).toString("base64");
               this.isOtpSubmit = false;
            } else {
              this.istimer = false;
              this.isResend = false;
              this.api.alert("try again", "error");
              this.isOtpSubmit = false;
            }
          },
          error: (error) => {
            this.istimer = false;
            this.countDown.unsubscribe();
            this.isResend = false;
            this.api.alert("try again", "error");
            this.isOtpSubmit = false;
          },
          complete: () => {
           // ("Request complete");
          },
        });
       }
      
     }
   }



}
