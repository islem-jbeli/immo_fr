import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../views/messag/messag.component';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  private apiUrl = 'http://localhost:8081/api/messages';

  constructor(private http: HttpClient) { }

  getReceivedMessages(userId: number): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiUrl}/received/${userId}`);
  }

  sendMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(this.apiUrl, message);
  }
}
