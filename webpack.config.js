let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'index.js',
        publicPath: 'dist/'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            "@babel/plugin-transform-react-jsx",
                            "@babel/plugin-proposal-class-properties"
                        ]
                    }
                }
            },
            {
                test: /\.module\.css$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development'
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[local]--[hash:base64:5]'
                            }
                        }

                    }

                ],

            },
            {
                test: /^((?!\.module).)*css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development'
                        }
                    },
                    'css-loader'
                ]

            }
        ]
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
            '~c': path.resolve(__dirname, 'src/components'),
            '~d': path.resolve(__dirname, 'src/data'),
            '~a': path.resolve(__dirname, 'src/data/actions'),
            '~r': path.resolve(__dirname, 'src/data/reducers')
        }
    }
};

module.exports = conf;
