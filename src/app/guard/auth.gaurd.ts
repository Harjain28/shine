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
    "/plans",
    "/payment",
    "/otp",
    "/form2",
    "/form1",
    "/selection",
    "/pricing",
  ];

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Check if the current URL is in the list of page URLs
    if (this.pageUrls.includes(state.url) ) {
      // Redirect to the home page
      this.router.navigateByUrl('/project-shine');
      return false; // Return false to prevent navigation
    }

    return true; // Allow navigation to the requested page
  }
}