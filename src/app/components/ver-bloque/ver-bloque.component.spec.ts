import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerBloqueComponent } from './ver-bloque.component';

describe('VerBloqueComponent', () => {
  let component: VerBloqueComponent;
  let fixture: ComponentFixture<VerBloqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerBloqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerBloqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
