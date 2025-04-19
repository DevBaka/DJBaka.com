import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-block.component.html',
  styleUrls: ['./section-block.component.scss']
})
export class SectionBlockComponent {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() image: string = '';
  @Input() imageLeft: boolean = false;
}
