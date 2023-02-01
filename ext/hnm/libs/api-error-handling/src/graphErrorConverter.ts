import jp from 'jsonpath';
import { ApiError } from './ApiError';

const graphErrorConverter = (url: string, payload: any): any => {
  if (payload) {
    const errors = jp.query(payload, '$..errors[*]');
    if ((errors ?? []).length > 0) {
      throw new ApiError(url, JSON.stringify(errors));
    }
  }
  return payload;
};

export default graphErrorConverter;
