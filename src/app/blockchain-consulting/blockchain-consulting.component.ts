import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from '../services-list/google-analytics-service.service';
import { Meta, Title } from '@angular/platform-browser';
declare var ga: any;

@Component({
    selector: 'app-blockchain-consulting',
    templateUrl: './blockchain-consulting.component.html',
    styleUrls: ['./blockchain-consulting.component.css']
})
export class BlockchainConsultingComponent implements OnInit {

    constructor(private router: Router, private googleAnalytics: GoogleAnalyticsService, private meta: Meta, private title: Title) {
        // this.meta.updateTag({ name: 'keywords', content: '' });
        this.meta.updateTag({ name: 'author', content: 'catura' });
        // this.meta.updateTag({ name: 'description', content: '' });
        this.title.setTitle('Blockchain Consulting | Catura');
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        })
    }

    ngOnInit() {
        this.googleAnalytics.emitEvent('PageView', 'BlockchainConsulting');
    }

}
