import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogPostComponent } from './components/blog/blog-post/blog-post.component';

export const routeConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'blog',
        component: BlogComponent,
        title: 'Blog page'
    },
    {
        path: 'blog/:id',
        component: BlogPostComponent,
        title: 'Blog Article Page'
    }
    
];
