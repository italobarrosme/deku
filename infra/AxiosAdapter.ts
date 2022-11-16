import axios, { AxiosResponse } from 'axios';

export class AxiosAdapter {
  get(url: string) {
  
  const response = axios.get(url).then((res) => res.data);

  return response;
  
  }
}