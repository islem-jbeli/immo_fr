import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



interface Message {
  id: number;
  expediteur: string;
  contenu: string;
  date: Date;
  lu: boolean;
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
    event.stopPropagation(); // empêche l'ouverture multiple
    msg.lu = true;
  }

  supprimerMessage(id: number, event: Event) {
    event.stopPropagation();
    this.messages = this.messages.filter(m => m.id !== id);
  }
}