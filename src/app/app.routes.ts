import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { PropertiesComponent } from './views/properties/properties.component';
import { ServicesComponent } from './views/services/services.component';
import { AgentsComponent } from './views/agents/agents.component';
import { BlogComponent } from './views/blog/blog.component';
import { ContactComponent } from './views/contact/contact.component';



export const routes: Routes = [
  { path: '', component: HomeComponent },     // route d'accueil
  { path: 'about', component: AboutComponent } ,// route About
    { path: 'properties', component: PropertiesComponent },
        { path: 'services', component: ServicesComponent },
        { path: 'agents', component: AgentsComponent },
                { path: 'blog', component: BlogComponent },
                { path: 'contact', component: ContactComponent },




  
];
