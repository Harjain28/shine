import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { ReportsComponent } from './reports/reports.component';
import { RefundPolicyComponent } from './view/refund-policy/refund-policy.component';
import { ContactusComponent } from './view/contactus/contactus.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
     
  {
    path: '',
    redirectTo: 'in',  
    pathMatch: 'full'
  },
  {
    path:'in' , component: PagesComponent,
    loadChildren:() =>import('./pages/pages.routes')
  },

  {
    path:'in/report', 
    component: ReportsComponent   
  },

  {
    path:'in/sample_report', 
    component: ReportsComponent   
  },
  
  {
    path:'in/refund-policy', 
    component: RefundPolicyComponent   
  },

  {
    path:'in/contact-us', 
    component: ContactusComponent   
  },
  {
    path: "page-not-found",
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    scrollPositionRestoration: 'enabled',
    preloadingStrategy: PreloadAllModules,
    initialNavigation: 'enabledBlocking'
})],

  exports: [RouterModule]
})
export class AppRoutingModule { }
