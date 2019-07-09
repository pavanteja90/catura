import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//Importing font-awesome for icons
import { AngularFontAwesomeModule } from "node_modules/angular-font-awesome";

//For incorporating bootstrap into application
import { AppBootstrapModule } from "./app.bootstrap.module";

import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router } from './app.routing';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareersComponent } from './careers/careers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ManageCookiesComponent } from './manage-cookies/manage-cookies.component';
import { BlogComponent } from './blog/blog.component';
import { BlockchainConsultingComponent } from './blockchain-consulting/blockchain-consulting.component';
import { CryptocurrencyWalletComponent } from './cryptocurrency-wallet/cryptocurrency-wallet.component';
import { IcoDevelopmentComponent } from './ico-development/ico-development.component';
import { ProofOfConceptComponent } from './proof-of-concept/proof-of-concept.component';
import { SmartContractDevelopmentComponent } from './smart-contract-development/smart-contract-development.component';
import { SecurityTokenOfferingComponent } from './security-token-offering/security-token-offering.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { InternetOfThingsComponent } from './internet-of-things/internet-of-things.component';
import { ArtificialIntelligenceComponent } from './artificial-intelligence/artificial-intelligence.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LogoAnimationComponent } from './logo-animation/logo-animation.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    CareersComponent,
    AboutUsComponent,
    ServicesComponent,
    ManageCookiesComponent,
    BlogComponent,
    BlockchainConsultingComponent,
    CryptocurrencyWalletComponent,
    IcoDevelopmentComponent,
    ProofOfConceptComponent,
    SmartContractDevelopmentComponent,
    SecurityTokenOfferingComponent,
    AppFooterComponent,
    InternetOfThingsComponent,
    ArtificialIntelligenceComponent,
    PageNotFoundComponent,
    NavigationBarComponent,
    LogoAnimationComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AppBootstrapModule,
    HttpClientModule,
    Router
  ],
  providers: [
    HttpClient,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
