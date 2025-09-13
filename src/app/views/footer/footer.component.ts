import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Link {
  text: string;
  url: string;
}

interface ContactItem {
  icon: string;
  info: string;
}

interface SocialLink {
  icon: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  companyLinks: Link[] = [
    { text: 'About', url: '#' },
    { text: 'Careers', url: '#' },
    { text: 'Press', url: '#' },
    { text: 'Blog', url: '#' },
    { text: 'Contact', url: '#' }
  ];

  solutionsLinks: Link[] = [
    { text: 'Digital Strategy', url: '#' },
    { text: 'Cloud Computing', url: '#' },
    { text: 'Data Analytics', url: '#' },
    { text: 'AI Solutions', url: '#' },
    { text: 'Cybersecurity', url: '#' }
  ];

  contactItems: ContactItem[] = [
    { icon: 'bi bi-geo-alt', info: '15 Avenue Habib Bourguiba\Tunis 1001' },
    { icon: 'bi bi-telephone', info: '(+216) 58964818' },
    { icon: 'bi bi-envelope', info: 'contact_RH@gmail.com' }
  ];

  socialLinks: SocialLink[] = [
    { icon: 'bi bi-facebook', url: '#' },

    { icon: 'bi bi-linkedin', url: '#' },
    { icon: 'bi bi-youtube', url: '#' },
    { icon: 'bi bi-github', url: '#' }
  ];

  footerBottomLinks: Link[] = [
    { text: 'Privacy Policy', url: '#' },
    { text: 'Terms of Service', url: '#' },
    { text: 'Cookie Policy', url: '#' }
  ];

  currentYear: number = new Date().getFullYear();
}
