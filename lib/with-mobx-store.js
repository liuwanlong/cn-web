import React from "react";
import initializeStore from "../stores";

const isServer = typeof window === "undefined";
const __NEXT_MOBX_STORE__ = "__NEXT_MOBX_STORE__";

function getOrCreateStore(initialMobxState) {
  if (isServer) {
    return initializeStore(initialMobxState);
  }
  if (!window[__NEXT_MOBX_STORE__]) {
    window[__NEXT_MOBX_STORE__] = initializeStore(initialMobxState);
  }
  return window[__NEXT_MOBX_STORE__];
}

export default App => {
  return class AppWithMobx extends React.Component {
    static async getInitialProps(appContext) {
      const mobxStore = getOrCreateStore();
      let appProps = {};
      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps.call(mobxStore, appContext);
      }
      return {
        ...appProps,
        initialMobxState: mobxStore
      };
    }

    constructor(props) {
      super(props);
      this.mobxStore = getOrCreateStore(
        (props.pageProps && props.pageProps.initialMobxState) || {}
      );
    }

    render() {
      return <App {...this.props} mobxStore={this.mobxStore}/>;
    }
  };
};