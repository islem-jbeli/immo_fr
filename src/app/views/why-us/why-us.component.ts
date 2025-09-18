import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ nécessaire pour *ngFor


@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [RouterModule, CommonModule], // RouterModule est nécessaire
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.css'
})
export class WhyUsComponent {

}
