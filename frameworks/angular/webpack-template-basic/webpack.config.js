const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
    // 번들링 후 결과물의 처리 방식
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'})
    ]
}
// import