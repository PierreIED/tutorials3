import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-add-tuto',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  templateUrl: './add-tuto.component.html',
  styleUrl: './add-tuto.component.css'
})
export class AddTutoComponent {

}
