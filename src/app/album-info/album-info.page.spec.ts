import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumInfoPage } from './album-info.page';

describe('AlbumInfoPage', () => {
  let component: AlbumInfoPage;
  let fixture: ComponentFixture<AlbumInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
