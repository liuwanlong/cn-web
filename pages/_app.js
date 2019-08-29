import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { Provider } from 'mobx-react';
import initializeStore from "../stores";
import CompatibleDocument from "../lib/utils/CompatibleDocument";
import ThemeApp from "../components/ThemeApp";
import { getCookie, getCookieFromStr } from "../lib/utils/cookies";

class MyApp extends App {

  static async getInitialProps(appContext) {
    // Get or Create the store with `undefined` as initialState
    // This allows you to set a custom default initialState
    let initializeStoreData = null;
    const cookies = appContext.ctx.req.cookies;
    if (cookies) {
      const palette = getCookieFromStr('palette', cookies.split(';'));
      if (palette && typeof palette === 'string') {
        const paletteJSON = JSON.parse(palette);
        initializeStoreData = {
          themeStore: {
            palette: paletteJSON
          }
        };
      }
    }
    const mobxStore = initializeStoreData ? initializeStore(initializeStoreData) : initializeStore();
    // Provide the store to getInitialProps of pages
    appContext.ctx.mobxStore = mobxStore;

    let appProps = await App.getInitialProps(appContext);

    return {
      ...appProps,
      initialMobxState: mobxStore
    };
  }

  constructor(props) {
    super(props);
    const isServer = !process.browser;
    this.mobxStore = isServer
      ? props.initialMobxState
      : initializeStore(props.initialMobxState);
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
    //ios设备下semantic一些点击事件无效;
    if ('ontouchstart' in document.documentElement && ['ipad', 'ipod', 'iphone'].indexOf(CompatibleDocument.platform) > -1) {
      document.body.style.cursor = 'pointer';
    }

    // this.mobxStore.themeStore.resetConfig(JSON.parse(getCookie('palette')));
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>Cnbeta新闻</title>
          <meta name="theme-color" content={this.mobxStore.themeStore.theme.palette.primary.main}/>
        </Head>
        <Provider {...this.mobxStore}>
          <ThemeApp Component={Component} pageProps={pageProps}/>
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
