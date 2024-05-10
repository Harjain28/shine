import { ChangeDetectorRef, Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { Location } from "@angular/common";
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-upload-documents',
  standalone: true,
  imports: [CommonModule,MaterialModule,MatIconModule,ReactiveFormsModule, MatFormFieldModule, FormsModule,MatOptionModule,MatInputModule],
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.scss']
})
export class UploadDocumentsComponent {


  @Inject(PLATFORM_ID) private platformId!: Object


  paramsObject: any;
  iframeUrl!: string;
  filteredStatemenetObject: any;
  dealId: any;

  form2!: FormGroup;
  showValidatePANError!: boolean ;
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

 
  constructor(private api: ApiService,
      private route: ActivatedRoute,
      public eventService: EventService,
      private dialog: MatDialog,
      private location: Location,  
      private cdr: ChangeDetectorRef,
      private sanitizer: DomSanitizer,
      private http: HttpClient,


      public router: Router) {
    this.route.params.subscribe((params) => {
      this.dealId = params["id"];
    });

    this.route.queryParamMap.subscribe((params) => {
      this.paramsObject = { ...params };
    });
   
   }

  ngOnInit(): void {

    this.form();

    // this.isChecked = this.api.isDocumentChecked;

    this.requestData = localStorage.getItem("reqData");
      this.parsedData = JSON.parse(this.requestData);

      if(this.parsedData){
        this.mobileNo = this.parsedData.mobile;
      }

    this.transID =localStorage.getItem("transID");
      if(this.transID){
      this.callPerfiosCallback(this.transID);
      }
  
  }

  ngAfterViewInit(): void {
   // this.isBrowser = isPlatformBrowser(this.platformId);

    this.cdr.detectChanges();
  }

  callPerfiosCallback(id:any){
    setInterval(() => {
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
                    this.showEligible = true;  
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
    
        }, 15000); 
        
  }

  netBankinglink(){
    this.isSubmit = true;
    const defaultparams = {
      mobile: this.mobileNo,
      callbackEnum: 0,
    };
    const params = { ...defaultparams, ...this.paramsObject.params };
    this.api.remediation(
        `api/Remediation/NetBankingLink`,
        params
      )
      .subscribe({
        next: (res: any) => {
          this.isSubmit = true;

          localStorage.setItem("transID",res?.transactionId)
        this.iframeUrl = res?.url;
        window.location.href = this.iframeUrl;
        },
        error: (error:any) => {
          this.isSubmit = false;

        },
        complete: () => {
        //  ("Request complete");
        },
      });
  }

  uploadDocumentLink(){
    this.isUploadSubmit = true;
    const defaultparams = {
      mobile: this.mobileNo,
      callbackEnum: 0,
    };
    const params = { ...defaultparams, ...this.paramsObject.params };
    this.api
      .remediation(
        `api/Remediation/UploadDocumentLink`,
        params
      )
      .subscribe({
        next: (res: any) => {
          this.isUploadSubmit = true;

          localStorage.setItem("transID",res?.transactionId);
           window.location.href = res?.url;
         
        },
        error: (error:any) => {
          this.isUploadSubmit = false;

        },
        complete: () => {
        //  ("Request complete");
        },
      });
  }


  form() {
    this.form2 = new FormGroup({
       
      personalPan: new FormControl("", [Validators.required]),
      businessPan: new FormControl("", [Validators.required]),
      businessConstitutuion: new FormControl("", [Validators.required]),
    });
  }


  
  onFileSelected(event:any) {
    const params = { ...this.paramsObject.params };
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
    
    //  this.api.uploadDocument(this.sharedData ,'Bank_Statement', params, file);
    }

      inputElement.value = '';
      this.uploadDocumentLink();
  }


  
  submitBankStatement() {

    
  }

  

 

 

}
