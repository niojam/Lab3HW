module.exports = {
  devServer: {
    proxy: {
      "/quiz/quizzes": "http://localhost:8090",
    },
  },
};
