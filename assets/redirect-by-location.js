const detectRobot = (userAgent) => {
    const robots = new RegExp([
        /bot/, /spider/, /crawl/,
        /APIs-Google/, /AdsBot/, /Googlebot/,
        /mediapartners/, /Google Favicon/,
        /FeedFetcher/, /Google-Read-Aloud/,
        /DuplexWeb-Google/, /googleweblight/,
        /bing/, /yandex/, /baidu/, /duckduck/, /yahoo/,
        /ecosia/, /ia_archiver/,
        /facebook/, /instagram/, /pinterest/, /reddit/,
        /slack/, /twitter/, /whatsapp/, /youtube/,
        /semrush/,
    ].map((r) => r.source).join("|"), "i");
    return robots.test(userAgent);
};

const userAgent = navigator.userAgent;
const isRobot = detectRobot(userAgent);

if (!isRobot) {
    console.log('REDIRECTING...');
    var req = new XMLHttpRequest;
    req.overrideMimeType("application/json"), req.open("GET", "https://geo.curalife.com/", !0), req.onload = function() {
        var country = JSON.parse(req.responseText).country;
        var o = ["KW"];

        if ((location.hostname == "curalife.com") && (country != "US" && country != "PR")) { // If US and not US or PR so go Global
            window.location.hostname = "global.curalife.com";
            //window.whereAmIFrom = n, window.location.href.includes("checkout-diabetic") || window.location.href.includes("admin") || window.location.href.includes("parcelpanel") || (o.includes(n()) ? window.location.hostname = "trycuralife.com" : "AT" == n() ? window.location.hostname = "curalife.at" : "US" != n() && "PR" != n() && (window.location.hostname = "global.curalife.com")), "undefined" != typeof geoRules && geoRules()
        }
        else if ((location.hostname == "global.curalife.com") && (country === "US" || country === "PR")) // If Global and we are on US or PR so go US
        {
            window.location.hostname = "curalife.com";
        }
        else if (country == "AT") {window.location.hostname = "curalife.at"} // If Austria
        else if (country == "KW") {window.location.hostname = "trycuralife.com"} // If Kuwait
    }, req.send(null);
}