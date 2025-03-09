import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Import the necessary Angular Material modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maindashbord',
  templateUrl: './maindashbord.component.html',
  styleUrls: ['./maindashbord.component.css'],
  standalone: true,  // Mark as standalone
  imports: [         // Import the required Angular Material modules here
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    CommonModule
  ]
})
export class MaindashbordComponent {
navigateToMoreOptions(arg0: any) {
throw new Error('Method not implemented.');
}
searchTerm: any;
filteredBuses: any;
onSearchChange() {
throw new Error('Method not implemented.');
}

  constructor(private router: Router) {}

  navigateToCarBooking() {
    this.router.navigate(['/carbooking']); // Replace with your actual route
  }

  navigateToBusBooking() {
    this.router.navigate(['/dashboard']); // Replace with your actual route
  }
}
