import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarPymentComponent } from "../car-pyment/car-pyment.component";

@Component({
  selector: 'app-carbooking',
  imports: [CommonModule, CarPymentComponent],
  templateUrl: './carbooking.component.html',
  styleUrl: './carbooking.component.css'
})
export class CarbookingComponent {
   constructor(private router: Router) {}
 cars = [
    {
      name: 'Sedan',
      description: 'A comfortable sedan for 4 passengers.',
      price: 100,
      imageUrl: 'https://th.bing.com/th?id=OIP.jM-Tf-EMwEhwfmASx3vimgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
    },
    {
      name: 'SUV',
      description: 'A spacious SUV for 7 passengers.',
      price: 150,
      imageUrl: 'https://th.bing.com/th?id=OIP.LR-gXIcP_8rYNVESuiP4XwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
    },
    {
      name: 'Luxury',
      description: 'A luxury car with premium features.',
      price: 250,
      imageUrl: 'https://th.bing.com/th/id/OIP.jkSUy2RP64cWm5oKkIsiugHaEK?w=314&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      name: 'Coupe',
      description: 'A stylish coupe for a more sporty ride.',
      price: 200,
      imageUrl: 'https://th.bing.com/th?id=OIP.Iyk7dBeV9DeSjyREckZ5fwHaEK&w=256&h=180&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
    },
    {
      name: 'Convertible',
      description: 'A sleek convertible for those who enjoy the open road.',
      price: 300,
      imageUrl: 'https://th.bing.com/th/id/OIP.tQApKwdE-8BH-tvewPSu7QHaEc?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      name: 'Truck',
      description: 'A heavy-duty truck for work and transport.',
      price: 180,
      imageUrl: 'https://th.bing.com/th?id=OIP.LklhZk8TqMv_Xfh_w6ogcwHaEK&w=300&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
    }
  ];
  

  selectedCar: any = null;
  isMoving: boolean = true; 
  // Function to select a car
  selectCar(car: any) {
    this.selectedCar = car;
  }

  // Function to book the selected car
  bookCar() {
    
    if (this.selectedCar) {
      alert(`You have booked a ${this.selectedCar.name} for $${this.selectedCar.price}.`);

    } else {
      alert('Please select a car first.');
    }
  }
  open(){
    this.selectedCar =''
  }
  handleArrowKeys(event: KeyboardEvent) {
    const carContainer = document.querySelector('.car-container') as HTMLElement;

    if (event.key === 'ArrowRight') {
      carContainer.scrollBy({ left: 250, behavior: 'smooth' }); 
    } else if (event.key === 'ArrowLeft') {
      carContainer.scrollBy({ left: -250, behavior: 'smooth' }); 
    }
    else{
      console.log("err")
    }
  }

  navigateHOME() {
    this.router.navigate(['/maindashbord']);
  }
}
