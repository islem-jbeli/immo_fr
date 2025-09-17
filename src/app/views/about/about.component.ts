import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router'; // ← important


@Component({
  selector: 'app-about',
  standalone: true,   
  imports: [CommonModule,RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
   achievements = [
    { icon: 'bi-key', number: 2850, suffix: '+', label: 'Properties Sold' },
    { icon: 'bi-heart-fill', number: 98, suffix: '%', label: 'Client Satisfaction' },
    { icon: 'bi-geo-alt', number: 35, suffix: '', label: 'Cities Covered' },
    { icon: 'bi-award', number: 127, suffix: '', label: 'Industry Awards' }
  ];

  timeline = [
    { year: 2010, title: 'Company Founded', description: 'Our company was established to provide top-notch real estate services.' },
    { year: 2015, title: '1000th Property Milestone', description: 'We celebrated the sale of our 1000th property.' },
    { year: 2020, title: 'Digital Innovation Launch', description: 'We introduced cutting-edge digital tools for our clients.' },
    { year: 2024, title: 'Regional Expansion', description: 'We expanded our services to new regions across the country.' }
  ];

  team = [
    { name: 'Sarah Martinez', role: 'Senior Property Advisor', image: 'assets/img/real-estate/agent-5.webp' },
    { name: 'David Chen', role: 'Investment Specialist', image: 'assets/img/real-estate/agent-2.webp' }
  ];

}
