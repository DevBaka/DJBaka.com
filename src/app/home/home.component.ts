import { Component, HostListener } from '@angular/core';
import { BlogComponent } from '../components/blog/blog.component';
import { ColumnesLinksComponent } from "../components/columnes/columnes-links/columnes-links.component";
import { ColumnesLinksBlackComponent } from "../components/columnes/columnes-links-black/columnes-links-black.component";
import { FadeInOnScrollDirective } from '../shared/fade-in-on-scroll.directive';
import { TrackPromoComponent } from '../components/elements/track-promo/track-promo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BlogComponent, ColumnesLinksComponent, ColumnesLinksComponent, ColumnesLinksBlackComponent, FadeInOnScrollDirective, TrackPromoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  mouseX = 0;
  mouseY = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
}
