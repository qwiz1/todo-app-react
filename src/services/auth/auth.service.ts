import { Http } from '../http/http.service';
import { User, SignInPayload, SignUpPayload } from '../../common/types';
import {
  ApiPath,
  AuthApiPath,
  ContentType,
  HttpMethod,
} from '../../common/enums';

class AuthService extends Http {
  async signUp(payload: SignUpPayload): Promise<any> {
    const info = await this.load<User>(
      `${ApiPath.AUTH}${AuthApiPath.SIGN_UP}`,
      {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        payload: JSON.stringify(payload),
      },
    );
    return info;
  }

  async signIn(payload: SignInPayload): Promise<User> {
    const { user, token } = await this.load<{ user: User; token: string }>(
      `${ApiPath.AUTH}${AuthApiPath.SIGN_IN}`,
      {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        payload: JSON.stringify(payload),
      },
    );
    localStorage.setItem('token', token);
    return user;
  }

  async forgotPass(payload: { email: string }): Promise<any> {
    const info = await this.load<{ message: string }>(
      `${ApiPath.AUTH}${AuthApiPath.FORGOT_PASSWORD}`,
      {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        payload: JSON.stringify(payload),
      },
    );
    return info;
  }

  async updatePass(payload: {
    oldPassword: string;
    newPassword: string;
  }): Promise<any> {
    const info = await this.load<{ message: string }>(
      `${ApiPath.AUTH}${AuthApiPath.UPDATE_PASSWORD}`,
      {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        payload: JSON.stringify(payload),
      },
    );
    return info;
  }
}

const authService = new AuthService();
export { authService };
