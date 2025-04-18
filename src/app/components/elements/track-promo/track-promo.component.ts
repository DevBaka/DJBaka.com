import { Component } from '@angular/core';
import { FadeInOnScrollDirective } from '../../../shared/fade-in-on-scroll.directive';

@Component({
  selector: 'app-track-promo',
  standalone: true,
  imports: [FadeInOnScrollDirective],
  templateUrl: './track-promo.component.html',
  styleUrl: './track-promo.component.scss'
})
export class TrackPromoComponent {

}
