import { TestBed } from '@angular/core/testing';

import { GoogleAnalyticsService } from './google-analytics-service.service';

describe('GoogleAnalyticsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleAnalyticsService = TestBed.get(GoogleAnalyticsService);
    expect(service).toBeTruthy();
  });
});
