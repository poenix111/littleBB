import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMaterialPage } from './editar-material.page';

describe('EditarMaterialPage', () => {
  let component: EditarMaterialPage;
  let fixture: ComponentFixture<EditarMaterialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarMaterialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMaterialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
