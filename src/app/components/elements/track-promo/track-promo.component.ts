import { Component, Input } from '@angular/core';
import { FadeInOnScrollDirective } from '../../../shared/fade-in-on-scroll.directive';

@Component({
  selector: 'app-track-promo',
  standalone: true,
  imports: [FadeInOnScrollDirective],
  templateUrl: './track-promo.component.html',
  styleUrl: './track-promo.component.scss'
})
export class TrackPromoComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() description1!: string;
  @Input() description2!: string;
  @Input() buttonText: string = 'Jetzt Anhören';
  @Input() buttonLink!: string;
  @Input() imageUrl!: string;
}
