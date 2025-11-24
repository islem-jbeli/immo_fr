import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../../services/message-service.service';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


export interface Message {
  id?: number;
  sender: string;
  receiver?: string;
  content: string;
  sentDate?: string;
}

@Component({
  selector: 'app-messag',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [MessageServiceService], // facultatif si @Injectable({providedIn: 'root'})
  templateUrl: './messag.component.html',
  styleUrls: ['./messag.component.css']
})
export class MessagComponent implements OnInit {
  messages: Message[] = [];
  newMessageContent: string = '';
  receiver: string = 'Propriétaire'; // nom ou identifiant du destinataire

  constructor(
    private messageService: MessageServiceService,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    const userId = this.auth.getUserId();
    if (userId) {
      this.loadMessages(userId);
    }
  }

  loadMessages(userId: number): void {
    this.messageService.getReceivedMessages(userId).subscribe(
      (msgs: Message[]) => {
        this.messages = msgs;
      },
      (err: any) => console.error(err)
    );
  }

  sendMessage(): void {
    const sender = this.auth.getUserId();
    if (!sender) {
      alert('Vous devez être connecté pour envoyer un message.');
      return;
    }

    if (!this.newMessageContent.trim()) {
      alert('Le message ne peut pas être vide.');
      return;
    }

    const message: Message = {
      sender: sender.toString(),
      receiver: this.receiver,
      content: this.newMessageContent,
      sentDate: new Date().toISOString()
    };

    this.messageService.sendMessage(message).subscribe(
      (msg: Message) => {
        this.messages.push(msg);
        this.newMessageContent = '';
      },
      (err: any) => console.error(err)
    );
  }
}