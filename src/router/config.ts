import { ComponentType, lazy, LazyExoticComponent } from "react";

export interface RouteType {
  path: string;
  exact: boolean;
  component?: LazyExoticComponent<ComponentType<any>>;
  redirect?: string;
  private?: boolean;
}

export const LOGIN_PAGE_PATH = "/login";
export const HOME_PAGE_PATH = "/home";
export const MY_QUIZZES_PAGE_PATH = "/my-quizzes";
export const STATISTICS_PAGE_PATH = "/statistics";
export const EDIT_QUIZ_PAGE_PATH = "/edit-quiz";

export const routes: RouteType[] = [
  {
    path: LOGIN_PAGE_PATH,
    component: lazy(() => import("views/Login/LoginPage")),
    exact: true,
    private: false,
  },
  {
    path: HOME_PAGE_PATH,
    component: lazy(() => import("containers/Home/Home")),
    exact: true,
    private: true,
  },
  {
    path: MY_QUIZZES_PAGE_PATH,
    component: lazy(() => import("views/MyQuizzes/MyQuizzes")),
    exact: true,
    private: true,
  },
  {
    path: STATISTICS_PAGE_PATH,
    component: lazy(() => import("views/PlayedQuizzes/PlayedQuizzes")),
    exact: true,
    private: true,
  },
  {
    path: EDIT_QUIZ_PAGE_PATH + "/:quizId",
    component: lazy(() => import("views/EditQuiz/EditQuiz")),
    exact: true,
    private: false,
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
