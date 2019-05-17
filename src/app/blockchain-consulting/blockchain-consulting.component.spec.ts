import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainConsultingComponent } from './blockchain-consulting.component';

describe('BlockchainConsultingComponent', () => {
  let component: BlockchainConsultingComponent;
  let fixture: ComponentFixture<BlockchainConsultingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockchainConsultingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
