import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Important pour ngForm

import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
   standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

 onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Email:', form.value.email);
      console.log('Password:', form.value.password);
    }
  }

}
