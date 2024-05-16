import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from 'src/app/material.module';
import { EventService } from 'src/app/services/event.service';
import { Config } from 'ng-otp-input/lib/models/config';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subscription, take, timer } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { NgOtpInputModule } from 'ng-otp-input';
import { MatSliderModule } from '@angular/material/slider';
import { NavigationService } from 'src/app/services/navigation.service';
import { OtpService } from 'src/app/services/otp.service';

@Component({
  selector: 'app-relogin',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatOptionModule,
    MaterialModule,
    MatInputModule,
    MatIconModule,
    NgOtpInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
  ],
  templateUrl: './relogin.component.html',
  styleUrls: ['./relogin.component.scss'],
})
export class ReloginComponent {
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
    placeholder: '',
    inputStyles: {
      width: '45px',
      height: '45px',
      'font-size': '18px',
    },
  };

  score: any;
  showThumbLabel: boolean = false;
  requestData: any = {};
  loader!: boolean;
  isSubmit: boolean = false;

  constructor(
    public eventService: EventService,
    public router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    private navigationService: NavigationService,
    private otpService: OtpService,
    public dialogRef: MatDialogRef<ReloginComponent>
  ) {
    this.route.queryParamMap.subscribe((params) => {
      this.paramsObject = { ...params };
    });
  }

  ngOnInit(): void {
    this.viewForm = new FormGroup({
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^[6-9]\\d{9}$'),
        Validators.maxLength(10),
      ]),
    });
  }

  cancel() {
    this.closeDialoge();
  }

  reLoginProcess() {
    if (this.viewForm.valid) {
      this.isSubmit = true;
      this.loader = true;
      const defaultparams: any = {
        mobile: this.viewForm.value.phoneNumber,
        forceGenerate: false,
        resend: false,
        workflowName: '',
      };
      const requestData = {};
      const params = { ...defaultparams };

      this.api
        .postForLogin(`api/Remediation/ReloginOTP`, requestData, defaultparams)
        .subscribe({
          next: (res: any) => {
            if (res) {
              this.isSubmit = true;
              this.loader = false;
              const data = { mobile: this.viewForm.value.phoneNumber };
              localStorage.setItem('reqData', JSON.stringify(data));
              sessionStorage.setItem('reloginUpdates', JSON.stringify(res));
              this.navigationService.setLinkClicked(true);
              this.closeDialoge();
              if (res?.lastReportId && res?.lastReportId !== null) {
                this.fetchOtp();
                this.router.navigate(['/in/otp']);
              } else if (res?.newUser) {
                this.router.navigate(['in/pricing_annual']);
              } else if (res?.paid) {
                this.router.navigate(['in/bank_statement']);
              } else {
                this.router.navigate(['in/pricing_annual']);
              }
            }
          },
          error: (error) => {
            this.isSubmit = false;
            this.loader = false;
          },
          complete: () => {
            // ("Request complete");
          },
        });
    }
  }

  fetchOtp(): void {
    this.otpService.fetchOtp(15000)
      .then(otp => {
        console.log('OTP:', otp);
      })
      .catch(err => {
        console.log(err);
      });
  }

  closeDialoge(): void {
    this.dialogRef.close();
  }
}
