import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { LoaderService } from '../services/loader.service';  // Make sure the path is correct

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];

  constructor(private loaderService: LoaderService) { }

  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    
    if (i >= 0) {
      this.requests.splice(i, 1);
    }
    if (this.requests.length === 0) {
      this.loaderService.hide();
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let TOKEN = localStorage.getItem('LoggedIn');
    if (TOKEN) {
      req = req.clone({
        setHeaders: {
          Authorization: TOKEN
        }
      });
    }

    const isExcludedUrl = req.url.includes('/Report') || req.url.includes('PaymentConfirmation') || req.url.includes('PerfiosCallback');
    console.log(isExcludedUrl , req, 'inter')
    if (!isExcludedUrl) {
      this.requests.push(req);
      this.loaderService.show();
    }

    return new Observable((observer: Observer<any>) => {
      const subscription = next.handle(req)
        .subscribe(
          event => {
            if (event instanceof HttpResponse) {
              if (!isExcludedUrl) {
                this.removeRequest(req);
              }
              observer.next(event);
            }
          },
          err => {
            if (!isExcludedUrl) {
              this.removeRequest(req);
            }
            observer.error(err);
          },
          () => {
            if (!isExcludedUrl) {
              this.removeRequest(req);
            }
            observer.complete();
          });
      return () => {
        if (!isExcludedUrl) {
          this.removeRequest(req);
        }
        subscription.unsubscribe();
      };
    });
  }
}
