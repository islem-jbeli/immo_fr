import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  email = '';
  password = '';
  errorMessage = '';

  private apiUrl = 'http://localhost:8081/api/admin/login';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const request = {
      email: this.email,
      motDePasse: this.password
    };

    this.http.post(this.apiUrl, request).subscribe({
      next: (res: any) => {
        console.log('Admin connecté :', res);

        this.errorMessage = '';

        // 🔵 Sauvegarder l'admin connecté
        localStorage.setItem('admin', JSON.stringify(res));

        // 🔵 Rediriger vers le dashboard
        this.router.navigate(['/dashboard/home']);
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Email ou mot de passe incorrect';
      }
    });
  }
}
