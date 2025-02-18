import { Component, HostListener } from '@angular/core';
import { BlogComponent } from '../components/blog/blog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BlogComponent],
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
