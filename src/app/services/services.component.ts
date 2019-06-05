import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from '../services-list/google-analytics-service.service';
declare var ga: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private router:Router, private googleAnalytics: GoogleAnalyticsService) { 
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    })
  }

  ngOnInit() {
    this.googleAnalytics.emitEvent('PageView', 'Services');
  }

  contactUs(){
    this.router.navigate(['/contact']);
  }
}
