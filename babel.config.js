module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { esmodules: true },
        bugfixes: true,
      },
    ],
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: false, // core-js를 사용하고 싶다면 true/3으로 설정
        helpers: true,
        regenerator: true,
        useESModules: true,
      },
    ],
  ],
};
