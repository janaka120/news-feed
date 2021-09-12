export interface Record {
  [key: string]: any;
}

export type ApiMethodTypes =
  | 'get'
  | 'post'
  | 'delete'
  | 'GET'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'purge'
  | 'PURGE'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK'
  | undefined;
export interface ApiMethodModel extends Record {
  GET: ApiMethodTypes;
  POST: ApiMethodTypes;
  UPDATE: ApiMethodTypes;
  DELETE: ApiMethodTypes;
}

export type ApiStatusTypes = 'ok' | 'error';
export interface ApiStatusModel extends Record {
  OK: ApiStatusTypes;
  ERROR: ApiStatusTypes;
}

export type ApiStatusCodeTypes = 200 | 400;
export interface ApiStatusCodeModel extends Record {
  SUCCESS: ApiStatusCodeTypes;
  FAIL: ApiStatusCodeTypes;
}

export interface ApiRequestType {
  params?: any;
  data?: any;
}
export interface NameValuePairType<T> {
  label: string;
  value: T;
}
