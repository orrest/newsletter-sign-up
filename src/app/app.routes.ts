import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SuccessPageComponent } from './success-page/success-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'success', component: SuccessPageComponent },
];
