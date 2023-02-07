import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import {topicsIndex,RootPage, PhrasesPage, TopicsPage, ErrorPage } from '../views'

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
            loader: topicsLoader,
            action: topicsAction,
            children: [
                {
                errorElement: <ErrorPage />,
                children: [
                    { index: true, element: <PhrasesIndex /> },
                    {
                      path: "phrases/:topicId",
                      element: <PhrasesPage />,
                      loader: phrasesLoader,
                      action: phrasesAction,
                    },
                    {
                      path: "phrases/:topicId/edit",
                      element: <EditTopic />,
                      loader: topicPhraseLoader,
                      action: editTopic,
                    },
                    {
                      path: "phrases/:topicId/destory",
                      action: destoryPhrase,
                      errorElement: <div>error destorying phrase</div>
                    },
                    {
                      path: "topics/:topicId/edit",
                      element: <EditTopic />,
                      loader: topicsLoader,
                      action: editTopic,
                    },
                    {
                      path: "topics/:topicId/destory",
                      action: destoryTopic,
                      errorElement: <div>error destorying topic.</div>
                    },
                  ],
                },
              ],
          },
        ],
      },
    ])