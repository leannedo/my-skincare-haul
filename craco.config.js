const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#ff5d7e",
              "@text-color": "#2c3242",
              "@layout-body-background": "#fff",
              "@layout-sider-background": "#fff",
              "@item-active-bg": "#fff",
              "@layout-trigger-background": "@primary-color",
              "@menu-icon-size": 18,
              "@font-family": "Raleway, sans-serif",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
