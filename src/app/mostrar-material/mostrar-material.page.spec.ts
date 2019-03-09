import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarMaterialPage } from './mostrar-material.page';

describe('MostrarMaterialPage', () => {
  let component: MostrarMaterialPage;
  let fixture: ComponentFixture<MostrarMaterialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarMaterialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarMaterialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
