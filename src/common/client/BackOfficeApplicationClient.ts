import axios, { AxiosResponse } from "axios";

export const getQuizzes = (): Promise<AxiosResponse> => {
  return axios.get(`/oauth2/authorization/azure`).then((response) => {
    console.log(response);
    return response;
  });
};
