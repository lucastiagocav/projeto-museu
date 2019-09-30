import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaFinalPage } from './tela-final.page';

describe('TelaFinalPage', () => {
  let component: TelaFinalPage;
  let fixture: ComponentFixture<TelaFinalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaFinalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaFinalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
