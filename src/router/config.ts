import { lazy } from "react";

export interface RouteType {
  path: string;
  exact: boolean;
  component?: any;
  private?: boolean;
}

export const routes: RouteType[] = [
  {
    path: "/home",
    component: lazy(() => import("features/home")),
    exact: true,
    private: false,
  },
  {
    path: "/my-quizzes",
    component: lazy(() => import("features/home")),
    exact: true,
    private: true,
  },
  {
    path: "/statistics",
    component: lazy(() => import("features/home")),
    exact: true,
    private: false,
  },
  {
    path: "/",
    component: lazy(() => import("features/login")),
    exact: true,
    private: false,
  },
  {
    path: "/login",
    component: lazy(() => import("features/login")),
    exact: true,
    private: false,
  },
];
