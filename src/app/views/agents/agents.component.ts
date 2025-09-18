import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Agent {
  name: string;
  role: string;
  location: string;
  languages: string[];
  image: string;
  status?: string; // "Verified", "New Agent"...
}

@Component({
  selector: 'app-agents',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent {

  featuredAgent = {
    name: 'Amira Jbeli',
    role: 'Senior Real Estate Advisor',
    badges: ['Villas', 'Apartments', 'Investments'],
    image: 'assets/img/real-estate/agent-1.webp',
    stats: [
      { number: '120+', label: 'Properties Sold' },
      { number: '15M TND', label: 'Total Sales' },
      { number: '7', label: 'Years Experience' }
    ],
    contacts: [
      { icon: 'bi-telephone', value: '+216 21 234 567' },
      { icon: 'bi-envelope', value: 'amira.jbeli@immosmart.tn' },
      { icon: 'bi-geo-alt', value: 'Avenue Habib Bourguiba, Tunis' }
    ],
    socialLinks: ['linkedin', 'facebook', 'instagram', 'twitter']
  };

  teamAgents: Agent[] = [
    { name: 'Mohamed Ben Ali', role: 'Property Consultant', location: 'Tunis', languages: ['Arabic', 'French', 'English'], image: 'assets/img/real-estate/agent-2.webp' },
    { name: 'Sonia Trabelsi', role: 'Commercial Specialist', location: 'Sousse', languages: ['Arabic', 'French'], image: 'assets/img/real-estate/agent-3.webp', status: 'Verified' },
    { name: 'Walid Khalifa', role: 'Luxury Home Advisor', location: 'La Marsa', languages: ['Arabic', 'French', 'English'], image: 'assets/img/real-estate/agent-4.webp' },
    { name: 'Leila Ben Romdhane', role: 'Residential Specialist', location: 'Ariana', languages: ['Arabic', 'French'], image: 'assets/img/real-estate/agent-5.webp', status: 'New Agent' }
  ];

}
