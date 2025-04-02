import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorsDashboardComponent } from './tutors-dashboard.component';

describe('TutorsDashboardComponent', () => {
  let component: TutorsDashboardComponent;
  let fixture: ComponentFixture<TutorsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorsDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
