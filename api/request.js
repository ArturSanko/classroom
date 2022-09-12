// import { Options, Method } from 'got';
import got from 'got';

export class JSONRequest {
  options = {
    responsType: 'json',
  };

  url(url) {
    this.options.url = url;
    return this;
  }

  method(method) {
    this.options.method = method;
    return this;
  }

  searchParams(searchParams) {
    this.options.searchParams = searchParams;
    return this;
  }

  body(body) {
    this.options.json = body;
    return this;
  }

  send() {
    return got(this.options);
  }
}
