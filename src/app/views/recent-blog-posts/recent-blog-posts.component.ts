import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ nécessaire pour *ngFor

interface BlogPost {
  img: string;
  date: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-recent-blog-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-blog-posts.component.html',
  styleUrls: ['./recent-blog-posts.component.css']
})
export class RecentBlogPostsComponent {
  posts: BlogPost[] = [
    { img: 'assets/img/blog/blog-post-1.webp', date: 'December 12', title: '', link: 'blog-details.html' },
    { img: 'assets/img/blog/blog-post-2.webp', date: 'July 17', title: '', link: 'blog-details.html' },
    { img: 'assets/img/blog/blog-post-3.webp', date: 'September 05', title: '', link: 'blog-details.html' }
  ];
}
