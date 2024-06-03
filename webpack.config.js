// import
const path = require('path') // 비 설정 시 path를 절대경로로 명시해야합니다.
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

//export
module.exports = {
    // 파일을 읽어들이기 시작하는 진입점 설정
    entry: './js/main.js',

    // 결과물(번들)을 반환하는 설정
    output: {
        // path: path.resolve(__dirname, 'dist'), //__dirname(파일이 들어있는 현재 경로)
        // filename: 'main.js',
        clean : true // 빌드 명령 후 새로운 파일 생성 시 기존 내용 삭제
    },
    
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },

    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                {from : 'static'}
            ]
        })
    ],

    devServer: {
        host : 'localhost'
    }
}