import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms'; // <-- Ajoute ceci


@Component({
  selector: 'app-contact',
  standalone: true,
    imports: [CommonModule, RouterModule,FormsModule ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Data:', form.value);
      alert('Your message has been sent. Thank you!');
      form.reset();
    }
  }

}
