import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'; // Importiere das MatIconModule


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
