import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwsListComponent } from './tws-list.component';

describe('TwsListComponent', () => {
  let component: TwsListComponent;
  let fixture: ComponentFixture<TwsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
