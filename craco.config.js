module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8090",
        pathRewrite: { "^/api": "" },
      },
      "/public-api": {
        target: "http://localhost:8080",
        pathRewrite: { "^/public-api": "" },
      },
    },
  },
};
