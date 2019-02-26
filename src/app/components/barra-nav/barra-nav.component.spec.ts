import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavPage } from './barra-nav.page';

describe('BarraNavPage', () => {
  let component: BarraNavPage;
  let fixture: ComponentFixture<BarraNavPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraNavPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraNavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
