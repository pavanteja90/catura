import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from '../services-list/google-analytics-service.service';
declare var ga: any;

@Component({
  selector: 'app-proof-of-concept',
  templateUrl: './proof-of-concept.component.html',
  styleUrls: ['./proof-of-concept.component.css']
})
export class ProofOfConceptComponent implements OnInit {

  constructor(private router: Router, private googleAnalytics: GoogleAnalyticsService) { 
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    })
  }

  ngOnInit() {
    this.googleAnalytics.emitEvent('PageView', 'ProofOfConcept');
  }

}
