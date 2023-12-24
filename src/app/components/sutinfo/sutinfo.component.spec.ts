import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SutinfoComponent } from './sutinfo.component';

describe('SutinfoComponent', () => {
  let component: SutinfoComponent;
  let fixture: ComponentFixture<SutinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SutinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SutinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
