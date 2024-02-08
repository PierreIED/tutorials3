import {Component, input, Input} from '@angular/core';
import {Tutorial} from "../../models/tutorial";
import {MatBadge} from "@angular/material/badge";
import {MatButton} from "@angular/material/button";
import {MatList, MatListItem} from "@angular/material/list";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    MatBadge,
    MatButton,
    MatList,
    MatListItem,
    NgForOf,
    NgIf
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  comVisibility: boolean = false;
  @Input() comments!: string[];

}
