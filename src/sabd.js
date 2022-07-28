/*
 * SimpleAdBlockDetection
 * Version: 1.0.0
 * Author: Reimlex
 * 
 * GitHub: https://github.com/Reimlex/SimpleAdBlockDetection
 */

const SABD_BLOCKED = false;

function isBlocking() {
    var blocking = false;
    var element = document.getElementById('sabd');
    if (element) {
        let СlassFilter = ['ad', 'ads', 'adsbox', 'ad-placement', 'ad-placeholder', 'adbadge', 'BannerAd', 'banner', 'adsbygoogle', 'adContent'];
        СlassFilter.forEach(v => element.classList.add(v));
        if (window.getComputedStyle(element).getPropertyValue('display') == 'none') {
            blocking = true;
        }
    } else {
        blocking = false;
    }
    return blocking;
}

function isBlockingGoogleAds() {
    var blocking = false;
    try {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', false);
        xhr.send();
        blocking = xhr.status != 200;
    } catch (ex) {
        blocking = true;
    }
    return blocking;
}
