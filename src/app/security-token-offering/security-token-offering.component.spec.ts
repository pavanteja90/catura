import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityTokenOfferingComponent } from './security-token-offering.component';

describe('SecurityTokenOfferingComponent', () => {
  let component: SecurityTokenOfferingComponent;
  let fixture: ComponentFixture<SecurityTokenOfferingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityTokenOfferingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityTokenOfferingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
