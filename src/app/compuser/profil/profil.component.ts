import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- Ajouter ceci


@Component({
  selector: 'app-profil',
  standalone: true,
    imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  user = {
    nom: 'Jbeli',
    prenom: 'Islem',
    email: 'islem@example.com',
  };

  userPhoto: string | null = 'assets/user-photo.jpg';

  // Pour afficher/cacher les sections
  showEditForm = false;
  showPhotoForm = false;

  // Méthodes pour toggler les sections
  toggleEditForm() {
    this.showEditForm = !this.showEditForm;
    this.showPhotoForm = false; // fermer photo si ouvert
  }

  togglePhotoForm() {
    this.showPhotoForm = !this.showPhotoForm;
    this.showEditForm = false; // fermer edit si ouvert
  }

  // Sauvegarder les changements
  saveProfile() {
    // ici tu peux appeler ton service pour mettre à jour
    alert('Profil mis à jour !');
    this.showEditForm = false;
  }

  // Téléverser nouvelle photo
  selectedFile: File | null = null;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = e => this.userPhoto = reader.result as string;
      reader.readAsDataURL(this.selectedFile);
    }
  }

  uploadPhoto() {
    if (this.selectedFile) {
      alert('Photo mise à jour !');
      this.showPhotoForm = false;
      this.selectedFile = null;
    }
  }
}
