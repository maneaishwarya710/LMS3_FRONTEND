import { Component, OnInit } from '@angular/core';
import { DiscussionService } from '../../services/discussion.service';
import { Router } from '@angular/router';
import { LoginService } from '../../user/login.service';

@Component({
  selector: 'app-discussion-list',
  standalone: false,
  templateUrl: './discussion-list.component.html',
  styleUrl: './discussion-list.component.css'
})
export class DiscussionListComponent implements OnInit {
  discussions: any[] = [];

  user: any;
  userId!: number;
  constructor(private discussionService: DiscussionService, private router: Router, private loginService: LoginService) { }
  ngOnInit() {
    this.loadDiscussions();
    this.user = this.loginService.getUser();
    this.userId = +this.user.userId;
    console.log("in onInit", this.userId)
  }

  newQuestion = { title: '', content: ''};

  loadDiscussions() {
    this.discussionService.getAllDiscussions().subscribe(data => {
      this.discussions = data;
    });
  }
  submitQuestion() {
    console.log("SubmitQuestion", this.newQuestion);

    this.discussionService.postQuestion(this.userId, this.newQuestion).subscribe(() => {
      this.newQuestion = { title: '', content: ''};
      this.loadDiscussions();
    });
  }
  viewDiscussion(id: number) {
    console.log("View Discussion:", id)
    this.router.navigate(['/discussion/discussion-details', id]);
  }
}
