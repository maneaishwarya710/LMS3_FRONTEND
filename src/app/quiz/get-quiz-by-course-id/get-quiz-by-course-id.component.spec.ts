import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQuizByCourseIdComponent } from './get-quiz-by-course-id.component';

describe('GetQuizByCourseIdComponent', () => {
  let component: GetQuizByCourseIdComponent;
  let fixture: ComponentFixture<GetQuizByCourseIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetQuizByCourseIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetQuizByCourseIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
