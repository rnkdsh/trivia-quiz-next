'use client';

import React from 'react';
import { Question } from '../../types/Question';

interface QuestionProps {
  question: Question;
  onNext: (isCorrect: boolean) => void;
}

function QuestionItem({ question, onNext }: QuestionProps) {
  const shuffledOptions = React.useMemo(
    () =>
      [...question.incorrect_answers, question.correct_answer].sort(
        () => Math.random() - 0.5
      ),
    [question]
  );

  const [selectedAnswer, setSelectedAnswer] = React.useState('');

  function isCorrectAnswer(answer: string) {
    return answer === question.correct_answer;
  }

  function submitAnswer(answer: string) {
    setSelectedAnswer(answer);
  }

  React.useEffect(() => {
    // console.log(selectedAnswer);
    if (selectedAnswer) {
      const interval = setInterval(() => {
        onNext(selectedAnswer === question.correct_answer);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [onNext, question, selectedAnswer]);

  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-5'>
      <div
        dangerouslySetInnerHTML={{ __html: question.question }}
        className='font-medium lg:text-3xl md:text-2xl sm:text-xl'
      />
      <div className='flex flex-col gap-5'>
        {shuffledOptions.map((option) => (
          <button
            key={option}
            className={`bg-gray-200 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-1000 ${
              selectedAnswer && selectedAnswer === option
                ? isCorrectAnswer(selectedAnswer)
                  ? 'bg-green-400'
                  : 'bg-red-400'
                : selectedAnswer && option === question.correct_answer
                ? 'bg-green-400'
                : 'bg-gray-200'
            }`}
            // className='bg-white text-black p-4 rounded-md'
            onClick={() => submitAnswer(option)}
          >
            <div dangerouslySetInnerHTML={{ __html: option }} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default React.memo(QuestionItem);
