const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const commonConfig = require("./webpack.common");

const devConfig = {
    mode: "development",
    devtool: "source-map",

    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: require.resolve("babel-loader"),
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-typescript",
                                "@babel/preset-react",
                            ],
                            plugins: [require.resolve("react-refresh/babel")],
                        },
                    },
                ],
            },
            {
                test: /\.(css|scss)$/,
                include: /\.module\.(css|scss)$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[local]-[hash:base64:5]",
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: "last 2 versions",
                                        },
                                    ],
                                    "autoprefixer",
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: "last 2 versions",
                                        },
                                    ],
                                    "autoprefixer",
                                ],
                            },
                        },
                    },
                ],
                exclude: /\.module\.(css|scss)$/,
            },
        ],
    },

    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": '"development"',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin({ overlay: { entry: false } }),
    ],

    devServer: {
        contentBase: path.resolve(__dirname, "../", "public"),
        publicPath: "/",
        port: 3000,
        historyApiFallback: true,
        hot: true,
        open: false,
        stats: {
            colors: true,
            hash: true,
            version: false,
            timings: true,
            assets: true,
            chunks: false,
            modules: false,
            reasons: false,
            children: false,
            source: false,
            errors: true,
            errorDetails: true,
            warnings: false,
            publicPath: true,
        },
    },
};

module.exports = merge(commonConfig, devConfig);
