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

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardClientComponent } from './compuser/dashboard-client/dashboard-client.component';
import { UsersComponent } from './components/users/users.component';
import { StatistiquesComponent } from './components/statistiques/statistiques.component';
import { AnnoncesComponent } from './components/annonces/annonces.component';
import { ValiderAnnoncesComponent } from './components/valider-annonces/valider-annonces.component';
import { StatistiquesAnnoncesComponent } from './components/statistiques-annonces/statistiques-annonces.component';
import { StatistiquesDashboardComponent } from './components/statistiques-dashboard/statistiques-dashboard.component';
import { RolesAccessComponent } from './components/roles-access/roles-access.component';
import { MessagesComponent } from './components/messages/messages.component';
import { JournalMenuComponent } from './components/journal-menu/journal-menu.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LogoutComponent } from './components/logout/logout.component';

import { ChangerPhotoComponent } from './components/changer-photo/changer-photo.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

import { ProfilComponent } from './compuser/profil/profil.component';
import { AnnonceuserComponent } from './compuser/annonceuser/annonceuser.component';
import { FavorisComponent } from './compuser/favoris/favoris.component';
import { MesMessagesComponent } from './compuser/mes-messages/mes-messages.component';
import { AjouterAnnonceComponent } from './compuser/ajouter-annonce/ajouter-annonce.component';
import { StatistiqueuserComponent } from './compuser/statistiqueuser/statistiqueuser.component';
import { ContactsComponent } from './compuser/contacts/contacts.component';

import { DashboardPersoComponent } from './user/dashboard-perso/dashboard-perso.component';
import { SavedSearchesComponent } from './user/saved-searches/saved-searches.component';
import { FavorisuserComponent } from './user/favorisuser/favorisuser.component';
import { MessagesuserComponent } from './user/messagesuser/messagesuser.component';
import { AccountSettingsComponent } from './user/account-settings/account-settings.component';
import { VisitesComponent } from './user/visites/visites.component';



export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'properties', component: PropertiesComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'agents', component: AgentsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'user/dashboard', component: DashboardClientComponent },

  // Dashboard Admin
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'users', component: UsersComponent },
      { path: 'statistiques', component: StatistiquesComponent },
      { path: 'annonces', component: AnnoncesComponent },
      { path: 'valider-annonces', component: ValiderAnnoncesComponent },
      { path: 'statistiques-annonces', component: StatistiquesAnnoncesComponent },
      { path: 'statistiques-dashboard', component: StatistiquesDashboardComponent },
      { path: 'roles-access', component: RolesAccessComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'journal-menu', component: JournalMenuComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'logout', component: LogoutComponent },
      { path: 'changer-photo', component: ChangerPhotoComponent },
      { path: 'change-password', component: ChangePasswordComponent }
    ]
  },

  // Dashboard Client
  {
    path: 'dashboard-client',
  component: DashboardClientComponent, 
      children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'profil', component: ProfilComponent },
{ path: 'annonceuser', component: AnnonceuserComponent },
{ path: 'favoris', component: FavorisComponent }, 
{ path: 'mes-messages', component: MesMessagesComponent },
{ path: 'ajouter-annonce', component: AjouterAnnonceComponent },
{ path: 'statistiqueuser', component: StatistiqueuserComponent },
    { path: 'contacts', component: ContactsComponent } 


      ]
  },


    // Dashboard perso
{ path: 'dashboard-perso', 
  component: DashboardPersoComponent ,
  children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'saved-searches', component: SavedSearchesComponent },
      { path: 'favorisuser', component: FavorisuserComponent }, // page liste favoris
      { path: 'messagesuser', component: MessagesuserComponent },
      { path: 'account-settings', component: AccountSettingsComponent },
      { path: 'visites', component: VisitesComponent },
    ]
  }



];
