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
export const PLAYERS_STATISTICS_PAGE_PATH = "/players";
export const QUIZ_STATISTICS_PAGE_PATH = "/quiz";
export const ANSWER_STATISTICS_PAGE_PATH = "/answer";
export const CREATE_NEW_QUIZ_PATH = "/new-quiz";
export const LOGOUT_PATH = "/logout";

export const routes: RouteType[] = [
  {
    path: LOGIN_PAGE_PATH,
    component: lazy(() => import("views/Login/LoginPage")),
    exact: true,
    private: false,
  },
  {
    path: HOME_PAGE_PATH,
    component: lazy(() => import("views/Home/Home")),
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
    private: true,
  },
  {
    path: CREATE_NEW_QUIZ_PATH,
    component: lazy(() => import("views/EditQuiz/EditQuiz")),
    exact: true,
    private: true,
  },
  {
    path: STATISTICS_PAGE_PATH + "/:roomName" + QUIZ_STATISTICS_PAGE_PATH,
    component: lazy(
      () => import("views/QuestionStatistics/QuestionStatistics")
    ),
    exact: true,
    private: true,
  },
  {
    path:
      STATISTICS_PAGE_PATH +
      "/room/:roomId/question/:questionId" +
      ANSWER_STATISTICS_PAGE_PATH,
    component: lazy(() => import("views/AnswerStatistics/AnswerStatistics")),
    exact: true,
    private: true,
  },
  {
    path: STATISTICS_PAGE_PATH + "/:roomId" + PLAYERS_STATISTICS_PAGE_PATH,
    component: lazy(() => import("views/PlayerStatistics/PlayerStatistics")),
    exact: true,
    private: true,
  },
  {
    path: LOGOUT_PATH,
    component: lazy(() => import("views/Logout/Logout")),
    exact: true,
    private: true,
  },
];
