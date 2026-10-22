export interface Recipe {
  id: string;
  title: string;
  cuisine: string;
  category: string;
  difficulty: string;
  prepTime: number;
  servings: number;
  image: string;
  description: string;
  ingredients: string[];
  instructions: string[];
}
