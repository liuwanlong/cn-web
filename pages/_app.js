import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { Provider } from 'mobx-react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import initializeStore from "../stores";
import Layout from "../components/Layout";
import CompatibleDocument from "../lib/utils/CompatibleDocument";

class MyApp extends App {

  static async getInitialProps(appContext) {
    // Get or Create the store with `undefined` as initialState
    // This allows you to set a custom default initialState
    const mobxStore = initializeStore();
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
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>Cnbeta新闻</title>
        </Head>
        <Provider {...this.mobxStore}>
          <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
