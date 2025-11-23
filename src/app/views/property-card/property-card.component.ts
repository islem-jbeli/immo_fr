import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'property-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  @Input() property: any;

  isFavorite: boolean = false;
  isConnected: boolean = false;
  isHomePage: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isConnected = this.authService.isLoggedIn();
    const currentUrl = this.router.url;
    this.isHomePage = currentUrl === '/' || currentUrl === '/home';
  }

  toggleFavorite(): void {
    if (!this.isConnected) {
      alert('Vous devez être connecté pour ajouter aux favoris.');
      return;
    }
    this.isFavorite = !this.isFavorite;
    // Ici tu peux appeler le backend pour ajouter/supprimer le favoris
  }
  
}
