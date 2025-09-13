import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'] // <-- au pluriel
})
export class HeroSectionComponent {
stats = [
 

  { number: 2800, suffix: '+', label: 'Properties Listed', delay: 400 },
    { number: 95, suffix: '%', label: 'Success Rate', delay: 450 },
    { number: 24, suffix: '/7', label: 'Client Support', delay: 500 }
];


  features = [
  
     'Expert market analysis and pricing strategies',
    'Personalized property matching services',
    'Professional photography and virtual tours'
    // ajoute tes features ici
  ];

sectionBadge = { icon: 'bi bi-buildings', text: 'Your Dream Home' };
  title = 'Transforming Real Estate Dreams Into Reality';
  description = `We specialize in turning your real estate goals into reality. Whether you're searching for a cozy apartment, a modern home, or a luxury villa, our expert team ensures a seamless experience from start to finish.`;



 
  images = {
    main: 'assets/img/real-estate/property-exterior-7.webp',
    secondary: [
      { src: 'assets/img/real-estate/property-interior-8.webp', alt: 'Interior Design' },
      { src: 'assets/img/real-estate/agent-3.webp', alt: 'Expert Agent' }
    ]
  };

  awards = 12;
  contact = { phone: '+216 58964818' };


}
