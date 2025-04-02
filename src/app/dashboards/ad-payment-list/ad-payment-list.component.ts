import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-ad-payment-list',
  standalone: false,
  templateUrl: './ad-payment-list.component.html',
  styleUrl: './ad-payment-list.component.css'
})
export class AdPaymentListComponent implements OnInit{
  payments: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.paymentList().subscribe((data) => {
      this.payments = data.payments;
      console.log(this.payments);
    });
  }

}
