import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations'; 

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(), 
    importProvidersFrom(RouterModule.forRoot(routes)) 
  ]
})
  .catch(err => console.error(err));
