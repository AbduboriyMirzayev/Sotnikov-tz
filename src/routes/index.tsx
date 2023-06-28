import Posts from "pages/posts";
import { RouteObject } from "react-router-dom";
import paths from "constants/paths";

export const routes: RouteObject[] = [
  {
    path: paths.posts,
    element: <Posts />,
  },
];
