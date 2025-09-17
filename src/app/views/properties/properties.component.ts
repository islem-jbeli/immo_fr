import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';   // 👈 nécessaire pour [(ngModel)]
import * as AOS from 'aos';

interface Agent {
  name: string;
  phone: string;
  avatar: string;
}

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  type?: string;
  badges: { text: string; class: string }[];  // Toujours objet
  image: string;
  beds: number;
  baths: number;
  size: string;
  agent: Agent;
}

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  viewMode: 'grid' | 'list' = 'grid';
  sortOption: string = 'newest';

  properties: Property[] = [
    {
      id: 1,
      title: 'Modern Family Home with Garden',
      location: '2847 Oak Street, Beverly Hills, CA 90210',
      price: '$875,000',
      type: 'For Sale',
      badges: [
        { text: 'Featured', class: 'featured' },
        { text: 'For Sale', class: 'for-sale' }
      ],
      image: 'assets/img/real-estate/property-exterior-1.webp',
      beds: 4,
      baths: 3,
      size: '2,400 sqft',
      agent: {
        name: 'Sarah Johnson',
        phone: '+1 (555) 123-4567',
        avatar: 'assets/img/real-estate/agent-1.webp'
      }
    },
    {
      id: 2,
      title: 'Downtown Luxury Condominium',
      location: '1542 Main Avenue, Manhattan, NY 10001',
      price: '$1,250,000',
      type: 'For Sale',
      badges: [
        { text: 'New', class: 'new' },
        { text: 'For Sale', class: 'for-sale' }
      ],
      image: 'assets/img/real-estate/property-exterior-3.webp',
      beds: 2,
      baths: 2,
      size: '1,800 sqft',
      agent: {
        name: 'Michael Chen',
        phone: '+1 (555) 234-5678',
        avatar: 'assets/img/real-estate/agent-3.webp'
      }
    },
    {
      id: 3,
      title: 'Spacious Suburban Villa',
      location: '789 Pine Ridge Drive, Austin, TX 73301',
      price: '$4,500/month',
      type: 'For Rent',
      badges: [
        { text: 'For Rent', class: 'bg-primary' }
      ],
      image: 'assets/img/real-estate/property-interior-4.webp',
      beds: 5,
      baths: 4,
      size: '3,200 sqft',
      agent: {
        name: 'Emma Rodriguez',
        phone: '+1 (555) 345-6789',
        avatar: 'assets/img/real-estate/agent-5.webp'
      }
    },
    {
      id: 4,
      title: 'Waterfront Townhouse with Dock',
      location: '456 Harbor View Lane, Miami, FL 33101',
      price: '$695,000',
      type: 'For Sale',
      badges: [
        { text: 'Open House', class: 'bg-info' },
        { text: 'For Sale', class: 'for-sale' }
      ],
      image: 'assets/img/real-estate/property-exterior-6.webp',
      beds: 3,
      baths: 2,
      size: '2,100 sqft',
      agent: {
        name: 'David Williams',
        phone: '+1 (555) 456-7890',
        avatar: 'assets/img/real-estate/agent-7.webp'
      }
    }
  ];

  ngOnInit(): void {
    AOS.init();
  }
}
