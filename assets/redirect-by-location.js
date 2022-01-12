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
        var e = JSON.parse(req.responseText);
        var o = ["KW", "SA", "QA", "OM", "BH", "AE"];

        function n() {
            return e.country
        }

        if ("AT" == n()) {window.location.hostname = "curalife.at"} // If Austria
        else if (o.includes(n())) {window.location.hostname = "trycuralife.com"} // If UAE Countries
        else if ("US" != n() && "PR" != n()) {window.location.hostname = "global.curalife.com"} // If not US or PR so Global
        //window.whereAmIFrom = n, window.location.href.includes("checkout-diabetic") || window.location.href.includes("admin") || window.location.href.includes("parcelpanel") || (o.includes(n()) ? window.location.hostname = "trycuralife.com" : "AT" == n() ? window.location.hostname = "curalife.at" : "US" != n() && "PR" != n() && (window.location.hostname = "global.curalife.com")), "undefined" != typeof geoRules && geoRules()
    }, req.send(null);
}