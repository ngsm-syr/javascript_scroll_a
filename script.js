// JavaScript

//実行する機能
const show = () => {
  console.log('ログを表示');
}

// functionを使った書き方
// function show() {
//   console.log('ログを表示');
// }

//監視機能の設置
const observer = new IntersectionObserver(show);

//監視対象の指示
observer.observe(document.querySelector('#img01'));