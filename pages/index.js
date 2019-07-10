/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import NewsIndex from "../components/news/NewsIndex";

class Index extends React.Component {

  static async getInitialProps({ mobxStore }) {
    if (!process.browser) {
      await mobxStore.homeStore.fetchNewsList()
    }
    return {}
  }


  render() {

    return (
      <NewsIndex/>
    );
  }
}


export default Index;
