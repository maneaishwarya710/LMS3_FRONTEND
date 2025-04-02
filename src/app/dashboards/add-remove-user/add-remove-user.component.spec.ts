import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveUserComponent } from './add-remove-user.component';

describe('AddRemoveUserComponent', () => {
  let component: AddRemoveUserComponent;
  let fixture: ComponentFixture<AddRemoveUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddRemoveUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRemoveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
