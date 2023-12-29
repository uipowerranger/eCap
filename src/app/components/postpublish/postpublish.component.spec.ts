import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpublishComponent } from './postpublish.component';

describe('PostpublishComponent', () => {
  let component: PostpublishComponent;
  let fixture: ComponentFixture<PostpublishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostpublishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostpublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
