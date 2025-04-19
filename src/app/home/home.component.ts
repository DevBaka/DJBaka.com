import { Component, HostListener } from '@angular/core';
import { BlogComponent } from '../components/blog/blog.component';
import { ColumnesLinksComponent } from "../components/columnes/columnes-links/columnes-links.component";
import { ColumnesLinksBlackComponent } from "../components/columnes/columnes-links-black/columnes-links-black.component";
import { FadeInOnScrollDirective } from '../shared/fade-in-on-scroll.directive';
import { TrackPromoComponent } from '../components/elements/track-promo/track-promo.component';
import { SectionBlockComponent } from '../components/elements/section-block/section-block.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BlogComponent, ColumnesLinksComponent, ColumnesLinksComponent, ColumnesLinksBlackComponent, FadeInOnScrollDirective, TrackPromoComponent, SectionBlockComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  welcomeMessage = `
<p>Willkommen bei DJBaka – Deinem Allrounder / Open Format &amp; Techno DJ aus Bremen und Umgebung für Clubs, Bars, Firmenfeiern und alle möglichen Veranstaltungen.</p>

<p>Seit über 15 Jahren lebe ich meine Leidenschaft für die Musik im Rahmen des Deejaying aus. Angefangen habe ich in meinen eigenen vier Wänden, wo ich mich der Musik hingab und später meine Sets auf Plattformen wie Mixcloud und YouTube teilte. Ab 2016 eroberte ich die Webradioszene, zunächst bei Musiclovers.fm und seit Anfang 2022 auch bei RauteMusik.fm, auf welchem ich als Techno DJ und Hard Dance DJ auf dem Techno-, Club- oder Harder-Stream zu finden bin.</p>

<p>Auf meiner Webseite findest du nicht nur eine Übersicht über meine aktuellen Auftritte, sondern auch einen Einblick in die verschiedenen Genres, die ich beherrsche. Egal, ob du auf der Suche nach den neuesten Club-Hits, zeitlosen Klassikern oder einer abwechslungsreichen Mischung bist – mein Repertoire ist vielseitig, um deine Veranstaltung unvergesslich zu gestalten.</p>

<p>Ich liebe es, die perfekte musikalische Atmosphäre zu schaffen und bin stolz darauf, ein Teil der Musikszene in Bremen und darüber hinaus zu sein. Wenn du nach einem DJ suchst, der nicht nur Erfahrung, sondern auch echte Hingabe für sein Handwerk mitbringt, bist du hier richtig.</p>

<p>Kontaktiere mich gerne für Buchungsanfragen und weitere Informationen. Ich freue mich darauf, deinem Event den musikalischen Kick zu verleihen und gemeinsam unvergessliche Momente zu schaffen!</p>

<p>Stay tuned, DJBaka</p>

`;


  mouseX = 0;
  mouseY = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
}
