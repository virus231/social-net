const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = (app) =>
{
    app.use(
        "/api",
        createProxyMiddleware({
            timeout: 120000,
            target: 'https://social-network.samuraijs.com',
            changeOrigin: true,
        }),
    );
};