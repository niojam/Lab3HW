import axios, { AxiosResponse } from "axios";
import { QuizDetails, AuthorQuizzes } from "../type/Types";

export const getQuizzes = async (): Promise<AxiosResponse<QuizDetails[]>> => {
  return await axios.get(`api/quiz/quizzes`);
};

export const magicLogin = async (): Promise<AxiosResponse> => {
  return await axios.get(`api/magic-login`);
};

export const getAuthorQuizzes = async (): Promise<
  AxiosResponse<AuthorQuizzes[]>
> => {
  return await axios.get("api/room/rooms");
};
