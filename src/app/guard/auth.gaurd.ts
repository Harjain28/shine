import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from '../services/event.service';
import { StorageService } from '../services/storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private readonly pageUrls: string[] = [
    "/pages/plans",
    "/pages/payment",
    "/pages/otp",
    "/pages/form2",
    "/pages/form1",
    "/pages/selection",
    "/pages/pricing",
  ];

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.pageUrls.includes(state.url) ) {
      this.router.navigateByUrl('/project-shine');
      return false; 
    }

    return true; 
  }
}