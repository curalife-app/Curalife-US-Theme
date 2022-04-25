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
    let req = new XMLHttpRequest;
    req.overrideMimeType("application/json"), req.open("GET", "https://geo.curalife.com/", !0), req.onload = function() {
        let country = JSON.parse(req.responseText).country;
        let host = location.hostname == "global.curalife.com" ? "Global" : "USA";

        function redirectTo(url) {
            window.location.hostname = url;
        }

        if ((host == "USA") && (country != "US" && country != "PR")) { // If US and not US or PR so go Global
            redirectTo("global.curalife.com")
        }
        else if ((host == "Global") && (country === "US" || country === "PR")) // If Global and we are on US or PR so go US
        {
            redirectTo("curalife.com");
        }
        else if (country == "AT") {redirectTo("curalife.at")} // If Austria
        else if (country == "KW") {redirectTo("trycuralife.com")} // If Kuwait
    }, req.send(null);
}