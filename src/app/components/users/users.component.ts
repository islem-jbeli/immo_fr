import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

// Définition User
interface User {
  id: number;
  name: string;
  firstName?: string;
  email: string;
  role: string;
  active: boolean;
  archived?: boolean;
  city?: string;
  registrationDate?: string;
  phone?: string;
  address?: string;
  deleted?: boolean;
}

// Définition Ads
interface Ad {
  id: number;
  userId: number;
  title: string;
  city: string;
  price: number;
}

// Déclare bootstrap pour TS
declare var bootstrap: any;

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  deletedUsers: User[] = [];
  filteredUsers: User[] = [];
  selectedUserAds: Ad[] | null = null;

  ads: Ad[] = [
    { id: 1, userId: 2, title: 'Appartement Tunis', city: 'Tunis', price: 120000 },
    { id: 2, userId: 2, title: 'Maison Sfax', city: 'Sfax', price: 95000 },
    { id: 3, userId: 4, title: 'Villa Ariana', city: 'Ariana', price: 220000 }
  ];

  searchTerm = '';
  filterRole = 'all';
  filterStatus = 'all';
  filterCity = 'all';
  filterDate = '';

  sortColumn = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  currentPage = 1;
  itemsPerPage = 10;

  showArchived = false;
  showDeleted = false;

  cities: string[] = ['Tunis', 'Sfax', 'Sousse', 'Ariana', 'Kairouan', 'Kef'];

  selectedUser: User | null = null;
  editingUser: User | null = null;
  selectedHistoryUser: User | null = null;
  userHistory: { [userId: number]: string[] } = {};

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.users = [
      { id: 1, name: 'Islem', firstName: 'Jbeli', email: 'admin@example.com', role: 'Admin', active: true, city: 'Tunis', registrationDate: '2025-01-01', phone: '12345678', address: 'Rue A' },
      { id: 2, name: 'Ahmed', firstName: 'Ben Salah', email: 'ahmed@example.com', role: 'Propriétaire', active: true, city: 'Sfax', registrationDate: '2025-02-15', phone: '98765432', address: 'Rue B' },
      { id: 3, name: 'Sana', firstName: 'Khaled', email: 'sana@example.com', role: 'utilisateur', active: false, city: 'Sousse', registrationDate: '2025-03-20', phone: '11223344', address: 'Rue C' },
      { id: 4, name: 'Mourad', firstName: 'Hafsi', email: 'mourad@example.com', role: 'Propriétaire', active: true, city: 'Ariana', registrationDate: '2025-04-05', phone: '55667788', address: 'Rue D' },
      { id: 5, name: 'Omar', firstName: 'Ben Salem', email: 'omar@test.com', role: 'utilisateur', active: false, city: 'Kef', registrationDate: '2025-11-26', phone: '55987788', address: 'Rue K' }
    ];
    this.applyFilters();
  }

  applyFilters() {
    let users: User[] = this.showDeleted ? [...this.deletedUsers] :
      this.showArchived ? this.users.filter(u => u.archived) :
      this.users.filter(u => !u.archived && !u.deleted);

    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      users = users.filter(u => u.name.toLowerCase().includes(term) || u.email.toLowerCase().includes(term));
    }
    if (this.filterRole !== 'all') users = users.filter(u => u.role === this.filterRole);
    if (this.filterStatus !== 'all') users = users.filter(u => this.filterStatus === 'active' ? u.active : !u.active);
    if (this.filterCity !== 'all') users = users.filter(u => u.city === this.filterCity);
    if (this.filterDate) users = users.filter(u => u.registrationDate === this.filterDate);
    if (this.sortColumn) users.sort((a, b) => this.compare(a, b, this.sortColumn));

    this.filteredUsers = users;
    this.currentPage = 1;
  }

  compare(a: User, b: User, column: string) {
    const valA = (a as any)[column];
    const valB = (b as any)[column];
    if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
    if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
    return 0;
  }

  sortBy(column: string) {
    if (this.sortColumn === column) this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    else { this.sortColumn = column; this.sortDirection = 'asc'; }
    this.applyFilters();
  }

  toggleArchivedView() { this.showArchived = !this.showArchived; this.showDeleted = false; this.applyFilters(); }
  toggleDeletedView() { this.showDeleted = !this.showDeleted; this.showArchived = false; this.applyFilters(); }
  toggleStatus(user: User) { user.active = !user.active; this.applyFilters(); }

  deleteUser(userId: number, archive: boolean = false, deleteAds: boolean = false, event?: Event) {
    if (event) { event.preventDefault(); event.stopPropagation(); }
    const index = this.users.findIndex(u => u.id === userId);
    if (index === -1) return;

    if (confirm('Êtes-vous sûr de vouloir effectuer cette action ?')) {
      const user = this.users[index];
      if (archive) user.archived = true;
      else {
        user.deleted = true;
        this.deletedUsers.push(user);
        this.users.splice(index, 1);
      }
      if (deleteAds) this.ads = this.ads.filter(ad => ad.userId !== userId);
      this.applyFilters();
    }
  }

  // Afficher modal annonces
  viewUserAds(user: User, event: Event) {
    event.preventDefault();
    this.selectedUserAds = this.ads.filter(ad => ad.userId === user.id);
    const modalEl = document.getElementById('adsModal');
    if (modalEl) new bootstrap.Modal(modalEl).show();
  }

  viewUser(user: User) {
    this.selectedUser = user;
    this.editingUser = null;
  }

  editUser(user: User) {
    this.editingUser = { ...user };
    this.selectedUser = null;
  }

  saveUser() {
    if (!this.editingUser) return;
    const index = this.users.findIndex(u => u.id === this.editingUser!.id);
    if (index !== -1) {
      this.users[index] = { ...this.editingUser };
      if (!this.userHistory[this.editingUser.id]) this.userHistory[this.editingUser.id] = [];
      this.userHistory[this.editingUser.id].push(`Modifications sauvegardées le ${new Date().toLocaleString()}`);
      this.editingUser = null;
      this.applyFilters();
    }
  }

  cancelEdit() { this.editingUser = null; }

  viewHistory(user: User) {
    this.selectedHistoryUser = user;
    if (!this.userHistory[user.id]) this.userHistory[user.id] = [`Création du compte le ${user.registrationDate}`];
  }

  get paginatedUsers(): User[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredUsers.slice(start, start + this.itemsPerPage);
  }

  totalPages(): number { return Math.ceil(this.filteredUsers.length / this.itemsPerPage); }
  changePage(page: number) { if (page >= 1 && page <= this.totalPages()) this.currentPage = page; }

  exportCSV() {
    if (!this.filteredUsers.length) return;
    const csvData = this.filteredUsers.map(u => ({
      Nom: u.name,
      Prénom: u.firstName || '',
      Email: u.email,
      Rôle: u.role,
      Ville: u.city || '',
      Téléphone: u.phone || '',
      Adresse: u.address || '',
      Statut: u.active ? 'Actif' : 'Inactif',
      Date: u.registrationDate || ''
    }));
    const csvContent = [
      Object.keys(csvData[0]).join(','),
      ...csvData.map(row => Object.values(row).join(','))
    ].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'users.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
