import { Route, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from '../guard/auth.gaurd';

export default[
    {
        path: 'project-shine', component: LandingPageComponent
    },
    {
        path: 'plans', loadComponent:() => import('./subscribtion-plan/subscribtion-plan.component').then(c=>c.SubscribtionPlanComponent),canActivate: [AuthGuard]
    },
    {
        path: 'pricing', loadComponent:() => import('./pricing/pricing.component').then(c=>c.PricingComponent, ),canActivate: [AuthGuard]
    },
    {
        path: 'selection', loadComponent:() => import('./selection/selection.component').then(c=>c.SelectionComponent),canActivate: [AuthGuard]
    },
    {
        path: 'form1', loadComponent:() => import('./form1/form1.component').then(c=>c.Form1Component),canActivate: [AuthGuard]
    },
    {
        path: 'otp', loadComponent:() => import('./otp/otp.component').then(c=>c.OtpComponent),canActivate: [AuthGuard]
    },
    {
        path: 'form2', loadComponent:() => import('./form2/form2.component').then(c=>c.Form2Component),canActivate: [AuthGuard]
    },
    {
        path: 'payment', loadComponent:() => import('./payment/payment.component').then(c=>c.PaymentComponent),canActivate: [AuthGuard]
    }
] as Route[]