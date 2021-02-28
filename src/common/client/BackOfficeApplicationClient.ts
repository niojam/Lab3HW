import axios, { AxiosResponse } from "axios";
import { Quiz, QuizDetails } from "../type/Types";

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
    `/api/question?id=${deleteQuestionRequest.questionId}?quizId=${deleteQuestionRequest.quizId}`
  );
};

export const magicLogin = async (): Promise<AxiosResponse> => {
  return await axios.get(`/api/magic-login`);
};
