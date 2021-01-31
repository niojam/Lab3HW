const devProxy = {
  devServer: {
    proxy: {
      "*": "http://localhost:8090",
    },
  },
};

const config = process.env.REACT_APP_STAGE === "dev" ? devProxy : {};

module.exports = {
  ...config,
};
