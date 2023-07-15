'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Confetti from 'react-confetti';

interface QuizResultProps {
  total: number;
  correct: number;
}

export default function QuizResult(props: QuizResultProps) {
  const [dimensions, setDimensions] = React.useState({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setDimensions({
      width,
      height,
    });
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-full py-2 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200'>
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
      <Confetti
        width={dimensions.width}
        height={dimensions.height}
        recycle={false}
        numberOfPieces={500}
        tweenDuration={10000}
      />
    </div>
  );
}
