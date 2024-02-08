import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {CategoriesComponent} from "./components/categories/categories.component";
import {TutorialsComponent} from "./components/tutorials/tutorials.component";
import {AddTutoComponent} from "./components/add-tuto/add-tuto.component";

export const routes: Routes = [
  {path: 'cat', component: CategoriesComponent},
  {path: 'tutorials', component: TutorialsComponent},
  {path: 'tutorials/add', component: AddTutoComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', component: HomeComponent}
];
