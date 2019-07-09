import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from '../services-list/google-analytics-service.service';
import { Meta, Title } from '@angular/platform-browser';
declare var ga: any;
declare var $: any;

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

    constructor(private router: Router, private googleAnalytics: GoogleAnalyticsService, private meta: Meta, private title: Title) {
        // this.meta.updateTag({ name: 'keywords', content: 'about, us' });
        this.meta.updateTag({ name: 'author', content: 'catura' });
        // this.meta.updateTag({ name: 'description', content: 'About Us' });
        this.title.setTitle('Team | Catura');
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        })
    }

    ngOnInit() {
        $(".loading-page").show();
        $(".team-section").hide();
        $(document).ready( () => {
            setTimeout(() => {
                $(".loading-page").hide();
                $(".team-section").show();                
            }, 2000);
        });
        this.googleAnalytics.emitEvent('PageView', 'Team');
    }

}
