import {
  ApiMethodModel,
  ApiStatusModel,
  ApiStatusCodeModel,
} from '../features/app/models/App';

export const ApiEndPoint = {
  BASE_URL: '',
};

export const ApiMethod: ApiMethodModel = {
  GET: 'get',
  POST: 'post',
  UPDATE: 'update',
  DELETE: 'delete',
};

export const ApiKey: string = '';

export const ApiStatus: ApiStatusModel = {
  OK: 'ok',
  ERROR: 'error',
};

export const ApiStatusCode: ApiStatusCodeModel = {
  SUCCESS: 200,
  FAIL: 400,
};
