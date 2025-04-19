import { Component } from '@angular/core';
import { SectionBlockComponent } from '../../components/elements/section-block/section-block.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ueber-mich',
  standalone: true,
  imports: [CommonModule, SectionBlockComponent],
  templateUrl: './ueber-mich.component.html',
  styleUrl: './ueber-mich.component.scss'
})


export class UeberMichComponent {
textBlock2007 = `
    <p>
      Mit 2007 ging es bei mir mit dem DeeJaying los, auch wenn ich bereits vorher Bezug zur Musik und dem Deejaying hatte. In meiner Kindheit bin ich bereits mit Elektronischer Musik aufgewachsen. Um genau zu sein mit Eurodance, Trance, Electro/House, Hands Up, Hardstyle, Schranz und Hardcore.
    </p>
    <p>
      Zwar habe ich auch andere Musikrichtungen gehört, wie z.B. auch Rock & Metal und teils auch Deutschrap oder Pop, jedoch konnte ich mit dem DeeJaying etwas finden, wo ich auch selbst musikalisch aktiv sein konnte. Schlagzeug, Gitarre, Piano oder andere Instrumente waren alle so teuer oder zu laut. Aber Auflegen mit Kopfhörern? Oder auch Produzieren von Elektronischer Musik in FL Studio oder Ableton? Das ging auch leise und zumindest bezüglich DeeJaying ging dies mit einem günstigen kleinen Controller wie mit dem Hercules MP3 E2 sogar ziemlich günstig, um überhaupt erstmal anzufangen.
    </p>
`;

textBlock2013 = `
  <p>Dies ist so die Zeit, wo ich mit meinem angeeigneten Können anfangen wollte,
  mich zu präsentieren, um andere mit der Liebe zur Musik zu erreichen.</p>

  <p>2013 habe ich DJBaka gestartet und meine Kanäle auf YouTube und Mixcloud erstellt,
  wo ich meine Mixes hochgeladen habe.</p>

  <p>Damals wollte ich Webradio machen, aber war noch zu jung und später kam das Leben dazwischen.</p>
`;

textBlock2020 = `
  <p>Dies ist so die Zeit, wo ich mit meinem angeeigneten Können anfangen wollte,
  mich zu präsentieren, um andere mit der Liebe zur Musik zu erreichen.</p>

  <p>2013 habe ich DJBaka gestartet und meine Kanäle auf YouTube und Mixcloud erstellt,
  wo ich meine Mixes hochgeladen habe.</p>

  <p>Damals wollte ich Webradio machen, aber war noch zu jung und später kam das Leben dazwischen.</p>
`;

textBlock2022 = `
<div>
  <p>
    Mit 2022 ging es bei mir wie bereits erwähnt langsam los. Dank einer größeren Online Community für welche ich regelmäßig auf Twitch Aufgelegt habe konnte ich mir eine gewisse Reichweite auf Twitch aufbauen, wo ich bis heute immer noch aktiv am Streamen bin. Zudem habe ich es auch geschafft dort auf dem Webradio RauteMusik.fm anzufangen, auf welchem ich nun bei dem Club, Techno und Harder Stream zu finden bin. Und letzten Endes konnte ich auch endlich mein Gewerbe gründen und habe daraufhin 2023 die ersten Gigs spielen dürfen und davon auch direkt 12 innerhalb von einem Jahr, worüber ich auch sehr glücklich bin.
  </p>
  <p>
    Seitdem findet man mich nun auch öfters im 2RaumClub in Bremen und natürlich auch gelegentlich auf anderen Events und eventuell ja auch demnächst bei deinem kommenden Event.
  </p>
</div>
`;



}
