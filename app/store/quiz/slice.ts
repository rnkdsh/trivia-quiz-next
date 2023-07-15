import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface QuizState {
  totalQuestionsAnswered: number;
  totalQuestionsAnsweredCorrectly: number;
}

const initialState: QuizState = {
  totalQuestionsAnswered: 0,
  totalQuestionsAnsweredCorrectly: 0,
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: initialState,
  reducers: {
    increaseTotalQuestionsAnsweredCorrectly: (state) => {
      state.totalQuestionsAnsweredCorrectly =
        state.totalQuestionsAnsweredCorrectly + 1;
    },
    increaseTotalQuestionsAnswered: (state) => {
      state.totalQuestionsAnswered = state.totalQuestionsAnswered + 1;
    },
  },
});

export const {
  increaseTotalQuestionsAnswered,
  increaseTotalQuestionsAnsweredCorrectly,
} = quizSlice.actions;
