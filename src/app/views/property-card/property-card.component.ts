import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'property-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  @Input() property: any;      // Propriété reçue du parent
  isFavorite: boolean = false; // État du cœur
  isConnected: boolean = false; // Vérifie si l’utilisateur est connecté
  isHomePage: boolean = false;  // Vérifie si on est sur la page Home

  constructor(
    public auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Vérifie la connexion de l'utilisateur
    this.isConnected = this.auth.isLogged();

    // Vérifie la route actuelle
    const currentUrl = this.router.url;
    this.isHomePage = currentUrl === '/' || currentUrl === '/home';
  }

  toggleFavorite(): void {
    if (!this.isConnected) {
      alert('Vous devez être connecté pour ajouter aux favoris.');
      return;
    }

    // Change l'état du favori
    this.isFavorite = !this.isFavorite;

    // Ici tu peux appeler ton backend pour ajouter ou retirer le favori
    // Exemple :
    // if(this.isFavorite) { this.favoriteService.addFavorite(this.property.id); }
    // else { this.favoriteService.removeFavorite(this.property.id); }
  }

  // Fonction utilitaire pour récupérer la classe du cœur (optionnel)
  getFavoriteClass(): string {
    return this.isFavorite ? 'bi-heart-fill text-danger' : 'bi-heart text-white';
  }

openChat(propertyId: number, ownerId: number) {
  if (!this.auth.isLogged()) {
    alert('Connectez-vous pour envoyer un message.');
    return;
  }
  this.router.navigate(['/messag'], { queryParams: { propertyId, ownerId } });
}

}
