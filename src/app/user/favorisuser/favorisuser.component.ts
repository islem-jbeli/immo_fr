import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  imageUrl: string;
    showDetails?: boolean; 
    description: string;        // <-- ajouté pour les détails// pour afficher ou masquer les détails

}

@Component({
  selector: 'app-favorisuser',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorisuser.component.html',
  styleUrls: ['./favorisuser.component.css']
})
export class FavorisuserComponent {

  favoriteProperties: Property[] = [
    { id: 1, title: 'Appartement moderne', location: 'Tunis', price: '450 000 TND', imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1411077898189075147/original/1d169b07-2050-47b2-bb39-8555ae486e53.jpeg', description: 'Appartement spacieux avec 2 chambres, cuisine équipée et balcon au centre de Tunis.' },
    { id: 2, title: 'Maison avec piscine', location: 'Sousse', price: '750 000 TND', imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/375005161.jpg?k=bf6525263a6f920830d356076881003902d5edd80de41a44af620930ca56f3bc&o=&hp=1', description: 'Maison avec piscine, jardin privé et garage pour 2 voitures.' },
  ];

  // Supprimer des favoris
  removeFromFavorites(propertyId: number) {
    this.favoriteProperties = this.favoriteProperties.filter(p => p.id !== propertyId);
  }

  // Affiche ou masque les détails
  toggleDetails(property: Property) {
    property.showDetails = !property.showDetails;
  }
}