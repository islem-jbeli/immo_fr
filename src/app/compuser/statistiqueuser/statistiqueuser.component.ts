import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-statistiqueuser',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './statistiqueuser.component.html',
  styleUrls: ['./statistiqueuser.component.css']
})
export class StatistiqueuserComponent implements AfterViewInit {

  selectedPeriod: string = '30';
  startDate!: string;
  endDate!: string;

  vuesChart: any;
  clicsChart: any;
  favorisChart: any;
  tendanceChart: any;

  ngAfterViewInit() {
    this.loadCharts();
  }

  loadCharts() {
    this.createVuesChart();
    this.createClicsChart();
    this.createFavorisChart();
    this.createTendanceChart();
  }

  // --- CHARTS -----------------------------------------------------

  createVuesChart() {
    this.vuesChart = new Chart("vuesChart", {
      type: 'line',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [{
          label: 'Vues',
          data: [50, 70, 60, 90, 80, 100],
          borderColor: '#198754',
          backgroundColor: 'rgba(25,135,84,0.2)',
          fill: true
        }]
      }
    });
  }

  createClicsChart() {
    this.clicsChart = new Chart("clicsChart", {
      type: 'bar',
      data: {
        labels: ['Annonce 1', 'Annonce 2', 'Annonce 3', 'Annonce 4'],
        datasets: [{
          label: 'Clics',
          data: [15, 20, 10, 25],
          backgroundColor: '#0d6efd'
        }]
      }
    });
  }

  createFavorisChart() {
    this.favorisChart = new Chart("favorisChart", {
      type: 'doughnut',
      data: {
        labels: ['Annonce 1', 'Annonce 2', 'Annonce 3', 'Annonce 4'],
        datasets: [{
          label: 'Favoris',
          data: [5, 3, 7, 2],
          backgroundColor: ['#dc3545', '#ffc107', '#0d6efd', '#198754']
        }]
      }
    });
  }

  createTendanceChart() {
    this.tendanceChart = new Chart("tendanceChart", {
      type: 'line',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5'],
        datasets: [{
          label: 'Popularité des annonces',
          data: [20, 40, 30, 50, 80],
          borderColor: '#ffc107',
          backgroundColor: 'rgba(255,193,7,0.2)',
          fill: true
        }]
      }
    });
  }

  // --- FILTRAGE -----------------------------------------------------

  applyCustomFilter() {
    if (!this.startDate || !this.endDate) {
      alert("Veuillez choisir une date de début et de fin !");
      return;
    }
    this.reloadCharts();
  }

  reloadCharts() {
    this.vuesChart.destroy();
    this.clicsChart.destroy();
    this.favorisChart.destroy();
    this.tendanceChart.destroy();

    this.loadCharts();
  }

  // --- EXPORT -----------------------------------------------------

  exportData() {
    const data = {
      vues: [50, 70, 60, 90],
      clics: [15, 20, 10, 25],
      favoris: [5, 3, 7, 2]
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json'
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = "statistiques.json";
    a.click();

    URL.revokeObjectURL(url);
  }
}
