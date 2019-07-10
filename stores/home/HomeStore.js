import { observable, flow } from "mobx";
import axios from '../../lib/axios';

class HomeStore {

  @observable text = "Hello Word!";
  @observable news = [];
  @observable detail = {};

  constructor(initialState = {}) {
    this.news = initialState.news;
    this.detail = initialState.detail;
  }


  fetchNewsList = flow(function* () {
    try {
      let response = yield axios.get('/articles');
      this.news = response.data.list;
    } catch (error) {
      console.log(error);
    }
  })

  fetchNewDetail = flow(function* (sid) {
    try {
      let response = yield  axios.get(`/articles/${sid}`);
      this.detail = response.data.new;
    } catch (error) {
      onsole.log(error);
    }
  })

}

export default HomeStore;
