// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  Host_Url: "https://staging.creditenable.com/",
  website_url: "https://staging.creditenable.com",
  APPLICATION_BASE_URL: 'https://borrower-journey-dev.creditenable.com/',
  BASE_API_ENDPOINT: 'https://borrower-journey-dev.creditenable.com/',
  // APPLICATION_BASE_URL: 'https://borrower-journey-staging.azurewebsites.net/',
  // BASE_API_ENDPOINT: 'https://borrower-journey-staging.azurewebsites.net/',
  // APPLICATION_BASE_POST_ELIGIBILITY_URL: 'https://da-app.creditenable.com/BorrowerPortalAPI/api/',
  // BASE_API_ELIGIBILITY_URL_ENDPOINT: 'https://da-app.creditenable.com/BorrowerPortalAPI/api/',

  APPLICATION_BASE_POST_ELIGIBILITY_URL: 'https://borrowerportal-staging.creditenable.com/api/',
  BASE_API_ELIGIBILITY_URL_ENDPOINT: 'https://borrowerportal-staging.creditenable.com/api/',
  production: false,

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
