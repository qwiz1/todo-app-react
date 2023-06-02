import { createBrowserRouter } from 'react-router-dom';
import ForgotPassword from 'src/pages/forgot-password';
import Homepage from 'src/pages/homepage';
import SignIn from 'src/pages/sign-in';
import SignUp from 'src/pages/sign-up';
import Todo from 'src/pages/todo';
import Welcome from 'src/pages/welcome';
import { AppRoute } from 'src/common/enums';

export const router = createBrowserRouter([
  {
    path: AppRoute.ROOT,
    element: <Homepage />,
    children: [
      {
        path: AppRoute.TODOS,
        element: <div>Todos</div>,
      },
      {
        path: AppRoute.TODOS_$ID,
        element: <Todo />,
      },
      {
        path: AppRoute.TODOS_$ID_EDIT,
        element: <div>Todo EDIT</div>,
      },
      {
        path: AppRoute.PROFILE_$USERNAME,
        element: <div>Profile</div>,
      },
      {
        path: AppRoute.PROFILE_$USERNAME_EDIT,
        element: <div>Profile EDIT</div>,
      },
    ],
  },
  {
    path: AppRoute.SIGN_UP,
    element: <SignUp />,
  },
  {
    path: AppRoute.SIGN_IN,
    element: <SignIn />,
  },
  {
    path: AppRoute.FORGOT_PASSWORD,
    element: <ForgotPassword />,
  },
  {
    path: AppRoute.WELCOME,
    element: <Welcome />,
  },
]);
