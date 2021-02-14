import { ComponentType, lazy, LazyExoticComponent } from "react";

export interface RouteType {
  path: string;
  exact: boolean;
  component?: LazyExoticComponent<ComponentType<any>>;
  redirect?: string;
  private?: boolean;
}

export const routes: RouteType[] = [
  {
    path: "/home",
    component: lazy(() => import("containers/Home/Home")),
    exact: true,
    private: false,
  },
  {
    path: "/my-quizzes",
    component: lazy(() => import("containers/Home/Home")),
    exact: true,
    private: true,
  },
  {
    path: "/statistics",
    component: lazy(() => import("views/PlayedQuizzes/PlayedQuizzes")),
    exact: true,
    private: false,
  },
];
