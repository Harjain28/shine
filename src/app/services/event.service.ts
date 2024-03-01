import { Injectable } from "@angular/core";
import { Location } from "@angular/common";
import { BehaviorSubject, Observable, Subject, of } from "rxjs";
import {  ActivatedRoute, Router } from "@angular/router";
import { Meta, Title } from "@angular/platform-browser";
import { CanonicalService } from "./canonical.service";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root",
})
export class EventService {
  
  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  Host_Url: any;
  paramsObject: any = {};
  urlWithoutParams: any;
  private borrowerInfoSubject = new Subject<any>();

  borrowerInfo$ = this.borrowerInfoSubject.asObservable();

  private triggerComponent = new Subject<void>();
  triggerComponent$ = this.triggerComponent.asObservable();



  stepValues: any[] = [
    "eligible",
    "documents-upload",
    "lender-match",
    "lender-decision",
    // "lender-decision-agreement",
    "disbursal",
  ];
  selectedStepIndex: any;
  constructor(public location: Location , private title: Title, private meta: Meta , private canonicalService: CanonicalService , private router: Router , private route : ActivatedRoute ) {

    this.route.queryParamMap.subscribe((params) => {
      this.paramsObject = { ...params };
    });
  }

  trigger() {
    this.triggerComponent.next();
  }

  numberOnly(event: any, type: string): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    const isOnlyNumber = charCode > 31 && (charCode < 48 || charCode < 44 || charCode > 57);
    const isFlotedNumber =
      charCode > 31 && (charCode < 46  || charCode < 44 || charCode > 57 || charCode === 47);
    if (type !== "mobile") {
      if (isOnlyNumber) {
        return false;
      }
      return true;
    } else {
      if (isFlotedNumber) {
        return false;
      }
      return true;
    }
  }

  

  scrollToTop() {
    window.scrollTo(0, 0);
  }


   redirectToInitialJourney() {
  const urlWithoutParams = this.location.path().split('?')[0];
  localStorage.setItem("isV3", JSON.stringify(true));
  localStorage.removeItem('phone');
  this.router.navigate([urlWithoutParams + '/business-loan-form-p1'], {queryParams: this.paramsObject.params});
  }

  back() {
    this.location.back();
  }

  setBorrowerInfo(data: any) {
    this.borrowerInfoSubject.next(data);
  }
  navigateWithQueryParams(url: string) {
    const exactUrl = environment.website_url + url;
    const queryParams = this.route.snapshot.queryParams;
    const urlWithQueryParams = this.appendQueryParams(exactUrl, queryParams);
    window.location.href = urlWithQueryParams;
  }

  private appendQueryParams(url: string, queryParams: any): string {
    const queryString = Object.keys(queryParams)
      .map((key) => key + '=' + queryParams[key])
      .join('&');
    return url + (queryString ? '?' + queryString : '');
  }

  addmetaTag(title: any , description?: any , keywords?: any ) {
    this.Host_Url = environment.Host_Url;
    this.meta.updateTag({ property: 'og:url', content: this.Host_Url + this.router.url});
    this.canonicalService.updateCanonicalUrl(this.Host_Url + this.router.url);
    this.title.setTitle(title);
    this.meta.updateTag({ property: 'og:title', content: title});
    this.meta.updateTag({ property: 'og:description', content: description});
    this.meta.updateTag({ name: 'description', content:  description});
    this.meta.updateTag({ name: 'keywords', content:  keywords});
    this.meta.updateTag({ name: "robots", content: "index, follow" });
  }

  addGlobalPagemetaTag(title: any , description?: any , keywords?: any ) {
    this.meta.updateTag({ name: "robots", content: "noindex, nofollow" });
    this.Host_Url = environment.Host_Url;
    this.meta.updateTag({ property: 'og:url', content: this.Host_Url + this.router.url});
    this.canonicalService.updateCanonicalUrl(this.Host_Url + this.router.url);
    this.title.setTitle(title);
    this.meta.updateTag({ property: 'og:title', content: title});
    this.meta.updateTag({ property: 'og:description', content: description});
    this.meta.updateTag({ name: 'description', content:  description});
    this.meta.updateTag({ name: 'keywords', content:  keywords});
  }


  deleteLastindex() {
    const pathArray = this.location.path().split("?")[0].split("/");
    const lastIndex = pathArray.length - 1;
    if (lastIndex >= 2) {
      pathArray.splice(lastIndex - 1, 2); 
      this.urlWithoutParams = pathArray.join("/");
    } else {
      // Handle the case where there are fewer than 2 elements
      this.urlWithoutParams = this.location.path().split("?")[0];
    }
  }

  currentIndex(stepIdentifier: string){
    
    return   this.stepValues.indexOf(stepIdentifier)
  }

  autoSelectStep(stepIdentifier: string, dealId: any) {
    const stepIndex = this.stepValues.indexOf(stepIdentifier);
    if (stepIndex !== -1) {
      this.selectedStepIndex = stepIndex;
      const selectedStepValue = this.stepValues[this.selectedStepIndex];
      this.stepNavigation(selectedStepValue, dealId);
    }
  }


  stepNavigation(step: any, dealId: any) {
    const stepRoute = [
      this.urlWithoutParams + "/" + step.toLowerCase() + "/" + dealId,
    ];
    this.router.navigate(stepRoute);
  }

  getChosenUI(userMobileNumber: string): Observable<string> {
    const storedUi = localStorage.getItem(userMobileNumber);

    if (storedUi) {
      return of(storedUi);
    }

    const randomNumber = Math.random();
    const chosenUi = randomNumber < 0.5 ? 'ui1' : 'ui2';

    localStorage.setItem(userMobileNumber, chosenUi);
    return of(chosenUi);
  }

}
