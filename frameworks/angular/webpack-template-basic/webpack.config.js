const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin') // 웹팩으로 빌드한 결과물로 HTML파일을 생성해주는 플러그인
// 1. webpack에서 생성된 번들을 자동으로 import하는 HTML파일을 생성, 매 빌드마다 bundle의 이름을 바꾸게된다면 HTML파일도 변경해주어야 하므로
// 2. 이것을 통해 HTML파일도 같이 생성
// 3. 개발자가 만든 index.html(template)을 참고하여 webpack에서 생성할 수 있도록 도와줌
const CopyPlugin = require('copy-webpack-plugin') // 특정한 디렉터리나 파일을 복사해 번들링 된 폴더 내에 경로로 삽입하는 플러그인
// 로더는 파일을 해석하고 변환하는 과정에 관여하는 반면, 플러그인은 해당 결과물의 형태를 바꾸는 역할
const postcssLoader = {    
	loader:'postcss-loader',    
    options:{        
    	postcssOptions:{            
        	config: path.resolve('./.postcsssrc.js'),        
            }    
    }
}
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
        clean: true, // 이전의 build파일 cleanx
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
                postcssLoader,
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