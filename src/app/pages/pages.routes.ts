import { Route, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

export default[
    {
        path: 'project-shine', component: LandingPageComponent
    },
    {
        path: 'plans', loadComponent:() => import('./subscribtion-plan/subscribtion-plan.component').then(c=>c.SubscribtionPlanComponent)
    },
    {
        path: 'pricing', loadComponent:() => import('./pricing/pricing.component').then(c=>c.PricingComponent)
    },
    {
        path: 'selection', loadComponent:() => import('./selection/selection.component').then(c=>c.SelectionComponent)
    },
    {
        path: 'form1', loadComponent:() => import('./form1/form1.component').then(c=>c.Form1Component)
    },
    {
        path: 'otp', loadComponent:() => import('./otp/otp.component').then(c=>c.OtpComponent)
    },
    {
        path: 'form2', loadComponent:() => import('./form2/form2.component').then(c=>c.Form2Component)
    },
    {
        path: 'payment', loadComponent:() => import('./payment/payment.component').then(c=>c.PaymentComponent)
    }
] as Route[]