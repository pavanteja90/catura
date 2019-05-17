import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcoDevelopmentComponent } from './ico-development.component';

describe('IcoDevelopmentComponent', () => {
  let component: IcoDevelopmentComponent;
  let fixture: ComponentFixture<IcoDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcoDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcoDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
