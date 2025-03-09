import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Import your LoginComponent
import { DashboardComponent } from './dashboard/dashboard.component'; // Import your DashboardComponent
import { BusLocationComponent } from './bus-location/bus-location.component'; // Import your BusLocationComponent
import { BookingComponent } from './booking/booking.component'; // Import your BookingComponent

// Define the routes for your application
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route, redirect to login page
  { path: 'login', component: LoginComponent }, // Route for Login
  { path: 'dashboard', component: DashboardComponent }, // Route for Dashboard
  { path: 'bus-location', component: BusLocationComponent }, // Route for Bus Location
  { path: 'booking', component: BookingComponent }, // Route for Booking
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Register the routes with the Angular Router
  exports: [RouterModule] // Export RouterModule so it can be used throughout the app
})
export class AppRoutingModule {}
