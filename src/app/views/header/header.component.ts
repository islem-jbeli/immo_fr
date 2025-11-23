import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 constructor(private router: Router) {}

  goToFavorites() {
    this.router.navigate(['/favorites']); // route vers la page des favoris
  }

  goToMessages() {
    this.router.navigate(['/messages']); // route vers la page des messages
  }
}
