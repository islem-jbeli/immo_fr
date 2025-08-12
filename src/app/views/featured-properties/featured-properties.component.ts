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
    title: 'Seaside Villa with Infinity Pool',
    location: 'Coronado, CA 92118',
    price: '$3,760,000',
    beds: 5,
    baths: 4,
    area: '4,900 sq ft',
    imageUrl: 'assets/img/real-estate/property-exterior-6.webp',
    flags: ['Featured', 'Premium'],
    status: 'For Sale',
    listedAgo: 'Listed 2 days ago',
    description: 'Praesent commodo cursus magna, fusce dapibus tellus ac cursus commodo, vestibulum id ligula porta felis euismod semper.'
  };

  miniProperties: Property[] = [
    {
      id: 2,
      title: 'Urban Loft with Skyline Views',
      location: 'Denver, CO 80203',
      price: '$689,000',
      beds: 2,
      baths: 2,
      area: '1,450 sq ft',
      imageUrl: 'assets/img/real-estate/property-interior-2.webp',
      labels: [{ type: 'hot', icon: 'bi-lightning-charge-fill', text: 'Hot' }]
    },
    {
      id: 3,
      title: 'Charming Suburban Retreat',
      location: 'Austin, TX 78745',
      price: '$545,000',
      beds: 4,
      baths: 3,
      area: '2,350 sq ft',
      imageUrl: 'assets/img/real-estate/property-exterior-3.webp',
      labels: [{ type: 'new', icon: 'bi-star-fill', text: 'New' }]
    },
    {
      id: 4,
      title: 'Glass-Roof Penthouse Suite',
      location: 'Miami, FL 33131',
      price: '$1,290,000',
      beds: 3,
      baths: 3,
      area: '2,120 sq ft',
      imageUrl: 'assets/img/real-estate/property-interior-7.webp',
      labels: [{ type: 'featured', icon: 'bi-gem', text: 'Featured' }]
    }
  ];

  stackProperties: Property[] = [
    {
      id: 5,
      title: 'Modern Courtyard Residence',
      location: 'Scottsdale, AZ 85251',
      price: '$1,025,000',
      beds: 4,
      baths: 3,
      area: '2,980 sq ft',
      imageUrl: 'assets/img/real-estate/property-exterior-8.webp',
      labels: [{ type: 'exclusive', text: 'Exclusive' }]
    },
    {
      id: 6,
      title: 'Cozy Lakeview Townhouse',
      location: 'Madison, WI 53703',
      price: '$429,000',
      beds: 3,
      baths: 2,
      area: '1,780 sq ft',
      imageUrl: 'assets/img/real-estate/property-interior-10.webp',
      labels: [{ type: 'hot', text: 'Hot' }]
    },
    {
      id: 7,
      title: 'Garden Home Near Downtown',
      location: 'Raleigh, NC 27601',
      price: '$512,000',
      beds: 3,
      baths: 2,
      area: '1,920 sq ft',
      imageUrl: 'assets/img/real-estate/property-exterior-10.webp',
      labels: [{ type: 'new', text: 'New' }]
    }
  ];
}
