import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { RouteType } from "./config";
import { LoginPageLayout, MainLayout } from "../containers";

interface RouterProps {
  routes: RouteType[];
  isAuthenticated: boolean;
}

const CustomRouter = ({ routes, isAuthenticated }: RouterProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" exact={true} render={() => <Redirect to="/home" />} />
        <Route path="/login" component={LoginPageLayout} />
        <MainLayout>
          {routes?.map((route: RouteType) => (
            <Route
              key={route.path}
              exact={route.exact}
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
        </MainLayout>
      </Switch>
    </Suspense>
  );
};

export default CustomRouter;
