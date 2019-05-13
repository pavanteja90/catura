import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { ManageCookiesComponent } from "./manage-cookies/manage-cookies.component";
import { CareersComponent } from "./careers/careers.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { BlogComponent } from "./blog/blog.component";
import { ServicesComponent } from "./services/services.component";

const routes:Routes = [
    // {
    //     path: '', component: AppComponent
    // },
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
        path: 'about', component: AboutUsComponent
    },
    {
        path: 'blog', component: BlogComponent
    },
    {
        path: 'services', component: ServicesComponent
    }
]

export const Router = RouterModule.forRoot(routes);