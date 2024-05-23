import {  Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions!: { headers: HttpHeaders; };
  alltags: any;
  TOKEN: any;
  API_ELIGIBILITY_URL: any;
  filteredAadharObject: any;
  File: any;
  isDocumentChecked: boolean = false;

  paramsObject: any;

  shared:  any = [];
  API_URL: string;
  private reportsApiData = new BehaviorSubject<boolean>(false);


  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private route: ActivatedRoute,

  ) {
    this.route.queryParamMap.subscribe((params) => {
      this.paramsObject = { ...params };
    });

   
   // 
  
    this.API_URL = environment.BASE_API_ENDPOINT;
    this.TOKEN = localStorage.getItem("token");   
  }

  reportApi() {
    this.reportsApiData.next(true);
  }

  postReportsApiObservable() {
    return this.reportsApiData.asObservable();
  }

  postReportApi(requestData: any) {
    return this.http.post('api/Remediation/Report', requestData);
  }




 setHeader() {
  
  
  if(this.TOKEN) {
    this.httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.TOKEN
            })
          };
        } else {
          this.httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.TOKEN
            })
          };
  }
 }

 getwithHeader(path: string, params: HttpParams = new HttpParams()) {
  this.TOKEN = localStorage.getItem("token");  
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Api-Version' : '2.0',
      Authorization: 'Bearer ' + this.TOKEN
    })
  };

  return this.http.get(`${this.API_URL}${path}`,{headers: this.httpOptions.headers, params })
    .pipe(catchError(this.formatErrors));
}
  
remediation(path: string, params: HttpParams = new HttpParams()) {
  this.TOKEN = localStorage.getItem("token");   
  this.httpOptions = {
    headers: new HttpHeaders({
      'accept': '*',
      Authorization: 'Bearer ' + this.TOKEN
    })
  };
  return this.http.get(`${this.API_URL}${path}`,{headers: this.httpOptions.headers, params })
    .pipe(catchError(this.formatErrors));
}

postForPayment(path: string, body: object = {} , params: HttpParams = new HttpParams()) {

  this.TOKEN = localStorage.getItem("token");  
  const posthttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.TOKEN
    })
  };    
  return this.http.post(`${this.API_URL}${path}`,  body, {headers: posthttpOptions.headers , params}).pipe(catchError(this.formatErrors));
}
  
  get(path: string, params: HttpParams = new HttpParams()) {
    return this.http.get(`${this.API_URL}${path}`, {params})
      .pipe(catchError(this.formatErrors));
  }

  postwithoutHeader(){
    const data={};
    return this.http.post(`https://pa-preprod.1pay.in/payment/payprocessorV2`, data)

  }

  post(path: any,   body: object = {} , params: any) {
    this.TOKEN = localStorage.getItem("token");   
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.TOKEN
      })
    };
    return this.http.post(`${this.API_URL}${path}`,  body, {headers: this.httpOptions.headers , params}).pipe(catchError(this.formatErrors));
  }

  postForPerfiosCallback(path: any,   body: object = {} , params: any) {
    this.TOKEN = localStorage.getItem("token");   
    this.httpOptions = {
      headers: new HttpHeaders({
        'accept': '*',
        Authorization: 'Bearer ' + this.TOKEN
      })
    };
    return this.http.post(`${this.API_URL}${path}`,  body, {headers: this.httpOptions.headers , params}).pipe(catchError(this.formatErrors));
  }

  patch(path: any, body: object = {} , params: any) {
    this.TOKEN = localStorage.getItem("token");   
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Api-Version' : '2.0',
        Authorization: 'Bearer ' + this.TOKEN
      })
    };
    return this.http.patch(`${this.API_URL}${path}`, body, {headers: this.httpOptions.headers , params}).pipe(catchError(this.formatErrors));
  }



postForReport(path: string, body: object = {} , params: HttpParams = new HttpParams()) {
  this.TOKEN = localStorage.getItem("token");   
  const posthttpOptions = {
    headers: new HttpHeaders({
      'accept': '*',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.TOKEN
    })
  };    
  return this.http.post(`${this.API_URL}${path}`,  body, {headers: posthttpOptions.headers , params}).pipe(catchError(this.formatErrors));
}

postForLogin(path: string, body: object = {} , params: HttpParams = new HttpParams()){
  const posthttpOptions = {
    headers: new HttpHeaders({
      'accept': '*',
      'Content-Type': 'application/json',
    })
  };    
  return this.http.post(`${this.API_URL}${path}`,  body, {headers: posthttpOptions.headers , params}).pipe(catchError(this.formatErrors));
}

postMethod(path: string, body: object = {} , params: HttpParams = new HttpParams()) {
  this.TOKEN = localStorage.getItem("token");   
  const posthttpOptions = {
    headers: new HttpHeaders({
      'accept': '*',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.TOKEN

    })
  };    
  return this.http.post(`${this.API_URL}${path}`,  body, {headers: posthttpOptions.headers , params}).pipe(catchError(this.formatErrors));
}
 
  delete(path: string, params: HttpParams = new HttpParams()) {
    return this.http.delete(`${this.API_URL}${path}`, { headers: this.httpOptions.headers, params }).pipe(map((r: any) => {
      // if (this.alert) {
      //   this.alert(r.message ? r.message : 'Success', 'success');
      // }
    })).pipe(catchError(this.formatErrors));
  }

  alertOk(headline: string, body: string, imageUrl: string) {
    return Swal.fire({
      title: headline,
      html: body,
      imageUrl: imageUrl,
      imageWidth: 100,  // Adjust size as needed
      imageHeight: 100,  // Adjust size as needed
      imageAlt: 'Custom image',
      position: 'center',
      showConfirmButton: true,
      width: '600px',
      customClass: {
        title: 'swal2-title-custom',  // Apply custom class to the title
      },
    });
  }
  
  alert(message: string, type: any) {
    return Swal.fire({
      title: message,
      icon: type,
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 2000,
      width: '500px',
    });
  }



  private formatErrors(error: any) {
    return throwError(error.error);
  }
}


