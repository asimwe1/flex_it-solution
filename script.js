{
    (function (w, d, s, l, i) {
        w[l] = w[l] || []; w[l].push({
            'gtm.start':
                new Date().getTime(), event: 'gtm.js'
        }); var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-MS2BNB');
}

{
    var mainDomain = ".templatemonster.com", popularDomains = {
        "http://360.cn/": "360.cn", "http://www.alice.com/": "Alice", "http://aliceadsl.fr": "Alice", "http://www.alltheweb.com/": "Alltheweb", "http://www.altavista.com/": "Altavista", "http://www.aol.com/": "AOL", "http://www.ask.com/": "Ask", "http://search.aol.fr": "Ask", "alicesuche.aol.de": "Ask", "http://search.auone.jp/": "Auone", "http://isearch.avg.com": "Avg", "http://search.babylon.com": "Babylon", "http://www.baidu.com/": "Baidu", "http://biglobe.ne.jp": "Biglobe",
        "http://www.bing.com/": "Bing", ".bing.com": "Bing", "http://search.centrum.cz/": "Centrum.cz", "http://search.comcast.net": "Comcast", "http://search.conduit.com": "Conduit", "http://www.cnn.com/SEARCH/": "CNN", "http://www.daum.net/": "Daum", "http://duckduckgo.com": "DuckDuckGo", "http://www.ecosia.org": "Ecosia", "http://www.ekolay.net/": "Ekolay", "http://www.eniro.se/": "Eniro", "http://www.globo.com/busca/": "Globo", "http://go.mail.ru/": "go.mail.ru", "www.google.com": "Google", "www.google.co.uk": "Google", "www.google.": "Google",
        "google.com": "Google", "http://goo.ne.jp": "goo.ne", "http://www.haosou.com/s": "haosou.com", "http://search.incredimail.com": "Incredimail", "http://www.kvasir.no/": "Kvasir", "http://www.lycos.com/": "Lycos", "http://search.lycos.de": "Lycos", "http://www.mamma.com/": "Mamma", "http://www.msn.com/": "MSN", "http://money.msn.com": "MSN", "http://local.msn.com": "MSN", "http://www.mynet.com/": "Mynet", "http://najdi.si": "Najdi", "http://www.naver.com/": "Naver", "http://search.netscape.com/": "Netscape", "http://szukaj.onet.pl": "ONET",
        "http://www.ozu.es/": "Ozu", "https://www.qwant.com/": "Qwant", "http://rakuten.co.jp": "Rakuten", "http://rambler.ru/": "Rambler", "http://search-results.com": "Search-results", "http://search.smt.docomo.ne.jp": "search.smt.docomo", "http://sesam.no/": "Sesam", "http://www.seznam.cz/": "Seznam", "http://www.so.com/s": "So.com", "http://www.sogou.com/": "Sogou", "http://www.startsiden.no/sok": "Startsiden", "http://www.szukacz.pl/": "Szukacz", "http://buscador.terra.com.br": "Terra", "http://search.tut.by/": "Tut.by", "http://search.ukr.net/": "Ukr",
        "http://search.virgilio.it/": "Virgilio", "http://www.voila.fr/": "Voila", "http://www.wp.pl/": "Wirtualna Polska", "http://www.yahoo.com/": "Yahoo", "http://yahoo.cn": "Yahoo", "m.yahoo.com": "Yahoo", "yahoo.com": "Yahoo", "http://www.yandex.com/": "Yandex", "http://yandex.ru": "Yandex", "http://www.yam.com/": "Yam"
    }; function setCookie(a, b) { var d = 14, c = new Date; c.setTime(c.getTime() + 864E5 * d); d = "expires\x3d" + c.toUTCString(); document.cookie = a + "\x3d" + b + ";" + d + ";domain\x3d" + mainDomain + ";path\x3d/" }
    function getCookie(a) { if (a = document.cookie.match(new RegExp("(^| )" + a + "\x3d([^;]+)"))) return a[2] }
    function setUTMCookie() {
        var a = window.location.search, b = new URLSearchParams(a), d = b.get("gclid"); a = b.get("utm_source"); var c = b.get("utm_medium"), e = b.get("utm_campaign"), g = b.get("utm_term"); b = b.get("utm_content"); if (d) setCookie("gclid", d), setCookie("utm_source", "google"), setCookie("utm_medium", "cpc"), setCookie("utm_campaign", e || "none"), setCookie("utm_term", g || "none"), setCookie("utm_content", b || "none"); else if (d = getCookie("gclid"), setCookie("gclid", d || "NULL"), a || c || e || g || b) setCookie("utm_source", a || "none"),
            setCookie("utm_medium", c || "none"), setCookie("utm_campaign", e || "none"), setCookie("utm_term", g || "none"), setCookie("utm_content", b || "none"); else {
            e = document.referrer; var k = document.location.href; c = [mainDomain, "template-help.com", "stripe.com", "paypal.com", "sofort.com", "paydirekt.de", "r3.girogate.de", "diensten.asnbank.nl", "ideal.bunq.com", "ideal.ing.nl", "ideal2.knab.nl", "app.n26.com", "oba.revolut.com", "diensten.snsbank.nl", "ideal.triodos.nl", "auth.private.vanlanschotkempen.com", "pay.bitsafe.com", "auth.aliorbank.pl",
                "bankmillennium.pl", "go.przelewy24.pl", "banknowy24.pl", "api.pekao24.pl", "pbn.paybynet.com.pl", "eblik.pl", "goonline.bnpparibas.pl", "bosbank24.pl", "citibankonline.pl", "ca24.credit-agricole.pl", "online.pocztowy.pl", "secure.velobank.pl", "login.ingbank.pl", "auth.inteligo.pl", "online.mbank.pl", "login.nestbank.pl", "auth.pkobp.pl", "plusbank24.pl", "centrum24.pl"]; g = c.find(function (f) { return !!k.includes(f) }); a = getCookie("utm_source"); if (e) {
                    e = new URL(e); var h = e.hostname; (c = c.find(function (f) { return !!h.includes(f) })) ?
                        a || (setCookie("utm_source", "direct"), setCookie("utm_medium", "none"), setCookie("utm_campaign", "none"), setCookie("utm_term", "none"), setCookie("utm_content", "none")) : (a = Object.keys(popularDomains), a = a.find(function (f) { return !!f.includes(h) || !!h.includes(f) }), c = popularDomains[a], a ? (setCookie("utm_source", c.toLowerCase()), setCookie("utm_medium", "organic")) : (setCookie("utm_source", h), setCookie("utm_medium", "referral")), setCookie("utm_campaign", "none"), setCookie("utm_term", "none"), setCookie("utm_content",
                            "none"))
                } else g && !a && (setCookie("utm_source", "direct"), setCookie("utm_medium", "none"), setCookie("utm_campaign", "none"), setCookie("utm_term", "none"), setCookie("utm_content", "none"))
        }
    } setUTMCookie();
}

{
    window.__app__ = window.__app__ || {};
    window.__app__ = { "language": "en", "apiLocale": "en", "analytics": { "pageType": "Demo" }, "js": { "cookieDomain": ".templatemonster.com", "liveDemoDomain": "\/\/demo.templatemonster.com\/", "fontPreviewDomain": "\/\/s3f.tmimgcdn.com\/", "domain": "https:\/\/www.templatemonster.com", "api": { "f1": "https:\/\/www.templatemonster.com\/f1\/api", "products": "https:\/\/api.templatemonster.com\/products", "pages": "https:\/\/api.templatemonster.com\/pages", "navigations": "https:\/\/api.templatemonster.com\/navigations", "properties": "https:\/\/api.templatemonster.com\/properties", "authors": "https:\/\/api.templatemonster.com\/authors", "currencies": "https:\/\/api.templatemonster.com\/currencies", "reviews": "https:\/\/api.templatemonster.com\/reviews", "collection": "https:\/\/api.templatemonster.com\/collection", "carts": "https:\/\/api.templatemonster.com\/carts", "users": "https:\/\/api.templatemonster.com\/users", "payment-clients": "https:\/\/api.templatemonster.com\/payment-clients", "promos": "https:\/\/api.templatemonster.com\/promos", "services": "https:\/\/api.templatemonster.com\/services", "licenses": "https:\/\/api.templatemonster.com\/licenses", "support": "https:\/\/api.templatemonster.com\/support", "orders": "https:\/\/api.templatemonster.com\/orders", "discounts": "https:\/\/api.templatemonster.com\/discounts", "mailer": "https:\/\/api.templatemonster.com\/mailer", "marketplace-services": "https:\/\/api.templatemonster.com\/marketplace-services", "consul": "https:\/\/api.templatemonster.com", "tickets": "https:\/\/api.templatemonster.com\/tickets" }, "revive": { "url": "https:\/\/r5.templatemonster.com\/dl\/1asyncjs.php", "zoneId": 2, "hash": "5744eda1a89c46c055297f86d855c494" }, "recaptchaSiteKey": "6LeaeVAdAAAAALs6W5unPcr6EWXTc5ZYpy4Irks3", "centrifuge": "wss:\/\/socket.templatemonster.com", "stripe": { "stripePublicKey": "pk_live_H5qyFec6DCp3zddA8UkTb5aE", "stripeId": "59d3a31deebec520e279c65e" }, "consulUrl": "http:\/\/api.templatemonster.com", "currency": { "code": "USD", "rate": 1 }, "abExperimentId": "prod_of_c_0802", "abExperimentInit": false } };
}

{
    window.addEventListener('load', function () {
        window.dataLayer = window.dataLayer || []; window.dataLayer.push({ "pageType": "Demo", "portalName": "All", "portalContent": "All", "categoryName": "Other" });
    });
    window.addEventListener('load', function () {
        window.dataLayer = window.dataLayer || []; window.dataLayer.push({ "ecommerce": null }); window.dataLayer.push({ "event": "view_item", "ecommerce": { "items": [{ "item_id": "297700", "item_name": "1", "affiliation": "AminThemes", "discount": 0, "item_brand": "Website templates", "item_category": "Website", "item_category2": "in_one - true", "item_category3": "updated - true", "item_category4": "booster - 125", "item_variant": "premium + 46", "price": 0.39, "quantity": 1, "item_list_name": "", "index": 1 }] } }); window.dataLayer.push({ "event": "detailViewNew", "productDetailView": { "name": "Flex-IT | Business Services &amp;  IT Solutions Multipurpose HTML5 Responsive Website Template", "id": "297700", "price": 0.39, "brand": "Website templates", "category": "Website", "variant": "premium + 46", "imageurl": "https:\/\/s.tmimgcdn.com\/scr\/800x500\/297700\/flex-it--business-services-amp-it-solutions-multipurpose-html5-responsive-website-template_297700-9-original.jpg", "similars": [] } });
    });

}

{
    function runChat() {
        "RU" != google_tag_manager["rm"]["456999"](57) && "BY" != google_tag_manager["rm"]["456999"](58) && (window.__lc = window.__lc || {}, window.__lc.license = 9531830, function (e, f, c) {
            function d(a) { return b._h ? b._h.apply(null, a) : b._q.push(a) } var b = {
                _q: [], _h: null, _v: "2.0", on: function () { d(["on", c.call(arguments)]) }, once: function () { d(["once", c.call(arguments)]) }, off: function () { d(["off", c.call(arguments)]) }, get: function () { if (!b._h) throw Error("[LiveChatWidget] You can't use getters before load."); return d(["get", c.call(arguments)]) },
                call: function () { d(["call", c.call(arguments)]) }, init: function () { var a = f.createElement("script"); a.async = !0; a.type = "text/javascript"; a.src = "https://cdn.livechatinc.com/tracking.js"; f.head.appendChild(a) }
            }; !e.__lc.asyncInit && b.init(); e.LiveChatWidget = e.LiveChatWidget || b
        }(window, document, [].slice))
    } setTimeout(function () { runChat() }, 4E3);
}

{
    (function wait() { if ("undefined" !== typeof fbq && "2.9" < fbq.version) { var a = "en" == google_tag_manager["rm"]["456999"](19) ? "" : "_" + ("br" == google_tag_manager["rm"]["456999"](20) ? "pt" : google_tag_manager["rm"]["456999"](21)); -1 == document.location.href.search(".appspot.") && fbq("track", "ViewContent", { content_ids: [google_tag_manager["rm"]["456999"](22) + a], content_type: "product", product_group: google_tag_manager["rm"]["456999"](23), product_category: google_tag_manager["rm"]["456999"](24), value: google_tag_manager["rm"]["456999"](26), currency: "USD" }) } else setTimeout(wait, 3) })();
}

{
    function runPNTRprod() { pintrk("track", "pagevisit", { line_items: [{ product_name: google_tag_manager["rm"]["456999"](47), product_id: google_tag_manager["rm"]["456999"](48), product_category: google_tag_manager["rm"]["456999"](49), product_brand: google_tag_manager["rm"]["456999"](50) }] }) } setTimeout(function () { runPNTRprod() }, 7E3);
}

{
    var d = new Date; d.setTime(d.getTime() + 31536E6); var expires = "expires\x3d" + d.toGMTString(), event = google_tag_manager["rm"]["456999"](51); document.cookie = "ga" + event + "\x3d1; " + expires + "; domain\x3d.templatemonster.com; path\x3d/";
}

{
    function runPNTR() { !function (b) { if (!window.pintrk) { window.pintrk = function () { window.pintrk.queue.push(Array.prototype.slice.call(arguments)) }; var a = window.pintrk; a.queue = []; a.version = "3.0"; a = document.createElement("script"); a.async = !0; a.src = b; b = document.getElementsByTagName("script")[0]; b.parentNode.insertBefore(a, b) } }("https://s.pinimg.com/ct/core.js"); pintrk("load", "2617870333268"); pintrk("page") } setTimeout(function () { runPNTR() }, google_tag_manager["rm"]["456999"](56));
}

{
    setTimeout(function () { var a = document.createElement("script"); a.setAttribute("id", "cookiePolicyModal"); a.setAttribute("type", "text/javascript"); a.setAttribute("src", "https://account.templatemonster.com/cp/main.js"); a.setAttribute("data-project", "tm"); document.body.appendChild(a); a = document.createElement("link"); a.setAttribute("rel", "stylesheet"); a.setAttribute("href", "https://account.templatemonster.com/cp/main.css"); document.body.appendChild(a) }, 5E3);
}

{
    (function () {
        function h(b, a, d) { b = b + "\x3d" + a + "; path\x3d/; domain\x3d." + location.hostname.replace(/^www\./i, ""); "undefined" !== typeof d && (a = new Date, a.setTime(a.getTime() + d), b += "; expires\x3d" + a.toUTCString()); document.cookie = b } function k(b) { for (var a = document.cookie.split(";"), d, f = 0; f < a.length; f++) { var g = a[f].trim(); 0 === g.indexOf(b + "\x3d") && (d = g.substring((b + "\x3d").length, g.length)) } return d } var e = k("aff"), c = new URLSearchParams(window.location.search); (c = c.get("aff")) || (c = "TM"); e || (e = "TM" === c.toUpperCase() ?
            31536E8 : 5184E6, h("aff", c, e)); k("ref") || (e = btoa(document.referrer ? document.referrer : window.location.href), h("ref", e)); c && "TM" !== c.toUpperCase() && (window.dataLayer = window.dataLayer || [], window.dataLayer.push({ event: "trackAffiliate" }))
    })();
}

{
    function runFB() { !function (b, e, f, g, a, c, d) { b.fbq || (a = b.fbq = function () { a.callMethod ? a.callMethod.apply(a, arguments) : a.queue.push(arguments) }, b._fbq || (b._fbq = a), a.push = a, a.loaded = !0, a.version = "2.0", a.queue = [], c = e.createElement(f), c.async = !0, c.src = g, d = e.getElementsByTagName(f)[0], d.parentNode.insertBefore(c, d)) }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"); google_tag_manager["rm"]["456999"](59) && fbq("init", "undefined"); fbq("init", "838473489555909"); fbq("track", "PageView") }
    setTimeout(function () { runFB() }, 4E3);
}

{
    var seconds = 15; function explode() { str = ""; if (15 == seconds || 30 == seconds || 45 == seconds) str = "Interested(" + seconds + "s)"; else if (60 == seconds || 90 == seconds || 120 == seconds) str = "Engaged(" + seconds + "s)"; else if (180 == seconds || 300 == seconds || 600 == seconds) str = "Immersed(" + seconds + "s)"; "" != str && fbq("trackCustom", str); seconds += 15 } setInterval(explode, 15E3);
}
{
    !function (d, g, e) {
        d.TiktokAnalyticsObject = e; var a = d[e] = d[e] || []; a.methods = "page track identify instances debug on off once ready alias group enableCookie disableCookie".split(" "); a.setAndDefer = function (b, c) { b[c] = function () { b.push([c].concat(Array.prototype.slice.call(arguments, 0))) } }; for (d = 0; d < a.methods.length; d++)a.setAndDefer(a, a.methods[d]); a.instance = function (b) { b = a._i[b] || []; for (var c = 0; c < a.methods.length; c++)a.setAndDefer(b, a.methods[c]); return b }; a.load = function (b, c) {
            var f = "https://analytics.tiktok.com/i18n/pixel/events.js";
            a._i = a._i || {}; a._i[b] = []; a._i[b]._u = f; a._t = a._t || {}; a._t[b] = +new Date; a._o = a._o || {}; a._o[b] = c || {}; c = document.createElement("script"); c.type = "text/javascript"; c.async = !0; c.src = f + "?sdkid\x3d" + b + "\x26lib\x3d" + e; b = document.getElementsByTagName("script")[0]; b.parentNode.insertBefore(c, b)
        }; a.load("CL1TN7JC77UDR4OHA5S0"); a.page()
    }(window, document, "ttq");

}