import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdViewAllUsersComponent } from './ad-view-all-users.component';

describe('AdViewAllUsersComponent', () => {
  let component: AdViewAllUsersComponent;
  let fixture: ComponentFixture<AdViewAllUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdViewAllUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdViewAllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
