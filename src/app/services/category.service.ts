import { Injectable } from '@angular/core';
import {Category} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  /*categories: Array<Category> = [
      {Name:"Java", Id :0},
      {Name:"Javascript", Id:1},
      {Name:"Typescript",Id:2},
      {Name:"PHP",Id:3},
      {Name:"C#",Id:4},
      {Name:"Angular",Id:5},
      {Name:"Ruby",Id:6},
      {Name:"Python",Id:7},
      {Name:"C++",Id:8},
      {Name:"Rust",Id:9},
      {Name:"VBA",Id:10},

  ]*/
  constructor(private httpClient: HttpClient) {
  }

  getCategories(): Observable<Category>[]{
    return this.httpClient.get<Category[]>('https://localhost:7019/api/Categories');
  }
}
