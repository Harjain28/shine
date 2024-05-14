import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private isLinkClicked: boolean = false;

  constructor() { }

  setLinkClicked(value: boolean): void {
    this.isLinkClicked = value;
  }

  isLinkNavigation(): boolean {
    return this.isLinkClicked;
  }

  setLastUrl(url: string): void {
    sessionStorage.setItem('lastUrl', url);
  }

  getLastUrl(): any {
    return sessionStorage.getItem('lastUrl');
  }
}
