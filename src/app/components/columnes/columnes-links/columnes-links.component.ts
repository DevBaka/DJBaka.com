import { AfterViewInit, Component,Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-columnes-links',
  standalone: true,
  imports: [],
  templateUrl: './columnes-links.component.html',
  styleUrl: './columnes-links.component.scss'
})
export class ColumnesLinksComponent implements AfterViewInit{
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (typeof IntersectionObserver !== 'undefined') {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((el) => observer.observe(el));
      } else {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((el) => el.classList.add('visible'));
      }
    }
  }
  
}
