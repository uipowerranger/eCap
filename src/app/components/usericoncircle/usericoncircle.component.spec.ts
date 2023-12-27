import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsericoncircleComponent } from './usericoncircle.component';

describe('UsericoncircleComponent', () => {
  let component: UsericoncircleComponent;
  let fixture: ComponentFixture<UsericoncircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsericoncircleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsericoncircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
