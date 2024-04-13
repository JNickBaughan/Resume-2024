const StylexPlugin = require('@stylexjs/webpack-plugin');
var base = require("./webpack.base");
const { merge } = require("webpack-merge");

module.exports = (env, argv) => (merge(base, {
	entry: "./src/client",
  output: {
    path: base.output.path,
    filename: "bundle.js"
  },
  plugins: [
    new StylexPlugin({
      filename: 'styles.css',
      // get webpack mode and set value for dev
      dev: argv.mode === 'development',
      // Use statically generated CSS files and not runtime injected CSS.
      // Even in development.
      runtimeInjection: false,
      // optional. default: 'x'
      classNamePrefix: 'x',
      // Required for CSS variable support
      unstable_moduleResolution: {
        // type: 'commonJS' | 'haste'
        // default: 'commonJS'
        type: 'commonJS',
        // The absolute path to the root directory of your project
        rootDir: __dirname,
      },
    }),
  ]
}));
