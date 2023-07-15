'use client';

import { Skeleton } from '@/components/ui/skeleton';

interface QuizQuestionsSkeletonProps {}

export default function QuizQuestionsSkeleton(
  props: QuizQuestionsSkeletonProps
) {
  return (
    <div className='max-w-screen-xl mx-auto p-4'>
      <div className='flex flex-row justify-between w-full text-xl font-semibold mt-2'>
        <Skeleton className='w-16 h-5 rounded-full' />
        <Skeleton className='w-16 h-5 rounded-full' />
      </div>
      <div className='flex flex-row justify-between w-full pt-5 pb-5'>
        <Skeleton className='w-full h-2 rounded-full' />
      </div>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-5'>
        <div className='flex flex-col gap-2'>
          <Skeleton className='w-96 h-8 rounded-full' />
        </div>
        <div className='flex flex-col gap-5'>
          <Skeleton className='w-full h-16 rounded-lg' />
          <Skeleton className='w-full h-16 rounded-lg' />
          <Skeleton className='w-full h-16 rounded-lg' />
          <Skeleton className='w-full h-16 rounded-lg' />
        </div>
      </div>
    </div>
  );
}
