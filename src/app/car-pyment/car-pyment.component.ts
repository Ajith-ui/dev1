import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-pyment',
  imports: [FormsModule,CommonModule],
  templateUrl: './car-pyment.component.html',
  styleUrl: './car-pyment.component.css'
})
export class CarPymentComponent {

  @Input() car: any;

  customerDetails = { name: '', email: '', phone: '' };
  showPayment: boolean = false;

  submitDetails() {
    if (this.customerDetails.name && this.customerDetails.email && this.customerDetails.phone) {
      this.showPayment = true;
    } else {
      alert('Please fill all details before proceeding to payment.');
    }
  }

  confirmPayment() {
    alert(`Payment successful for ${this.car.name}!`);
  }
}
