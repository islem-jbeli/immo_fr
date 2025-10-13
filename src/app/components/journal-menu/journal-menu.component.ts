import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface ActionLog {
  user: string;
  action: string;
  status: string;
  date: Date;
}

interface LoginLog {
  user: string;
  type: string;
  ip: string;
  device: string;
  date: Date;
}

@Component({
  selector: 'app-journal-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './journal-menu.component.html',
  styleUrls: ['./journal-menu.component.css']
})
export class JournalMenuComponent implements OnInit {

  // Contrôle des sous-pages
  showActionLogs: boolean = true;

  actionLogs: ActionLog[] = [];
  loginLogs: LoginLog[] = [];

  ngOnInit(): void {
    // Simuler données historiques d'actions
    this.actionLogs = [
      { user: 'Ali Ben Salah', action: 'Création annonce', status: 'Succès', date: new Date(2025, 9, 1, 10, 30) },
      { user: 'Sara Trabelsi', action: 'Modification profil', status: 'Échec', date: new Date(2025, 9, 2, 14, 15) },
    ];

    // Simuler données logs de connexion
    this.loginLogs = [
      { user: 'Ali Ben Salah', type: 'login', ip: '192.168.1.10', device: 'Chrome', date: new Date(2025, 9, 1, 9, 0) },
      { user: 'Sara Trabelsi', type: 'logout', ip: '192.168.1.11', device: 'Firefox', date: new Date(2025, 9, 2, 15, 20) },
    ];
  }

  toggleView(view: string) {
    this.showActionLogs = (view === 'actions');
  }

 
  
exportData(type: 'actions' | 'logins') {
      alert(`Fonction d'export ${type} à implémenter ici !`);

  let data: any[] = [];
  let filename = '';

  if (type === 'actions') {
    data = this.actionLogs.map(log => ({
      Utilisateur: log.user,
      Action: log.action,
      Statut: log.status,
      Date: log.date.toLocaleString()
    }));
    filename = 'historique_actions.csv';
  } else {
    data = this.loginLogs.map(log => ({
      Utilisateur: log.user,
      Type: log.type,
      IP: log.ip,
      Appareil: log.device,
      Date: log.date.toLocaleString()
    }));
    filename = 'logs_connexion.csv';
  }

  // Convertir en CSV
  const csvRows: string[] = [];
  const headers = Object.keys(data[0]);
  csvRows.push(headers.join(','));

  data.forEach(row => {
    const values = headers.map(h => `"${(row as any)[h]}"`);
    csvRows.push(values.join(','));
  });

  const csvContent = csvRows.join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

  // Télécharger le fichier
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

}
