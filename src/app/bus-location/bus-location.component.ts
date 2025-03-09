import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-bus-location',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './bus-location.component.html',
  styleUrls: ['./bus-location.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class BusLocationComponent {
  
}
