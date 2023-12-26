import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EhomeComponent } from './ehome.component';

describe('EhomeComponent', () => {
  let component: EhomeComponent;
  let fixture: ComponentFixture<EhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
