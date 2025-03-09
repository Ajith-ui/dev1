import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule, MatCardModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  departure = '';
  destination = '';
  date = '';
  time = '';

  // Customer Details
  customerName = '';
  customerContact = '';
  customerEmail = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Logic for booking submission
    if (this.departure && this.destination && this.date && this.time && this.customerName && this.customerContact && this.customerEmail) {
      // Proceed with booking and navigate to the payment page
      this.router.navigate(['/payment'], {
        state: { 
          departure: this.departure, 
          destination: this.destination, 
          date: this.date, 
          time: this.time,
          customerName: this.customerName,
          customerContact: this.customerContact,
          customerEmail: this.customerEmail
        }
      });
    } else {
      alert("Please fill out all fields");
    }
  }
}
