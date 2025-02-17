import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from '../../../services/contentful.service';
import { Observable } from 'rxjs';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [JsonPipe, CommonModule],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent implements OnInit{

  constructor(private route: ActivatedRoute,private contentfulService: ContentfulService) {}

  blogPost$: Observable<any> | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params['id'];

        this.blogPost$ = this.contentfulService.getEntryById(id);
      }
    )
  }
  

}
