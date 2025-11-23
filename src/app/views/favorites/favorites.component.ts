import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { CommonModule } from '@angular/common'; // <-- Important pour ngClass

interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface Favorite {
  id: number;
  userId: number;
  property: Property;
  propertyId: number;
}

@Component({
  selector: 'app-favorites',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: Favorite[] = [];
  userId: number = 1; // ID de l'utilisateur connecté

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favoriteService.getFavorites(this.userId).subscribe(
      (data: any[]) => {
        // Adapter la réponse pour inclure l'objet Property
        this.favorites = data.map(fav => ({
          ...fav,
          property: {
            id: fav.propertyId,
            title: `Propriété ${fav.propertyId}`, // tu peux adapter avec vrai titre si backend le renvoie
            description: 'Description...',
            price: 0,
            imageUrl: 'https://via.placeholder.com/150'
          }
        }));
      },
      (error: any) => {
        console.error('Erreur lors du chargement des favoris', error);
      }
    );
  }

  isFavorite(property: Property): boolean {
    return this.favorites.some(fav => fav.propertyId === property.id);
  }

  toggleFavorite(property: Property) {
    this.favoriteService.toggleFavorite(this.userId, property.id).subscribe(
      (fav: any) => {
        if (this.isFavorite(property)) {
          this.favorites = this.favorites.filter(f => f.propertyId !== property.id);
        } else {
          this.favorites.push({
            id: fav.id,
            userId: this.userId,
            propertyId: property.id,
            property
          });
        }
      },
      (error: any) => {
        console.error('Erreur toggle favori', error);
      }
    );
  }
}