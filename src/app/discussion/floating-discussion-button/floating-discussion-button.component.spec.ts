import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingDiscussionButtonComponent } from './floating-discussion-button.component';

describe('FloatingDiscussionButtonComponent', () => {
  let component: FloatingDiscussionButtonComponent;
  let fixture: ComponentFixture<FloatingDiscussionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FloatingDiscussionButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingDiscussionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
