import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinefollowComponent } from './timelinefollow.component';

describe('TimelinefollowComponent', () => {
  let component: TimelinefollowComponent;
  let fixture: ComponentFixture<TimelinefollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelinefollowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelinefollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
