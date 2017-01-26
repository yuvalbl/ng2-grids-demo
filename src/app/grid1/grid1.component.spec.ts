/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Grid1Component } from './grid1.component';

describe('Grid1Component', () => {
  let component: Grid1Component;
  let fixture: ComponentFixture<Grid1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grid1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grid1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
