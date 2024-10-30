export interface ICategory {
  id: string;
  title: string;
  color: string;
}

// Define the types for the Stack Navigator
export type StackParamList = {
  MealCategories: undefined;
  MealsOverview: { categoryId: string };
  MealDetail: { mealId: string };
  Drawer: undefined;
};

// Define the export s for the Drawer Navigator
export type DrawerParamList = {
  Categories: undefined;
  Favorites: undefined;
};

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
