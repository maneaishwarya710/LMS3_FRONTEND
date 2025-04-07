import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';
import { LoginService } from '../../user/login.service';
import { Subject } from 'rxjs';
import { debounceTime, throttleTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-get-all-courses',
  standalone: false,
  templateUrl: './get-all-courses.component.html',
  styleUrl: './get-all-courses.component.css'
})
export class GetAllCoursesComponent implements OnInit, OnDestroy {
  courses: any[] = [];
  filteredCourses: any[] = [];
  user!: any;

  private searchSubject = new Subject<string>(); // Subject for search input
  private destroy$ = new Subject<void>(); // Subject to clean up subscriptions

  constructor(
    private courseService: CourseService,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.getAllCourses();
    this.user = this.loginService.getUser();

    // Combine debouncing and throttling for the search input
    this.searchSubject
      .pipe(
        debounceTime(300), // Wait for 300ms pause in events
        throttleTime(500), // Ensure execution at most once every 500ms
        distinctUntilChanged(), // Ignore if the next search term is the same as the previous
        takeUntil(this.destroy$) // Unsubscribe when the component is destroyed
      )
      .subscribe((searchTerm) => {
        this.filterCourses(searchTerm);
      });
  }

  ngOnDestroy(): void {
    // Clean up subscriptions
    this.destroy$.next();
    this.destroy$.complete();
  }

  getAllCourses(): void {
    this.courseService.getAllCourses().subscribe(
      (data: any[]) => {
        this.courses = data;
        this.filteredCourses = data; // Initialize filteredCourses with all courses
      },
      (error) => {
        console.error('Error fetching courses', error);
      }
    );
  }

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement; // Cast event.target to HTMLInputElement
    const searchTerm = inputElement.value; // Access the value property safely
    this.searchSubject.next(searchTerm); // Emit the search term to the Subject
  }

  filterCourses(searchTerm: string): void {
    this.filteredCourses = this.courses.filter((course) =>
      course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  navigateToEnroll(courseId: number): void {
    this.router.navigate(['/student-dashboard/enroll', courseId]);
  }
}