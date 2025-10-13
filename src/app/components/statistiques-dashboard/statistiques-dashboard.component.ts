import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-statistiques-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistiques-dashboard.component.html',
  styleUrls: ['./statistiques-dashboard.component.css']
})
export class StatistiquesDashboardComponent implements OnInit, AfterViewInit {
  activeChart: string = 'inscriptions';

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.renderCharts();
  }

  showChart(chartName: string) {
    this.activeChart = chartName;
    setTimeout(() => this.renderCharts(), 100); // Re-render after DOM update
  }

  renderCharts() {
    if (this.activeChart === 'inscriptions') this.createInscriptionsChart();
    if (this.activeChart === 'connexions') this.createConnexionsChart();
    if (this.activeChart === 'villes') this.createVillesChart();
    if (this.activeChart === 'biens') this.createBiensChart();
    if (this.activeChart === 'conversion') this.createConversionChart();
  }

  private createInscriptionsChart() {
    const ctx = document.getElementById('inscriptionsChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [{
          label: 'Inscriptions',
          data: [12, 19, 8, 15, 22, 10],
          backgroundColor: 'rgba(54, 162, 235, 0.7)',
          borderRadius: 6
        }]
      },
      options: { responsive: true }
    });
  }

  private createConnexionsChart() {
    const ctx = document.getElementById('connexionsChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
        datasets: [{
          label: 'Connexions',
          data: [50, 75, 60, 90, 80, 55, 70],
          borderColor: '#198754',
          backgroundColor: 'rgba(25, 135, 84, 0.3)',
          tension: 0.4
        }]
      },
      options: { responsive: true }
    });
  }

  private createVillesChart() {
    const ctx = document.getElementById('villesChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Tunis', 'Sfax', 'Sousse', 'Autres'],
        datasets: [{ data: [35, 20, 25, 10], backgroundColor: ['#ffc107','#0d6efd','#198754','#dc3545'], hoverOffset: 8 }]
      },
      options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
    });
  }

  private createBiensChart() {
    const ctx = document.getElementById('biensChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Appartement', 'Villa', 'Studio', 'Duplex'],
        datasets: [{ data: [25, 10, 15, 8], backgroundColor: ['#0d6efd','#198754','#ffc107','#dc3545'], borderRadius: 6 }]
      },
      options: { responsive: true }
    });
  }

  private createConversionChart() {
    const ctx = document.getElementById('conversionChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Visiteurs -> Inscription', 'Inscription -> Achat'],
        datasets: [{ data: [60, 40], backgroundColor: ['#0d6efd','#198754'], hoverOffset: 8 }]
      },
      options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
    });
  }

  stats = [
    { titre: 'Inscriptions', valeur: 120 },
    { titre: 'Connexions quotidiennes', valeur: 75 },
    { titre: 'Villes les plus recherchées', valeur: 'Tunis, Sfax, Sousse' },
    { titre: 'Biens les plus populaires', valeur: 'Appartement, Villa' },
    { titre: 'Taux de conversion', valeur: '12%' }
  ];

  exportData() {
     alert('Fonction d’export CSV/PDF à implémenter ici !');
  // Construire le CSV
    const headers = Object.keys(this.stats[0]).join(',');
    const rows = this.stats.map(item => Object.values(item).join(','));
    const csvContent = [headers, ...rows].join('\n');

    // Créer un blob et déclencher le téléchargement
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'statistiques.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

   
  }
}
