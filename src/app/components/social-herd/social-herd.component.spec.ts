import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialHerdComponent } from './social-herd.component';

describe('SocialHerdComponent', () => {
  let component: SocialHerdComponent;
  let fixture: ComponentFixture<SocialHerdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialHerdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialHerdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
