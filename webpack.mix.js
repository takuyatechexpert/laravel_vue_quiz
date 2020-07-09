let mix = require('laravel-mix');

mix.js('resources/js/home.js', 'public/js')
   .js('resources/js/quiz.js', 'public/js')
   .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css', {
      implementation: require('node-sass')
    });
// コンパイルはnode-sassを使用すると言う事

mix.browserSync({
  files: [
    "public/**/*.*"
    // publicディレクトリの監視するpahtを指定している*で全て指定
  ],
  proxy: "http://localhost:8000"
  // プロキシでは監視するサーバーを指定
});