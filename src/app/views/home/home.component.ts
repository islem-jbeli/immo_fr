import { Component } from '@angular/core' 
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../hero-section/hero-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HeroSectionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  stats = [
    { value: 2800, suffix: '+', label: 'Properties Listed', delay: 400 },
    { value: 95, suffix: '%', label: 'Success Rate', delay: 450 },
    { value: 24, suffix: '/7', label: 'Client Support', delay: 500 }
  ];

  features = [
    'Expert market analysis and pricing strategies',
    'Personalized property matching services',
    'Professional photography and virtual tours'
  ];
}
