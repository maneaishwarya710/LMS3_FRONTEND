import { Component } from '@angular/core';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-get-quiz-by-course-id',
  standalone: false,
  templateUrl: './get-quiz-by-course-id.component.html',
  styleUrl: './get-quiz-by-course-id.component.css'
})
export class GetQuizByCourseIdComponent {
  courseId: number=19;
  userId: number = 14; // replace with actual user ID logic
  quiz: any;
  answers: any[] = [];
  submitted = false;
  score: number | null = null;
  constructor(private quizService: QuizService) { }
  fetchQuiz() {
    this.quizService.getQuizByCourseId(this.courseId).subscribe((data) => {
      if (data.length > 0) {
        this.quiz = data[0];
        this.submitted = false;
        this.answers = this.quiz.questions.map((q: any) => ({
          questionId: q.questionId,
          selectedOptionId: null
        }));
      }
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
    });
  }
  getResults() {
    this.quizService.getResultsByUserId(this.userId).subscribe(results => {
      console.log('Your past results:', results);
    });
  }

}



