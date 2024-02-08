import { Injectable } from '@angular/core';
import {Tutorial} from "../models/tutorial";
import {Category} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class TutorialServiceService {

  tutorials : Array<Tutorial> =
    [
      {id:1,
        title:"Java pour les nuls",
        description : "tout est dit",
        content : "le super tutoriel java",
        author :
          {
            authorId:1,
            lastName: "Doe",
            firstName:"John",
            email:"johndoe@gmail.com"
          },
        category: "Java",
        creationDate: new Date(),
        comments:
          [
            "super tuto !",
            "gé rien compri"
          ]

      },
      {id:2,
        title:"Javascript avancé",
        description : "pour les boss",
        content : "ceci est un cours avancé en javascript lorem ipsum",
        author :
          {
            authorId:2,
            lastName: "Dalton",
            firstName:"John",
            email:"johndalton@electron.com"
          },
        category: "Javascript",
        creationDate: new Date(2023,10,10),
        comments:
          [

          ]

      },
      {id:1,
        title:"du code pas compliqué",
        description : "en python, évidemment",
        content : "construire une application facilement avec pyhton, mais sans interface graphique. ",
        author :
          {
            authorId:1,
            lastName: "Doe",
            firstName:"John",
            email:"johndoe@gmail.com"
          },
        category: "Python",
        creationDate: new Date(2024,1,15),
        comments:
          [
            "super tuto !",
            "gé tou compri",
            "Bobo est dans la place !"

          ]

      }
    ]
  constructor() {
  }

  getTutorials(): Tutorial[]{
    return this.tutorials;
  }
}
