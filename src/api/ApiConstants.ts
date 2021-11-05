import {
  ApiMethodModel,
  ApiStatusModel,
  ApiStatusCodeModel,
} from '../features/app/models/App';

export const ApiEndPoint = {
  BASE_URL: 'https://pixabay.com/api/',
};

export const ApiMethod: ApiMethodModel = {
  GET: 'get',
  POST: 'post',
  UPDATE: 'put',
  DELETE: 'delete',
};

export const ApiKey: string = '24159451-79d7f87686c87f5a8a858a8b3';

export const ApiStatus: ApiStatusModel = {
  OK: 'ok',
  ERROR: 'error',
};

export const ApiStatusCode: ApiStatusCodeModel = {
  SUCCESS: 200,
  FAIL: 400,
};
