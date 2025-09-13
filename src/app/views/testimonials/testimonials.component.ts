import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  testimonials = [
    {
      name: 'Saul Goodman',
      role: 'Client',
      img: 'assets/img/person/person-m-7.webp',
      paragraphs: ['Un service exceptionnel, je recommande fortement !']
    },
    {
      name: 'Sara Wilsson',
      role: 'Designer',
      img: 'assets/img/person/person-f-8.webp',
      paragraphs: ['Une expérience fluide et agréable, bravo à toute l’équipe.']
    }
  ];

  ngOnInit(): void {
    AOS.init({ duration: 1000, once: true });
  }
}
