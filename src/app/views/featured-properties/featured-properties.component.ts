import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // <-- importer CommonModule


interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  imageUrl: string;
  flags?: string[];         // ex: ['Featured', 'Premium']
  status?: string;          // ex: 'For Sale'
  listedAgo?: string;       // ex: 'Listed 2 days ago'
  description?: string;
  labels?: {                // pour les petites étiquettes comme 'Hot', 'New' sur les mini-cards
    type: string;
    icon?: string;
    text: string;
  }[];
}

@Component({
   selector: 'app-featured-properties',
  standalone: true,
  imports: [
    CommonModule, 
  ],
  templateUrl: './featured-properties.component.html',
  styleUrls: ['./featured-properties.component.css']
})
export class FeaturedPropertiesComponent {
featuredMain: Property = {
  id: 1,
  title: 'Luxury Seaside Villa',
  location: 'La Marsa, Tunis',
  price: '2,500,000 TND',
  beds: 5,
  baths: 4,
  area: '400 m²',
  imageUrl: 'assets/img/real-estate/property-exterior-6.webp',
  flags: ['Featured', 'Premium'],
  status: 'For Sale',
  listedAgo: 'Listed 2 days ago',
  description: 'Stunning villa with infinity pool, sea view, and high-end finishes, ideal for residential or rental investment.'
};

miniProperties: Property[] = [
  {
    id: 2,
    title: 'Modern Apartment with City View',
    location: 'Tunis Centre, Tunis',
    price: '650,000 TND',
    beds: 2,
    baths: 2,
    area: '120 m²',
    imageUrl: 'assets/img/real-estate/property-interior-2.webp',
    labels: [{ type: 'hot', icon: 'bi-lightning-charge-fill', text: 'Hot' }]
  },
  {
    id: 3,
    title: 'Charming Suburban House',
    location: 'Sousse, Sousse',
    price: '480,000 TND',
    beds: 4,
    baths: 3,
    area: '180 m²',
    imageUrl: 'assets/img/real-estate/property-exterior-3.webp',
    labels: [{ type: 'new', icon: 'bi-star-fill', text: 'New' }]
  },
  {
    id: 4,
    title: 'Penthouse with Panoramic Terrace',
    location: 'La Goulette, Tunis',
    price: '1,200,000 TND',
    beds: 3,
    baths: 3,
    area: '150 m²',
    imageUrl: 'assets/img/real-estate/property-interior-7.webp',
    labels: [{ type: 'featured', icon: 'bi-gem', text: 'Featured' }]
  }
];

stackProperties: Property[] = [
  {
    id: 5,
    title: 'Modern Residence with Courtyard',
    location: 'Gammarth, Tunis',
    price: '950,000 TND',
    beds: 4,
    baths: 3,
    area: '200 m²',
    imageUrl: 'assets/img/real-estate/property-exterior-8.webp',
    labels: [{ type: 'exclusive', text: 'Exclusive' }]
  },
  {
    id: 6,
    title: 'Lakeview House',
    location: 'Hammamet, Nabeul',
    price: '420,000 TND',
    beds: 3,
    baths: 2,
    area: '130 m²',
    imageUrl: 'assets/img/real-estate/property-interior-10.webp',
    labels: [{ type: 'hot', text: 'Hot' }]
  },
  {
    id: 7,
    title: 'Garden Home Near Downtown',
    location: 'Sfax, Sfax',
    price: '500,000 TND',
    beds: 3,
    baths: 2,
    area: '140 m²',
    imageUrl: 'assets/img/real-estate/property-exterior-10.webp',
    labels: [{ type: 'new', text: 'New' }]
  }
];

}
