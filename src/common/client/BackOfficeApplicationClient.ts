import axios, { AxiosResponse } from "axios";

const baseUrl =
  process.env.REACT_APP_STAGE === "dev" ? "" : process.env.REACT_APP_BASE_URL;

export const joinRoom = async (): Promise<AxiosResponse> => {
  return await axios.get(`${baseUrl}/quiz/quizzes`);
};
