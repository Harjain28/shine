import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
 
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
