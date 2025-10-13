import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Annonce {
  id: number;
  title: string;
  owner: string;
  date: Date;
  status: string;
}

@Component({
  selector: 'app-valider-annonces',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './valider-annonces.component.html',
  styleUrls: ['./valider-annonces.component.css']
})
export class ValiderAnnoncesComponent implements OnInit {
  annonces: Annonce[] = [];
  filteredAds: Annonce[] = [];

  // Recherche et filtrage par date
  searchTerm: string = '';
  startDate: string = '';
  endDate: string = '';

  // Pagination
  currentPage: number = 1;
  pageSize: number = 5;
  totalPages: number = 1;
  pagesArray: number[] = [];

  ngOnInit(): void {
    // Simuler quelques annonces
    this.annonces = [
      { id: 1, title: 'Appartement S+2', owner: 'Ali Ben Salah', date: new Date(2025, 9, 1), status: 'En attente' },
      { id: 2, title: 'Villa avec piscine', owner: 'Sara Trabelsi', date: new Date(2025, 8, 25), status: 'Validée' },
      { id: 3, title: 'Maison S+3', owner: 'Karim Mhiri', date: new Date(2025, 8, 20), status: 'Refusée' },
      { id: 4, title: 'Studio centre ville', owner: 'Lina Fekih', date: new Date(2025, 8, 18), status: 'En attente' },
      { id: 5, title: 'Duplex moderne', owner: 'Ahmed Jaziri', date: new Date(2025, 7, 15), status: 'En attente' },
      { id: 6, title: 'Appartement vue mer', owner: 'Mohamed Ali', date: new Date(2025, 7, 10), status: 'En attente' }
    ];

    this.applyFilters();
  }

  // Appliquer tous les filtres (recherche + dates)
  applyFilters() {
    this.filteredAds = this.annonces.filter(ad => {
      const matchSearch = ad.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          ad.owner.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchStart = this.startDate ? new Date(ad.date) >= new Date(this.startDate) : true;
      const matchEnd = this.endDate ? new Date(ad.date) <= new Date(this.endDate) : true;

      return matchSearch && matchStart && matchEnd;
    });

    this.updatePagination();
  }

  // Réinitialiser les filtres
  resetFilters() {
    this.searchTerm = '';
    this.startDate = '';
    this.endDate = '';
    this.applyFilters();
  }

  // Valider une annonce
  validateAd(ad: Annonce) {
    ad.status = 'Validée';
  }

  // Refuser une annonce
  rejectAd(ad: Annonce) {
    ad.status = 'Refusée';
  }

  // Pagination
  private updatePagination() {
    this.totalPages = Math.ceil(this.filteredAds.length / this.pageSize);
    this.pagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);

    if (this.currentPage > this.totalPages) this.currentPage = this.totalPages;
    if (this.currentPage < 1) this.currentPage = 1;
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
  }
}
