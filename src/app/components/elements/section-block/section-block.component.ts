import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInOnScrollDirective } from '../../../shared/fade-in-on-scroll.directive';

@Component({
  selector: 'app-section-block',
  standalone: true,
  imports: [CommonModule, FadeInOnScrollDirective],
  templateUrl: './section-block.component.html',
  styleUrls: ['./section-block.component.scss']
})
export class SectionBlockComponent {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() image: string = '';
  @Input() imageLeft: boolean = false;
}
