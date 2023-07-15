import { QuizForm } from '../schema/quiz';
import { QuestionsResponse, Question } from '../types/Question';

export async function getQuestions(params: QuizForm): Promise<Question[]> {
  const res = await fetch(
    `https://opentdb.com/api.php?category=${params.category}&difficulty=${params.difficulty}&type=${params.type}&amount=${params.amount}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch questions');
  }
  const response = (await res.json()) as QuestionsResponse;
  return response.results;
}
