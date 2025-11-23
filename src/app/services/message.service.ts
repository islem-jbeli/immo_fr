import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private apiUrl = 'http://localhost:8081/api/messages';

  constructor(private http: HttpClient) {}

  // Envoyer un message
  sendMessage(message: any) {
    return this.http.post(this.apiUrl, message);
  }

  // Récupérer tous les messages liés à un utilisateur (client)
  getMessagesForUser(userId: number) {
    return this.http.get(`${this.apiUrl}/user/${userId}`);
  }

  // Récupérer les messages d’un propriétaire
  getMessagesForOwner(ownerId: number) {
    return this.http.get(`${this.apiUrl}/owner/${ownerId}`);
  }

  // Supprimer un message
  deleteMessage(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
