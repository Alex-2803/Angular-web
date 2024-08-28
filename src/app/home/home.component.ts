import { Component } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import { ProductCarouselComponent } from "../product-carousel/product-carousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, ProductCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
