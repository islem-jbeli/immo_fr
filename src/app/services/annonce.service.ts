import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  private apiUrl = 'http://localhost:8081/api/annonces';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.apiUrl);
  }

  getById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addAnnonce(annonce: any) {
    return this.http.post(this.apiUrl, annonce);
  }

  updateAnnonce(id: number, annonce: any) {
    return this.http.put(`${this.apiUrl}/${id}`, annonce);
  }

  deleteAnnonce(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
