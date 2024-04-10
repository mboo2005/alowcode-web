import amisConfig from '../config/index'
import axios from 'axios';


export const customFetcher = ({ url, method, data, config, headers }: any) => {
  config = config || {};
  config.headers = config.headers || headers || {};
  // config.withCredentials = true;
  url = amisConfig.proxyUrl + "?url=" + encodeURIComponent(url)
  if (method !== 'post' && method !== 'put' && method !== 'patch') {
    if (data) {
      config.params = data;
    }
    return (axios as any)[method](url, config);
  } else if (data && data instanceof FormData) {
    // config.headers = config.headers || {};
    // config.headers['Content-Type'] = 'multipart/form-data';
  } else if (
    data &&
    typeof data !== 'string' &&
    !(data instanceof Blob) &&
    !(data instanceof ArrayBuffer)
  ) {
    data = JSON.stringify(data);
    config.headers['Content-Type'] = 'application/json';
  }

  return (axios as any)[method](url, data, config);
};