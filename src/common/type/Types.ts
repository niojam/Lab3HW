export interface Quiz {
  id: number;
  name: string;
  questions: QuizQuestion[];
  authorId: number;
  imageId: number;
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
  questionType: string;
  timeAlgorithm: string;
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

export interface PlayerStatisticsData {
  key: number;
  username: string;
  correctAnswers: number;
  wrongAnswers: number;
  score: number;
  roomId: number;
}

export interface PlayedQuizzesData {
  key: number;
  id: number;
  roomName: string;
  quizName: string;
  quizId: number;
  authorId: number;
  startedAt: string;
  startDateTime: number;
}

export interface PlayerStatisticsData {
  key: number;
  username: string;
  correctAnswers: number;
  wrongAnswers: number;
  score: number;
  roomId: number;
}

export interface QuestionStatisticsData {
  key: number;
  id: number;
  title: string;
  questionType: string;
}

export interface AnswerStatisticsData {
  key: number;
  questionTitle: string;
  questionText: string;
  answerText: string;
  frequency: number;
  correct: boolean;
}

export interface RegisterRoomRequest {
  quizId: number;
  roomName: string;
}

export interface RoomStatusResponseWithRelocation {
  relocationUrl: string;
}
