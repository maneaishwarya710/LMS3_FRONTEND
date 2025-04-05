import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMyCreatedCoursesComponent } from './get-my-created-courses.component';

describe('GetMyCreatedCoursesComponent', () => {
  let component: GetMyCreatedCoursesComponent;
  let fixture: ComponentFixture<GetMyCreatedCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetMyCreatedCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetMyCreatedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
