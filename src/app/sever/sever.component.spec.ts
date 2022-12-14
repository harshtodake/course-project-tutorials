/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeverComponent } from './sever.component';

describe('SeverComponent', () => {
  let component: SeverComponent;
  let fixture: ComponentFixture<SeverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
