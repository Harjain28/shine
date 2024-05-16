import { Route } from '@angular/router';
import { AuthGuard } from '../guard/auth.gaurd';

export default[
    
    {
        path: 'in' , canActivate:[AuthGuard],  loadComponent:() => import('./landing-page/landing-page.component').then(c=>c.LandingPageComponent)
    },
    {
        path: 'in/refund-policy' , loadComponent:() => import('./refund-policy/refund-policy.component').then(c=>c.RefundPolicyComponent)
    },
    {
        path: 'in/contact-us' , loadComponent:() => import('./contactus/contactus.component').then(c=>c.ContactusComponent)
    },

] as Route[]