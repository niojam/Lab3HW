import axios, { AxiosResponse } from "axios";

export const getQuizzes = async (): Promise<AxiosResponse> => {
  return await axios.get(`api/quiz/quizzes`);
};

export const magicLogin = async (): Promise<AxiosResponse> => {
  return await axios.get(`api/magic-login`);
};
