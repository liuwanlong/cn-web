module.exports = {
  apps : [{
    name: 'cn-web',
    script: 'server/server.js',
    instances: 2,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 8080
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '154.8.169.156',
      ref  : 'origin/master',
      repo : 'git@github.com:liuwanlong/cn-web.git',
      path : '/home/www/cn-web/',
      'post-setup': 'yarn install && yarn next build && pm2 start ecosystem.config.js --env production',
      'post-deploy' : 'yarn install &&  yarn next build && pm2 reload ecosystem.config.js --env production',
      // env: {
      //   NODE_ENV: 'production'
      // },
    }
  }
};
