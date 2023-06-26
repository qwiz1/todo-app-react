import { HttpHeader, HttpMethod } from 'src/common/enums';
import { HeaderProps, HttpOptions } from 'src/common/types';

class Http {
  private baseUrl?: string;

  private apiVersion?: string;

  constructor(
    baseUrl: string = import.meta.env.SERVER_URL || 'http://localhost:4200',
    apiVersion: string = import.meta.env.API_VERSION || 'api/v1',
  ) {
    this.baseUrl = baseUrl;
    this.apiVersion = apiVersion;
  }

  async load<T = unknown>(
    url: string,
    options: Partial<HttpOptions> = {},
  ): Promise<T> {
    const {
      method = HttpMethod.GET,
      payload = null,
      contentType,
      hasAuth = true,
    } = options;
    const headers = this.getHeaders({
      contentType,
      hasAuth,
    });

    return fetch(this.getUrl(url), {
      method,
      headers,
      body: payload,
    })
      .then(this.checkStatus)
      .then((res) => this.parseJSON<T>(res))
      .catch(this.throwError);
  }

  private getUrl(url: string) {
    return `${this.baseUrl}/${this.apiVersion}${url}`;
  }

  private getHeaders({ contentType, hasAuth }: HeaderProps): Headers {
    const headers = new Headers();

    if (contentType) {
      headers.append(HttpHeader.CONTENT_TYPE, contentType);
    }
    if (hasAuth) {
      const token = localStorage.getItem('token');

      headers.append(HttpHeader.AUTHORIZATION, `Bearer ${token}`);
    }

    return headers;
  }

  private async checkStatus(response: Response): Promise<Response> {
    if (!response.ok) {
      const parsedException = await response.json().catch(() => ({
        message: response.statusText,
      }));

      throw new Error(parsedException?.message);
    }
    return response;
  }

  private parseJSON<T>(response: Response): Promise<T> {
    return response.json();
  }

  private throwError(error: Error): never {
    throw error;
  }
}

export { Http };
