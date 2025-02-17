import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { BlogComponent } from '../components/blog/blog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent,BlogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeMessage = signal("hello world");

  keyUpHandler(event: KeyboardEvent){
    console.log('user pressed the ' + event.key + ' key');
  }
}
