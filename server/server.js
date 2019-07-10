const express = require('express');
const mobxReact = require('mobx-react');
const next = require('next');
const proxy = require('http-proxy-middleware');
const { join } = require('path');
const { parse } = require('url');

const port = parseInt(process.env.PORT, 10) || 8080;
const dev = process.env.NODE_ENV !== 'production';
const { API_URL } = require("../lib/Constants.js");

const app = next({ dev });
const handle = app.getRequestHandler();

mobxReact.useStaticRendering(true);

const server = express();


app.prepare()
  .then(() => {

    // 代理设置
    server.use('/api', proxy({
      target: API_URL,
      changeOrigin: true,
    }));

    server.get('/articles/:sid', (req, res) => {
      let { sid } = req.params;
      return app.render(req, res, '/news/detail', { sid })
    });

    server.get('*', (req, res) => {
      const parsedUrl = parse(req.url, true);
      const rootStaticFiles = [];
      if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
        const path = join(__dirname, '../static', parsedUrl.pathname);
        app.serveStatic(req, res, path);
      } else {
        return handle(req, res);
      }
    });

    // server.listen
    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    })
  });