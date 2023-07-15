'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface QuizResultProps {
  total: number;
  correct: number;
}

export default function QuizResult(props: QuizResultProps) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200'>
      <Image
        src='/undraw_choose_re_7d5a.svg'
        alt='Logo'
        width={300}
        height={200}
        priority
      />
      <div className='text-2xl font-medium my-10'>
        You scored {props.correct} out of {props.total}
      </div>
      <Link href={'/'}>
        <Button type='button'>Home</Button>
      </Link>
    </div>
  );
}
