import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  // Configuration Swiper
  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    speed: 600,
    autoplay: { delay: 5000 },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  // Données des témoignages
  testimonials = [
    {
      title: 'Sed ut perspiciatis unde omnis',
      content: [
        'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
        'Beatae magnam dolore quia ipsum. Voluptatem totam et qui dolore dignissimos. Amet quia sapiente laudantium nihil illo et assumenda sit cupiditate. Nam perspiciatis perferendis minus consequatur. Enim ut eos quo.'
      ],
      profileImg: 'assets/img/person/person-m-7.webp',
      featuredImg: 'assets/img/person/person-m-7.webp',
      name: 'Saul Goodman',
      role: 'Client'
    },
    // Ajoutez d'autres témoignages ici...
  ];

  ngOnInit(): void {
    // Initialisation Swiper (optionnel si vous utilisez ngx-swiper-wrapper)
  }
}