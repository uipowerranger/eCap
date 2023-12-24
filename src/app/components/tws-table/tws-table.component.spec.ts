import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwsTableComponent } from './tws-table.component';

describe('TwsTableComponent', () => {
  let component: TwsTableComponent;
  let fixture: ComponentFixture<TwsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
