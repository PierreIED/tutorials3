import { Author } from "./author";
import { Category } from "./category";

export interface Tutorial {
    id: number;
    title: string;
    description: string;
    content: string;
    author: Author;
    category: string;
    creationDate: Date;
    comments: string[];

}
