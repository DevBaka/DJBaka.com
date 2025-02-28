import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class YoutubeMixesService {
  private rssUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=UCh9k2M60yHGqGwwjVdxPnXg';


  constructor(private http: HttpClient) { }

  getVideos() {
    return this.http.get<any>(this.rssUrl).pipe(
      map((response: any) => {
        return response.items.map((item: any) => ({
          title: item.title,
          videoId: item.link.split('=')[1]
        }));
      })
    );
  }
  
  

}
