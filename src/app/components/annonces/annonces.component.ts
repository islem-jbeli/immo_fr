import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Annonce {
  id: number;
  title: string;
  description: string;
  owner: string;
  city: string;
  type: string;
  price: number;
  status: string;
  date: Date;
  photos?: string[];
  comment?: string; 
}

@Component({
  selector: 'app-annonces',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {

  annonces: Annonce[] = [];

  cities: string[] = [
    'Tunis', 'Sfax', 'Sousse', 'Nabeul', 
    'Bizerte', 'Gabès', 'Kairouan', 'Mahdia', 'Monastir'
  ];

  types: string[] = [
    'Appartement', 'Maison', 'Villa', 
    'Studio', 'Duplex', 'Terrain', 'Bureau'
  ];

  statuses: string[] = ['Active', 'En attente', 'Refusée'];

  titles: string[] = [ 
    'Appartement vue mer', 
    'Maison avec jardin', 
    'Studio centre ville', 
    'Villa de luxe avec piscine', 
    'Duplex moderne' 
  ];

  descriptions: string[] = [
    'Bel appartement avec vue mer',
    'Maison avec jardin et garage',
    'Studio moderne proche du centre',
    'Villa luxueuse avec piscine',
    'Duplex design avec terrasse'
  ];

  owners: string[] = [ 'Mohamed Ben Ali', 'Sara Trabelsi', 'Karim Mhiri', 'Lina Fekih', 'Ahmed Jaziri' ];

  // Filtres
  searchTitle: string = '';
  filterCity: string = '';
  filterType: string = '';
  filterStatus: string = '';

  // Pagination
  currentPage: number = 1;
  pageSize: number = 5;
  totalPages: number = 1;
  pagesArray: number[] = [];

  // Pour édition sans modal
  selectedAd: Annonce | null = null;
  selectedAdDateString: string = '';
  photosString: string = '';
  editMode: boolean = false; // ✅ ajouté pour corriger l’erreur

  // Notifications
  notification: { type: string, message: string } | null = null;

  ngOnInit(): void {
    for (let i = 0; i < 25; i++) {
      const type = this.types[i % this.types.length];
      let photos: string[] = [];

      // Choisir un nombre aléatoire de photos (2 à 5)
      const photoCount = Math.floor(Math.random() * 4) + 2;

      if (type === 'Maison') {
        const baseUrls = [
          'https://images.unsplash.com/photo-1572120360610-d971b9b6cdb2',
          'https://images.unsplash.com/photo-1560185127-6b50b67a5e7b',
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
          'https://images.unsplash.com/photo-1507089947368-19c1da9775ae'
        ];
        photos = baseUrls.slice(0, photoCount).map((url, idx) => `${url}?auto=format&fit=crop&w=200&h=150&sig=${i*5+idx}`);
      } 
      else if (type === 'Appartement') {
        const baseUrls = [
          'https://images.unsplash.com/photo-1598928506311-f7e2d5b78660',
          'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
          'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
          'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688'
        ];
        photos = baseUrls.slice(0, photoCount).map((url, idx) => `${url}?auto=format&fit=crop&w=200&h=150&sig=${i*5+idx}`);
      }
      else if (type === 'Studio') {
        photos = [
          `https://images.unsplash.com/photo-1600585154341-5d98c68f8c70?auto=format&fit=crop&w=200&h=150&sig=${i*5+1}`,
          `https://images.unsplash.com/photo-1580587771526-48d2b9b8f0ee?auto=format&fit=crop&w=200&h=150&sig=${i*5+2}`,
          `https://images.unsplash.com/photo-1570129477493-64c003edd2be?auto=format&fit=crop&w=200&h=150&sig=${i*5+3}`
        ];
      }
      else if (type === 'Villa') {
        photos = [
          `https://images.unsplash.com/photo-1572120360611-d971b9b6cdb3?auto=format&fit=crop&w=200&h=150&sig=${i*5+1}`,
          `https://images.unsplash.com/photo-1560185127-6b50b67a5e7c?auto=format&fit=crop&w=200&h=150&sig=${i*5+2}`,
          `https://images.unsplash.com/photo-1600585154342-be6161a56a0d?auto=format&fit=crop&w=200&h=150&sig=${i*5+3}`
        ];
      }
      else {
        photos = Array.from({ length: photoCount }, (_, idx) => 
          `https://picsum.photos/200/150?random=${i*5+idx}`
        );
      }

      this.annonces.push({
        id: i + 1,
        title: this.titles[i % this.titles.length],
        description: this.descriptions[i % this.descriptions.length],
        owner: this.owners[i % this.owners.length],
        city: this.cities[i % this.cities.length],
        type: type,
        price: Math.floor(Math.random() * 100000) + 50000,
        status: this.statuses[i % this.statuses.length],
        date: new Date(2025, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1),
        photos: photos
      });
    }

    this.totalPages = Math.ceil(this.annonces.length / this.pageSize);
    this.pagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  // Ajouter un commentaire
  sendComment(ad: Annonce) {
    if (!ad.comment || !ad.comment.trim()) {
      this.notification = { type: 'danger', message: '⚠️ Veuillez écrire un commentaire avant d\'envoyer.' };
      return;
    }

    this.notification = { type: 'success', message: `✅ Commentaire envoyé à ${ad.owner}` };
    ad.comment = ''; // reset le champ commentaire

    setTimeout(() => this.notification = null, 3000);
  }

  // Actions
  viewAd(ad: Annonce) {
    this.selectedAd = { ...ad };
    this.photosString = ad.photos ? ad.photos.join(',') : '';
    this.selectedAdDateString = ad.date.toISOString().substring(0,10);
    this.editMode = false; // en mode visualisation
  }

  editAd(ad: Annonce) {
    this.selectedAd = { ...ad };
    this.photosString = ad.photos ? ad.photos.join(',') : '';
    this.selectedAdDateString = ad.date.toISOString().substring(0,10);
    this.editMode = true; // en mode édition
  }

  saveEdit() {
    if (this.selectedAd) {
      const index = this.annonces.findIndex(a => a.id === this.selectedAd!.id);
      if(index !== -1){
        this.selectedAd.photos = this.photosString.split(',').map(p => p.trim());
        this.selectedAd.date = new Date(this.selectedAdDateString);
        this.annonces[index] = { ...this.selectedAd };
      }
      this.selectedAd = null;
      this.editMode = false;
    }
  }

  cancelEdit() {
    this.selectedAd = null;
    this.editMode = false;
  }

  deleteAd(ad: Annonce) {
    if(confirm(`Voulez-vous vraiment supprimer "${ad.title}" ?`)){
      this.annonces = this.annonces.filter(a => a.id !== ad.id);
      this.totalPages = Math.ceil(this.annonces.length / this.pageSize);
      this.pagesArray = Array.from({length: this.totalPages}, (_, i) => i + 1);
    }
  }

  goToPage(page: number) {
    if(page < 1 || page > this.totalPages) return;
    this.currentPage = page;
  }

  get filteredAds(): Annonce[] {
    return this.annonces
      .filter(ad => ad.title.toLowerCase().includes(this.searchTitle.toLowerCase()))
      .filter(ad => !this.filterCity || ad.city === this.filterCity)
      .filter(ad => !this.filterType || ad.type === this.filterType)
      .filter(ad => !this.filterStatus || ad.status === this.filterStatus)
      .slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
  }

}
