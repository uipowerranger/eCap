import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinepostComponent } from './timelinepost.component';

describe('TimelinepostComponent', () => {
  let component: TimelinepostComponent;
  let fixture: ComponentFixture<TimelinepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelinepostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelinepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
