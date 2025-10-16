import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-dashboard-perso',
  standalone: true,
  imports: [CommonModule, RouterModule, NgChartsModule],
  templateUrl: './dashboard-perso.component.html',
  styleUrls: ['./dashboard-perso.component.css']
})
export class DashboardPersoComponent {

cards = [
  {
    title: 'Mes recherches',
    subtitle: 'Consultez toutes vos recherches sauvegardées et retrouvez rapidement les biens qui vous intéressent',
    emoji: '🔍',
    color: 'text-info',
    link: '/dashboard-perso/saved-searches'
  },
  {
    title: 'Favoris',
    subtitle: 'Accédez à vos biens favoris et gérez vos préférences facilement',
    emoji: '❤️',
    color: 'text-danger',
    link: '/dashboard-perso/favorisuser'
  },
  {
    title: 'Recommandations',
    subtitle: 'Découvrez les suggestions personnalisées de l’IA basées sur vos intérêts et activités',
    emoji: '💡',
    color: 'text-warning',
    link: '/dashboard-perso/recommandations'
  }
];


// Activité mensuelle (biens vus, visites, recherches)
activityChartData = {
  labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
  datasets: [
    { 
      label: 'Biens vus', 
      data: [10, 15, 8, 20, 12, 18], 
      borderColor: '#0d6efd',          // bleu vif
      backgroundColor: 'rgba(13,110,253,0.3)', 
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#0d6efd',
      pointBorderColor: '#fff',
      pointHoverRadius: 6,
      pointRadius: 5,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#0d6efd'
    },
    { 
      label: 'Visites', 
      data: [5, 8, 4, 10, 6, 9], 
      borderColor: '#198754',          // vert vif
      backgroundColor: 'rgba(25,135,84,0.3)', 
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#198754',
      pointBorderColor: '#fff',
      pointHoverRadius: 6,
      pointRadius: 5,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#198754'
    },
    { 
      label: 'Recherches', 
      data: [3, 5, 2, 7, 4, 6], 
      borderColor: '#fd7e14',          // orange vif
      backgroundColor: 'rgba(253,126,20,0.3)', 
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#fd7e14',
      pointBorderColor: '#fff',
      pointHoverRadius: 6,
      pointRadius: 5,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#fd7e14'
    }
  ]
};

activityChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        font: { size: 14, weight: '600' },
        color: '#1c548b'
      }
    },
    tooltip: {
      mode: 'index',
      intersect: false,
      backgroundColor: 'rgba(0,0,0,0.85)',
      titleColor: '#fff',
      bodyColor: '#fff',
      cornerRadius: 6,
      padding: 10
    }
  },
  interaction: {
    mode: 'nearest',
    axis: 'x',
    intersect: false
  },
  scales: {
    x: {
      grid: { color: 'rgba(0,0,0,0.05)', drawBorder: false },
      ticks: { color: '#555', font: { size: 13, weight: '500' } }
    },
    y: {
      beginAtZero: true,
      grid: { color: 'rgba(0,0,0,0.05)', drawBorder: false },
      ticks: { color: '#555', font: { size: 13, weight: '500' }, stepSize: 5 }
    }
  }
};


// Répartition des actions
actionsChartData = {
  labels: ['Biens vus', 'Visites', 'Recherches', 'Favoris'],
  datasets: [
    { data: [24, 12, 8, 5], backgroundColor: ['#0d6efd', '#198754', '#ffc107', '#dc3545'] }
  ]
};
actionsChartOptions = { responsive: true };


  constructor(private router: Router) {}

  // Méthodes pour savoir quelle page est active
  isSavedSearchesPage(): boolean {
    return this.router.url === '/dashboard-perso/saved-searches';
  }
  isfavorisuserPage(): boolean {
    return this.router.url === '/dashboard-perso/favorisuser';
  }
  isMessagesuserPage(): boolean {
    return this.router.url === '/dashboard-perso/messagesuser';
  }
  isAccountSettingsPage(): boolean {
    return this.router.url === '/dashboard-perso/account-settings';
  }
  isVisitesPage(): boolean {
    return this.router.url === '/dashboard-perso/visites';
  }
}
