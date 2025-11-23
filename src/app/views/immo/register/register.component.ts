import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  errorMessage: string = '';
  loading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (!form.valid) return;

    const { nom, prenom, email, motDePasse, confirmMotDePasse } = form.value;

    if (!nom || !prenom || !email || !motDePasse || !confirmMotDePasse) {
      this.errorMessage = "❌ Tous les champs sont obligatoires";
      return;
    }

    if (motDePasse !== confirmMotDePasse) {
      this.errorMessage = "❌ Les mots de passe ne correspondent pas";
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    const user = { nom, prenom, email, motDePasse };

    this.authService.register(user).subscribe(
      success => {
        this.loading = false;
        if (success) {
          this.router.navigate(['/login']);
        } else {
          this.errorMessage = "❌ Impossible de créer le compte";
        }
      },
      error => {
        this.loading = false;
        if (error.status === 0) {
          this.errorMessage = "❌ Impossible de contacter le serveur";
        } else if (error.status === 409) {
          this.errorMessage = "❌ Cet email est déjà utilisé";
        } else {
          this.errorMessage = `❌ Erreur serveur : ${error.error || error.message}`;
        }
      }
    );
  }
}
