import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLibroPage } from './editar-libro.page';

describe('EditarLibroPage', () => {
  let component: EditarLibroPage;
  let fixture: ComponentFixture<EditarLibroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarLibroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarLibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
