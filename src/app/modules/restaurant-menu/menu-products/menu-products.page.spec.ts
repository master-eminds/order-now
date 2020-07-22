import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProductsPage } from './menu-products.page';

describe('MenuProductsPage', () => {
  let component: MenuProductsPage;
  let fixture: ComponentFixture<MenuProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuProductsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
