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

  @ViewChild('formSection', { static: true }) formSection!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    public location: Location,
    private renderer: Renderer2,
    private navigationService: NavigationService,
    public eventService: EventService,
    public router: Router,
    private api: ApiService,
    private otpService: OtpService
  ) {
    this.route.queryParamMap.subscribe((params) => {
      this.paramsObject = { ...params };
    });
  }

  ngOnInit(): void {
    this.form();
   
    const savedPhoneNumber = localStorage.getItem('phoneNumber');
    if (savedPhoneNumber) {
      this.form1.patchValue({ phoneNumber: savedPhoneNumber });
    }

    this.form1.get('businessPan')!.valueChanges.subscribe((value) => {
      if (value !== value.toUpperCase()) {
        this.form1
          .get('businessPan')!
          .setValue(value.toUpperCase(), { emitEvent: false });
      }
    });
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
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^[6-9]\\d{9}$'),
        Validators.maxLength(10),
      ]),
      emailId: new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
        ],
        updateOn: 'blur',
      }),
      pincode: new FormControl('', [
        Validators.required,
        Validators.maxLength(6),
        Validators.pattern('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$'),
      ]),
      busninessName: new FormControl('', [Validators.required]),
      businessTurnover: new FormControl('', [Validators.required]),
      propertyOwnership: new FormControl('', [Validators.required]),
      businessPan: new FormControl('', [
        Validators.required,
        Validators.pattern('^([A-Z]){5}([0-9]){4}([A-Z]){1}$'),
      ]),
      businessVintage: new FormControl('', [Validators.required]),
    });
  }

  goToOtp() {
    this.router.navigate(['/pages/otp']);
  }

  formatNumber(x: number): string {
    const xStr = x.toString();
    let lastThree = xStr.substring(xStr.length - 3);
    const otherNumbers = xStr.substring(0, xStr.length - 3);
    if (otherNumbers !== '') {
      lastThree = ',' + lastThree;
    }
    const formattedNumber =
      otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
    return formattedNumber;
  }

  onInputChange(event: any) {
    this.unformattedX = event.target.value.replace(/,/g, '');
    this.formattedX = this.formatNumber(+this.unformattedX);
  }

  isFourthCharP(formValue: any) {
    let upperCaseString = formValue.businessPan.toUpperCase();
    if (upperCaseString.length >= 4) {
      return upperCaseString[3] === 'P';
    } else {
      return false;
    }
  }

  onNextClick() {
    this.formSection.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  getOtpbyPhone() {

    this.isSubmit = true;
    const PricingModel = localStorage.getItem("text");
    const SelectedPrice =  localStorage.getItem("plan");
    console.log(typeof(Number(SelectedPrice)), 'SelectedPrice');
    const formValue = this.form1.value;
    const defaultparams = {
      forceGenerate: false,
      resend: false,
    };
    this.onNextClick();
    const params = { ...defaultparams, ...this.paramsObject.params };
    let requestData: any = {};
    requestData['mobile'] = formValue.phoneNumber;
    requestData['email'] = formValue.emailId;
    requestData['firstName'] = formValue.firstName.toUpperCase();
    requestData['lastName'] = formValue.lastName.toUpperCase();
    requestData['businessName'] = formValue.busninessName;
    requestData['pincode'] = formValue.pincode;
    requestData['businessPan'] = formValue.businessPan.toUpperCase();
    requestData['propertyOwnership'] = formValue.propertyOwnership;
    requestData['turnover'] = this.unformattedX;
    requestData['businessVintage'] = formValue.businessVintage;
    requestData['PricingModel'] =  PricingModel;
    requestData['SelectedPrice'] = SelectedPrice;
    localStorage.setItem('reqData', JSON.stringify(requestData));
    localStorage.setItem('title', formValue.title);
    // if (this.validatePin) {
    //   this.showValidatepinError = false;
    // } else {
    //   this.validatePin = false;
    //   this.showValidatepinError = true;
    // }

    // if (this.validatePAN) {
    //   this.showValidatePANError = false;
    // } else {
    //   this.validatePAN = false;
    //   this.showValidatePANError = true;
    // }
    // if (this.form1.valid && this.validatePAN && this.validatePin) {
    let upperCaseString = formValue.businessPan.toUpperCase();

    if (this.form1.valid) {
      if (upperCaseString[3] === 'P') {
        this.api.post(`api/Remediation/GetOTP`, requestData, params).subscribe({
          next: (res: any) => {
            if (res.success) {
              this.navigationService.setLinkClicked(true);
              this.fetchOtp();
              this.router.navigate(['/in/otp']);
              this.isSubmit = false;
            } else this.isSubmit = false;
          },
          error: (error) => {
            this.onNextClick();
            // this.isSubmit = false;
            // if(error.errors.Pincode){
            //   this.showValidatepinError = true;
            // }
            // if(error.errors.BusinessPan){
            // this.showValidatePANError = true;
            // }
            if (error.errors.BusinessName) {
              this.error = error.errors.BusinessName;
              this.showBusniessNameError = true;

            }
            this.isSubmit = false;
          },
          complete: () => {
            ('Request complete');
          },
        });
      } else {
        this.isSubmit = false;
        this.api.alertOk(
          'Report for Sole Proprietors Only - Expansion Planned',
          'This report is currently only available for sole proprietors. But don’t worry! We will be expanding to include Pvt Ltd, LLP, and other business types soon. Thank you for your patience!',
          'https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/opening_screen/business_risk_big.svg'
        );
      }
    } else {
      this.form1.markAllAsTouched();
      this.errorVisible = true;
      this.isSubmit = false;
    }
  }

  fetchOtp(): void {
    this.otpService
      .fetchOtp(15000)
      .then((otp) => {
        console.log('OTP:', otp);
      })
      .catch((err) => {
        console.log(err);
      });
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
