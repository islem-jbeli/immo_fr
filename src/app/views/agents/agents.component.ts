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
    name: 'Emily Rodriguez',
    role: 'Senior Real Estate Advisor',
    badges: ['Luxury Homes', 'Investment Properties', 'First-Time Buyers'],
    image: 'assets/img/real-estate/agent-1.webp',
    stats: [
      { number: '150+', label: 'Properties Sold' },
      { number: '$45M', label: 'Total Sales' },
      { number: '5', label: 'Years Experience' }
    ],
    contacts: [
      { icon: 'bi-telephone', value: '+1 (555) 234-5678' },
      { icon: 'bi-envelope', value: 'emily.rodriguez@example.com' },
      { icon: 'bi-geo-alt', value: 'Downtown Miami Office' }
    ],
    socialLinks: ['linkedin', 'facebook', 'instagram', 'twitter']
  };

  teamAgents: Agent[] = [
    { name: 'Michael Chen', role: 'Property Consultant', location: 'Brooklyn Heights', languages: ['English','Mandarin'], image: 'assets/img/real-estate/agent-2.webp' },
    { name: 'Sarah Johnson', role: 'Commercial Specialist', location: 'Manhattan', languages: ['English','Spanish'], image: 'assets/img/real-estate/agent-3.webp', status: 'Verified' },
    { name: 'David Martinez', role: 'Luxury Home Advisor', location: 'Upper East Side', languages: ['English','French'], image: 'assets/img/real-estate/agent-4.webp' },
    { name: 'Lisa Thompson', role: 'Residential Specialist', location: 'Queens', languages: ['English'], image: 'assets/img/real-estate/agent-5.webp', status: 'New Agent' }
  ];

}
