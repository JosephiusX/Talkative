import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from './store/reducers';
import { AppRouter } from './router/AppRouter';

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={ AppRouter } />
    </Provider>
  )
}