import { Route } from '@angular/router';
import { AuthGuard } from '../guard/auth.gaurd';

export default[
    
    // {
    //     path: 'register',   canActivate: [AuthGuard], loadComponent:() => import('./form1/form1.component').then(c=>c.Form1Component)
    // },

    {
        path: 'register/:id',   canActivate: [AuthGuard], loadComponent:() => import('./form1/form1.component').then(c=>c.Form1Component)
    },
    {
        path: 'otp/:id',   canActivate: [AuthGuard], loadComponent:() => import('./otp/otp.component').then(c=>c.OtpComponent)
    },
    // {
    //     path: 'otp',   canActivate: [AuthGuard], loadComponent:() => import('./otp/otp.component').then(c=>c.OtpComponent)
    // },
    // {
    //     path: 'form2', loadComponent:() => import('./form2/form2.component').then(c=>c.Form2Component)
    // },
    {
        path: 'confirm_order/:id',  canActivate: [AuthGuard],  loadComponent:() => import('./payment/payment.component').then(c=>c.PaymentComponent)
    },
    {
        path: 'bank_statement/:id',   canActivate: [AuthGuard], loadComponent:() => import('./upload-documents/upload-documents.component').then(c=>c.UploadDocumentsComponent)
    },
    // {
    //     path: 'bank_statement',   canActivate: [AuthGuard], loadComponent:() => import('./upload-documents/upload-documents.component').then(c=>c.UploadDocumentsComponent)
    // },
    {
        path: 'pricing_group',canActivate: [AuthGuard], loadComponent:() => import('./pricing1/pricing1.component').then(c=>c.Pricing1Component)
    },
    
    {
        path: 'payment_status',   canActivate: [AuthGuard], loadComponent:() => import('./payment-status/payment-status.component').then(c=>c.PaymentStatusComponent)
    },
      {
        path: 'pricing_annual', canActivate: [AuthGuard], loadComponent:() => import('../pages/pricing2/pricing2.component').then(c=>c.Pricing2Component)
    },
    {
        path: 'payment_status/:data', loadComponent:() => import('./payment-status/payment-status.component').then(c=>c.PaymentStatusComponent)
    },
    {
        path: 'page-not-found', loadComponent:() => import('./page-not-found/page-not-found.component').then(c=>c.PageNotFoundComponent)
    },
    {
        path: 'report_model1', loadComponent:() => import('./mock-report/mock-report.component').then(c=>c.MockReportComponent)
    },
    {
        path: 'login', loadComponent:() => import('./login/login.component').then(c=>c.LoginComponent)
    },
    // {
    //     path: 'pricing', canActivate: [AuthGuard], loadComponent:() => import('./pricing-common/pricing-common.component').then(c=>c.PricingCommonComponent)
    // }
] as Route[]