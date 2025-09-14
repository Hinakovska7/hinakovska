/**
 * header.htmlを読み込む
 * footer.htmlを読み込む
 * すべてのHTMLファイルの<header>と<footer>にそれぞれheader.htmlとfooter.htmlを埋め込む
 */

document.addEventListener('DOMContentLoaded', function() {
    fetch('/hinakovska/hinakovska/include/header.html')
        .then(res =>  {
            if (res.ok) {
                return res.text()
            }
            throw new Error('指定のリソースが無効です。');
        })
        .then(html => document.getElementById('header').innerHTML = html)
        .catch(e => window.alert(`例外発生：${e.message}`))
}, false);
    
document.addEventListener('DOMContentLoaded', function() {
    fetch('/hinakovska/hinakovska/include/footer.html')
        .then(res =>  {
            if (res.ok) {
                return res.text()
            }
            throw new Error('指定のリソースが無効です。');
        })
        .then(html => document.getElementById('footer').innerHTML = html)
        .catch(e => window.alert(`例外発生：${e.message}`))
}, false);