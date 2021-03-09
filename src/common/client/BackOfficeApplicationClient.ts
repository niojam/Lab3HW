import axios, { AxiosResponse } from "axios";
import { Quiz, QuizDetails, QuizQuestion } from "../type/Types";

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
  quizId: string;
}): Promise<AxiosResponse<QuizQuestion>> => {
  return await axios.post(
    `/api/question?quizId=${addQuestionRequest.quizId}`,
    addQuestionRequest.question
  );
};

export const updateQuestion = async (addQuestionRequest: {
  question: QuizQuestion;
  quizId: string;
}): Promise<AxiosResponse<QuizQuestion>> => {
  return await axios.put(
    `/api/question?quizId=${addQuestionRequest.quizId}`,
    addQuestionRequest.question
  );
};

export const magicLogin = async (): Promise<AxiosResponse> => {
  return await axios.get(`/api/magic-login`);
};

export const IMAGE_UPLOAD_URL = "/api/image";
export const GET_IMAGE_BY_ID_URL = "/api/image?id=";
