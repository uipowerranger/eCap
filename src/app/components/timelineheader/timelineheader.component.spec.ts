import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineheaderComponent } from './timelineheader.component';

describe('TimelineheaderComponent', () => {
  let component: TimelineheaderComponent;
  let fixture: ComponentFixture<TimelineheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
