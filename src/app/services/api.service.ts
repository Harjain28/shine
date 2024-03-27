import {  Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { EventService } from './event.service';
// import Swal from 'sweetalert2';
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

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private route: ActivatedRoute,

  ) {
    this.route.queryParamMap.subscribe((params) => {
      this.paramsObject = { ...params };
    });

   
   // this.TOKEN = localStorage.getItem('token');
  
    this.API_URL = environment.BASE_API_ENDPOINT;

   
  }



 setHeader() {
  this.TOKEN = localStorage.getItem('token');
  
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
            })
          };
  }
 }

 getwithHeader(path: string, params: HttpParams = new HttpParams()) {
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Api-Version' : '2.0'
    })
  };

  return this.http.get(`${this.API_URL}${path}`,{headers: this.httpOptions.headers, params })
    .pipe(catchError(this.formatErrors));
}
  
  get(path: string, params: HttpParams = new HttpParams()) {
    return this.http.get(`${this.API_URL}${path}`, {params})
      .pipe(catchError(this.formatErrors));
  }

  post(path: any,   body: object = {} , params: any) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(`${this.API_URL}${path}`,  body, {headers: this.httpOptions.headers , params}).pipe(catchError(this.formatErrors));
  }

  patch(path: any, body: object = {} , params: any) {
    this.TOKEN = localStorage.getItem('token');
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Api-Version' : '2.0',
        Authorization: 'Bearer ' + this.TOKEN
      })
    };
    return this.http.patch(`${this.API_URL}${path}`, body, {headers: this.httpOptions.headers , params}).pipe(catchError(this.formatErrors));
  }
 
  delete(path: string, params: HttpParams = new HttpParams()) {
    return this.http.delete(`${this.API_URL}${path}`, { headers: this.httpOptions.headers, params }).pipe(map((r: any) => {
      // if (this.alert) {
      //   this.alert(r.message ? r.message : 'Success', 'success');
      // }
    })).pipe(catchError(this.formatErrors));
  }

  alertOk(message: string, type: any) {
    return Swal.fire({
      title: message,
      icon: type,
      position: 'center',
      showConfirmButton: true,
      width: '600px',
    })
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


