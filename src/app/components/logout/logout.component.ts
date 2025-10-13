import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logout',
  standalone: true,
    imports: [CommonModule, FormsModule],
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private router: Router) {}

  logout() {
    // Ici tu peux supprimer le token ou les données de session
    console.log('Déconnexion...');
    alert('Vous êtes déconnecté !');

    // Redirection vers la page de login
    this.router.navigate(['/login']);
  }
}
