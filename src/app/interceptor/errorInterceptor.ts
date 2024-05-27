import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private api: ApiService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isExcludedUrl = req.url.includes('PerfiosCallback');

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let title = '';
        let body = '';
        if (error.status >= 500) {
          title = 'Server Maintenance Underway';
          body =
            'We are experiencing technical errors. Please try again later. Our team is working hard to fix this. Thank you for your patience.';
          //    this.router.navigate(['/in']);
        } else if (error.status == 400 && !isExcludedUrl) {
          title = 'Input Error Detected';
          body =
            'The information entered seems to be incorrect. Double-check your information for any mistakes and submit again. Accurate input will help us process your request.';
        } else if (error.status == 401) {
          title = 'Session Timed Out';
          body =
            'Your session has timed out. Kindly log in again to proceed. This helps keep your session secure and protects your information.';
          this.router.navigate(['/in']);
        } else {
          console.error('Unhandled error status:', error.status);
          //  this.router.navigate(['/in']);
        }

        if (title) {
          this.api.alertOk(
            title,
            body,
            'https://ce-static-media.s3.ap-south-1.amazonaws.com/images/website/Shine/opening_screen/business_risk_big.svg'
          );
          // this.alertService.showAlert(title, body);
        }
        return throwError(error);
      })
    );
  }
}
