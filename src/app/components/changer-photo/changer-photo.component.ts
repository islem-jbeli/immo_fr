import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-changer-photo',
    standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './changer-photo.component.html',
    styleUrls: ['./changer-photo.component.css']

})
export class ChangerPhotoComponent {

  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;

  // Gestion de la sélection de fichier
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      // Création de l'aperçu
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  // Téléversement (simulation)
  uploadPhoto(): void {
    if (this.selectedFile) {
      console.log('Fichier à téléverser :', this.selectedFile);
      alert('Photo téléversée avec succès !');

      // Réinitialiser après téléversement
      this.selectedFile = null;
      this.previewUrl = null;
    }
  }
}