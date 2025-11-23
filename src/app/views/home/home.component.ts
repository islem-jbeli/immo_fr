import { Component } from '@angular/core';

import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { FeaturedPropertiesComponent } from '../featured-properties/featured-properties.component';
import { FeaturedServicesComponent } from '../featured-services/featured-services.component';
import { FeaturedAgentsComponent } from '../featured-agents/featured-agents.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { WhyUsComponent } from '../why-us/why-us.component';
import { RecentBlogPostsComponent } from '../recent-blog-posts/recent-blog-posts.component';
import { CallToActionComponent } from '../call-to-action/call-to-action.component';
import { PropertyCardComponent } from '../property-card/property-card.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HeroSectionComponent,
      FeaturedPropertiesComponent, 
      FeaturedServicesComponent,
      FeaturedAgentsComponent,
      TestimonialsComponent,
      WhyUsComponent,
      RecentBlogPostsComponent,
      CallToActionComponent,
    PropertyCardComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
