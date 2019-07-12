import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from '../services-list/google-analytics-service.service';
import { Meta, Title } from '@angular/platform-browser';
declare var ga: any;
declare var $: any;

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

    constructor(private router: Router, private googleAnalytics: GoogleAnalyticsService, private meta: Meta, private title: Title) {
        // this.meta.updateTag({ name: 'keywords', content: '' });
        this.meta.updateTag({ name: 'author', content: 'catura' });
        // this.meta.updateTag({ name: 'description', content: '' });
        this.title.setTitle('Home | Catura');
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        })
    }

    ngOnInit() {
        $(".loading-page").show();
        $(".services-page").hide();
        $(document).ready( () => {
            setTimeout(() => {
                $(".loading-page").hide();
                $(".services-page").show();                
            }, 2000);
        });
        this.googleAnalytics.emitEvent('PageView', 'Services');
    }

    contactUs() {
        this.router.navigate(['/contact']);
    }

    navigate(navCode: Array<number>) {
        let id = navCode[0];
        let id2 = 0;
        if(navCode.length > 1){
            id2 = navCode[1];
        }
        switch (id) {
            case 1:
                switch (id2) {
                    case 1:
                        this.router.navigate(['/services/blockchain-consulting']);
                        break;
                    case 2:
                        this.router.navigate(["/services/cryptocurrency-wallet"]);
                        break;
                    case 3:
                        this.router.navigate(["/services/ico-development"]);
                        break;
                    case 4:
                        this.router.navigate(["/services/proof-of-concept"]);
                        break;
                    case 5:
                        this.router.navigate(["/services/smart-contract"]);
                        break;
                    case 6:
                        this.router.navigate(["/services/secrity-token"]);
                        break;
                    case 7:
                        this.router.navigate(["/services/internet-of-things"]);
                        break;
                    case 8:
                        this.router.navigate(["/services/artificial-intelligence"]);
                        break;
                    default:
                        this.router.navigate(["/"]);
                        break;
                }
                break;
            case 2:
                this.router.navigate(["/blog"]);
                break;
            case 3:
                this.router.navigate(["/careers"]);
                break;
            case 4:
                this.router.navigate(["/team"]);
                break;
            case 5:
                this.router.navigate(["/contact"]);
                break;
            case 6:
                this.router.navigate(["/managecookies"]);
                break;
        }
    }
}
