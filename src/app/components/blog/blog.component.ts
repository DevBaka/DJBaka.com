import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [JsonPipe, AsyncPipe, CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {
  constructor(private contentfulService: ContentfulService) {}

  blogPosts$ : Observable<any> | undefined;


  ngOnInit(): void {
    this.blogPosts$ = this.contentfulService.getAllEntries();
  }

}
