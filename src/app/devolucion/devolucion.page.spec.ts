import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucionPage } from './devolucion.page';

describe('DevolucionPage', () => {
  let component: DevolucionPage;
  let fixture: ComponentFixture<DevolucionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevolucionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolucionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
