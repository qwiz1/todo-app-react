enum AppRoute {
  ROOT = '/',
  WELCOME = '/welcome',
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  FORGOT_PASSWORD = '/forgot-password',
  TODOS = '/todos',
  TODOS_$ID = '/todos/:todoId',
  TODOS_$ID_EDIT = '/todos/:todoId/edit',
  PROFILE_$USERNAME = '/profile/:profileId',
  PROFILE_$USERNAME_EDIT = '/profile/:profileId/edit',
}

export { AppRoute };
