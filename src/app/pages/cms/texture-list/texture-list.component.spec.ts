import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextureListComponent } from './texture-list.component';

describe('TextureListComponent', () => {
  let component: TextureListComponent;
  let fixture: ComponentFixture<TextureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
