import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service'; // ajuste le chemin si nécessaire

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public auth: AuthService, private router: Router) {}

goToFavorites() {
  this.router.navigate(['/favorites']);
}

goToMessages() {
  this.router.navigate(['/messag']);
}



}
