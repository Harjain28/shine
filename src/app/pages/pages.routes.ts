import { Route, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from '../guard/auth.gaurd';

export default[
    {
        path: '' , loadComponent:() => import('./landing-page/landing-page.component').then(c=>c.LandingPageComponent)
    },
    {
        path: 'pricing', loadComponent:() => import('./subscribtion-plan/subscribtion-plan.component').then(c=>c.SubscribtionPlanComponent)
    },
    {
        path: 'plan', loadComponent:() => import('./pricing/pricing.component').then(c=>c.PricingComponent, )
    },
    {
        path: 'selection', loadComponent:() => import('./selection/selection.component').then(c=>c.SelectionComponent)
    },
    {
        path: 'register', loadComponent:() => import('./form1/form1.component').then(c=>c.Form1Component)
    },
    {
        path: 'otp', loadComponent:() => import('./otp/otp.component').then(c=>c.OtpComponent)
    },
    {
        path: 'form2', loadComponent:() => import('./form2/form2.component').then(c=>c.Form2Component)
    },
    {
        path: 'payment', loadComponent:() => import('./payment/payment.component').then(c=>c.PaymentComponent)
    },
    {
        path: 'bank_statement', loadComponent:() => import('./upload-documents/upload-documents.component').then(c=>c.UploadDocumentsComponent)
    },
    {
        path: 'pricing1', loadComponent:() => import('./pricing1/pricing1.component').then(c=>c.Pricing1Component)
    },
    {
        path: 'pricing2', loadComponent:() => import('./pricing2/pricing2.component').then(c=>c.Pricing2Component)
    }
] as Route[]