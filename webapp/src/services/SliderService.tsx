import axios, { AxiosResponse } from 'axios';

interface Slider {
  tittle: string,
  content: string,
  urlImg: string
}
export default class SliderService {
  static getSliders() : Promise<AxiosResponse> {
    return  axios.get('http://localhost:3000/sliders');
  }

  static getArticles() : Promise<AxiosResponse> {
    return  axios.get('http://localhost:3002/articles');
  }
  static getFullArticle(articleId: string | undefined) : Promise<AxiosResponse> {
    return  axios.get('http://localhost:3002/articles/' + articleId);
  }

}

