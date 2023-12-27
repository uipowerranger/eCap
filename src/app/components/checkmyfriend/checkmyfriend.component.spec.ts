import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckmyfriendComponent } from './checkmyfriend.component';

describe('CheckmyfriendComponent', () => {
  let component: CheckmyfriendComponent;
  let fixture: ComponentFixture<CheckmyfriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckmyfriendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckmyfriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
