import React from 'react';
import { observer, inject } from "mobx-react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "./Layout";
import { ThemeProvider } from "@material-ui/styles";


@inject('themeStore')
@observer
class ThemeApp extends React.Component {
  render() {
    const { themeStore, Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={themeStore.theme}>
        <CssBaseline/>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default ThemeApp;