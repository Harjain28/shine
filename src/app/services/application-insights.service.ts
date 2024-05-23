import { Injectable } from '@angular/core';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApplicationInsightsService {
  private appInsights: ApplicationInsights;

  constructor(private router: Router) {
    this.appInsights = new ApplicationInsights({
      config: {
        instrumentationKey: environment.appInsights.instrumentationKey,
          enableAutoRouteTracking: true
      },
    });
    this.appInsights.loadAppInsights();
    this.appInsights.trackPageView();
  }

  // private setupRouterEventsTracking() {
  //   this.router.events
  //     .pipe(filter(event => event instanceof NavigationEnd))
  //     .subscribe(event => {
  //       const navigationEndEvent = event as NavigationEnd;
  //       this.logPageView(navigationEndEvent.urlAfterRedirects);
  //     });
  // }

  // logPageView(name?: string, uri?: string) {
  //   this.appInsights.trackPageView({ name, uri });
  // }

  // logEvent(name: string, properties?: { [key: string]: any }) {
  //   this.appInsights.trackEvent({ name }, properties);
  // }

  // logException(exception: Error, severityLevel?: number) {
  //   this.appInsights.trackException({ exception, severityLevel });
  // }

  // logTrace(message: string, properties?: { [key: string]: any }) {
  //   this.appInsights.trackTrace({ message }, properties);
  // }

  // logMetric(name: string, average: number, properties?: { [key: string]: any }) {
  //   this.appInsights.trackMetric({ name, average }, properties);
  // }
}
