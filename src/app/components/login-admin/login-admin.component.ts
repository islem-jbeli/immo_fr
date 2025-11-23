import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ← nécessaire pour ngModel
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // ← FormsModule ajouté
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  loginAdmin() {
    // Vérifie que AuthService.login accepte un objet { email, motDePasse }
    this.authService.login({ email: this.email, motDePasse: this.password }).subscribe(
      (response: any) => {
        if (response && response.role === 'ADMIN') {
          // Si ton backend renvoie un token, stocke-le
          if (response.token) {
            localStorage.setItem('token', response.token);
          }
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.errorMessage = "Accès refusé : Vous n’êtes pas administrateur !";
        }
      },
      err => {
        this.errorMessage = "Email ou mot de passe incorrect !";
      }
    );
  }
}
