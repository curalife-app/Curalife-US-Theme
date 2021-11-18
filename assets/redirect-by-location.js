const detectRobot = (userAgent) => {
  const robots = new RegExp([
    /bot/,/spider/,/crawl/,
    /APIs-Google/,/AdsBot/,/Googlebot/,
    /mediapartners/,/Google Favicon/,
    /FeedFetcher/,/Google-Read-Aloud/,
    /DuplexWeb-Google/,/googleweblight/,
    /bing/,/yandex/,/baidu/,/duckduck/,/yahoo/,
    /ecosia/,/ia_archiver/,
    /facebook/,/instagram/,/pinterest/,/reddit/,
    /slack/,/twitter/,/whatsapp/,/youtube/,
    /semrush/,
  ].map((r) => r.source).join("|"),"i");
    return robots.test(userAgent);
    };

    const userAgent = navigator.userAgent;
    const isRobot = detectRobot(userAgent);

    if(!isRobot) {
    console.log('REDIRECTING...');
    let queryString=window.location.search;if(-1===queryString.indexOf("test")){var req=new XMLHttpRequest;req.overrideMimeType("application/json"),req.open("GET","https://geo.curalife.com/",!0),req.onload=function(){var e=JSON.parse(req.responseText);var n=["KW","SA","QA","OM","BH","AE"];function o(){return e.country}window.location.href.includes("admin")||window.location.href.includes("/it")||("US"===o()||"PR"===o()?window.location.hostname="curalife.com":n.includes(o())?window.location.hostname="trycuralife.com":"RO"==o()&&(window.location.hostname="curalife.ro"))},req.send(null)}
}