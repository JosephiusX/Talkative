import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//       <Router>
//         <React.StrictMode>
//           <AppRouter />
//         </React.StrictMode>
//       </Router>  
//   </Provider>
// );