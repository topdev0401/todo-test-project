const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    console.log("1234");
  app.use(
    '/Tests/scripts/user-login.php',
    createProxyMiddleware({
      target: 'http://dev.rapptrlabs.com',
      changeOrigin: true,
    })
  );
};