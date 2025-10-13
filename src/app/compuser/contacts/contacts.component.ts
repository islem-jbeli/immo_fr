import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Contact {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  type: string; // Locataire ou Acheteur
  date: string;
}

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  contacts: Contact[] = [
    { nom: 'Jbeli', prenom: 'Islem', email: 'islem@example.com', telephone: '12345678', type: 'Acheteur', date: '12/10/2025' },
    { nom: 'Ben Ali', prenom: 'Sami', email: 'sami@example.com', telephone: '98765432', type: 'Locataire', date: '10/10/2025' },
    { nom: 'Haddad', prenom: 'Leila', email: 'leila@example.com', telephone: '55512345', type: 'Acheteur', date: '08/10/2025' }
  ];

}
