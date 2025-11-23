import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  errorMessage: string = '';
  loading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (!form.valid) return;

    this.loading = true;
    this.errorMessage = '';

    const { email, password } = form.value;

    // ⚠️ ici on renomme password → motDePasse pour correspondre au backend
    this.authService.login({ email, motDePasse: password }).subscribe(
      success => {
        this.loading = false;
        if (success) {
          this.router.navigate(['']); // redirection dynamique
        } else {
          this.errorMessage = "❌ Email ou mot de passe incorrect";
        }
      },
      error => {
        this.loading = false;
        if (error.status === 0) {
          this.errorMessage = "❌ Impossible de contacter le serveur";
        } else if (error.status === 401) {
          this.errorMessage = "❌ Email ou mot de passe incorrect";
        } else {
          this.errorMessage = `❌ Erreur serveur : ${error.message}`;
        }
      }
    );
  }
}
