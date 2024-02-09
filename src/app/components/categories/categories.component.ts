import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {NavbarComponent} from "../navbar/navbar.component";
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";
import {Observable} from "rxjs";


@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [MatListModule, CommonModule, MatCardModule, NavbarComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent  {
  categories$!: Observable<Category[]>;
  constructor(private categoryService: CategoryService){
    this.categories$ = categoryService.getCategories();
  }


}
