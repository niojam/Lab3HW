import React from "react";
import "antd/dist/antd.css";
import "./index.scss";
import { routes } from "./router/config";
import CustomRouter from "./router/CustomRouter";
import { useSelector } from "react-redux";
import { isUserAuthenticated } from "./store/AuthenticationSlice";

const App = () => {
  const authenticated = useSelector(isUserAuthenticated);

  return <CustomRouter routes={routes} isAuthenticated={authenticated} />;
};

export default App;
