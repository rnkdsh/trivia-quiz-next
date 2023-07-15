'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useAppDispatch } from '../store';
import { QuizForm } from '../schema/quiz';
import { Progress } from '@/components/ui/progress';
import QuestionItem from './components/QuestionItem';

import { getQuestions } from '../data/questions';
import {
  increaseTotalQuestionsAnswered,
  increaseTotalQuestionsAnsweredCorrectly,
} from '../store/quiz/slice';
import QuizResult from './components/QuizResult';

export default function Quiz() {
  const appDispatch = useAppDispatch();

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
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    cacheTime: 0,
  });
  //   console.log(data);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [correctAnswers, setCorrectAnswers] = React.useState(0);

  return isLoading ? (
    <div>Loading...</div>
  ) : error || !data ? (
    <div>Error</div>
  ) : currentQuestion < data.length ? (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200'>
      {correctAnswers}/{currentQuestion + 1}
      <Progress
        value={((currentQuestion + 1) * 100) / data.length}
        className='w-96'
      />
      <QuestionItem
        question={data[currentQuestion]}
        onNext={(isCorrect) => {
          if (isCorrect) {
            setCorrectAnswers(correctAnswers + 1);
            appDispatch(increaseTotalQuestionsAnsweredCorrectly());
          }
          setCurrentQuestion(currentQuestion + 1);
          appDispatch(increaseTotalQuestionsAnswered());
        }}
      />
    </div>
  ) : (
    <QuizResult total={data.length} correct={correctAnswers} />
  );
}
