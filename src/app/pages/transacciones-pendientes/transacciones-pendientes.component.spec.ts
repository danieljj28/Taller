import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionesPendientesComponent } from './transacciones-pendientes.component';

describe('TransaccionesPendientesComponent', () => {
  let component: TransaccionesPendientesComponent;
  let fixture: ComponentFixture<TransaccionesPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransaccionesPendientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionesPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
