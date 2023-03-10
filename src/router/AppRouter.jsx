import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import {
  PhrasesPage,
  TopicsPage,
  ErrorPage,
} from '../views';

export const AppRouter = createBrowserRouter([
  {
    path: "/topics",
    exact: true,
    element: <TopicsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "topics/create",
    element: <CreateTopic />,
    errorElement: <ErrorPage />
  },
  {
    path: "topics/:topicId/edit",
    element: <EditTopic />,
    errorElement: <ErrorPage />
  },
  {
    path: "topics/:topicId/destory",
    element: <DeleteTopic />,
    errorElement: <ErrorPage />
  },
  {
    path: "topics/:topicId/phrases",
    element: <PhrasesPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "topics/:topicId/phrases/create",
    element: <CreatePhrases />,
    errorElement: <ErrorPage />
  },
  {
    path: "topics/:topicId/:phrasesId/edit",
    element: <EditPhrases />,
    errorElement: <ErrorPage />
  },
  {
    path: "topics/:topicId/:phrasesId/destory",
    element: <DeletePhrase />,
    errorElement: <ErrorPage />
  },
]);