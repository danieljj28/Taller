import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMatriculaComponent } from './tabla-matricula.component';

describe('TablaMatriculaComponent', () => {
  let component: TablaMatriculaComponent;
  let fixture: ComponentFixture<TablaMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaMatriculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
