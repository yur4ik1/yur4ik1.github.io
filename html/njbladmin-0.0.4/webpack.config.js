const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    variables: "./src/assets/js/variables.js",
    acievements: "./src/assets/js/acievements.js",
    billing: "./src/assets/js/billing.js",
    branding: "./src/assets/js/branding.js",
    index: "./src/assets/js/index.js",
    levels: "./src/assets/js/levels.js",
    locallogin: "./src/assets/js/locallogin.js",
    positions: "./src/assets/js/positions.js",
    requests: "./src/assets/js/requests.js",
    rewards: "./src/assets/js/rewards.js",
    skills: "./src/assets/js/skills.js",
    subscription: "./src/assets/js/subscription.js",
    transactions: "./src/assets/js/transactions.js",
    users: "./src/assets/js/users.js",
    integrations: "./src/assets/js/integrations.js",
    main: "./src/assets/js/main.js",
  },
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "dist/assets/js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
