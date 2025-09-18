import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Important pour ngForm

import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
   constructor() {}

  // Méthode appelée lors du submit du formulaire
  onSubmit(registerForm: NgForm) {
    if (registerForm.valid) {
      console.log('Formulaire soumis : ', registerForm.value);

      // Ici tu pourras appeler ton backend pour enregistrer l'utilisateur
      // Exemple :
      // this.authService.register(registerForm.value).subscribe(...);
    } else {
      console.log('Formulaire invalide');
    }
  }
}

