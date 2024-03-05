import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { HeaderComponent } from './shared/header/header.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    path:'' , component: PagesComponent,
    loadChildren:() =>import('./pages/pages.routes')
  },
  {
    path:'reports' , component: ReportsComponent,
    
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
