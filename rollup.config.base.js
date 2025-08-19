const babel = require("@rollup/plugin-babel").default;
const resolve = require("@rollup/plugin-node-resolve").default;
const commonjs = require("@rollup/plugin-commonjs");
const postcss = require("rollup-plugin-postcss");
// const svgr = require("@svgr/rollup");
const path = require("path");

module.exports = {
  plugins: [
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      alias: {
        "@assets": path.resolve(__dirname, "packages/assets"),
        "@karpotic": path.resolve(__dirname, "packages/karpotic"),
        "@fonts": path.resolve(__dirname, "packages/fonts"),
      },
    }),
    commonjs(),
    // svgr({
    //   svgo: true,
    //   dimensions: false,
    //   titleProp: true,
    // }),
    postcss({
      // 별도 CSS 파일로 추출 (라이브러리 배포 권장)
      extract: path.resolve("dist/style.css"),
      // CSS Modules는 *.module.css에만 적용
      modules: {
        auto: /\.module\.css$/,
        generateScopedName: "[local]___[hash:base64:5]",
      },
      // 일반 .css도 처리되게 두고(전역), 필요한 변환은 PostCSS 플러그인에서
      minimize: true,
      sourceMap: true,
      plugins: [
        require("postcss-import"),
        require("autoprefixer"),
        require("postcss-url")({ url: "copy", useHash: true }),
      ],
    }),
    babel({
      babelHelpers: "runtime",
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      exclude: "node_modules/**",
      rootMode: "upward",
    }),
  ],
  external: ["react", "react-dom", "@babel/runtime"],
};
