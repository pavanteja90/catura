import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { ManageCookiesComponent } from "./manage-cookies/manage-cookies.component";
import { CareersComponent } from "./careers/careers.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { BlogComponent } from "./blog/blog.component";
import { ServicesComponent } from "./services/services.component";
import { BlockchainConsultingComponent } from "./blockchain-consulting/blockchain-consulting.component";
import { CryptocurrencyWalletComponent } from "./cryptocurrency-wallet/cryptocurrency-wallet.component";
import { IcoDevelopmentComponent } from "./ico-development/ico-development.component";
import { ProofOfConceptComponent } from "./proof-of-concept/proof-of-concept.component";
import { SmartContractDevelopmentComponent } from "./smart-contract-development/smart-contract-development.component";
import { SecurityTokenOfferingComponent } from "./security-token-offering/security-token-offering.component";
import { ArtificialIntelligenceComponent } from "./artificial-intelligence/artificial-intelligence.component";
import { InternetOfThingsComponent } from "./internet-of-things/internet-of-things.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes:Routes = [
    {
        path: '', component: ServicesComponent
    },
    {
        path: 'managecookies', component: ManageCookiesComponent
    },
    {
        path: 'careers', component: CareersComponent
    },
    {
        path: 'contact', component: ContactUsComponent
    },
    {
        path: 'blog', component: BlogComponent
    },
    {
        path: 'services', component: ServicesComponent
    },
    {
        path: 'services/blockchain-consulting', component: BlockchainConsultingComponent
    },
    {
        path: 'services/cryptocurrency-wallet', component: CryptocurrencyWalletComponent
    },
    {
        path: 'services/ico-development', component: IcoDevelopmentComponent
    },
    {
        path: 'services/proof-of-concept', component: ProofOfConceptComponent
    },
    {
        path: 'services/smart-contract', component: SmartContractDevelopmentComponent
    },
    {
        path: 'services/secrity-token', component: SecurityTokenOfferingComponent
    },
    {
        path: 'services/internet-of-things', component: InternetOfThingsComponent
    },
    {
        path: 'services/artificial-intelligence', component: ArtificialIntelligenceComponent
    },
    {
        path: 'team', component: AboutUsComponent
    },
    {
        path: '404', component: PageNotFoundComponent
    },
    {
        path: '**', redirectTo: '404'
    }
]

export const Router = RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' });