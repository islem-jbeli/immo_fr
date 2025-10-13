import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-statistiqueuser',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './statistiqueuser.component.html',
  styleUrls: ['./statistiqueuser.component.css']
})
export class StatistiqueuserComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Graphique Vues
    new Chart("vuesChart", {
      type: 'line',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [{
          label: 'Vues',
          data: [50, 70, 60, 90, 80, 100],
          borderColor: '#198754',
          backgroundColor: 'rgba(25,135,84,0.2)',
          fill: true,
          tension: 0.4
        }]
      }
    });

    // Graphique Clics
    new Chart("clicsChart", {
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

    // Graphique Favoris
    new Chart("favorisChart", {
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
}
