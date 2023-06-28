import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QueryKey } from 'src/common/enums';
import {
  ForgotPassPayload,
  SignInPayload,
  SignUpPayload,
  User,
} from 'src/common/types';
import { authService } from 'src/services';

const useSignIn = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: SignInPayload) => authService.signIn(payload),
    onSuccess: (user: User) => {
      queryClient.setQueryData([QueryKey.USER], user);
    },
  });
};

const useSignUp = () =>
  useMutation({
    mutationFn: (payload: SignUpPayload) => authService.signUp(payload),
  });

const useForgotPassword = () =>
  useMutation({
    mutationFn: (payload: ForgotPassPayload) => authService.forgotPass(payload),
  });

export { useSignIn, useSignUp, useForgotPassword };
