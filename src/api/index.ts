import { ApiMethodTypes, ApiRequestType } from './../features/app/models/App';
// @flow
import Axios from 'axios';
import {ApiEndPoint} from './ApiConstants';

export default function api(
  URL: string,
  method: ApiMethodTypes,
  params = null,
  data = null,
) {
  const options: ApiRequestType = {};
  if (params) {
    options.params = params;
  }
  if (data) {
    options.data = data;
  }
  return Axios.create({
    baseURL: ApiEndPoint.BASE_URL,
    // headers: {'X-Requested-With': 'XMLHttpRequest'},
    method: method,
    responseType: 'json',
    url: URL,
    ...options,
  });
}
