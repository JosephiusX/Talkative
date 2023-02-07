import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import {
  TopicsIndex,
  PhrasesIndex,
  RootPage,
  PhrasesPage,
  TopicsPage,
  ErrorPage,
  EditTopic,
  DeleteTopic,
  EditPhrases,
  DeletePhrase 
} from '../views';

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    loader: rootLoader,
    action: rootAction,
    errorElement: <ErrorPage />,
    children: [
        {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <TopicsIndex /> },
          {
            path: "topics/:topicId",
            element: <TopicsPage />,
          },
          {
            path: "topics/:topicId/edit",
            element: <EditTopic />,
          },
          {
            path: "topics/:topicId/destory",
            element: <DeleteTopic />,
          },
          {
            path: "topics/:topicId/phrases",
            element: <PhrasesPage />,
          },
          {
            path: "topics/:topicId/:phrasesId/edit",
            element: <EditPhrases />,
          },
          {
            path: "topics/:topicId/:phrasesId/destory",
            element: <DeletePhrase />,
          },
        ],
      },
    ],
  },
]);