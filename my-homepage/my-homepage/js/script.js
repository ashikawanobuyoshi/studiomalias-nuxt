document.addEventListener('DOMContentLoaded', function() {
    // ページが読み込まれた後に実行されるコード

    // 例: ボタンがクリックされたときのイベントリスナー
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', function() {
            alert('ボタンがクリックされました！');
        });
    }

    // 例: 特定の要素のテキストを変更する
    const heading = document.getElementById('mainHeading');
    if (heading) {
        heading.textContent = 'ようこそ私のホームページへ！';
    }
});