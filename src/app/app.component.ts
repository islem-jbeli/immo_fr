import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './views/header/header.component';

import { FooterComponent } from './views/footer/footer.component';

import { AboutComponent } from './views/about/about.component';
import { RouterModule, Routes, provideRouter } from '@angular/router';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  
    RouterOutlet,
    HeaderComponent,
   
   
   FooterComponent,


   AboutComponent


  ],

 

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  title = 'immo_front';
}
