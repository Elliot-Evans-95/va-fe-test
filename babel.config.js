// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
    "@babel/preset-react",
    "next/babel",
  ],
};
