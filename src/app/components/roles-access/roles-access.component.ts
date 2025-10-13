import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- Ajouter FormsModule ici


interface User {
  nom: string;
  prenom: string;
  email: string;
  role: string;
}

interface Role {
  name: string;
  permissions: { [key: string]: boolean };
}

@Component({
  selector: 'app-roles-access',
   standalone: true,
    imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './roles-access.component.html',
  styleUrls: ['./roles-access.component.css']
})
export class RolesAccessComponent implements OnInit {

  users: User[] = [];
  roles: Role[] = [];
  allPermissions: string[] = [
    'Accéder au dashboard',
    'Voir annonces',
    'Modifier annonces',
    'Supprimer annonces',
    'Gérer utilisateurs',
    'Accéder aux statistiques'
  ];

  ngOnInit(): void {
    // Simulation de données utilisateurs
    this.users = [
      { nom: 'Ali', prenom: 'Ben Salah', email: 'ali@example.com', role: 'Visiteur' },
      { nom: 'Sara', prenom: 'Trabelsi', email: 'sara@example.com', role: 'Inscrit' },
      { nom: 'Karim', prenom: 'Mhiri', email: 'karim@example.com', role: 'Administrateur' }
    ];

    // Simulation de rôles et permissions
    this.roles = [
      { name: 'Visiteur', permissions: {} },
      { name: 'Inscrit', permissions: {} },
      { name: 'Administrateur', permissions: {} }
    ];

    // Initialiser toutes les permissions à false
    for (let role of this.roles) {
      for (let perm of this.allPermissions) {
        if (!(perm in role.permissions)) role.permissions[perm] = false;
      }
    }
  }

  updateRole(user: User) {
    alert(`Le rôle de ${user.nom} ${user.prenom} a été mis à jour en "${user.role}"`);
    // Ici tu peux appeler ton service backend pour sauvegarder le changement
  }

  savePermissions() {
    alert('Permissions sauvegardées !');
    // Ici tu peux appeler ton service backend pour sauvegarder les permissions
    console.log(this.roles);
  }

}
