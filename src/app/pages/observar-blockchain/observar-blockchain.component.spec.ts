import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservarBlockchainComponent } from './observar-blockchain.component';

describe('ObservarBlockchainComponent', () => {
  let component: ObservarBlockchainComponent;
  let fixture: ComponentFixture<ObservarBlockchainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservarBlockchainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservarBlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
