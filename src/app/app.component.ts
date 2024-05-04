import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { version } from '../../package.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment with Docker and Backstage - ver: ' + version;
}
