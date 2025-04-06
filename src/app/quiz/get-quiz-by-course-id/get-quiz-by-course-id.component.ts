import { Component } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-quiz-by-course-id',
  templateUrl: './get-quiz-by-course-id.component.html',
  styleUrls: ['./get-quiz-by-course-id.component.css'],
  standalone:false
})
export class GetQuizByCourseIdComponent {
  courseId!: number ;
  userId: number = 14; // Replace with actual user ID logic
  quiz: any;
  answers: any[] = [];
  submitted = false;
  score: number | null = null;

  constructor(private quizService: QuizService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.courseId = +this.route.snapshot.paramMap.get('courseId')!;
  }

  fetchQuiz() {
    this.quizService.getQuizByCourseId(this.courseId).subscribe((data) => {
      if (data.length > 0) {
        this.quiz = data[0];
        this.submitted = false;
        this.answers = this.quiz.questions.map((q: any) => ({
          questionId: q.questionId,
          selectedOptionId: null
        }));
      } else {
        this.quiz = null;
        this.answers = [];
        this.score = null;
        this.submitted = false;
        alert('No quiz found for the given course ID');
      }
    }, err => {
      console.error('Error fetching quiz:', err);
      alert('An error occurred while fetching the quiz');
    });
  }

  selectOption(questionId: number, optionId: number) {
    const answer = this.answers.find(a => a.questionId === questionId);
    if (answer) {
      answer.selectedOptionId = optionId;
    }
  }

  submitQuiz() {
    const attemptData = {
      userId: this.userId,
      quizId: this.quiz.quizId,
      attemptDate: new Date(),
    };
    this.quizService.submitQuiz(attemptData, this.answers).subscribe(res => {
      this.score = res.score;
      this.submitted = true;
      this.getResults();
    }, err => {
      console.error('Error submitting quiz:', err);
      alert('Error submitting the quiz');
    });
  }

  getResults() {
    this.quizService.getResultsByUserId(this.userId).subscribe(results => {
      console.log('Your past results:', results);
    });
  }
}