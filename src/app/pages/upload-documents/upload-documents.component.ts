import { Component } from '@angular/core';
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

@Component({
  selector: 'app-upload-documents',
  standalone: true,
  imports: [CommonModule,MaterialModule,MatIconModule,ReactiveFormsModule, MatFormFieldModule, FormsModule,MatOptionModule,MatInputModule],
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.scss']
})
export class UploadDocumentsComponent {

  paramsObject: any;

  isChecked!: boolean;
  filteredStatemenetObject: any;
  dealId: any;

  form2!: FormGroup;
  showValidatePANError!: boolean ;
 
  constructor(private api: ApiService,  private route: ActivatedRoute,public eventService: EventService,public router: Router) {
    this.route.params.subscribe((params) => {
      this.dealId = params["id"];
    });

    this.route.queryParamMap.subscribe((params) => {
      this.paramsObject = { ...params };
    });
   
   }

  ngOnInit(): void {

    this.form();

    this.isChecked = this.api.isDocumentChecked;
  
  }

  form() {
    this.form2 = new FormGroup({
       
      personalPan: new FormControl("", [Validators.required]),
      businessPan: new FormControl("", [Validators.required]),
      businessConstitutuion: new FormControl("", [Validators.required]),
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
  
  onFileSelected(event:any) {
    const params = { ...this.paramsObject.params };
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
    
    //  this.api.uploadDocument(this.sharedData ,'Bank_Statement', params, file);
    }
      inputElement.value = '';
  }
  
  submitBankStatement() {
//     let requestData = {};
//     const defaultparams = {
//      // ceDealId: this.sharedData?.dealId,
//     };
//     const params = { ...defaultparams, ...this.paramsObject.params };
//     this.api
//       .postForPostEligibility(`BankStatement/BankStatement/NetBanking`, null , params)
//       .subscribe({
//         next: (res: any) => {
//           if (res?.success) {
//             window.location.href = res?.url;
          
//           } else {         
//           }
//         },
//         error: error => {
//           console.log(error, "error");
//         },
//         complete: () => {
//           console.log('Request complete');
//         }
//       });
//  }
  }

}
