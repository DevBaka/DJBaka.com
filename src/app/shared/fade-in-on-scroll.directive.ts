import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appFadeInOnScroll]',
  standalone: true // <- DAS ist entscheidend!
})
export class FadeInOnScrollDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'visible');
          observer.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.1 }
    );

    this.renderer.addClass(this.el.nativeElement, 'fade-in');
    observer.observe(this.el.nativeElement);
  }
}
