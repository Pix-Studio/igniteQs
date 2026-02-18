import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppRoutingModule],
  template: `
    <h1>Hello, {{ title() }}</h1>

    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('igniteqs');
}
