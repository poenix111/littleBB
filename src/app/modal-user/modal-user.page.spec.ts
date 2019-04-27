import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUserPage } from './modal-user.page';

describe('ModalUserPage', () => {
  let component: ModalUserPage;
  let fixture: ComponentFixture<ModalUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
