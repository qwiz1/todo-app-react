import { ContentType, HttpMethod } from '../../enums';

type HttpOptions = {
  method: HttpMethod;
  contentType: ContentType;
  payload: BodyInit | null;
  hasAuth: boolean;
};

export type { HttpOptions };
