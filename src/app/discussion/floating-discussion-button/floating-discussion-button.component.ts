import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floating-discussion-button',
  templateUrl: './floating-discussion-button.component.html',
  styleUrls: ['./floating-discussion-button.component.css'],
  standalone:false,
})
export class FloatingDiscussionButtonComponent {
  constructor(private router: Router) {}

  goToDiscussionForum() {
    this.router.navigate(['/discussion/discussion-list']);
  }
}