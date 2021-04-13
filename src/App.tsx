import React, { useEffect, useMemo } from "react";
import { notification } from "antd";
import "antd/dist/antd.css";
import "./index.scss";
import { routes } from "./router/config";
import CustomRouter from "./router/CustomRouter";
import { useDispatch, useSelector } from "react-redux";
import {
  isUserAuthenticated,
  setIsUserAuthenticated,
} from "./store/AuthenticationSlice";
import { useCookies } from "react-cookie";
import { isTokenExpired } from "./common/util/TokenUtil";
import { KAHOOT_TOKEN_COOKIE } from "./constants";
import { axiosInstance } from "./common/client/BackOfficeApplicationClient";

const App = () => {
  const dispatch = useDispatch();
  const [cookies] = useCookies();
  const authenticated = useSelector(isUserAuthenticated);

  const [api, contextHolder] = notification.useNotification();

  useMemo(() => {
    axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        api.error({
          message: `Ups Something went wrong...`,
          description: error.message,
          placement: "bottomRight",
        });
        return Promise.reject(error);
      }
    );
  }, [axiosInstance]);

  useEffect(() => {
    if (
      cookies[KAHOOT_TOKEN_COOKIE] &&
      !isTokenExpired(cookies[KAHOOT_TOKEN_COOKIE])
    ) {
      dispatch(setIsUserAuthenticated(true));
    }
  }, [cookies]);

  return (
    <>
      {contextHolder}
      <CustomRouter
        routes={routes}
        isAuthenticated={
          authenticated ||
          (cookies[KAHOOT_TOKEN_COOKIE] &&
            !isTokenExpired(cookies[KAHOOT_TOKEN_COOKIE]))
        }
      />
    </>
  );
};

export default App;
