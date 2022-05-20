import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMatriculaComponent } from './search-matricula.component';

describe('SearchMatriculaComponent', () => {
  let component: SearchMatriculaComponent;
  let fixture: ComponentFixture<SearchMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMatriculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
