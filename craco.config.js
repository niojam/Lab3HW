module.exports = {
  devServer: {
    proxy: {
      "/oauth2/authorization/azure": "http://localhost:8090",
    },
  },
};
