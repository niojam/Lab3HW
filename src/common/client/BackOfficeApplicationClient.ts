import axios, { AxiosResponse } from "axios";
import {
  AnswerStatisticsData,
  PlayedQuizzesData,
  PlayerStatisticsData,
  QuestionStatisticsData,
  Quiz,
  QuizDetails,
  QuizQuestion,
} from "../type/Types";

export const getQuizzesDetails = async (): Promise<
  AxiosResponse<QuizDetails[]>
> => {
  return await axios.get(`/api/quiz/quizzes`);
};

export const getQuiz = async (quizId: string): Promise<AxiosResponse<Quiz>> => {
  return await axios.get(`/api/quiz?quizId=${quizId}`);
};

export const deleteQuestion = async (deleteQuestionRequest: {
  questionId: number;
  quizId: string;
}): Promise<AxiosResponse<void>> => {
  return await axios.delete(
    `/api/question?id=${deleteQuestionRequest.questionId}&quizId=${deleteQuestionRequest.quizId}`
  );
};

export const addQuestion = async (addQuestionRequest: {
  question: QuizQuestion;
  quizId: number;
}): Promise<AxiosResponse<QuizQuestion>> => {
  return await axios.post(
    `/api/question?quizId=${addQuestionRequest.quizId}`,
    addQuestionRequest.question
  );
};

export const updateQuestion = async (addQuestionRequest: {
  question: QuizQuestion;
  quizId: number;
}): Promise<AxiosResponse<QuizQuestion>> => {
  return await axios.put(
    `/api/question?quizId=${addQuestionRequest.quizId}`,
    addQuestionRequest.question
  );
};

export const createQuiz = async (quiz: Quiz): Promise<AxiosResponse<Quiz>> => {
  return await axios.post(`/api/quiz`, quiz);
};

export const deleteQuiz = async (
  quizId: number
): Promise<AxiosResponse<Quiz>> => {
  return await axios.delete(`/api/quiz?quizId=${quizId}`);
};

export const magicLogin = async (): Promise<AxiosResponse> => {
  return await axios.get(`/api/magic-login`);
};

export const login = async (): Promise<AxiosResponse> => {
  return await axios.get(`/oauth2/authorization/azure`);
};

export const getPlayedQuizzes = async (): Promise<
  AxiosResponse<PlayedQuizzesData[]>
> => {
  return await axios.get("api/room/rooms");
};

export const getPlayersStatistics = async (
  roomId: string
): Promise<AxiosResponse<PlayerStatisticsData[]>> => {
  return await axios.get(`/api/statistics/players?roomId=${roomId}`);
};

export const getQuestionStatistics = async (
  quizId: string
): Promise<AxiosResponse<QuestionStatisticsData[]>> => {
  return await axios.get(`/api/question/details?quizId=${quizId}`);
};

export const getAnswerStatistics = async (
  roomId: string
): Promise<AxiosResponse<AnswerStatisticsData[]>> => {
  return await axios.get(`/api/statistics/answer?roomId=${roomId}`);
};

export const deleteRoom = async (
  roomId: number
): Promise<AxiosResponse<void>> => {
  return await axios.delete(`/api/room?roomId=${roomId}`);
};
export const IMAGE_UPLOAD_URL = "/api/image";
export const GET_IMAGE_BY_ID_URL = "/api/image?id=";
