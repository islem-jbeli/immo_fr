import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface User {
  name: string;
  role: string;
  status: 'Actif' | 'Inactif';
}

interface Property {
  title: string;
  city: string;
  status: 'Publiée' | 'Brouillon' | 'Refusée' | 'Acceptée';
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  // Statistiques principales
  usersCount = 1250;
  propertiesCount = 230;
  reportsCount = 12;
  citiesCount = 50;

  // Liste des utilisateurs récents
  users: User[] = [
    { name: 'Jean Dupont', role: 'Propriétaire', status: 'Actif' },
    { name: 'Marie Martin', role: 'Agent', status: 'Inactif' },
    { name: 'Pierre Durand', role: 'Acheteur', status: 'Actif' },
    { name: 'Sophie Leforre', role: 'Propriétaire', status: 'Actif' }
  ];

  // Liste des annonces récentes
  properties: Property[] = [
    { title: 'Appartement', city: 'Paris', status: 'Publiée' },
    { title: 'Villa avec piscine', city: 'Marseille', status: 'Brouillon' },
    { title: 'Maison de ville', city: 'Lyon', status: 'Refusée' },
    { title: 'Maison ancienne', city: 'Dijon', status: 'Acceptée' }
  ];

  // Gestion des menus déroulants de la sidebar
  menus = {
    users: false,
    properties: false,
    signalements: false,
    villesDevises: false,
    ia: false,
    stats: false,
    roles: false,
    messages: false,
    parametres: false,
    journal: false
  };

  // Dropdown utilisateur
  isDropdownOpen = false;
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleMenu(menu: keyof typeof this.menus): void {
    this.menus[menu] = !this.menus[menu];
  }

  ngAfterViewInit(): void {
    // Évolution des inscriptions
    new Chart('inscriptionsChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [{
          label: 'Inscriptions',
          data: [10, 20, 30, 40, 50, 70],
          backgroundColor: 'rgba(59,130,246,0.2)',
          borderColor: 'rgba(59,130,246,1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: { responsive: true, plugins: { legend: { display: false } } }
    });

    // Propriétés par type
    new Chart('propertiesChart', {
      type: 'bar',
      data: {
        labels: ['Maisons', 'Appartements', 'Villas'],
        datasets: [{
          label: 'Nombre',
          data: [40, 90, 100],
          backgroundColor: ['#0d6efd', '#17a2b8', '#ffc107']
        }]
      },
      options: { responsive: true, plugins: { legend: { display: false } } }
    });

    // Utilisateurs actifs vs inactifs
    new Chart('usersStatusChart', {
      type: 'doughnut',
      data: {
        labels: ['Actifs', 'Inactifs'],
        datasets: [{ data: [80, 20], backgroundColor: ['#28a745', '#6c757d'] }]
      },
      options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
    });

    // Revenus et visites par mois
    const monthlyCtx = document.getElementById('monthlyStatsChart') as HTMLCanvasElement;
    if (monthlyCtx) {
      new Chart(monthlyCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
          datasets: [
            {
              label: 'Visites',
              data: [120, 150, 180, 200, 220, 250, 270, 300, 280, 320, 350, 400],
              borderColor: 'rgba(13,110,253,1)',
              backgroundColor: 'rgba(13,110,253,0.2)',
              fill: true,
              tension: 0.4
            },
            {
              label: 'Revenus (€)',
              data: [800, 950, 1000, 1200, 1400, 1600, 1700, 1900, 1800, 2000, 2200, 2500],
              borderColor: 'rgba(40,167,69,1)',
              backgroundColor: 'rgba(40,167,69,0.2)',
              fill: true,
              tension: 0.4
            }
          ]
        },
        options: {
          responsive: true,
          plugins: { legend: { position: 'top' }, tooltip: { mode: 'index', intersect: false } },
          scales: { y: { beginAtZero: true } }
        }
      });
    }
  }
}
