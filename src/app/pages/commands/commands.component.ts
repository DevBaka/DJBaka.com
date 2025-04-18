import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FadeInOnScrollDirective } from '../../shared/fade-in-on-scroll.directive';

@Component({
  selector: 'app-commands',
  standalone: true,
  imports: [RouterModule, CommonModule, FadeInOnScrollDirective],
  templateUrl: './commands.component.html',
  styleUrl: './commands.component.scss'
})
export class CommandsComponent {
  commands = [
    { command: '!songid', description: 'Gibt dir den aktuellen Songnamen' },
    { command: '!lurk', description: 'Sagt, dass du im Hintergrund lauschst und nicht aktiv chattest' },
    { command: '!hug username', description: 'Umarmt einen User oder zufällig jemanden' },
    { command: '!bonk username', description: 'Bonkt jemanden oder zufällig jemanden, wenn kein Name' },
    { command: '!highfive username', description: 'Highfive für jemand bestimmten oder einfach so' },
    { command: '!clap', description: 'Wenn du klatschen willst!' },
    { command: '!dance', description: 'Wenn du am abtanzen bist!' },
    { command: '!dance2 / !rave', description: 'Wenn du komplett am Abraven bist!' },
    { command: '!party', description: 'Für Party-Emotes!' },
    { command: '!discord', description: 'Link zu unserem Discord Server' },
    { command: '!soundcloud', description: 'Link zu meinem SoundCloud Profil' },
    { command: '!youtube', description: 'Link zu meinem YouTube Channel' },
    { command: '!links', description: 'Alle meine Links auf einen Blick' },
    { command: '!socials', description: 'Social Media Links' },
    { command: '!support', description: 'Infos, wie du mich supporten kannst 🙂' },
  ];
}
