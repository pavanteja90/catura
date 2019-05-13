import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareersComponent } from './careers/careers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ManageCookiesComponent } from './manage-cookies/manage-cookies.component';

//Importing font-awesome for icons
import { AngularFontAwesomeModule } from "node_modules/angular-font-awesome";

//For incorporating bootstrap into application
import { AppBootstrapModule } from "./app.bootstrap.module";

import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router } from './app.routing';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    CareersComponent,
    AboutUsComponent,
    ServicesComponent,
    ManageCookiesComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AppBootstrapModule,
    Router
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
