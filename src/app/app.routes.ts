import { Routes } from '@angular/router';

import { AboutComponent } from './views/about/about.component';


export const routes: Routes = [
 
  { path: 'about', component: AboutComponent },  // About

  { path: '**', redirectTo: '' } // redirection
 
];
