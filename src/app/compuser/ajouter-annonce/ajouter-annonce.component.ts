import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-annonce',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './ajouter-annonce.component.html',
  styleUrls: ['./ajouter-annonce.component.css']
})
export class AjouterAnnonceComponent {
  
  annonce = {
    title: '',
    type: '',
    city: '',
    price: 0,
    description: ''
  };

  selectedFiles: any[] = []; // pour stocker les fichiers et aperçus

  constructor(private router: Router) {}

  // Méthode pour sélectionner les fichiers
  onFilesSelected(event: any) {
    const files = event.target.files;
    this.selectedFiles = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.selectedFiles.push({ file: file, preview: e.target.result });
      }

      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    // Préparer FormData pour envoyer au backend
    const formData = new FormData();
    formData.append('title', this.annonce.title);
    formData.append('type', this.annonce.type);
    formData.append('city', this.annonce.city);
    formData.append('price', this.annonce.price.toString());
    formData.append('description', this.annonce.description);

    // Ajouter les fichiers photos
    this.selectedFiles.forEach(f => {
      formData.append('photos', f.file);
    });

    // Ici tu peux envoyer formData via ton service Angular
    console.log('Annonce prête à être envoyée', formData);

    alert('Votre annonce a été publiée avec succès !');
    this.router.navigate(['/dashboard-client/annonceuser']); // Retour vers la liste des annonces
  }
}
