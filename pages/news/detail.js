import React from 'react';
import NewsDetail from "../../components/news/NewsDetail";

class Detail extends React.Component {
  static async getInitialProps({ query, mobxStore }) {
    if (!process.browser) {
      await mobxStore.homeStore.fetchNewDetail(query.sid)
    }
    return {}
  }

  render() {
    return (
      <NewsDetail/>
    )
  }
}

export default Detail;