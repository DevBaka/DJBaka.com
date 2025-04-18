import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'; // Importiere das MatIconModule
import { FadeInOnScrollDirective } from '../shared/fade-in-on-scroll.directive';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule, FadeInOnScrollDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
