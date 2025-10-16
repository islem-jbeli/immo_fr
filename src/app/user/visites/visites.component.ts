import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

interface Property {
  id: number;
  title: string;
  location: string;
  image: string;
  visitedAt: Date;
  description?: string; // ← nouveau champ optionnel
}

@Component({
  selector: 'app-visites',
  standalone: true,
    imports: [CommonModule, RouterModule],
  templateUrl: './visites.component.html',
  styleUrls: ['./visites.component.css']
})
export class VisitesComponent implements OnInit {

  visitedProperties: Property[] = [];

  constructor() { }

  ngOnInit(): void {
    // Exemple : récupérer depuis un service ou localStorage
    this.visitedProperties = [
      {
        id: 1,
        title: 'Appartement moderne au centre-ville',
        location: 'Tunis, Tunisie',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2b9wbcUWNTxvgS-L9JDx_yngNG04vMm-CMQ&s',
        visitedAt: new Date('2025-10-10T14:30'),
        description: 'Superbe appartement au centre-ville, proche des commodités.'
      },
      {
        id: 2,
        title: 'Maison avec jardin',
        location: 'Sfax, Tunisie',
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/557141680.jpg?k=a121cc008a870fb193c981cb8ca0d44128b704a227857d37fb1aff2e020b89cb&o=&hp=1',
        visitedAt: new Date('2025-10-12T10:15')
      }
    ];
  }
selectedProperty: Property | null = null;

selectProperty(property: Property) {
  this.selectedProperty = property;
}

}
