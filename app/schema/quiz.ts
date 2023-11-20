import * as z from 'zod';

export const QuizFormSchema = z.object({
  category: z.string().nullish(),
  // difficulty: z.enum(['', 'easy', 'medium', 'hard']).default(''),
  difficulty: z.string().nullish(),
  // type: z.enum(['multiple', 'boolean']).default('multiple'),
  type: z.string().default('multiple'),
  amount: z.string().default('10'),
});

export type QuizForm = z.infer<typeof QuizFormSchema>;
