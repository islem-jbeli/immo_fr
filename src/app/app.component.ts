import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { HeroSectionComponent } from './views/hero-section/hero-section.component';
import { FeaturedPropertiesComponent } from './views/featured-properties/featured-properties.component';
import { FeaturedServicesComponent } from './views/featured-services/featured-services.component';
import { FeaturedAgentsComponent } from './views/featured-agents/featured-agents.component';
import { TestimonialsComponent } from './views/testimonials/testimonials.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomeComponent,
    HeroSectionComponent,
    FeaturedPropertiesComponent, 
    FeaturedServicesComponent,
    FeaturedAgentsComponent,
    TestimonialsComponent


  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  title = 'immo_front';
}
