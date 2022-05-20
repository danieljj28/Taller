import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTransaccionesMatriculaComponent } from './tabla-transacciones-matricula.component';

describe('TablaTransaccionesMatriculaComponent', () => {
  let component: TablaTransaccionesMatriculaComponent;
  let fixture: ComponentFixture<TablaTransaccionesMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaTransaccionesMatriculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaTransaccionesMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
