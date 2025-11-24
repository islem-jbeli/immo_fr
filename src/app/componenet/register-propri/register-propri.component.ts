import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-propri',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterModule],
  templateUrl: './register-propri.component.html',
  styleUrls: ['./register-propri.component.css']
})
export class RegisterPropriComponent {

  nom = '';
  prenom = '';
  email = '';
  password = '';
  errorMessage = '';
  successMessage = '';

  private apiUrl = 'http://localhost:8081/api/auth/register';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    const user = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      motDePasse: this.password
    };

    this.http.post(this.apiUrl, user, { responseType: 'text' }).subscribe({
      next: () => {
        this.successMessage = "Compte créé avec succès !";
        this.errorMessage = "";

        setTimeout(() => {
          this.router.navigate(['/lashboard-client']);
        }, 1500);
      },
      error: () => {
        this.errorMessage = "Erreur lors de la création du compte.";
        this.successMessage = "";
      }
    });
  }
}
