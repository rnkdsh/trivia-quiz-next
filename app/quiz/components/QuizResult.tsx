'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface QuizResultProps {
  total: number;
  correct: number;
}

export default function QuizResult(props: QuizResultProps) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200'>
      Score: {props.correct}/{props.total}
      <Link href={'/'}>
        <Button type='button'>Home</Button>
      </Link>
    </div>
  );
}
