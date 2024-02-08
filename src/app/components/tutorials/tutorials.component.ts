import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../../models/tutorial';
import { Category } from '../../models/category';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, NgForOf } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips'
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { SortTutorialByDatePipe } from '../../pipes/sort-tutorial-by-date.pipe';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatList, MatListItem} from "@angular/material/list";
import {HoverHighlightDirective} from "../../directives/hover-highlight.directive";
import {CommentsComponent} from "../comments/comments.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {TutorialService} from "../../services/tutorial.service";

@Component({
  selector: 'app-tutorials',
  standalone: true,
  imports: [MatCardModule,
    CommonModule,
    MatChipsModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    SortTutorialByDatePipe,
    MatSelectModule,
    FormsModule,
    MatButtonToggleModule, MatList, MatListItem, HoverHighlightDirective, CommentsComponent, NavbarComponent
  ],
  templateUrl: './tutorials.component.html',
  styleUrl: './tutorials.component.css'
})
export class TutorialsComponent implements OnInit{
  tutorials!: Tutorial[];
    sort: string = 'DESC';
    constructor(private tutorialService: TutorialService) {

    }

    ngOnInit(){
      this.tutorials = this.tutorialService.getTutorials();
    }



}
