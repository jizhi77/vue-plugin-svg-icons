const path = require("path");
const resolve = path.resolve;

module.exports = {
  chainWebpack(config) {
    // 设置 svg-sprite-loader
    // 首先把原来svg应用的loader(file-loader)先排除
    config.module.rule("svg").exclude.add(resolve("src/")).end();

    // 专门增加一个icons的规则
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  },
};
