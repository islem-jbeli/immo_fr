import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "http://localhost:8081/api/auth";

  constructor(private http: HttpClient) {}

  // Vérifie si l'utilisateur est connecté
  isLogged(): boolean {
    return !!localStorage.getItem("token");
  }

  // Récupérer l'ID de l'utilisateur connecté
  getUserId(): number | null {
    const userId = localStorage.getItem("userId");
    return userId ? +userId : null;
  }

  // Inscription
  register(user: { nom: string; prenom: string; email: string; motDePasse: string }): Observable<boolean> {
    return this.http.post(`${this.apiUrl}/register`, user, { responseType: 'text' }).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }

  // Connexion
  login(credentials: { email: string; motDePasse: string }): Observable<boolean> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap(res => {
        localStorage.setItem("token", res.token);
        localStorage.setItem("email", res.email);
        localStorage.setItem("role", res.role);
        localStorage.setItem("userId", res.id); 
      }),
      map(() => true),
      catchError(() => of(false))
    );
  }

  // Déconnexion
  logout(): void {
    localStorage.clear();
  }
}
