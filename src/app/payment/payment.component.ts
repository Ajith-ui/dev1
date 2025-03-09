import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatInputModule, MatFormFieldModule,FormsModule,MatCardModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  @Input() selectedCar: any;
  cardNumber = '';
  expiryDate = '';
  cvv = '';
  bookingDetails: any;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.bookingDetails = history.state; // Retrieve passed state data
  }
  onSubmit() {
    // Logic for payment submission
    if (this.cardNumber && this.expiryDate && this.cvv) {
      alert('Payment successful!');
      this.router.navigate(['/maindashbord']);
    }
  }
  processPayment() {
    // Logic to process the payment
    alert(`Payment for the booking has been processed.`);
  }
}
