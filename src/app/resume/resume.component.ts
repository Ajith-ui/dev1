import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
toggleHeart(event: Event): void {
    const button = event.currentTarget as HTMLElement;
    button.classList.toggle('active');
  }
}
