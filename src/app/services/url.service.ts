import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  isGlobal: boolean = false;

  constructor(private router: Router, private location: Location) {
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check the URL and set the hideComponent variable accordingly
        // if include in which is india website url
        const urlWithoutParams = this.location.path().split('?')[0];
        if (urlWithoutParams === '/in' || urlWithoutParams.includes('/in/')) {
          this.isGlobal = false;
        } else {
          this.isGlobal = true;
        }
      }
    });
  }
  
}
