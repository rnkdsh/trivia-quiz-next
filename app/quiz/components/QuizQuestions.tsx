'use client';

import React from 'react';
import { useInterval } from 'usehooks-ts';
import { Progress } from '@/components/ui/progress';
import { Question } from '@/app/types/Question';
import QuestionItem from './QuestionItem';

interface QuizQuestionsProps {
  correctAnswers: number;
  currentQuestion: number;
  totalQuestions: number;
  question: Question;
  onNext: (isCorrect: boolean) => void;
}

function QuizQuestions(props: QuizQuestionsProps) {
  const [seconds, setSeconds] = React.useState(0);
  useInterval(
    () => {
      setSeconds(seconds + 1);
    },
    // Delay in milliseconds or null to stop it
    props.currentQuestion < props.totalQuestions ? 1000 : null
  );

  return (
    <div className='max-w-screen-xl mx-auto p-4'>
      <div className='flex flex-row justify-between w-full text-xl font-semibold'>
        <div className='flex-1'>
          {props.correctAnswers}/{props.currentQuestion + 1}
        </div>
        <div className='flex-1 text-right'>
          {new Date(seconds * 1000).toISOString().substring(14, 19)}
        </div>
      </div>
      <div className='flex flex-row justify-between w-full pt-5 pb-5'>
        <Progress
          value={(props.currentQuestion * 100) / props.totalQuestions}
        />
      </div>
      <QuestionItem
        key={props.question.question}
        question={props.question}
        onNext={props.onNext}
      />
    </div>
  );
}

export default React.memo(QuizQuestions);
