import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesttComponent } from './testt.component';

describe('TesttComponent', () => {
  let component: TesttComponent;
  let fixture: ComponentFixture<TesttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesttComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
