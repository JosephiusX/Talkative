# File structure planning
lets start with a views folder that contains files for the individual route pages and an index file for creating "createBrowserRouter" that gets then passed into provider in the main.jsx file

then lets have a components files that contains the the parts of the pages.

      - public
        - index.html

      - /src

        - /views
          - TopicsPage.jsx     : import from components
          - PhrasesPage.jsx    : import from components
          - ErrorPage.jsx      : error page

        - /components
          - Topics.jsx         : display topics list
          - TopicsForm.jsx     : display topics form
          - Phrases.jsx        : display phrases relative to given topic
          - PhrasesForm.jsx    : display phrases form

        - /router
          - AppRouter.jsx      : import views, create browser router, export to main.jsx
          - Navigation.jsx     : Home button for Phrases pages
        
        - /store
          - topicsSlice.jsx    : topics store logic
          - phrasesSlice.jsx   : phrases store logic
          - useLocalStore.jsx  : hooks for saveing to localStorage
          - reducers.jsx          : Slice reducers, export store for main.jsx

      - main.jsx               : import AppRouter.jsx from, Create root to for index.html

    - index.html : Display root element