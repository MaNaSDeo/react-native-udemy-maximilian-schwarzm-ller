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
export interface ICategory {
  id: string;
  title: string;
  color: string;
}

class Category implements ICategory {
  constructor(public id: string, public title: string, public color: string) {}
}

export default Category;
