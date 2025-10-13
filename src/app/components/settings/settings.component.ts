import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


interface UserProfile {
  cin: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  adresse: string;
  codePostal: string; 
  groupe: string;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  // ✅ Exemple de données par défaut
  user: UserProfile = {
    cin: '12345678',
    nom: 'Ali',
    prenom: 'Ben Salah',
    email: 'ali@example.com',
    telephone: '22222222',
    adresse: 'Tunis, Tunisie',
    codePostal: '1000',
    groupe: 'Acheteur'
  };

  editing: boolean = false;

  toggleEdit() {
    this.editing = !this.editing;
  }

  saveProfile() {
    alert('✅ Profil sauvegardé avec succès !');
    this.editing = false;
  }


 
}
