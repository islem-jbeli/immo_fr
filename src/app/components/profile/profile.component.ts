import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface UserProfile {
  nom: string;
  prenom: string;
  email: string;
  sexe: string;
  cin: string;
  nationalite: string;
  ville: string;
  adresse: string;
  codePostal: string;
  telephone: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: UserProfile = {
    nom: 'Ali',
    prenom: 'Ben Salah',
    email: 'ali@example.com',
    sexe: 'Masculin',
    cin: '12345678',
    nationalite: 'Tunisienne',
    ville: 'Tunis',
    adresse: 'Cité El Manar 1',
    codePostal: '2092',
    telephone: '22123456'
  };

  editing: boolean = false;

  toggleEdit() {
    this.editing = !this.editing;
  }

  saveProfile() {
    // Ici tu peux appeler un service pour sauvegarder sur le backend
    alert('Profil sauvegardé avec succès !');
    this.editing = false;
  }
}
