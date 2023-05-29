import { createBrowserRouter } from 'react-router-dom';
import Homepage from 'src/pages/homepage';
import Todo from 'src/pages/todo';
import Welcome from 'src/pages/welcome';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    children: [
      {
        path: 'welcome',
        element: <Welcome />,
      },
      {
        path: 'todo/:todoId',
        element: <Todo />,
        children: [
          {
            path: 'edit',
            element: <div>Edit</div>,
          },
        ],
      },
      {
        path: 'sign-up',
        element: <div>sign-up</div>,
      },
      {
        path: 'sign-in',
        element: <div>sign-in</div>,
      },
      {
        path: 'profile/:username',
        element: <div>Profile</div>,
        children: [
          {
            path: 'edit',
            element: <div>Edit</div>,
          },
        ],
      },
    ],
  },
]);
