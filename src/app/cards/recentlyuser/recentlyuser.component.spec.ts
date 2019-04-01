import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyuserComponent } from './recentlyuser.component';

describe('RecentlyuserComponent', () => {
  let component: RecentlyuserComponent;
  let fixture: ComponentFixture<RecentlyuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentlyuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
