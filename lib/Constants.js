//线上请求URL
const PRODUCTION_API_URL = 'https://api.battleangel.online';
//测试环境URL
const DEV_API_URL = 'http://localhost:3001';

module.exports = {
  API_URL: process.env.NODE_ENV === 'production' ? PRODUCTION_API_URL : DEV_API_URL
}