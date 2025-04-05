import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { LoginService } from '../../user/login.service';

@Component({
  selector: 'app-get-payment',
  standalone: false,
  templateUrl: './get-payment.component.html',
  styleUrl: './get-payment.component.css'
})
export class GetPaymentComponent {
  userId!: number;
  user!: any;
  payments: any[] = [];

  constructor(private studentService: StudentService, private loginService: LoginService) {
    this.user = this.loginService.getUser();
    this.userId = this.user.userId;
  }

  getPayments(): void {
    this.studentService.getPaymentsByUserId(this.userId).subscribe({
      next: (response) => {
        this.payments = response.payments;
        console.log('Payments:', this.payments);
      },
      error: (error) => {
        console.error('Error fetching payments', error);
        alert('Unable to fetch payments!');
      }
    }

    );
  }
}


