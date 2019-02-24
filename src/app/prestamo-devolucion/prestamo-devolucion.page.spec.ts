import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoDevolucionPage } from './prestamo-devolucion.page';

describe('PrestamoDevolucionPage', () => {
  let component: PrestamoDevolucionPage;
  let fixture: ComponentFixture<PrestamoDevolucionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamoDevolucionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoDevolucionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
