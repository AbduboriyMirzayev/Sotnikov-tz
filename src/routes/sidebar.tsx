import { ImagesIcon, PostsIcon, TasksIcon } from "assets/icons";
import paths from "constants/paths";

const sidebarRoutes = [
  {
    title: "Посты",
    icon: <PostsIcon />,
    path: paths.posts,
  },
  {
    title: "Фото",
    icon: <ImagesIcon />,
    path: paths.images,
  },
  {
    title: "Задачи",
    icon: <TasksIcon />,
    path: paths.tasks,
  },
];

export default sidebarRoutes;
