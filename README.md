# File structure planning
lets start with a views folder that contains files for the individual route pages and an index file for creating "createBrowserRouter" that gets then passed into provider in the main.jsx file

then lets have a components files that contains the the parts of the pages.

      - /src
        - /components
          - Topics.jsx         : display topics list
          - TopicsForm.jsx     : display topics form
          - Phrases.jsx        : display phrases relative to given topic
          - PhrasesForm.jsx    : display phrases form
          - index.js           : exports files

        - /router
          - AppRouter.jsx      : import views, create browser router, export to main.jsx
          - Navigation.jsx     : Home button for Phrases pages
        
        - /store
          - topicsSlice.jsx    : topics store logic
          - phrasesSlice.jsx   : phrases store logic
          - useLocalStore.jsx  : hooks for saveing to localStorage
          - reducers.jsx       : Slice reducers, export store for main.jsx

        - /views
          - TopicsPage.jsx     : import from components
          - PhrasesPage.jsx    : import from components
          - index.js           : exports files
          - ErrorPage.jsx      : error page
      - App.jsx                : setup Provider pass in store, setup RouterProvider pass in AppRouter, export ass App component.  
      - main.jsx               : import AppRouter.jsx from, Create root to for index.html
    - index.html : Display root element

so far it seems like everything is linked up thus far. 
The only error messages I am recieving are about crud component files I havent created yet.
Need to create action files in components:

    CreateTopic
    EditTopic 
    DeleteTopic
    CreatePhrase
    EditPhrases
    DeletePhrases

Need to add Create routes

    topics/create
    Phrases/create
