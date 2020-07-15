const CracoLessPlugin = require("craco-less");

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            "@primary-color": "#ffd100",
                            "@layout-body-background": "#fff",
                            "@layout-sider-background": "#fff",
                            "@item-active-bg": "#fff",
                            "@layout-trigger-background": "@primary-color",
                            "@menu-item-font-size": "20px"
                        },
                        javascriptEnabled: true
                    }
                }
            }
        }
    ]
};