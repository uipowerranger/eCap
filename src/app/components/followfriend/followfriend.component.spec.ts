import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowfriendComponent } from './followfriend.component';

describe('FollowfriendComponent', () => {
  let component: FollowfriendComponent;
  let fixture: ComponentFixture<FollowfriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowfriendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowfriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
