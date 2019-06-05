import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from '../services-list/google-analytics-service.service';
declare var ga: any;

@Component({
  selector: 'app-artificial-intelligence',
  templateUrl: './artificial-intelligence.component.html',
  styleUrls: ['./artificial-intelligence.component.css']
})
export class ArtificialIntelligenceComponent implements OnInit {

  constructor(private router: Router, private googleAnalytics: GoogleAnalyticsService) { 
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    })
  }

  ngOnInit() {
    this.googleAnalytics.emitEvent('PageView', 'ArtificialIntelligence');
  }

}
