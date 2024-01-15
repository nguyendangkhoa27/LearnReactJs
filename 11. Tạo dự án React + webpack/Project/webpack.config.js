const path = require('path'); // path là thư viện của nodejs dùng để định tuyến được những vị trí một folder hay một file đang ở đâu trong dự án.
                             // dùng để cấu hình đường dẫn file bundle (là file cuối khi webpack đóng gói code.)

const HtmlWebpackPlugin = require('html-webpack-plugin'); // import thư viện html webpack plugin
module.exports = {
    entry: "./src/index.js", // file đầu vào của dự án. là file mà từ nó có thể đi đến các file resouce mà ta đã code.
    output: {
        path: path.join(__dirname, "/build"), //__dirname dùng để lấy thư mục project // dòng này để cấu hình dường dẫn thư mục chứa file bundle
        filename: "bundle.js" // tên file bundle;
    },
    module:{ // nơi cấu hình những module js, css, img...
        rules:[ // các là mảng chứa những object để cấu hình cho những module riêng biệt.
            {
                test: /\.js$/, // cấu hình các file module theo extension 
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["css-loader","style-loader"]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html' // file html muốn webpack nhúng file script bundle
        }),
    ]
}