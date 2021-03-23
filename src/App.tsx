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

const KAHOOT_TOKEN_COOKIE = "kahoot-back-office_refresh-token";
const App = () => {
  const dispatch = useDispatch();
  const [cookies] = useCookies([KAHOOT_TOKEN_COOKIE]);
  const authenticated = useSelector(isUserAuthenticated);

  useEffect(() => {
    if (cookies[KAHOOT_TOKEN_COOKIE]) {
      dispatch(setIsUserAuthenticated(true));
    }
  }, [cookies]);

  return (
    <CustomRouter
      routes={routes}
      isAuthenticated={
        authenticated ? authenticated : !!cookies[KAHOOT_TOKEN_COOKIE]
      }
    />
  );
};

export default App;
