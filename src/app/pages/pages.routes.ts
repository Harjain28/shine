import { Route, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from '../guard/auth.gaurd';

export default[
    {
        path: '' , loadComponent:() => import('./landing-page/landing-page.component').then(c=>c.LandingPageComponent)
    },
    {
        path: 'register', loadComponent:() => import('./form1/form1.component').then(c=>c.Form1Component)
    },
    {
        path: 'otp', loadComponent:() => import('./otp/otp.component').then(c=>c.OtpComponent)
    },
    // {
    //     path: 'form2', loadComponent:() => import('./form2/form2.component').then(c=>c.Form2Component)
    // },
    {
        path: 'confirm_order', loadComponent:() => import('./payment/payment.component').then(c=>c.PaymentComponent)
    },
    {
        path: 'bank_statement', loadComponent:() => import('./upload-documents/upload-documents.component').then(c=>c.UploadDocumentsComponent)
    },
    {
        path: 'pricing_group', loadComponent:() => import('./pricing1/pricing1.component').then(c=>c.Pricing1Component)
    },
    {
        path: 'pricing_annual', loadComponent:() => import('./pricing2/pricing2.component').then(c=>c.Pricing2Component)
    },
    {
        path: 'payment_status', loadComponent:() => import('./payment-status/payment-status.component').then(c=>c.PaymentStatusComponent)
    },
    {
        path: 'payment_status/:data', loadComponent:() => import('./payment-status/payment-status.component').then(c=>c.PaymentStatusComponent)
    },
    {
        path: 'page-not-found', loadComponent:() => import('./page-not-found/page-not-found.component').then(c=>c.PageNotFoundComponent)
    },
    {
        path: 'report_model1', loadComponent:() => import('./mock-report/mock-report.component').then(c=>c.MockReportComponent)
    }
] as Route[]