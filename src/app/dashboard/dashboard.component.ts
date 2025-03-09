import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class DashboardComponent {
  displayedColumns: string[] = ['busName', 'from', 'to', 'time', 'moreOptions'];
  buses = [
    { busName: 'Bus A', from: 'Station 1', to: 'Station 2', time: '8:00 AM' },
    { busName: 'Bus B', from: 'Station 2', to: 'Station 3', time: '9:30 AM' },
    { busName: 'Bus C', from: 'Station 3', to: 'Station 4', time: '10:45 AM' },
    { busName: 'Bus D', from: 'Station 4', to: 'Station 5', time: '12:00 PM' },
    { busName: 'Bus E', from: 'Station 5', to: 'Station 6', time: '2:00 PM' }
  ];

  filteredBuses = [...this.buses];  // Start with all buses
  searchTerm: string = '';  // The value for search input

  constructor(private router: Router) {}

  navigateToBusLocation() {
    this.router.navigate(['/bus-location']);
  }
  navigateHOME() {
    this.router.navigate(['/maindashbord']);
  }

  navigateToBooking() {
    this.router.navigate(['/booking']);
  }

  navigateToMoreOptions(busName: string) {
    alert(`More options for ${busName}`);
  }

  // Filter buses based on the search term
  onSearchChange() {
    if (this.searchTerm) {
      this.filteredBuses = this.buses.filter(bus =>
        bus.busName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        bus.from.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        bus.to.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        bus.time.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      // If there's no search term, show all buses
      this.filteredBuses = [...this.buses];
    }
  }
}
