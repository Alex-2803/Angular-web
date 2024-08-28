import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  images: any[] = [
    { itemImageSrc: 'assets/images/nike-doodle.gif' },
    { itemImageSrc: 'assets/images/asics-run.gif' },
    { itemImageSrc: 'assets/images/zoomfly-nike.gif' }
    // Add more images as needed
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

}
