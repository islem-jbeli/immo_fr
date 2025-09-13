import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './views/header/header.component';

import { HeroSectionComponent } from './views/hero-section/hero-section.component';
import { FeaturedPropertiesComponent } from './views/featured-properties/featured-properties.component';
import { FeaturedServicesComponent } from './views/featured-services/featured-services.component';
import { FeaturedAgentsComponent } from './views/featured-agents/featured-agents.component';
import { TestimonialsComponent } from './views/testimonials/testimonials.component';
import { WhyUsComponent } from './views/why-us/why-us.component';
import { RecentBlogPostsComponent } from './views/recent-blog-posts/recent-blog-posts.component';
import { CallToActionComponent } from './views/call-to-action/call-to-action.component';
import { FooterComponent } from './views/footer/footer.component';

import { AboutComponent } from './views/about/about.component';
import { RouterModule, Routes, provideRouter } from '@angular/router';



const routes: Routes = [
  
  { path: 'about', component: AboutComponent },  // About
  { path: '**', redirectTo: '' }                 // redirection
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  
    RouterOutlet,
    HeaderComponent,
   
    HeroSectionComponent,
    FeaturedPropertiesComponent, 
    FeaturedServicesComponent,
    FeaturedAgentsComponent,
    TestimonialsComponent,
    WhyUsComponent,
    RecentBlogPostsComponent,
    CallToActionComponent,
   FooterComponent,


   AboutComponent


  ],

 

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  title = 'immo_front';
}
