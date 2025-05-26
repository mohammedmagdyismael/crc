import axios from 'axios';

const request = {
  get(headers, url, params) {
    const configOptions = {
      params,
      headers,
    };

    const apiCallPromis = axios.get(url, configOptions);
    return apiCallPromis;
  },

  post(headers, url, params) {
    const configOptions = {
      headers,
    };

    const apiCallPromis = axios.post(url, params, configOptions);
    return apiCallPromis;
  },

  put(headers, url, params) {
    const configOptions = {
      headers,
    };

    const apiCallPromis = axios.put(url, params, configOptions);
    return apiCallPromis;
  },

  delete(headers, url, params) {
    const configOptions = {
      headers,
    };

    const apiCallPromis = axios.delete(url, params, configOptions);
    return apiCallPromis;
  },

  patch(headers, url, params) {
    const configOptions = {
      headers,
    };

    const apiCallPromis = axios.patch(url, params, configOptions);
    return apiCallPromis;
  },
};

const wrap =
  method =>
  async (customHeaders = {}, ...props) => {

      let headers = {
        ...customHeaders,
      };

      return request[method](headers, ...props);
  };

export const get = wrap('get');
export const post = wrap('post');
export const put = wrap('put');
export const patch = wrap('patch');
export const del = wrap('delete');
