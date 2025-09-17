import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  leftPosts = [
    {
      img: 'assets/img/blog/blog-post-3.webp',
      category: 'Real Estate Tips',
      categoryClass: 'real-estate-tips',
      title: '5 Essential Tips for First-Time Home Buyers',
      date: 'March 15, 2025',
      comments: 3
    },
    {
      img: 'assets/img/blog/blog-post-9.webp',
      category: 'Technology',
      categoryClass: 'technology',
      title: 'How Smart Home Tech is Changing Real Estate',
      date: 'March 14, 2025',
      comments: 5
    }
  ];

  mainPost = {
    img: 'assets/img/blog/blog-post-7.webp',
    category: 'Market Insights',
    categoryClass: 'market-insights',
    title: '2025 Real Estate Market Trends You Need to Know',
    excerpt: 'Stay ahead of the market with our in-depth analysis of 2025 real estate trends. Learn where to invest, what to avoid, and how to maximize returns in today’s market.',
    date: 'March 16, 2025',
    comments: 8
  };

  rightPosts = [
    {
      img: 'assets/img/blog/blog-post-6.webp',
      category: 'Investing',
      categoryClass: 'investing',
      title: 'Top 3 Cities for Real Estate Investment This Year',
      date: 'March 13, 2025',
      comments: 2
    },
    {
      img: 'assets/img/blog/blog-post-9.webp',
      category: 'Lifestyle',
      categoryClass: 'lifestyle',
      title: 'Designing Your Dream Home: Modern Inspirations',
      date: 'March 12, 2025',
      comments: 4
    }
  ];

  posts = [
    {
      img: 'assets/img/blog/blog-post-1.webp',
      category: 'Market Insights',
      title: 'How Property Prices Are Evolving Across the Country',
      authorImg: 'assets/img/person/person-f-12.webp',
      author: 'Maria Doe',
      date: '2025-01-01',
      dateDisplay: 'Jan 1, 2025'
    },
    {
      img: 'assets/img/blog/blog-post-2.webp',
      category: 'Investment',
      title: 'Maximizing ROI in Rental Properties',
      authorImg: 'assets/img/person/person-f-13.webp',
      author: 'Allisa Mayer',
      date: '2025-06-05',
      dateDisplay: 'Jun 5, 2025'
    },
    {
      img: 'assets/img/blog/blog-post-3.webp',
      category: 'Tips & Advice',
      title: 'How to Stage Your Home to Sell Fast',
      authorImg: 'assets/img/person/person-m-10.webp',
      author: 'Mark Dower',
      date: '2025-06-22',
      dateDisplay: 'Jun 22, 2025'
    },
    {
      img: 'assets/img/blog/blog-post-4.webp',
      category: 'Market Insights',
      title: 'Understanding the Local Real Estate Market',
      authorImg: 'assets/img/person/person-f-14.webp',
      author: 'Lisa Neymar',
      date: '2025-06-30',
      dateDisplay: 'Jun 30, 2025'
    },
    {
      img: 'assets/img/blog/blog-post-5.webp',
      category: 'Investment',
      title: 'Top Mistakes to Avoid When Buying Property',
      authorImg: 'assets/img/person/person-m-11.webp',
      author: 'Denis Peterson',
      date: '2025-01-30',
      dateDisplay: 'Jan 30, 2025'
    },
    {
      img: 'assets/img/blog/blog-post-6.webp',
      category: 'Lifestyle',
      title: 'Decor Ideas to Increase Your Property Value',
      authorImg: 'assets/img/person/person-f-15.webp',
      author: 'Mika Lendon',
      date: '2025-02-14',
      dateDisplay: 'Feb 14, 2025'
    }
  ];
}
