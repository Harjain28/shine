import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { Subscription, take, timer } from 'rxjs';


@Component({
  selector: 'app-upload-documents',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatOptionModule,
    MatInputModule,
  ],
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.scss'],
})
export class UploadDocumentsComponent {
  currentIndex = 0;

  @ViewChild('progressContainer', { static: false }) progressContainer:
    | ElementRef
    | undefined;
  @ViewChild('progressBar', { static: false }) progressBar:
    | ElementRef
    | undefined;
  @ViewChild('progressText', { static: false }) progressText:
    | ElementRef
    | undefined;
  businessLoanJson: any;
  faqs: any;
  creditReportJson: any;
  CRData: any;
  ChartsData: any;
  progressCount!: Subscription;
  istimers!: boolean;
  ncjcount: number = 60;
  tick = 1000;

  progress = 0;
  progressInterval: any;
  loaderContent: any = [
    'Over 300,000 SMEs have confidently chosen us as their trusted financing ally!',
    'All eligible SMEs experience significantly higher loan approval rates when they apply through us!',
    'Almost 70% of SMEs coming from your city receive their first offer within a week of document submission with us!',
    'We are able to negotiate better rates for 90% of borrowers from your sector!!!!!!!!!.',
    'If you own property, you may be eligible for a Loan Against Property which has 50% lower EMIs.',
  ];

  @Inject(PLATFORM_ID) private platformId!: Object;

  paramsObject: any;
  iframeUrl!: string;
  filteredStatemenetObject: any;
  dealId: any;

  form2!: FormGroup;
  showValidatePANError!: boolean;
  showEligible: boolean = false;
  isBrowser: boolean = false;
  confirmUrl: any;
  transID: any;
  showiFrame: boolean = false;
  requestData: any;
  parsedData: any;
  mobileNo: any;
  isSubmit!: boolean;
  isUploadSubmit!: boolean;
  isPerfios: boolean = true;
  timeout: any;
  interval: any;
  uploadedParams: any;
  reportsData: any;
  showEligibleReport: boolean =false;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    public eventService: EventService,
    private cdr: ChangeDetectorRef,

