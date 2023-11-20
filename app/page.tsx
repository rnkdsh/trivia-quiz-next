'use client';
import React from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Skeleton } from '@/components/ui/skeleton';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { QuizForm, QuizFormSchema } from './schema/quiz';
import { getCategories } from './data/categories';

export default function Home() {
  // const router = useRouter();
  const { data, isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  const form = useForm<QuizForm>({
    resolver: zodResolver(QuizFormSchema),
    defaultValues: {
      category: undefined,
      difficulty: undefined,
      type: 'multiple',
      amount: '10',
    },
  });

  /* function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    router.push('/quiz');
  } */

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200'>
      <Card className='w-96'>
        <CardHeader>
          <CardTitle>Start Quiz</CardTitle>
          <CardDescription>
            Select options from below to start a new quiz.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              /* onSubmit={form.handleSubmit(onSubmit)} */ className='space-y-8'
            >
              <FormField
                control={form.control}
                name='category'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      {isLoading ? (
                        <Skeleton className='h-8 w-100 rounded-md' />
                      ) : (
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value || undefined}
                          disabled={isLoading}
                        >
                          <SelectTrigger id='category'>
                            <SelectValue placeholder='Any' />
                          </SelectTrigger>
                          <SelectContent position='popper'>
                            {data?.map((category) => (
                              <SelectItem
                                key={category.id}
                                value={category.id.toString()}
                              >
                                {category.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='difficulty'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Difficulty</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value || undefined}
                      >
                        <SelectTrigger id='difficulty'>
                          <SelectValue placeholder='Any' />
                        </SelectTrigger>
                        <SelectContent position='popper'>
                          <SelectItem value='easy'>Easy</SelectItem>
                          <SelectItem value='medium'>Medium</SelectItem>
                          <SelectItem value='hard'>Hard</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='type'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled
                      >
                        <SelectTrigger id='type'>
                          <SelectValue placeholder='Select' />
                        </SelectTrigger>
                        <SelectContent position='popper'>
                          <SelectItem value='multiple'>
                            Multiple Choice
                          </SelectItem>
                          <SelectItem value='boolean'>True/False</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='amount'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Questions</FormLabel>
                    <FormControl>
                      <Input id='amount' {...field} disabled />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Link
                href={{
                  pathname: '/quiz',
                  query: form.getValues(),
                }}
              >
                <Button type='button' disabled={isLoading} className='mt-5'>
                  Start
                </Button>
              </Link>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
