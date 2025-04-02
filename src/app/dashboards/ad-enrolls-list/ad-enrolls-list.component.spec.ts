import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdEnrollsListComponent } from './ad-enrolls-list.component';

describe('AdEnrollsListComponent', () => {
  let component: AdEnrollsListComponent;
  let fixture: ComponentFixture<AdEnrollsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdEnrollsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdEnrollsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
