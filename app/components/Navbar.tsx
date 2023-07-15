'use client';

import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Image from 'next/image';

export default function Navbar() {
  const quizState = useSelector((state: RootState) => state.quiz);
  return (
    <nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 backdrop-blur-lg'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Image src='/trivia.svg' alt='Logo' width={100} height={24} priority />
        <div className='flex bg-yellow-200 border-amber-300 border-2 rounded-full px-6 py-2 font-bold'>
          {quizState.totalQuestionsAnsweredCorrectly} /{' '}
          {quizState.totalQuestionsAnswered}
        </div>
      </div>
    </nav>
  );
}
