import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-statistiques-annonces',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistiques-annonces.component.html',
  styleUrls: ['./statistiques-annonces.component.css']
})
export class StatistiquesAnnoncesComponent implements OnInit, AfterViewInit {
  barChart!: Chart;
  donutChart!: Chart;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createCharts();
  }

  private createCharts() {
    // Bar chart: annonces par mois
    const barCtx = document.getElementById('barChart') as HTMLCanvasElement;
    this.barChart = new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
        datasets: [{
          label: 'Annonces par mois',
          data: [5, 8, 4, 6, 7, 9, 3, 2, 6, 4, 5, 7],
          backgroundColor: 'rgba(54, 162, 235, 0.7)',
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, ticks: { stepSize: 1 } }
        }
      }
    });

    // Donut chart: statut des annonces
    const donutCtx = document.getElementById('donutChart') as HTMLCanvasElement;
    this.donutChart = new Chart(donutCtx, {
      type: 'doughnut',
      data: {
        labels: ['Validée', 'En attente', 'Refusée'],
        datasets: [{
          data: [12, 5, 3],
          backgroundColor: ['#198754', '#ffc107', '#dc3545'],
          hoverOffset: 8
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });
  }
}
