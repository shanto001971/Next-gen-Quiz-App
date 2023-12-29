import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuizState {
  currentCategory: string;
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: string[];
}

interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
}

const initialState: QuizState = {
  currentCategory: '',
  questions: [],
  currentQuestionIndex: 0,
  userAnswers: [],
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.currentCategory = action.payload;
    },
    setQuestions(state, action: PayloadAction<Question[]>) {
      state.questions = action.payload;
    },
    submitAnswer(state, action: PayloadAction<string>) {
      state.userAnswers.push(action.payload);
      state.currentQuestionIndex += 1;
    },
    resetQuiz(state) {
      state.currentCategory = '';
      state.questions = [];
      state.currentQuestionIndex = 0;
      state.userAnswers = [];
    },
  },
});

export const { setCategory, setQuestions, submitAnswer, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
