import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmstabelComponent } from './cmstabel.component';

describe('CmstabelComponent', () => {
  let component: CmstabelComponent;
  let fixture: ComponentFixture<CmstabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmstabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmstabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
