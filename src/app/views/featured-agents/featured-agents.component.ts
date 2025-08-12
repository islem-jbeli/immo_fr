import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // <-- importer CommonModule

@Component({
  selector: 'app-featured-agents',
    standalone: true,
  imports: [
    CommonModule, 
  ],
  templateUrl: './featured-agents.component.html',
  styleUrls: ['./featured-agents.component.css']
})
export class FeaturedAgentsComponent {
  agents = [
    {
      name: 'Lisa Thompson',
      title: 'Luxury Property Expert',
      image: 'assets/img/real-estate/agent-5.webp',
      phone: '+14159876543',
      email: 'lisa.thompson@example.com',
      whatsappLink: '#',
      statusText: 'Top Agent',
      statusClass: 'top-agent',
      propertiesSold: '150+',
      propertiesLabel: 'Properties Sold',
      rating: 4.9,
      location: 'Miami Beach',
      specialties: ['Waterfront', 'High-Rise'],
      profileLink: 'agent-profile.html',
      delay: 100
    },
    {
      name: 'Robert Chen',
      title: 'Commercial Specialist',
      image: 'assets/img/real-estate/agent-4.webp',
      phone: '+14159876544',
      email: 'robert.chen@example.com',
      whatsappLink: '#',
      statusText: 'Certified',
      statusClass: 'certified',
      propertiesSold: '90+',
      propertiesLabel: 'Commercial Sales',
      rating: 4.8,
      location: 'Downtown',
      specialties: ['Office Space', 'Retail'],
      profileLink: 'agent-profile.html',
      delay: 200
    },
    {
      name: 'Maria Gonzalez',
      title: 'Residential Advisor',
      image: 'assets/img/real-estate/agent-8.webp',
      phone: '+14159876545',
      email: 'maria.gonzalez@example.com',
      whatsappLink: '#',
      statusText: 'Rising Star',
      statusClass: 'new-star',
      propertiesSold: '75+',
      propertiesLabel: 'Happy Families',
      rating: 4.9,
      location: 'Suburbs',
      specialties: ['Family Homes', 'First-Time'],
      profileLink: 'agent-profile.html',
      delay: 300
    }
  ];
}
