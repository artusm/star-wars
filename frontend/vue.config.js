module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:9292",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
};
