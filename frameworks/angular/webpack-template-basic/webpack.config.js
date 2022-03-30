const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin') // 특정한 디렉터리나 파일을 복사해 번들링 된 폴더 내에 경로로 삽입하는 플러그인
// export
module.exports = {
    // 파일을 읽어들이기 시작하는 진입점 설정
    resolve: {
        extensions:['.js']
    },
    entry: './js/main.js',

    // 결과물(번들)반환 설정
    // resolve는 절대경로, join은 상대경로이다.
    output: {
        // webpack은 기본 default설정이 dist폴더이기 때문에 설정하지 않아도 자동으로 생성됨
        // path: path.resolve(__dirname, 'dist'),
        path: path.join(__dirname, 'dist'),
        filename: 'main.js',
        clean: true, // 이전의 build파일 clean
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            },
            {
            test: /\.s?css$/, // css 파일로 만들고 싶을 때 style-loader대신 사용한다 
            use: [ // 뒤(sass-loader)에서부터 실행된다 && 모듈로 변경된 css를 js로 읽게함
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
            }
        ]
    },
    // 번들링 후 결과물의 처리 방식
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'}),
        new CopyPlugin({patterns: [
            { from: 'static' }
        ]})
    ],

    devServer: {
        host: 'localhost'
    }
}
// import