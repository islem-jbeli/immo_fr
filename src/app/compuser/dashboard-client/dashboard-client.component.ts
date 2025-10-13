import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-client',
    standalone: true,
  imports: [CommonModule, RouterModule],
    templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.css']
})
export class DashboardClientComponent implements AfterViewInit {


 // ✅ Variable pour contrôler le dropdown
  isDropdownOpen: boolean = false;

  // Optionnel : fonction pour basculer l'état
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }


  userName = 'Islem';
  totalProperties = 8;
  totalFavorites = 5;
  totalMessages = 12;
  totalVisits = 72;

  // Mock data pour tables
  properties = [
    { title: 'Appartement Centre Ville', city: 'Tunis', status: 'Publiée' },
    { title: 'Maison avec jardin', city: 'Sfax', status: 'Brouillon' },
    { title: 'Studio moderne', city: 'Sousse', status: 'Publiée' }
  ];

  messages = [
    { from: 'Admin', subject: 'Bienvenue sur ImmoSmart', date: '21/09/2025' },
    { from: 'Propriétaire', subject: 'Confirmation de visite', date: '20/09/2025' }
  ];

  ngAfterViewInit() {
    // Chart : évolution des annonces
    new Chart("propertiesChart", {
      type: 'bar',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [{
          label: 'Annonces publiées',
          data: [2,3,1,4,3,5],
          backgroundColor: '#0d6efd'
        }]
      }
    });

    // Chart : visites
    new Chart("visitsChart", {
      type: 'line',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [{
          label: 'Visites mensuelles',
          data: [10, 20, 15, 30, 25, 35],
          borderColor: '#198754',
          backgroundColor: 'rgba(25,135,84,0.2)',
          fill: true,
          tension: 0.4
        }]
      }
    });

    // Chart : favoris
    new Chart("favoritesChart", {
      type: 'doughnut',
      data: {
        labels: ['Appartements', 'Maisons', 'Villas'],
        datasets: [{
          data: [3,1,1],
          backgroundColor: ['#0d6efd', '#dc3545', '#ffc107']
        }]
      }
    });
  }


constructor(private router: Router) {}

isProfilPage(): boolean { 
  return this.router.url === '/dashboard-client/profil'; 
}

  isAnnonceuserPage(): boolean { 
    return this.router.url === '/dashboard-client/annonceuser'; 
  }

  isFavorisPage(): boolean { 
    return this.router.url === '/dashboard-client/favoris'; 
  }

  isMesMessagesPage(): boolean {
    return this.router.url === '/dashboard-client/mes-messages';
  }

  isAjouterAnnoncePage(): boolean {
    return this.router.url === '/dashboard-client/ajouter-annonce';
  }

  isStatistiqueuserPage(): boolean {
    return this.router.url === '/dashboard-client/statistiqueuser';
  }


isContactsPage(): boolean {
    return this.router.url === '/dashboard-client/contacts'; 
  }


}
