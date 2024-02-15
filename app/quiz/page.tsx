'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useAppDispatch } from '../store';
import { QuizForm } from '../schema/quiz';

import { getQuestions } from '../data/questions';
import {
  increaseTotalQuestionsAnswered,
  increaseTotalQuestionsAnsweredCorrectly,
} from '../store/quiz/slice';
import QuizResult from './components/QuizResult';
import QuizQuestions from './components/QuizQuestions';
import QuizQuestionsSkeleton from './components/QuizQuestionsSkeleton';

function QuizContent() {
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
    gcTime: 0,
  });
  //   console.log(data);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [correctAnswers, setCorrectAnswers] = React.useState(0);

  return (
    <div className='pt-20 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200'>
      {isLoading ? (
        <QuizQuestionsSkeleton />
      ) : error || !data ? (
        <div className='flex flex-col items-center justify-center'>
          {'Quiz not found!'}
        </div>
      ) : currentQuestion < data.length ? (
        <QuizQuestions
          correctAnswers={correctAnswers}
          currentQuestion={currentQuestion}
          totalQuestions={data.length}
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
      ) : (
        <QuizResult total={data.length} correct={correctAnswers} />
      )}
    </div>
  );
}

export default function Quiz() {
  return (
    <Suspense>
      <QuizContent />
    </Suspense>
  );
}
