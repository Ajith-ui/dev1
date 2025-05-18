import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BusLocationComponent } from './bus-location/bus-location.component';
import { BookingComponent } from './booking/booking.component';
import { MaindashbordComponent } from './maindashbord/maindashbord.component';
import { CarbookingComponent } from './carbooking/carbooking.component';
import { PaymentComponent } from './payment/payment.component';
import { ResumeComponent } from './resume/resume.component';
import { AlldashbordComponent } from './alldashbord/alldashbord/alldashbord.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'Alldashbord', component: AlldashbordComponent }, 
  { path: 'resume', component: ResumeComponent }, 
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bus-location', component: BusLocationComponent }, 
  { path: 'booking', component: BookingComponent }, 
  { path: 'maindashbord', component: MaindashbordComponent }, 
  { path: 'carbooking', component: CarbookingComponent }, 
  { path: 'payment', component: PaymentComponent }, 
  { path: '', redirectTo: '/booking', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Set up router with these routes
  exports: [RouterModule] // Export RouterModule to use throughout the app
})
export class AppRoutingModule {}
