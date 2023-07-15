export interface CategoriesResponse {
  trivia_categories: Category[];
}

export interface Category {
  id: number;
  name: string;
}
