import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from '../services-list/google-analytics-service.service';
declare var ga: any;
declare var $: any;

@Component({
  selector: 'app-manage-cookies',
  templateUrl: './manage-cookies.component.html',
  styleUrls: ['./manage-cookies.component.css']
})
export class ManageCookiesComponent implements OnInit {

  constructor(private router: Router, private googleAnalytics: GoogleAnalyticsService) { 
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    })
  }

  ngOnInit() {
    this.googleAnalytics.emitEvent('PageView', 'ManageCookies');
    }

}
