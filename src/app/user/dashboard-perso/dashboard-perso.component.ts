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
export class DashboardPersoComponent {}
