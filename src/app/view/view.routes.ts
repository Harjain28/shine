import { Route } from '@angular/router';

export default[
    
    {
        path: 'in' , loadComponent:() => import('./landing-page/landing-page.component').then(c=>c.LandingPageComponent)
    },
    {
        path: 'in/pricing_annual', loadComponent:() => import('./pricing2/pricing2.component').then(c=>c.Pricing2Component)
    },

] as Route[]