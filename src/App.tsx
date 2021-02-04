import React from "react";
import "antd/dist/antd.css";
import "./index.scss";
import { routes } from "./router/config";
import CustomRouter from "./router/CustomRouter";

const App = () => {
  return (
    <div>
      <CustomRouter routes={routes} isAuthenticated={false} />
    </div>
  );
};

export default App;
