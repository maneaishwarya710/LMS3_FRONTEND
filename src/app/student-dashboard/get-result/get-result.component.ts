import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { LoginService } from '../../user/login.service';

@Component({
  selector: 'app-get-result',
  standalone: false,
  templateUrl: './get-result.component.html',
  styleUrl: './get-result.component.css'
})
export class GetResultComponent {
  userId!: number;
  user!:any;
  studentResults: any[] = [];

  constructor(private studentService: StudentService, private loginService:LoginService) {
    this.user=this.loginService.getUser();
    this.userId=this.user.userId;
    console.log(`Result History for ${this.userId}`);
  }

  getStudentResults(): void {
    this.studentService.getStudentResults(this.userId).subscribe(
      response => {
        this.studentResults = response.studentResults;
        console.log('Student results:', this.studentResults);
      },
      error => {
        console.error('Error fetching student results', error);
        alert('Unable to fetch student results!');
      }
    );
  }


}


