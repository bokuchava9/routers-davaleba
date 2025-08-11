import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { About } from './about/about';
import { Products } from './products/products';
import { Details } from './details/details';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Header,About,Products,Details],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('homework');
}
