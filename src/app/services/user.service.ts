import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8081/api/users';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.apiUrl);
  }

  getById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  register(user: any) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  updateUser(id: number, user: any) {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
