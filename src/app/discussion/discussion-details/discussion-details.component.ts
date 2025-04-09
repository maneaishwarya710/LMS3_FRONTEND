import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscussionService } from '../../services/discussion.service';
import { LoginService } from '../../user/login.service';

@Component({
  selector: 'app-discussion-details',
  standalone: false,
  templateUrl: './discussion-details.component.html',
  styleUrl: './discussion-details.component.css'
})
export class DiscussionDetailsComponent {
  discussion: any;
  user!:any;
  userId!:number;
  newAnswer = { content: ''};
  constructor(private route: ActivatedRoute, private discussionService:
    DiscussionService, private loginService:LoginService) { }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadDiscussion(id);
    this.user=this.loginService.getUser();
    this.userId=+this.user.userId;
  }
  loadDiscussion(id: number) {
    this.discussionService.getDiscussionById(id).subscribe(data => {
      this.discussion = data;
    });
  }
  postAnswer() {
    this.discussionService.postAnswer(this.discussion.id, this.userId,
      this.newAnswer,).subscribe(() => {
        this.newAnswer = { content: ''};
        this.loadDiscussion(this.discussion.id);
      });
  }

}
