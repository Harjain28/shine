import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { ReportsComponent } from './reports/reports.component';
import {  PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthGuard } from './guard/auth.gaurd';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
     
  {
    path: '',
    redirectTo: 'in',  
    pathMatch: 'full'
  },

  {
    path: '', 
    component: ViewComponent, 
    loadChildren: () => import('./view/view.routes')
  },
  {
    path:'in' , component: PagesComponent, 
    loadChildren:() =>import('./pages/pages.routes')
  },
  // {
  //   path:'in/report', 
  //   canActivate: [AuthGuard],
  //   component: ReportsComponent   
  // },

  {
    path: 'in/sample_report',  loadComponent:() => import('./reports/reports.component').then(c=>c.ReportsComponent)
},
{
  path: 'in/report_model1', loadComponent:() => import('./reports/reports.component').then(c=>c.ReportsComponent)
},
{
  path: 'in/report/:id', canActivate: [AuthGuard], loadComponent:() => import('./reports/reports.component').then(c=>c.ReportsComponent)
},


  { path: '**', pathMatch: 'full',  component: PageNotFoundComponent },

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
