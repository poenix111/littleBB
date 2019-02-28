import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridPage } from './datagrid.page';

describe('DatagridPage', () => {
  let component: DatagridPage;
  let fixture: ComponentFixture<DatagridPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatagridPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
