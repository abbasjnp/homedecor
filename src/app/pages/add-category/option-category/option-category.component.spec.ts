import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionCategoryComponent } from './option-category.component';

describe('OptionCategoryComponent', () => {
  let component: OptionCategoryComponent;
  let fixture: ComponentFixture<OptionCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
