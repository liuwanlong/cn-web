import { observable, flow } from "mobx";
import axios from '../../lib/axios';

class HomeStore {

  @observable isLoading = false;
  @observable news = [];
  @observable detail = {};
  @observable page = 1;
  @observable pageSize = 15;

  constructor(initialState = {}) {
    this.news = initialState.news || [];
    this.detail = initialState.detail;
  }


  fetchNewsList = flow(function* () {
    try {
      const response = yield axios.get('/articles');
      const newList = response.data.list;
      if (this.news.length) {
        let _arr = [];
        newList.forEach(newItem => {
          if (this.news.findIndex(item => item.pk === newItem.pk) < 0) {
            _arr.unshift(newItem)
          }
        });
        this.news = _arr.concat(this.news);
      } else {
        this.news = newList;
      }
    } catch (error) {
      console.log(error);
    }
  });

  fetchMoreNews = flow(function* (succeeded) {
    try {
      this.isLoading = true;
      const response = yield axios.get('/articles', { params: { page: this.page + 1, pageSize: this.pageSize } });
      this.news = [].concat(this.news).concat(response.data.list);
      if (response.data.list.length) {
        this.page = Number(response.data.page);
      } else {
        this.page = Number(response.data.page) - 1;
      }
      this.isLoading = false;
      succeeded();
    } catch (error) {
      this.isLoading = false;
      console.log(error);
    }
  });

  fetchNewDetail = flow(function* (sid) {
    try {
      let response = yield  axios.get(`/articles/${sid}`);
      this.detail = response.data.new;
    } catch (error) {
      console.log(error);
    }
  })

}

export default HomeStore;
