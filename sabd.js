// v1.0.0
// Script by Reimlex
// GitHub: https://github.com/Reimlex

function isBlocking() {
    var blocking = false;
    var element = document.getElementById('sabd');
    if (element) {
        let CL = ['ad', 'ads', 'doubleclick', 'ad-placement', 'ad-placeholder', 'adbadge', 'BannerAd', 'banner', 'adsbygoogle'];
        for (let item of CL) {
            element.classList.add(item);
        }
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
