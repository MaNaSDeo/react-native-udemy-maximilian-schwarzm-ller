/*
class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.steps = steps;
    this.duration = duration;
    this.complexity = complexity;
    this.affordability = affordability;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
*/
// Define the type for affordability and complexity
export type Affordability = "affordable" | "pricey" | "luxurious";
export type Complexity = "simple" | "challenging" | "hard";

// Interface for the Meal class
export interface IMeal {
  id: string;
  categoryIds: string[];
  title: string;
  affordability: Affordability;
  complexity: Complexity;
  imageUrl: string;
  duration: number;
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
}

// Class definitions with TypeScript
class Meal implements IMeal {
  constructor(
    public id: string,
    public categoryIds: string[],
    public title: string,
    public affordability: Affordability,
    public complexity: Complexity,
    public imageUrl: string,
    public duration: number,
    public ingredients: string[],
    public steps: string[],
    public isGlutenFree: boolean,
    public isVegan: boolean,
    public isVegetarian: boolean,
    public isLactoseFree: boolean
  ) {}
}

export default Meal;
