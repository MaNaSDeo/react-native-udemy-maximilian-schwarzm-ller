export interface ICategory {
  id: string;
  title: string;
  color: string;
}

export type RootStackParamList = {
  MealCategories: undefined;
  MealsOverview: { categoryId: string };
};
