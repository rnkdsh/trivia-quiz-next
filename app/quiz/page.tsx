'use client';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getQuestions } from '../data/questions';
import { QuizForm } from '../schema/quiz';

export default function Quiz() {
  const params = useSearchParams();
  const parameters: QuizForm = {
    category: params.get('category') || '',
    difficulty: params.get('difficulty') || '',
    type: params.get('type') || '',
    amount: params.get('amount') || '',
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ['questions', parameters],
    queryFn: async () => {
      const data = await getQuestions(parameters);
      return data;
    },
  });
  console.log(data);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200'>
      <h1>Quiz</h1>
    </div>
  );
}
