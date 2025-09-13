import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Benefit {
  icon: string;
  text: string;
  delay: number;
}

interface Stat {
  icon: string;
  number: string;
  label: string;
  delay: number;
}

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css']
})
export class CallToActionComponent {
  badge: string = 'Start Your Property Journey Today';
  title: string = 'Ready to Discover Your Ideal Investment?';
  description: string = 'ImmoSmart helps you find the perfect property with personalized recommendations, expert market insights, and seamless support throughout the buying process.';

  benefits: Benefit[] = [
    { icon: 'bi bi-check-circle-fill', text: 'Comprehensive market analysis and trends', delay: 300 },
    { icon: 'bi bi-check-circle-fill', text: 'AI-powered property suggestions tailored to you', delay: 350 },
    { icon: 'bi bi-check-circle-fill', text: 'Complete support from search to transaction', delay: 400 }
  ];

  stats: Stat[] = [
    { icon: 'bi bi-house-heart-fill', number: '850+', label: 'Properties Sold', delay: 450 },
    { icon: 'bi bi-trophy-fill', number: '15', label: 'Years Experience', delay: 500 }
  ];
}
