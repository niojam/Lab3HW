import axios, { AxiosResponse } from "axios";
import {
  AnswerStatisticsData,
  PlayedQuizzesData,
  PlayerStatisticsData,
  QuestionStatisticsData,
  Quiz,
  QuizDetails,
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

export const magicLogin = async (): Promise<AxiosResponse> => {
  return await axios.get(`/api/magic-login`);
};

export const getPlayedQuizzes = async (): Promise<
  AxiosResponse<PlayedQuizzesData[]>
> => {
  console.log("FETCHING DATA");
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

export const IMAGE_UPLOAD_URL = "/api/image";
export const GET_IMAGE_BY_ID_URL = "/api/image?id=";
