import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Important pour ngForm

import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';

  onSubmit() {
    console.log('Email soumis :', this.email);
    // ici tu peux appeler ton service pour envoyer le mail de récupération
  }
}
