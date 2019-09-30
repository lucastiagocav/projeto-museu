import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitarPage } from './visitar.page';

describe('VisitarPage', () => {
  let component: VisitarPage;
  let fixture: ComponentFixture<VisitarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
