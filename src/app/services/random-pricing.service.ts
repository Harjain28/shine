import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PricingService {
  constructor() {
    this.setRandomNumber();
  }

  getRandomNumber(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  setRandomNumber(): void {
    let randomNumber = localStorage.getItem("plan_count");
    if (!randomNumber) {
      randomNumber = this.getRandomNumber().toString();
      localStorage.setItem("plan_count", randomNumber);
    }
  }

  getPricingUrl(): string {
    const randomNumber = Number(localStorage.getItem("plan_count"));
    return randomNumber <= 3 ? '/in/pricing_group' : '/in/pricing_annual';
  }

  getClassBasedOnRandomNumber(): string {
    const randomNumber = Number(localStorage.getItem("plan_count"));
    return `assign_${randomNumber}`;
  }
}
