import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Message {
  id: number;
  sender: string;       // Nom de l'expéditeur
  subject: string;      // Sujet du message
  content: string;      // Contenu du message
  date: string;         // Date du message
  read?: boolean;       // Pour marquer comme lu/non lu
}

@Component({
  selector: 'app-messagesuser',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messagesuser.component.html',
  styleUrls: ['./messagesuser.component.css']
})
export class MessagesuserComponent {

  messages: Message[] = [
    { id: 1, sender: 'Propriétaire A', subject: 'Disponibilité de l’appartement', content: 'Bonjour, l’appartement est disponible à partir de la semaine prochaine.', date: '2025-10-15', read: false },
    { id: 2, sender: 'Plateforme ImmoSmart', subject: 'Nouvelle recommandation', content: 'Nous avons ajouté de nouvelles annonces correspondant à vos critères.', date: '2025-10-14', read: true }
  ];

  // Supprimer un message
  deleteMessage(id: number) {
    this.messages = this.messages.filter(msg => msg.id !== id);
  }

  // Marquer comme lu/non lu
  toggleRead(message: Message) {
    message.read = !message.read;
  }
}
