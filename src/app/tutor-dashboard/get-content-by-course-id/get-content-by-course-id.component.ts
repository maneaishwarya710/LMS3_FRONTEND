import { Component, OnInit } from '@angular/core';
import { TutorService } from '../../services/tutor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-content-by-course-id',
  templateUrl: './get-content-by-course-id.component.html',
  styleUrls: ['./get-content-by-course-id.component.css'],
  standalone:false
})
export class GetContentByCourseIdComponent implements OnInit {
  courseContents: any[] = [];
  courseId!: number;

  constructor(private tutorService: TutorService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.courseId = +this.route.snapshot.paramMap.get('courseId')!;
    console.log("GetContentByCourseIdComponent", this.courseId) // Retrieve courseId from route parameters
    this.tutorService.getCourseContentsByCourseId(this.courseId).subscribe(
      response => {
        console.log(response)
        this.courseContents = response;
      },
      error => {
        console.error('Error retrieving course contents', error);
        alert(`Error: ${error.status} - ${error.message}`);
      }
  
    );
  }
}
