import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Import your LoginComponent
import { DashboardComponent } from './dashboard/dashboard.component'; // Import your DashboardComponent
import { BusLocationComponent } from './bus-location/bus-location.component'; // Import your BusLocationComponent
import { BookingComponent } from './booking/booking.component'; // Import your BookingComponent
import { ResumeComponent } from './resume/resume.component';
import { AlldashbordComponent } from './alldashbord/alldashbord/alldashbord.component';

// Define the routes for your application
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'Resume', component: ResumeComponent },
  { path: 'Alldashbord', component: AlldashbordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bus-location', component: BusLocationComponent },
  { path: 'booking', component: BookingComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Register the routes with the Angular Router
  exports: [RouterModule] // Export RouterModule so it can be used throughout the app
})
export class AppRoutingModule {}
