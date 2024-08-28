import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [CarouselModule, TagModule, ButtonModule],
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent {
  hoveredHeartButton: boolean = false;
  hoveredCartButton: boolean = false;

  // Method for heart button hover effect (red on hover)
  getHeartButtonStyle(isHovered: boolean) {
    return {
      'color': isHovered ? 'red' : 'black', // Red when hovered
      'transition': 'color 0.3s ease', // Smooth color transition
    };
  }

  // Method for cart button hover effect (blue on hover)
  getCartButtonStyle(isHovered: boolean) {
    return {
      'color': isHovered ? 'blue' : 'black', // Blue when hovered
      'transition': 'color 0.3s ease', // Smooth color transition
    };
  }
  
  products: any[] = [
    { 
      name: 'Nike Dunk Low', 
      image: '/assets/images/nike-dunk.png', 
      price: 3399, 
      inventoryStatus: 'In Stock' 
    },
    { 
      name: 'Nike Impact 4', 
      image: '/assets/images/nike-impact.png', 
      price: 5579, 
      inventoryStatus: 'Low Stock' 
    },
    { 
      name: 'Nike Revolution 7', 
      image: '/assets/images/nike-rev.png', 
      price: 4549, 
      inventoryStatus: 'Out of Stock' 
    },
    { 
      name: 'Nike Precision 6', 
      image: '/assets/images/nike-precision.png', 
      price: 6669, 
      inventoryStatus: 'In Stock' 
    },
    { 
      name: 'Nike Airforce 1', 
      image: '/assets/images/nike-airforce1.png', 
      price: 4600, 
      inventoryStatus: 'In Stock' 
    },
    { 
      name: 'Nike Blazer Low', 
      image: '/assets/images/nike-blazer.png', 
      price: 3649, 
      inventoryStatus: 'Out of Stock' 
    },
    { 
      name: 'Nike Invincible 3', 
      image: '/assets/images/nike-invincible.png', 
      price: 8450, 
      inventoryStatus: 'Low Stock' 
    }
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' | undefined {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Low Stock':
        return 'warning';
      case 'Out of Stock':
        return 'danger';
      default:
        return undefined;
    }
  }
}
