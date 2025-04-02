import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPaymentListComponent } from './ad-payment-list.component';

describe('AdPaymentListComponent', () => {
  let component: AdPaymentListComponent;
  let fixture: ComponentFixture<AdPaymentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdPaymentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdPaymentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
