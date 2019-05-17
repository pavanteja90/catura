import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocurrencyWalletComponent } from './cryptocurrency-wallet.component';

describe('CryptocurrencyWalletComponent', () => {
  let component: CryptocurrencyWalletComponent;
  let fixture: ComponentFixture<CryptocurrencyWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptocurrencyWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptocurrencyWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
