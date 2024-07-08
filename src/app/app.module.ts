import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesComponent } from './pages/pages.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ShineHeaderComponent } from './shared/shine-header/shine-header.component';
import { Header2Component } from './shared/header2/header2.component';
import { RoundPipe } from './pipe/round.pipe';
import { ViewComponent } from './view/view.component';
import { GTMService } from './services/gtm.service';
import { LoaderInterceptor } from './interceptor/interceptor';
import { ErrorInterceptor } from './interceptor/errorInterceptor';
import { PartnersComponent } from './shared/partners/partners.component';


@NgModule({
  declarations: [
    AppComponent,
    RoundPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PartnersComponent,
    HeaderComponent,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    PagesComponent,
    FooterComponent,
    HeaderComponent,
    Header2Component,
    ShineHeaderComponent,
    HttpClientModule,
    CarouselModule,
    MatDialogModule,
    ViewComponent
  ],
  providers: [DatePipe, GTMService,   { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true
  }],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
