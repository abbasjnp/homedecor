import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardModelsComponent } from './card-models.component';

describe('CardModelsComponent', () => {
  let component: CardModelsComponent;
  let fixture: ComponentFixture<CardModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
