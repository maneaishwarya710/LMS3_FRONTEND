import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetContentByCourseIdComponent } from './get-content-by-course-id.component';

describe('GetContentByCourseIdComponent', () => {
  let component: GetContentByCourseIdComponent;
  let fixture: ComponentFixture<GetContentByCourseIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetContentByCourseIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetContentByCourseIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
