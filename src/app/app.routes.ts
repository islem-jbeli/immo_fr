import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { PropertiesComponent } from './views/properties/properties.component';
import { ServicesComponent } from './views/services/services.component';
import { AgentsComponent } from './views/agents/agents.component';
import { BlogComponent } from './views/blog/blog.component';
import { ContactComponent } from './views/contact/contact.component';
import { LoginComponent } from './views/immo/login/login.component';
import { RegisterComponent } from './views/immo/register/register.component';
import { ForgotPasswordComponent } from './views/immo/forgot-password/forgot-password.component';



export const routes: Routes = [
  { path: '', component: HomeComponent },     // route d'accueil
  { path: 'about', component: AboutComponent } ,// route About
    { path: 'properties', component: PropertiesComponent },
        { path: 'services', component: ServicesComponent },
        { path: 'agents', component: AgentsComponent },
                { path: 'blog', component: BlogComponent },
                { path: 'contact', component: ContactComponent },
                 { path: 'login', component: LoginComponent }, // ✅ sans quotes
  { path: 'register', component: RegisterComponent },

{ path: 'forgot-password', component: ForgotPasswordComponent }




  
];
