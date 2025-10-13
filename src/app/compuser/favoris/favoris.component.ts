import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Favori {
  id: number;
  title: string;
  city: string;
  price: number;
  photo: string;
}

@Component({
  selector: 'app-favoris',
  standalone: true,
    imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent {
  placeholder = "https://images.unsplash.com/photo-1560448075-bb0bfc0cdb36?auto=format&fit=crop&w=800&q=80";

  favoris: Favori[] = [
    { id: 1, title: 'Appartement S+2 moderne', city: 'Tunis', price: 350000, photo: 'https://www.tayara.tn/mediaGateway/resize-image?img=1e/1e7c4d6f-d7e3-4420-aa20-74a7bdd2e4e2&w=1000' },
    { id: 2, title: 'Villa avec piscine', city: 'Sousse', price: 1200000, photo: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Studio S+1', city: 'Ariana', price: 180000, photo: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80' }
  ];

  openImage(url: string) {
    window.open(url, "_blank");
  }

  removeFavori(id: number) {
    this.favoris = this.favoris.filter(f => f.id !== id);
  }
}
