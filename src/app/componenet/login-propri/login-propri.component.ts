import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-propri',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login-propri.component.html',
  styleUrls: ['./login-propri.component.css']
})
export class LoginPropriComponent {

  email = '';
  password = '';
  errorMessage = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
  const credentials = {
    email: this.email,
    motDePasse: this.password
  };

  this.auth.login(credentials).subscribe({
    next: (res: any) => {
      console.log("Réponse backend :", res);

      // 🔵 Stocke l'utilisateur complet
      localStorage.setItem("proprietaire", JSON.stringify(res.user));

      // 🔵 Stocke le token
      localStorage.setItem("token", res.token);

        // 🔵 Redirection
        this.router.navigate(['/dashboard-client']);
      },
      error: () => {
        this.errorMessage = "Email ou mot de passe incorrect";
      }
    });
  }
}
