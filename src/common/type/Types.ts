import { QuestionType } from "./Enums";

export interface Quiz {
  id: number;
  name: string;
  questions: Array<QuizQuestion>;
  authorId: number;
  firstQuestionId: number;
}

export interface QuizQuestion {
  id: number;
  quizId: number;
  title: string;
  text: string;
  answers: Array<QuizAnswer>;
  imageId: number;
  nextQuestionId: number;
  timer: number;
  reward: number;
  questionType: QuestionType;
}

export interface QuizAnswer {
  id: number;
  text: string;
  questionId: number;
  isCorrect: boolean;
}

export interface QuizDetails {
  quizId: number;
  imageId: number;
  quizName: string;
}
