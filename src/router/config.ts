import Home from "../features/home/Home";
import Login from "../features/login";

export interface RouteType {
  path: string;
  exact: boolean;
  component?: any;
  private?: boolean;
}

export const routes: RouteType[] = [
  {
    path: "/home",
    component: Home,
    exact: true,
    private: false,
  },
  {
    path: "/my-quizzes",
    component: Home,
    exact: true,
    private: true,
  },
  {
    path: "/statistics",
    component: Home,
    exact: true,
    private: false,
  },
  {
    path: "/",
    component: Login,
    exact: true,
    private: false,
  },
  {
    path: "/login",
    component: Login,
    exact: true,
    private: false,
  },
];
