import { Component } from '@angular/core';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';

@Component({
  selector: 'app-landing-footer',
  standalone: true,
  imports: [MdbCheckboxModule],
  templateUrl: './landing-footer.component.html',
  styleUrl: './landing-footer.component.scss'
})
export class LandingFooterComponent {

}
