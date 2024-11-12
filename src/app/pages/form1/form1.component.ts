import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.module';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common';
import { NavigationService } from 'src/app/services/navigation.service';
import { OtpService } from 'src/app/services/otp.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-form1',
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
  ],
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss'],
})
export class Form1Component implements OnInit {
  form1!: FormGroup;
  showValidatePANError!: boolean;
  showValidatepinError!: boolean;
  isSubmit: boolean = false;
  paramsObject: any;
  errorVisible = false;
  validatePin!: boolean;
  validatePAN!: boolean;
  error: any; // Define error property here

  unformattedX: string = '';
  formattedX!: string;
  showBusniessNameError!: boolean;
  parsedData:any;
  @ViewChild('formSection', { static: true }) formSection!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    public location: Location,
    private renderer: Renderer2,
    private navigationService: NavigationService,
    public eventService: EventService,
    public router: Router,
    private api: ApiService,
    private state: LocalStorageService,
    private otpService: OtpService,

  ) {
    this.route.queryParamMap.subscribe((params) => {
      this.paramsObject = { ...params };
    });
  }

  ngOnInit(): void {
    // this.state.removeSomeItem();
    this.form();
   
    const requestData:any = localStorage.getItem("reqData")
    this.parsedData = JSON.parse(requestData);
    if (this.parsedData) {
      this.form1.patchValue({
        title: this.parsedData.prefix ? this.parsedData.prefix : "Mr.",
        firstName: this.parsedData.firstName,
        lastName: this.parsedData.lastName,
        busninessName: this.parsedData.businessName,
        dsaCode: this.parsedData.dsaCode ?  this.parsedData.dsaCode : '',
        emailId: this.parsedData.email,
      });
    }
   
    const savedPhoneNumber = localStorage.getItem('phoneNumber');
    if (savedPhoneNumber) {
      this.form1.patchValue({ phoneNumber: savedPhoneNumber });
    }

  }

  form() {
    this.form1 = new FormGroup({
      title: new FormControl('Mr.', [Validators.required]),
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]+$'),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]+$'),
      ]),
    
      emailId: new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
        ],
        updateOn: 'blur',
      }),
      busninessName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      dsaCode: new FormControl(''),
    
    });
  }

  onNextClick() {
    this.formSection.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  uploadBasicDetails() {
    this.isSubmit = true;
    const PricingModel:any = localStorage.getItem("text");
    let text = '';
    const SelectedPrice =  localStorage.getItem("plan");
    const formValue = this.form1.value;
    const defaultparams = {
      forceGenerate: false,
      resend: false,
    };
    if (this.form1.valid) {
    const params = { ...defaultparams, ...this.paramsObject.params };
    let requestData: any = {};
    requestData['prefix'] = formValue.title;
    requestData['mobile'] = this.parsedData?.mobile;
    requestData['email'] = formValue.emailId;
    requestData['firstName'] = formValue.firstName.toUpperCase();
    requestData['lastName'] = formValue.lastName.toUpperCase();
    requestData['businessName'] = formValue.busninessName;
    if (formValue.dsaCode) {
      requestData['dsaCode'] = formValue.dsaCode;
    }
    
        this.api.post(`api/Remediation/UpdateBasicFormDetails`, requestData, params).subscribe({
          next: (res: any) => {
            if (res.success) {
              this.navigationService.setLinkClicked(true);
              localStorage.setItem('reqData', JSON.stringify(res?.userInfo));
              localStorage.setItem('stage', JSON.stringify(res?.reportStage));
              localStorage.setItem('title', formValue.title);
              const plan:any = localStorage.getItem("plan");
              if (plan) {
               this.navigationService.redirectToPayment(plan);
              } else {
                this.navigationService.redirectToPayment(String(requestData.selectedPrice));
              }
              this.isSubmit = false;
            } else this.isSubmit = false;
          },
          error: (error) => {
            this.isSubmit = false;
            this.onNextClick();
          },
          complete: () => {
            ('Request complete');
          },
        });
    } else {
      this.form1.markAllAsTouched();
      this.errorVisible = true;
      this.isSubmit = false;
    }
  }

  // fetchOtp(): void {
  //   this.otpService
  //     .fetchOtp(15000)
  //     .then((otp) => {
  //       console.log('OTP:', otp);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

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
              if (typeof res === 'boolean') {
                this.validatePAN = res;
              }
              if (res && typeof res === 'object' && 'valid' in res) {
                this.validatePAN = res.valid;
              }
            } else {
              this.validatePAN = false;
              this.showValidatePANError = true;
            }
          },
          error: (error: any) => {
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
        .get(`api/Validator/Pincode?pincode=${formValue.pincode}`, params)
        .subscribe({
          next: (res: any) => {
            if (res.valid == true) {
              this.validatePin = true;
              this.showValidatepinError = false;
              localStorage.setItem('state', res.state);
            } else {
              this.validatePin = false;
              this.showValidatepinError = true;
            }
          },
          error: (error: any) => {
            this.validatePin = true;
          },
          complete: () => {
            //  ("Request complete");
          },
        });
    }
  }
}
