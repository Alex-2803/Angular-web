import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
    {'path': 'home', component:HomeComponent},
    {'path': 'product-page', component:ProductPageComponent},
    {'path': 'about-us', component:AboutUsComponent},
    {'path': 'contact-us', component:ContactUsComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
