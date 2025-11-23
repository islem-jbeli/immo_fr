import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private apiUrl = 'http://localhost:8081/api/favorites';

  constructor(private http: HttpClient) {}

  // Liste des favoris d'un utilisateur
  getFavorites(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/${userId}`);
  }



  addFavorite(propertyId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add/${propertyId}`, {});
  }

  removeFavorite(propertyId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/remove/${propertyId}`);
  }

  // Toggle favorite
  toggleFavorite(userId: number, propertyId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/toggle?userId=${userId}&propertyId=${propertyId}`, {});
  }
}
