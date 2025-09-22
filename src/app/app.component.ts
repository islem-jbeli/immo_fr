import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { AboutComponent } from './views/about/about.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, RouterOutlet, HeaderComponent, FooterComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'immo_front';

  constructor(private router: Router) {} // <-- injecter Router ici

  isAdminRoute(): boolean {
    return this.router.url.includes('dashboard'); // <-- vérifie si on est sur le dashboard
  }
}
