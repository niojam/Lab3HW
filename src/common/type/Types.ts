import { QuestionType } from "./Enums";

export interface Quiz {
  name: string;
  questions: Array<QuizQuestion>;
  firstQuestionId: number;
}

export interface QuizQuestion {
  id: number;
  quizId: number;
  title: string;
  text: string;
  answers: Array<QuizAnswer>;
  picture: Uint8Array;
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

export interface AuthorQuizzes {
  key: number;
  id: number;
  roomName: string;
  quizName: string;
  quizId: number;
  authorId: number;
  time: Date;
}
