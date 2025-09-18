import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // pour [(ngModel)]

interface Badge {
  text: string;
  class: string;
}

interface Agent {
  name: string;
  phone: string;
  avatar: string;
}

interface Property {
  image: string;
  badges: Badge[];
  price: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  area: string;
  agent: Agent;
  type: 'sale' | 'rent';
  galleryCount?: number;
}

interface FeaturedProperty {
  title: string;
  location: string;
  price: string;
  image: string;
}

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent {
  view: 'grid' | 'list' = 'grid';

  properties: Property[] = [
    {
      image: 'assets/img/real-estate/property-exterior-1.webp',
      badges: [{ text: 'Featured', class: 'featured' }, { text: 'For Sale', class: 'for-sale' }],
      price: '875,000 TND',
      title: 'Maison Familiale Moderne avec Jardin',
      location: 'Tunis, Ariana',
      beds: 4,
      baths: 3,
      area: '220 m²',
      agent: { name: 'Sarah Johnson', phone: '+216 20 123 456', avatar: 'assets/img/real-estate/agent-1.webp' },
      type: 'sale',
      galleryCount: 12
    },
    {
      image: 'assets/img/real-estate/property-exterior-3.webp',
      badges: [{ text: 'New', class: 'new' }, { text: 'For Sale', class: 'for-sale' }],
      price: '1,250,000 TND',
      title: 'Condominium de Luxe au Centre-ville',
      location: 'Sfax, Route de Sidi Mansour',
      beds: 2,
      baths: 2,
      area: '180 m²',
      agent: { name: 'Michael Chen', phone: '+216 22 234 567', avatar: 'assets/img/real-estate/agent-3.webp' },
      type: 'sale',
      galleryCount: 8
    },
    {
      image: 'assets/img/real-estate/property-interior-4.webp',
      badges: [{ text: 'For Rent', class: 'for-rent' }],
      price: '4,500 TND / mois',
      title: 'Villa Spacieuse en Banlieue',
      location: 'Sousse, Khezama',
      beds: 5,
      baths: 4,
      area: '320 m²',
      agent: { name: 'Emma Rodriguez', phone: '+216 23 345 678', avatar: 'assets/img/real-estate/agent-5.webp' },
      type: 'rent',
      galleryCount: 15
    },
    {
      image: 'assets/img/real-estate/property-exterior-6.webp',
      badges: [{ text: 'Open House', class: 'open-house' }, { text: 'For Sale', class: 'for-sale' }],
      price: '695,000 TND',
      title: 'Maison en Bord de Mer avec Quai',
      location: 'Hammamet, Zone Touristique',
      beds: 3,
      baths: 2,
      area: '210 m²',
      agent: { name: 'David Williams', phone: '+216 24 456 789', avatar: 'assets/img/real-estate/agent-7.webp' },
      type: 'sale',
      galleryCount: 20
    }
  ];

  featuredProperties: FeaturedProperty[] = [
    { title: 'Penthouse de Luxe', location: 'Tunis, Berges du Lac', price: '2,850,000 TND', image: 'assets/img/real-estate/property-exterior-8.webp' },
    { title: 'Studio Moderne', location: 'Sfax, Centre-ville', price: '3,200 TND / mois', image: 'assets/img/real-estate/property-interior-7.webp' },
    { title: 'Maison Familiale', location: 'Sousse, Port El Kantaoui', price: '895,000 TND', image: 'assets/img/real-estate/property-exterior-9.webp' }
  ];

  toggleView(viewType: 'grid' | 'list') {
    this.view = viewType;
  }
}
