import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {NavbarComponent} from "../navbar/navbar.component";
import {CategoryServiceService} from "../../services/category-service.service";
import {Category} from "../../models/category";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [MatListModule, CommonModule, MatCardModule, NavbarComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories!: Category[];
  constructor(private categoryService: CategoryServiceService){

  }
  ngOnInit(){
    this.categories = this.categoryService.getCategories();
  }

}
