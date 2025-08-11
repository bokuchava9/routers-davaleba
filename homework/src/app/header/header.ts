import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { About } from '../about/about';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet,FormsModule,About,RouterLink,Contact],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
