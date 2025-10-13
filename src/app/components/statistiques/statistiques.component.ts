import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

interface Ad {
  title: string;
  daysInactive: number;
}

@Component({
  selector: 'app-statistiques',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {

  // Statistiques principales
  usersCount = 1250;
  activeUsersCount = 1000;
  inactiveUsersCount = 250;
  rolesCount = 4;

  // Graphique utilisateurs par rôle
  roleChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Propriétaire', 'Agent', 'Acheteur', 'Admin'],
    datasets: [
      { data: [400, 350, 300, 200], label: 'Utilisateurs', backgroundColor: '#0d6efd' }
    ]
  };
  roleChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: { legend: { display: false } }
  };
  roleChartType: 'bar' = 'bar';

  // Graphique comptes actifs/inactifs
  statusChartData!: ChartConfiguration<'doughnut'>['data'];
  statusChartType: 'doughnut' = 'doughnut';

  // Graphique Répartition par type d'annonce
  typeChartData: ChartConfiguration<'pie'>['data'] = {
    labels: ['Appartement', 'Maison', 'Villa', 'Studio'],
    datasets: [
      { data: [40, 30, 20, 10], backgroundColor: ['#0d6efd','#198754','#ffc107','#dc3545'] }
    ]
  };
  typeChartOptions: ChartOptions<'pie'> = { responsive: true };
  typeChartType: 'pie' = 'pie';

  // Graphique Répartition par ville
  cityChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Tunis', 'Sfax', 'Sousse', 'Gabès'],
    datasets: [
      { data: [50, 40, 30, 20], label: 'Annonces', backgroundColor: '#17a2b8' }
    ]
  };
  cityChartOptions: ChartOptions<'bar'> = { responsive: true, plugins: { legend: { display: false } } };
  cityChartType: 'bar' = 'bar';

  // Graphique annonces validées / refusées / en attente
  statusAdsChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: ['Validées', 'Refusées', 'En attente'],
    datasets: [
      { data: [70, 20, 10], backgroundColor: ['#28a745','#dc3545','#ffc107'] }
    ]
  };
  statusAdsChartOptions: ChartOptions<'doughnut'> = { responsive: true };
  statusAdsChartType: 'doughnut' = 'doughnut';

  // Graphique prix moyens par ville
  priceChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Tunis', 'Sfax', 'Sousse', 'Gabès'],
    datasets: [
      { data: [150000, 120000, 100000, 80000], label: 'Prix moyen (€)', backgroundColor: '#6c757d' }
    ]
  };
  priceChartOptions: ChartOptions<'bar'> = { responsive: true, plugins: { legend: { display: false } } };
  priceChartType: 'bar' = 'bar';

  // Alertes annonces inactives
  inactiveAds: Ad[] = [
    { title: 'Appartement centre ville', daysInactive: 45 },
    { title: 'Villa avec piscine', daysInactive: 30 },
    { title: 'Maison de campagne', daysInactive: 60 }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialisation graphique comptes actifs/inactifs
    this.statusChartData = {
      labels: ['Actifs', 'Inactifs'],
      datasets: [
        { data: [this.activeUsersCount, this.inactiveUsersCount], backgroundColor: ['#28a745', '#6c757d'] }
      ]
    };
  }
}
