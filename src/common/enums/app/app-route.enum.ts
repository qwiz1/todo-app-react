enum AppRoute {
  ROOT = '/',
  WELCOME = '/welcome',
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  FORGOT_PASSWORD = '/forgot-password',
  TODOS = '/todos',
  TODOS_$ID = '/todos/:id',
  TODOS_EDIT = '/todos/edit',
  TODOS_EDIT_$ID = '/todos/edit/:id',
  PROFILE_$USERNAME = '/profile/:id',
  PROFILE_EDIT = '/profile/edit',
  PROFILE_EDIT_$USERNAME = '/profile/edit/:id',
}

export { AppRoute };
