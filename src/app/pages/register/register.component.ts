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
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatOptionModule,
    MaterialModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    MatInputModule,],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../form1/form1.component.scss']
})
export class RegisterComponent {
  register_form!: FormGroup;
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
    this.state.removeSomeItem();
    this.form();
    const data:any = localStorage.getItem("reqData");
    const savedPhoneNumber = JSON.parse(data);
    if (savedPhoneNumber) {
      this.register_form.patchValue({ phoneNumber: savedPhoneNumber?.mobile });
    }
  }

  form() {
    this.register_form = new FormGroup({
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^[6-9]\\d{9}$'),
        Validators.maxLength(10),
      ]),
      reCaptcha: new FormControl(null, Validators.required),
    });
  }
  onNextClick() {
    this.formSection.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  getOtpbyPhone() {
    this.isSubmit = true;
    const PricingModel:any = localStorage.getItem("text");
    let text =  '';
    const SelectedPrice =  localStorage.getItem("plan");
    const formValue = this.register_form.value;
    const defaultparams = {
      forceGenerate: false,
      resend: false,
    };
    const params = { ...defaultparams, ...this.paramsObject.params };
    let requestData: any = {};
    requestData['mobile'] = formValue.phoneNumber;
    requestData['PricingModel'] =  PricingModel;
    requestData['SelectedPrice'] = SelectedPrice;

    if (this.register_form.valid) {
        this.api.post(`api/Remediation/GetOTP`, requestData, params).subscribe({
          next: (res: any) => {
            if (res.success) {
              this.navigationService.setLinkClicked(true);
              localStorage.setItem('reqData', JSON.stringify(requestData));
              this.fetchOtp();
              const plan:any = localStorage.getItem("plan");
              if (plan) {
               this.navigationService.redirectToOTP(plan);
              } else {
                this.navigationService.redirectToOTP(String(requestData.selectedPrice));
              }
              this.isSubmit = false;
            } else this.isSubmit = false;
          },
          error: (error) => {
            this.isSubmit = false;
            // this.onNextClick();
          },
          complete: () => {
            ('Request complete');
          },
        });
    } else {
      this.register_form.markAllAsTouched();
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


}
