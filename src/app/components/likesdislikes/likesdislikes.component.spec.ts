import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesdislikesComponent } from './likesdislikes.component';

describe('LikesdislikesComponent', () => {
  let component: LikesdislikesComponent;
  let fixture: ComponentFixture<LikesdislikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikesdislikesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikesdislikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
