import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  changePassword() {
    if (!this.oldPassword || !this.newPassword || !this.confirmPassword) {
      alert('Veuillez remplir tous les champs !');
      return;
    }
    if (this.newPassword !== this.confirmPassword) {
      alert('Les nouveaux mots de passe ne correspondent pas !');
      return;
    }
    // Ici, tu peux appeler ton API pour changer le mot de passe
    alert('Mot de passe changé avec succès !');
    // Réinitialiser les champs
    this.oldPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
  }
}
