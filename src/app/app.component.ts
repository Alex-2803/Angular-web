import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavComponent } from "./top-nav/top-nav.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { ProductCarouselComponent } from "./product-carousel/product-carousel.component";
import { LandingFooterComponent } from "./landing-footer/landing-footer.component";
import { ProductPageComponent } from "./product-page/product-page.component";
import { HomeComponent } from "./home/home.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopNavComponent, CarouselComponent, ProductCarouselComponent, LandingFooterComponent, ProductPageComponent, HomeComponent, AboutUsComponent, ContactUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';
}

