import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-perso',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard-perso.component.html',
  styleUrls: ['./dashboard-perso.component.css']
})
export class DashboardPersoComponent {
  cards = [
    { title: 'Mes recherches', subtitle: '12 recherches sauvegardées', icon: 'fas fa-search', color: 'text-primary', link: '/dashboard-perso/recherches' },
    { title: 'Mes favoris', subtitle: '5 biens ajoutés', icon: 'fas fa-heart', color: 'text-danger', link: '/dashboard-perso/favoris' },
    { title: 'Recommandations', subtitle: '3 nouveaux biens suggérés', icon: 'fas fa-lightbulb', color: 'text-warning', link: '/dashboard-perso/recommandations' },
    { title: 'Messages', subtitle: '2 messages non lus', icon: 'fas fa-envelope', color: 'text-success', link: '/dashboard-perso/messages' },
    { title: 'Historique', subtitle: '15 visites récentes', icon: 'fas fa-clock', color: 'text-info', link: '/dashboard-perso/historique' },
    { title: 'Paramètres', subtitle: 'Modifier profil et préférences', icon: 'fas fa-cog', color: 'text-secondary', link: '/dashboard-perso/parametres' }
  ];
}
