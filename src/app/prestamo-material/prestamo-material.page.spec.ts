import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoMaterialPage } from './prestamo-material.page';

describe('PrestamoMaterialPage', () => {
  let component: PrestamoMaterialPage;
  let fixture: ComponentFixture<PrestamoMaterialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamoMaterialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoMaterialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
