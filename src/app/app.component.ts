import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TutorialsComponent } from './components/tutorials/tutorials.component';
import {HomeComponent} from "./components/home/home.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CategoriesComponent,
    NavbarComponent,
    TutorialsComponent, HomeComponent,


  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutorials';
}

