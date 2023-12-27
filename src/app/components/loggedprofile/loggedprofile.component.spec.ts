import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedprofileComponent } from './loggedprofile.component';

describe('LoggedprofileComponent', () => {
  let component: LoggedprofileComponent;
  let fixture: ComponentFixture<LoggedprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
