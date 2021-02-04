import axios, { AxiosResponse } from "axios";

export const getQuizzes = async (): Promise<AxiosResponse> => {
  return await axios.get(`/quiz/quizzes`);
};
