import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { RouteType } from "./config";

interface RouterProps {
  routes: RouteType[];
  isAuthenticated: boolean;
}

const CustomRouter = ({ routes, isAuthenticated }: RouterProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routes?.map((route: RouteType) => (
          <Route
            key={route.path}
            path={route.path}
            render={(props) =>
              route.private ? (
                isAuthenticated ? (
                  route.component && <route.component {...props} />
                ) : (
                  <Redirect to="/login" />
                )
              ) : (
                route.component && <route.component {...props} />
              )
            }
          />
        ))}
      </Switch>
    </Suspense>
  );
};

export default CustomRouter;
