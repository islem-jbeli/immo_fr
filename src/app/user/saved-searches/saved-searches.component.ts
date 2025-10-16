import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface SavedSearch {
  id: number;
  title: string;
  criteria: string;
}

@Component({
  selector: 'app-saved-searches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saved-searches.component.html',
  styleUrls: ['./saved-searches.component.css']
})
export class SavedSearchesComponent {

  // Liste des recherches enregistrées
  savedSearches: SavedSearch[] = [
    { id: 1, title: 'Appartement à Tunis', criteria: 'Prix < 500 000 TND, 2 chambres' },
    { id: 2, title: 'Maison à Sousse', criteria: 'Prix < 800 000 TND, 3 chambres, piscine' }
  ];

  // Permissions / rôles
  canView: boolean = true;   // peut voir ses recherches
  canDelete: boolean = true; // peut supprimer une recherche

  constructor(private router: Router) {}

  // Supprimer une recherche
  deleteSearch(id: number) {
    if (!this.canDelete) return;
    this.savedSearches = this.savedSearches.filter(search => search.id !== id);
  }




  
}
