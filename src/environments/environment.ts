// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  // Host_Url: "https://shine.creditenable.com/",
  // website_url: "https://shine.creditenable.com",
  // BASE_API_ENDPOINT: 'https://borrowerportal.creditenable.com/',
  // APPLICATION_BASE_POST_ELIGIBILITY_URL: 'https://borrowerportal.creditenable.com/api/',
  // BASE_API_ELIGIBILITY_URL_ENDPOINT: 'https://borrowerportal.creditenable.com/api/',
  // appInsights: {
  //   instrumentationKey: 'b36c23f0-3b56-4cb1-aceb-0e1b1850a69c'
  // },
  //   production: true,
  //   enableGTM: true,

  Host_Url: "https://staging.creditenable.com/",
  website_url: "https://staging.creditenable.com",
  BASE_API_ENDPOINT: 'https://borrowerportal-staging.creditenable.com/',
  APPLICATION_BASE_POST_ELIGIBILITY_URL: 'https://borrowerportal-staging.creditenable.com/api/',
  BASE_API_ELIGIBILITY_URL_ENDPOINT: 'https://borrowerportal-staging.creditenable.com/api/',
  production: false,
  appInsights: {
    instrumentationKey: '9841128a-2c54-41a7-8dcb-67ca4d58bffb'
  },
  enableGTM: true,


recaptcha: {
  siteKey: '6LfJrisqAAAAANmTRhUuP5CGmxsl-vj0wVznyBQc',
},
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
