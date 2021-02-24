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
    path: "/login",
    component: lazy(() => import("views/Login/LoginPage")),
    exact: true,
    private: false,
  },
  {
    path: "/home",
    component: lazy(() => import("containers/Home/Home")),
    exact: true,
    private: true,
  },
  {
    path: "/my-quizzes",
    component: lazy(() => import("views/MyQuizzes/MyQuizzes")),
    exact: true,
    private: true,
  },
  {
    path: "/statistics",
    component: lazy(() => import("views/PlayedQuizzes/PlayedQuizzes")),
    exact: true,
    private: true,
  },
  {
    path: "/edit-quiz",
    component: lazy(() => import("views/EditQuiz/EditQuiz")),
    exact: true,
    private: true,
  },
  {
    path: "/create",
    component: lazy(() => import("views/CreateQuiz/CreateQuiz")),
    exact: true,
    private: true,
  },
  {
    path: "/quiz", // this is here temporary for demo purposes
    component: lazy(
      () => import("views/QuestionStatistics/QuestionStatistics")
    ),
    exact: true,
    private: false,
  },
  {
    path: "/answer", // this is here temporary for demo purposes
    component: lazy(() => import("views/AnswerStatistics/AnswerStatistics")),
    exact: true,
    private: false,
  },
  {
    path: "/player", // this is here temporary for demo purposes
    component: lazy(() => import("views/PlayerStatistics/PlayerStatistics")),
    exact: true,
    private: false,
  },
];
