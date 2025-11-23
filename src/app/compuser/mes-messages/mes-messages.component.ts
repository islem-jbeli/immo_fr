import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Message {
  id: number;
  expediteur: string;
  contenu: string;
  date: Date;
  lu: boolean;
  showReponse?: boolean; // pour afficher le champ réponse
  reponse?: string;      // pour stocker la réponse temporaire
}

@Component({
  selector: 'app-mes-messages',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './mes-messages.component.html',
  styleUrls: ['./mes-messages.component.css']
})
export class MesMessagesComponent implements OnInit {
  messages: Message[] = [];

  ngOnInit() {
    this.messages = [
      { id: 1, expediteur: 'Ahmed Ben Ali', contenu: 'Bonjour, votre annonce m’intéresse !', date: new Date(), lu: false },
      { id: 2, expediteur: 'Sonia Trabelsi', contenu: 'Est-ce que le bien est encore disponible ?', date: new Date(), lu: true },
      { id: 3, expediteur: 'Khaled Amor', contenu: 'Merci pour votre réponse !', date: new Date(), lu: true }
    ];
  }

  ouvrirMessage(msg: Message) {
    msg.lu = true;
  }

  marquerCommeLu(msg: Message, event: Event) {
    event.stopPropagation();
    msg.lu = true;
  }

  supprimerMessage(id: number, event: Event) {
    event.stopPropagation();
    this.messages = this.messages.filter(m => m.id !== id);
  }

  // -----------------------
  // Répondre aux messages
  // -----------------------
  toggleReponse(index: number, event: Event) {
    event.stopPropagation();
    this.messages[index].showReponse = !this.messages[index].showReponse;
  }

  envoyerReponse(msg: Message) {
    if (msg.reponse && msg.reponse.trim() !== '') {
      console.log(`Réponse envoyée à ${msg.expediteur} : ${msg.reponse}`);
      // Ici tu peux appeler ton service backend pour envoyer la réponse
      msg.reponse = '';       // vide le champ
      msg.showReponse = false; // ferme le champ
    }
  }
}
