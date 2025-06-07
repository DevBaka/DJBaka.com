import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogPostComponent } from './components/blog/blog-post/blog-post.component';
import { YoutubeSetsComponent } from './pages/sets/youtube-sets/youtube-sets.component';
import { CommandsComponent } from './pages/commands/commands.component';
import path from 'path';
import { UeberMichComponent } from './pages/ueber-mich/ueber-mich.component';
import { EmployeesComponent } from './components/employees/employees.component';

export const routeConfig: Routes = [
    {
        path: '',
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
    },
    {
        path: 'mixes',
        component: YoutubeSetsComponent,
        title: 'Sets & Mixes'
    },
    {
        path: 'commands',
        component: CommandsComponent,
        title: 'Twitch Commands'
    },
    {
        path: 'aboutme',
        component: UeberMichComponent,
        title: 'Über mich'
    },
    {
        path: 'employees',
        component: EmployeesComponent,
        title: 'Api test employees'
    }

    
];
