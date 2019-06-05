import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from '../services-list/google-analytics-service.service';
declare var ga: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private router: Router, private googleAnalytics: GoogleAnalyticsService) { 
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    })
  }

  ngOnInit() {
    this.googleAnalytics.emitEvent('PageView', 'Blog');
  }

}
