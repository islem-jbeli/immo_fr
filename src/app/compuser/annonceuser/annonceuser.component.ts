import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Annonce {
  id: number;
  title: string;
  city: string;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  status: 'Publiée' | 'Brouillon';
  photo: string;
  gallery: string[];
}

@Component({
  selector: 'app-annonceuser',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './annonceuser.component.html',
  styleUrls: ['./annonceuser.component.css']
})
export class AnnonceuserComponent {
  placeholder = "https://images.unsplash.com/photo-1560448075-bb0bfc0cdb36?auto=format&fit=crop&w=800&q=80";

  annonces: Annonce[] = [
    {
      id: 1,
      title: "Appartement S+2 moderne",
      city: "Tunis",
      price: 350000,
      area: 120,
      bedrooms: 2,
      bathrooms: 1,
      description: "Bel appartement lumineux proche du centre-ville.",
      status: "Publiée",
      photo: "https://www.tayara.tn/mediaGateway/resize-image?img=1e/1e7c4d6f-d7e3-4420-aa20-74a7bdd2e4e2&w=1000",
      gallery: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBeAMEvYzJwYtHkxJSOWrvH9MbpCpMl_0BxqOUBy705G865WBcgrh_b8leNnQ4eZh2ulQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJrx212KWqPCxJixPVyVmf49TWqXN6dW-R3QbOmS2RQDE4qRc9NPid4Ia2WFF6D-F7jM&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzOvKbbh-2Ps6YhxBdS6OO_NtSk9ROClbTpgyoT1XLo6FWDy-jTvUtwAERz7f4nEXrxc&usqp=CAU"
      ]
    },
    {
      id: 2,
      title: "Villa avec piscine",
      city: "Sousse",
      price: 1200000,
      area: 400,
      bedrooms: 4,
      bathrooms: 3,
      description: "Villa de luxe avec piscine privée et grand jardin.",
      status: "Brouillon",
      photo: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://www.artemisloc.com/images/products/Villa_Majorelle/Villa_Majorelle_1.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4h0qyoz73SCXSmcywPd2Bb5Zm8BrqpdPjdAoJOtXbr-F26og9wvQa7HuOJHrL4-iIJnA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVeC9ZGHyW1KrfV05st6XoiykNzNMYKmblXixWt9FKxWfzLgNS1UpTRKJUIqj28fugZIs&usqp=CAU"
      ]
    },
    {
      id: 3,
      title: "Studio S+1",
      city: "Ariana",
      price: 180000,
      area: 60,
      bedrooms: 1,
      bathrooms: 1,
      description: "Petit studio pratique et bien situé pour étudiant ou jeune couple.",
      status: "Publiée",
      photo: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/489470558.jpg?k=5e97e7d0ea88701052960c0c39ea63f6c10d7b0cffbd473a222f5bb6db8b1f81&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/489470693.jpg?k=61e732f691e61920ca0ea1ea001b11778688465f0927064a5af055867936188d&o=&hp=1",
        "https://www.menzili.tn/upload/photos/2020/11/09/15/50/jmz7n1394v.jpg"
      ]
    }
  ];

  selectedAnnonce: Annonce | null = null;
  editingAnnonceId: number | null = null;
  editAnnonceData: Partial<Annonce> = {};

  openImage(url: string) {
    window.open(url, "_blank");
  }

  editAnnonce(id: number) {
  this.editingAnnonceId = id;
  const annonce = this.annonces.find(a => a.id === id);
  if (annonce) this.editAnnonceData = { ...annonce };
}

saveAnnonce() {
  if (this.editingAnnonceId === null) return;

  const index = this.annonces.findIndex(a => a.id === this.editingAnnonceId);
  if (index === -1) return;

  const current = this.annonces[index];
  this.annonces[index] = {
    ...current,
    ...this.editAnnonceData,
    photo: this.editAnnonceData.photo || current.photo,
    gallery: this.editAnnonceData.gallery || current.gallery
  };

  this.editingAnnonceId = null;
  this.editAnnonceData = {};
}

cancelEdit() {
  this.editingAnnonceId = null;
  this.editAnnonceData = {};
}

  deleteAnnonce(id: number) {
    this.annonces = this.annonces.filter(a => a.id !== id);
  }

  viewDetails(annonce: Annonce) {
    this.selectedAnnonce = annonce;
  }
}
