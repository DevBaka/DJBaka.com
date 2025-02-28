import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // ✅ Importieren
import { YoutubeMixesService } from '../../../services/youtube-mixes.service';

@Component({
  selector: 'app-youtube-sets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './youtube-sets.component.html',
  styleUrl: './youtube-sets.component.scss'
})
export class YoutubeSetsComponent implements OnInit {
  videos: any[] = [];
  loadedVideos = new Map<string, SafeResourceUrl>(); // ✅ Ändern zu einer Map mit SafeResourceUrl

  constructor(
    private youtubeMixesSerivce: YoutubeMixesService,
    private sanitizer: DomSanitizer // ✅ Inject DomSanitizer
  ) {}

  ngOnInit() {
    this.youtubeMixesSerivce.getVideos().subscribe((data) => {
      this.videos = data;
    });
  }

  loadVideo(videoId: string) {
    const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`
    );
    this.loadedVideos.set(videoId, safeUrl); // ✅ Gesicherte URL speichern
  }
}
