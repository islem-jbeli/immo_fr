import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- important pour [(ngModel)]

interface UserSettings {
  name: string;
  email: string;
  password: string;
  emailNotifications: boolean; // notifications par email
}

@Component({
  selector: 'app-account-settings',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- ajouter FormsModule ici
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent {

  // Données de l'utilisateur (exemple)
  userSettings: UserSettings = {
    name: 'Islem Jbeli',
    email: 'islem@example.com',
    password: '',
    emailNotifications: true
  };

  constructor() {}

  // Sauvegarder les paramètres
  saveSettings() {
    console.log('Paramètres sauvegardés :', this.userSettings);
    alert('Vos paramètres ont été mis à jour avec succès !');
    this.userSettings.password = '';
  }
}
