module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ],
    "@babel/flow"
  ],
  plugins: [
    "@babel/transform-flow-strip-types",
    "@babel/plugin-proposal-class-properties"
  ],
  retainLines: true,
  sourceMaps: "inline",
  ignore: ["node_modules", ".compiled"]
};
