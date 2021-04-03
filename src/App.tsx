import React, { useEffect } from "react";
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
import { KAHOOT_TOKEN_COOKIE } from "./common/constants/Constants";
import { isTokenExpired } from "./common/util/TokenUtil";

const App = () => {
  const dispatch = useDispatch();
  const [cookies] = useCookies();
  const authenticated = useSelector(isUserAuthenticated);

  useEffect(() => {
    if (
      cookies[KAHOOT_TOKEN_COOKIE] &&
      !isTokenExpired(cookies[KAHOOT_TOKEN_COOKIE])
    ) {
      dispatch(setIsUserAuthenticated(true));
    }
  }, [cookies]);

  return (
    <CustomRouter
      routes={routes}
      isAuthenticated={
        authenticated ||
        (cookies[KAHOOT_TOKEN_COOKIE] &&
          !isTokenExpired(cookies[KAHOOT_TOKEN_COOKIE]))
      }
    />
  );
};

export default App;
