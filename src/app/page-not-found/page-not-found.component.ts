import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from '../services-list/google-analytics-service.service';
import { Title, Meta } from '@angular/platform-browser';
declare var ga: any;

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

    constructor(private router: Router, private googleAnalytics: GoogleAnalyticsService, private meta: Meta, private title: Title) {
        // this.meta.updateTag({ name: 'keywords', content: '' });
        this.meta.updateTag({ name: 'author', content: 'catura' });
        // this.meta.updateTag({ name: 'description', content: '' });
        this.title.setTitle('Page not found | Catura');
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        })
    }

    ngOnInit() {
        this.googleAnalytics.emitEvent('PageView', 'PageNotFound');
    }

    navigateToHome() {
        this.router.navigate(['/home']);
    }

}
