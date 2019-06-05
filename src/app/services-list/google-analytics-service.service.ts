import { Injectable } from '@angular/core';
declare var ga: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor() { }
  public emitEvent(eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null) {
  ga('send', 'event', { eventCategory, eventLabel, eventAction, eventValue });
  }
}