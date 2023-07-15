import { CategoriesResponse, Category } from '../types/Category';

export async function getCategories(): Promise<Category[]> {
  const res = await fetch('https://opentdb.com/api_category.php');
  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }
  const response = (await res.json()) as CategoriesResponse;
  return response.trivia_categories;
}
