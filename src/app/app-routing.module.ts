import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { HeaderComponent } from './shared/header/header.component';
import { ReportsComponent } from './reports/reports.component';
import { AuthGuard } from './guard/auth.gaurd';
import { RefundPolicyComponent } from './view/refund-policy/refund-policy.component';
import { ContactusComponent } from './view/contactus/contactus.component';

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
