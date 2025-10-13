import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-annonce',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './ajouter-annonce.component.html',
  styleUrls: ['./ajouter-annonce.component.css']
})
export class AjouterAnnonceComponent {
  
  annonce = {
    title: '',
    type: '',
    city: '',
    price: 0,
    description: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Annonce publiée :', this.annonce);
    alert('Votre annonce a été publiée avec succès !');
    this.router.navigate(['/dashboard-client/annonceuser']); // Retour vers la liste des annonces
  }
}
