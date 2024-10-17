/*
class Category {
  constructor(id, title, color) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}

export default Category;
*/

// Interface for the Category class
import { type ICategory } from "../types";

class Category implements ICategory {
  constructor(public id: string, public title: string, public color: string) {}
}

export default Category;
