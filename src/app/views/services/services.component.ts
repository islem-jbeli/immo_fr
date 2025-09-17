import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  mainServices = [
    {
      icon: 'bi-house-door',
      title: 'Buy Your Dream Home',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.',
      stats: [
        { number: '2,500+', label: 'Properties Sold' },
        { number: '98%', label: 'Client Satisfaction' }
      ],
      image: 'assets/img/real-estate/property-exterior-3.webp',
      link: '/service-details',
      linkText: 'Learn More'
    },
    {
      icon: 'bi-currency-dollar',
      title: 'Sell Your Property',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.',
      stats: [
        { number: '45', label: 'Days Average Sale' },
        { number: '$2.5M+', label: 'Highest Sale Price' }
      ],
      image: 'assets/img/real-estate/property-exterior-7.webp',
      link: '/service-details',
      linkText: 'Get Valuation'
    }
  ];

 cards = [
  {
    icon: 'bi-key',
    title: 'Rental Services',
    description: 'Comprehensive rental solutions to help you find and manage tenants efficiently, ensuring smooth and profitable leasing.',
    features: ['Tenant Screening', 'Property Marketing', 'Lease Management'],
    link: '/service-details',
    linkText: 'Explore Rentals'
  },
  {
    icon: 'bi-graph-up',
    title: 'Investment Consulting',
    description: 'Expert guidance to maximize your real estate investments, including market analysis, ROI forecasting, and strategic portfolio planning.',
    features: ['Market Analysis', 'ROI Calculations', 'Portfolio Planning'],
    link: '/service-details',
    linkText: 'Start Investing'
  },
  {
    icon: 'bi-tools',
    title: 'Property Management',
    description: 'Professional property management services covering maintenance, rent collection, and 24/7 support to protect your investment.',
    features: ['Maintenance Coordination', 'Rent Collection', '24/7 Support'],
    link: '/service-details',
    linkText: 'Manage Property'
  }
];


}
