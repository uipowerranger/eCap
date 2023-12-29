import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MynewsfeedComponent } from './mynewsfeed.component';

describe('MynewsfeedComponent', () => {
  let component: MynewsfeedComponent;
  let fixture: ComponentFixture<MynewsfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MynewsfeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MynewsfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