    public router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.dealId = params['id'];
    });

    this.route.queryParams.subscribe(params => {
      this.uploadedParams = params["uploaded"]
    });

    this.route.queryParamMap.subscribe((params) => {
      this.paramsObject = { ...params };
    });
  }

  ngOnInit(): void {
    this.form();

    // this.isChecked = this.api.isDocumentChecked;

    this.requestData = localStorage.getItem('reqData');
    this.parsedData = JSON.parse(this.requestData);

    if (this.parsedData) {
      this.mobileNo = this.parsedData.mobile;
    }

    this.transID =localStorage.getItem("transID");

    this.api.postReportsApiObservable().subscribe((trigger: any) => {
      if (trigger) {
        this.postForReport();
      }
    });
    
   

      if(this.uploadedParams === "true"){
        this.callPerfiosCallback(this.transID);
        this.interval = setInterval(() => {
          this.callPerfiosCallback(this.transID);
         },10000)
        this.showEligible = true;
        this.api.reportApi();
        this.timeout = setTimeout(() => {
          clearInterval(this.interval);
          this.showEligible = false;
          this.api.alertOk("There seems to be an issue in parsing your bank statements. We request you to please try again. Please ensure that if you choose to upload the bank statements, they are not password protected", "");
          this.router.navigate(['/in/bank_statement'])
        }, 120000);
      } else{
        this.router.navigate(['/in/bank_statement'])
      }
      
  }

  ngAfterViewInit(): void {
    // this.isBrowser = isPlatformBrowser(this.platformId);
    this.counters();
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.loaderContent.length;
    }, 5000);
    this.progressInterval = setInterval(() => {
      this.updateProgress();
    }, 1000);

    this.cdr.detectChanges();
  }



  postForReport() {
    this.showEligibleReport = true;
      let requestData: any = {}; 
      requestData["mobile"] = this.mobileNo;
      //  const params = { ...this.paramsObject.params };
          this.api.postForReport(`api/Remediation/Report`,requestData ) .subscribe({
              next: (res: any) => {
                if (res) {
                  this.showEligibleReport = true;
                  this.reportsData = res;
                 
                }
              },
              error: error => {
                this.showEligibleReport = false;
                this.router.navigate(['/in/bank_statement'])
                console.log("dhb")
              },
              complete: () => {
               // ('Request complete');
              }
            });
      
  }



  callPerfiosCallback(id:any){        
        const params = { ...this.paramsObject.params };
        const formData = new FormData();
        formData.append("PerfiosTransactionId", id);
        formData.append("ClientTransactionId", " ");
        formData.append("Status", " ")
        formData.append("ErrorCode", " ");
        formData.append("ErrorMessage", " ");
    
       
        this.api.postForPerfiosCallback(`api/Remediation/PerfiosCallback`, formData, params)
          .subscribe({
            next: (res: any) => {
               if (res) {
                clearTimeout(this.timeout);
                clearInterval(this.interval);
                this.showEligible = false;
                this.router.navigate(['/in/report'])
                }
               
               },
            error: error => {
              // this.api.alertOk("Oops! You’ve recently used CreditEnable to apply for a business loan. Please try again in a few weeks. Contact us if you need help!", "error");
            },
            complete: () => {
              ('Request complete');
            }
          });
        

  }

  netBankinglink() {
    this.isSubmit = true;
    const defaultparams = {
      mobile: this.mobileNo,
      callbackEnum: 0,
    };
    const params = { ...defaultparams, ...this.paramsObject.params };
    this.api.remediation(`api/Remediation/NetBankingLink`, params).subscribe({
      next: (res: any) => {
        this.isSubmit = true;

        localStorage.setItem('transID', res?.transactionId);
        this.iframeUrl = res?.url;
        window.location.href = this.iframeUrl;
      },
      error: (error: any) => {
        this.isSubmit = false;
      },
      complete: () => {
        //  ("Request complete");
      },
    });
  }

  uploadDocumentLink() {
    this.isUploadSubmit = true;
    const defaultparams = {
      mobile: this.mobileNo,
      callbackEnum: 0,
    };
    const params = { ...defaultparams, ...this.paramsObject.params };
    this.api
      .remediation(`api/Remediation/UploadDocumentLink`, params)
      .subscribe({
        next: (res: any) => {
          this.isUploadSubmit = true;

          localStorage.setItem('transID', res?.transactionId);
          window.location.href = res?.url;
        },
        error: (error: any) => {
          this.isUploadSubmit = false;
        },
        complete: () => {
          //  ("Request complete");
        },
      });
  }

  form() {
    this.form2 = new FormGroup({
      personalPan: new FormControl('', [Validators.required]),
      businessPan: new FormControl('', [Validators.required]),
      businessConstitutuion: new FormControl('', [Validators.required]),
    });
  }

  onFileSelected(event: any) {
    const params = { ...this.paramsObject.params };
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];

      //  this.api.uploadDocument(this.sharedData ,'Bank_Statement', params, file);
    }

    inputElement.value = '';
    this.uploadDocumentLink();
  }

  submitBankStatement() {}

  counters() {
    this.ncjcount = 60;
    this.progressCount = timer(0, this.tick)
      .pipe(take(this.ncjcount))
      .subscribe(() => {
        --this.ncjcount;
        if (this.ncjcount === 0) {
          this.istimers = false;
          this.progressCount.unsubscribe();
        }
      });
  }
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (
      ('00' + minutes).slice(-2) +
      ':' +
      ('00' + Math.floor(value - minutes * 60)).slice(-2)
    );
  }

  updateProgress() {
    this.progress += 1;

    if (this.progressBar && this.progressBar.nativeElement) {
      this.progressBar.nativeElement.style.transform = `rotate(${
        this.progress * 3.6
      }deg)`;
    }

    if (this.progressText && this.progressText.nativeElement) {
      this.progressText.nativeElement.innerText = `${this.progress}%`;
    }

    if (this.progress % 1 === 0) {
      const a = document.createElement('div');
      a.style.cssText = `position: absolute; width: 3px; height: 100%; border-top: 65px solid #12BA9B; left: 49%; top: 0%; transform: rotate(${
        this.progress * 3.6
      }deg);`;

      if (this.progressContainer && this.progressContainer.nativeElement) {
        this.progressContainer.nativeElement.appendChild(a);
      }
    }

    if (this.progress >= 100) {
      clearInterval(this.progressInterval);
    }
  }
}
