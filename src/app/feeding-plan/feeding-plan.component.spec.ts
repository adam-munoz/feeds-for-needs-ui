import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedingPlanComponent } from './feeding-plan.component';

describe('FeedingPlanComponent', () => {
  let component: FeedingPlanComponent;
  let fixture: ComponentFixture<FeedingPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedingPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
