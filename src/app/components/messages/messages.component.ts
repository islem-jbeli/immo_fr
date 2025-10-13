import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  sender: string;
  subject: string;
  date: Date;
  content: string;
  read: boolean;
}

interface Notification {
  title: string;
  description: string;
  date: Date;
}

interface Announcement {
  title: string;
  content: string;
  date: Date;
}

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  activeTab: string = 'messages';

  messages: Message[] = [];
  notifications: Notification[] = [];
  annonces: Announcement[] = [];

  selectedMessage: Message | null = null;
  replyContent: string = '';
  showReplyModal: boolean = false; // On gère le modal avec Angular

  ngOnInit(): void {
    // Simulation des messages
    this.messages = [
      { sender: 'Admin', subject: 'Bienvenue', content: 'Bienvenue sur la plateforme !', date: new Date(), read: false },
      { sender: 'Sara', subject: 'Question sur une annonce', content: 'Bonjour, est-ce que cette annonce est toujours dispo ?', date: new Date(), read: true }
    ];

    // Simulation des notifications
    this.notifications = [
      { title: 'Maintenance', description: 'Le site sera indisponible demain de 2h à 3h.', date: new Date() },
      { title: 'Nouvelle fonctionnalité', description: 'Découvrez notre nouveau système de recommandation !', date: new Date() }
    ];

    // Simulation des annonces officielles
    this.annonces = [
      { title: 'Mise à jour importante', content: 'Version 2.0 du site disponible dès aujourd’hui.', date: new Date() },
      { title: 'Nouveau partenariat', content: 'Nous avons conclu un partenariat avec ImmoTunisie.', date: new Date() }
    ];
  }

  readMessage(msg: Message) {
    msg.read = true;
    this.selectedMessage = msg;
  }

  closeMessage() {
    this.selectedMessage = null;
  }

  deleteMessage(msg: Message) {
    this.messages = this.messages.filter(m => m !== msg);
  }

  openReply(msg: Message) {
    this.selectedMessage = msg;
    this.replyContent = '';
    this.showReplyModal = true;
  }

  sendReply() {
    if (this.selectedMessage) {
      console.log('Réponse envoyée à', this.selectedMessage.sender, ':', this.replyContent);
      alert(`Réponse envoyée à ${this.selectedMessage.sender} : ${this.replyContent}`);
    }
    this.replyContent = '';
    this.selectedMessage = null;
    this.showReplyModal = false;
  }

  closeReply() {
    this.showReplyModal = false;
  }
}
