// const url = require("url");
function getkey(key,token){ 
    var o = '//acs.aliexpress.com/h5/mtop .relationrecommend.aliexpressrecommend.recommend/1.0/', 
    // data = '{"appId":18390,"params":"{\"query\":\"2\",\"userMemberSeq\":\"\ ",\"language\":\"es\",\"site\":\"esp\",\"shipToCountry\":\"US\",\"shipToCity\":\"\",\" "clientType\":\"pc\",\"cookieId\":\"YRsUF5pqAkgCAbegKYZu6mi2\",\"statusOfUsingPrivacy\":\"\"}"}', 
    // data = {"appId":18390," params":"{\"query\":\"8000w\",\"userMemberSeq\":\"\",\"language\":\"es\",\"site\":\"esp\",\"shipToCountry\":\"US\",\"shipToCity\":\"\",\"clientType \":\"pc\",\"cookieId\":\"YRsUF5pqAkgCAbegKYZu6mi2\",\"statusOfUsingPrivacy\":\"\"}"}, 
    data = "{\"appId\":21144,\"params \":\"{\\\"query\\\":\\\"" + key + "\\\",\\\"userMemberSeq\\\":\\\"\\\",\ \\"language\\\":\\\"es\\\",\\\"site\\\":\\\"esp\\\",\\\"shipToCountry\\\":\\" \\"US\\\",\\\"shipToCity\\\":\\\"\\\",\\\"clientType\\\":\\\"pc\\\",\\ \"cookieId\\\":\\\"7HwBHS0iG20CAYHNcZ7QEuRt\\\",\\\"statusOfUsingPrivacy\\\":\\\"\\\"}\"}", 
    a = 12574478, 
    s = (new Date).getTime(), 
    // s = 1591249873585, 
    // e = '"c5ad33fbd21234fa0556e4be4d61bc9e&'+ s +'&24815441&{"appId":18390,"params":"{"query":"8000","userMemberSeq":"","language":"es","site":"esp","shipToCountry ":"US","shipToCity":"","clientType":"pc","cookieId":"YRsUF5pqAkgCAbegKYZu6mi2","statusOfUsingPrivacy":""}"}"' 
    // e = 'c5ad33fbd21234fa0556e4be4d61bc9e&159124143 8839&24815441&{"appId" :18390,"params":"{\"query\":\"8000w\",\"userMemberSeq\":\"\",\"language\":\"es\",\"site\":\"esp\",\"shipToCountry\":\"US\",\"shipToCity\":\"\",\" clientType\":\"pc\",\"cookieId\":\"YRsUF5pqAkgCAbegKYZu6mi2\",\"statusOfUsingPrivacy\":\"\"}"}' 
    // e = '5a39ba523aa53eeb829192f9a84ff118&'+ String(s) +' &24815441&{"appId":18390,"params":"{"query\":\"2\",\"userMemberSeq\":\"\",\"language\":\"es\",\" site\":\"esp\",\"shipToCountry\":\"US\",\"shipToCity\":\"\",\"clientType\":\"pc\",\"cookieId\" :\"YRsUF5pqAkgCAbegKYZu6mi2\",\"statusOfUsingPrivacy\":\"\"}"}', 
    // t = 'c5ad33fbd21234fa0556e4be4d61bc9e&1591241438839&24815441&{"appId":18390,"params":"{\"query\":\"8000w\",\"userMemberSeq\":\"\",\ "language\":\"es\",\"site\":\"esp\",\"shipToCountry\":\"US\",\"shipToCity\":\"\",\"clientType\ ":\"pc\",\"cookieId\":\"YRsUF5pqAkgCAbegKYZu6mi2\",\"statusOfUsingPrivacy\":\"\"}"}' 
    c = function(e) {
         function t(e, t) {
             return e << t | e >>> 32 - t 
            } 
            
            function n(e, t) { 
                var n, i, r, o, a; 
                return r = 2147483648 & e, 
                o = 2147483648 & t, 
                a = (1073741823 & e) + (1073741823 & t), 
                (n = 1073741824 & e) & (i = 1073741824 &t) ? 2147483648 ^ a ^ r ^ o : n | i ? 1073741824 & a ? 3221225472 ^ a ^ r ^ o : 1073741824 ^ a ^ r ^ o : a ^ r ^ o 
            } 
                
                function i(e, i, r, o, a, s, c) { 
                    return e = n(e, n(n(function(e, t, n) { 
                        return e & t | ~e & n 
                    }(i, r, o), a), c)), 
                        n(t(e, s), i) 
                    } 
                    
                function r(e, i, r, o, a, s, c) { 
                    return e = n(e, n(n(function(e, t , n) { 
                        return e & n | t & ~n 
                    }(i, r, o), a), c)), 
                    n(t(e, s), i) 
                } 
                    
                
                function o(e, i, r, o, a, s, c) { 
                    return e = n(e, n(n(function(e, t, n) { 
                        return e ^ t ^ n 
                    }(i, r, o), a), c)) ,
                     n(t(e, s), i) 
                
                } 
                     
                     
                 function a(e, i, r, o, a, s, c) { 
                    return e = n(e, n(n(function(e, t, n) { 
                        return t ^ (e | ~n) }(i, r, o), a), c)),
                         n(t(e, s), i) 
                 } 
                 
                 function s(e) { 
                    var t, n = " ", 
                    i = ""; 
                    for (t = 0; 3 >= t; t++) n += (i = "0" + (e >>> 8 * t & 255).toString(16)).substr( i. length - 2, 2);return n } var c, l, u, d, p, h, f, m, g, v; for (v = function(e) { for (var t, n = e.length, i = n + 8, r = 16 * ((i - i % 64) / 64 + 1), o = new Array(r - 1), a = 0, s = 0; n > s;) 
                    a = s % 4 * 8, 
                    o [t = (s - s % 4) / 4] = o[t] | e.charCodeAt(s) << a,
                    s++; 
                    return a = s % 4 * 8, 
                    o[t = (s - s % 4 ) / 4] = o[t] | 128 << a, 
                    o[r - 2] = n << 3, 
                    o[r - 1] = n >>> 29, 
                    o 
                 }(e = function(e) { 
                    e = e.replace(/\r\n/g, "\n"); for (var t = "", n = 0; n < e.length; n++) { 
                        var i = e.charCodeAt(n) ; 
                        128 > i ? t += String.fromCharCode(i) : i > 127 && 2048 > i ? (t += String.fromCharCode(i >> 6 | 192), 
                        t += String.fromCharCode(63 & i | 128)) : (t += String.fromCharCode(i >> 12 | 224), 
                        t += String.fromCharCode(i >> 6 & 63 | 128), 
                        t += String.fromCharCode(63 &i | 128)) } 
                        return t 
                    }(e)), 
                    h = 1732584193, 
                    f = 4023233417, 
                    m = 2562383102, 
                    g = 271733878, 
                    c = 0; c < v.length; c += 16) 
                    l = h, 
                    u = f, 
                    d = m, 
                    p = g, 
                    h = i(h, f, m, g, v[c + 0], 7, 3614090360), 
                    g = i(g, h, f, m, v[c + 1], 12, 3905402710), 
                    m = i(m, g, h, f, v[c + 2], 17, 606105819), 
                    f = i(f, m, g, h, v[c + 3 ], 22, 3250441966), 
                    h = i(h, f, m, g, v[c + 4], 7, 4118548399), 
                    g = i(g, h, f, m, v[c + 5], 12, 1200080426), 
                    m = i(m, g, h, f, v[c + 6], 17, 2821735955), 
                    f = i(f, m, g, h, v[c + 7], 22, 4249261313), 
                    h = i(h, f, m, g, v[c + 8], 7, 1770035416), 
                    g = i(g, h, f, m, v[c + 9], 12, 2336552879) , 
                    m = i(m, g, h, f, v[c + 10], 17, 4294925233), 
                    f = i(f, m, g, h, v[c + 11], 22, 2304563134), 
                    h = i(h, f, m, g, v[c + 12], 7, 1804603682), 
                    g = i(g, h, f, m, v[c + 13], 12, 4254626195), 
                    m = i (m, g, h, f, v[c + 14], 17, 2792965006), 



                    h = r(h, f = i(f, m, g, h,v[c + 15], 22, 1236535329), m, g, v[c + 1], 5, 4129170786), 
                    g = r(g, h, f, m, v[c + 6], 9, 3225465664 ), 
                    m = r(m, g, h, f, v[c + 11], 14, 643717713), 
                    f = r(f, m, g, h, v[c + 0], 20, 3921069994), 
                    h = r(h, f, m, g, v[c + 5], 5, 3593408605), 
                    g = r(g, h, f, m, v[c + 10], 9, 38016083), 
                    m = r(m, g, h, f, v[c + 15], 14, 3634488961), 
                    f = r(f, m, g, h, v[c + 4], 20, 3889429448), 
                    h = r( h, f, m, g, v[c + 9], 5, 568446438), 
                    g = r(g, h, f, m, v[c + 14], 9, 3275163606), 
                    m = r(m, g, h, f, v[c + 3], 14, 4107603335), 
                    f = r(f, m, g, h, v[c + 8], 20, 1163531501), 
                    h = r(h, f, m, g, v[c + 13], 5, 2850285829), 
                    g = r(g, h, f, m, v[c + 2], 9, 4243563512), 
                    m = r(m, g, h, f, v[c + 7], 14, 1735328473), 


                    h = o(h, f = r(f, m, g, h, v[c + 12], 20, 2368359562), m, g, v[ c + 5], 4, 4294588738), 
                    g = o(g, h, f, m, v[c + 8], 11, 2272392833), 
                    m = o(m, g, h, f, v[c + 11], 16,1839030562), 
                    f = o(f, m, g, h, v[c + 14], 23, 4259657740), 
                    h = o(h, f, m, g, v[c + 1], 4, 2763975236) , 
                    g = o(g, h, f, m, v[c + 4], 11, 1272893353), 
                    m = o(m, g, h, f, v[c + 7], 16, 4139469664), 
                    f = o(f, m, g, h, v[c + 10], 23, 3200236656), 
                    h = o(h, f, m, g, v[c + 13], 4, 681279174), 
                    g = o (g, h, f, m, v[c + 0], 11, 3936430074), 
                    m = o(m, g, h, f, v[c + 3], 16, 3572445317), 
                    f = o(f , m, g, h, v[c + 6], 23, 76029189), 
                    h = o(h, f, m, g, v[c + 9], 4, 3654602809), 
                    g = o(g, h , f, m, v[c + 12], 11, 3873151461), 
                    m = o(m, g, h, f, v[c + 15], 16, 530742520), 



                    h = a(h, f = o (f, m, g, h, v[c + 2], 23, 3299628645), m, g, v[c + 0], 6, 4096336452), 
                    g = a(g, h, f, m, v [c + 7], 10, 1126891415), 
                    m = a(m, g, h, f, v[c + 14], 15, 2878612391), 
                    f = a(f, m, g, h, v[c + 5], 21, 4237533241), 
                    h = a(h, f, m, g, v[c + 12], 6, 1700485571), 
                    g = a(g, h, f, m, v[c + 3 ], 10,2399980690), 
                    m = a(m, g, h, f, v[c + 10], 15, 4293915773), 
                    f = a(f, m, g, h, v[c + 1], 21, 2240044497) , 
                    h = a(h, f, m, g, v[c + 8], 6, 1873313359), 
                    g = a(g, h, f, m, v[c + 15], 10, 4264355552), 
                    m = a(m, g, h, f, v[c + 6], 15, 2734768916), 
                    f = a(f, m, g, h, v[c + 13], 21, 1309151649), 
                    h = a (h, f, m, g, v[c + 4], 6, 4149444226), 
                    g = a(g, h, f, m, v[c + 11], 10, 3174756917), 
                    m = a(m , g, h, f, v[c + 2], 15, 718787259), 
                    f = a(f, m, g, h, v[c + 9], 21, 3951481745), 
                    h = n(h, l ), 
                    f = n(f, u), 
                    m = n(m, d), 
                    g = n(g, p); 
                    console.log(h,f,m,g) 
            return (s(h) + s( f) + s(m) + s(g)).toLowerCase() 
            // 5a39ba523aa53eeb829192f9a84ff118 
            // c5ad33fbd21234fa0556e4be4d61bc9e 
            // ab7c0fd1d18cc84cb31bee8f88f1269f 
            // token 
        } (token + "&" + s + "&" + a + "&" + data ),
         l = { 
            jsv: "2.5.1",
             appKey: a,
              t: s,
               sign: c 
            }, 
            
            u = { 
                data:data,
                 ua: 'ua' 
                }; 
                console.log(l); 
                return l 
                // urlen = url.parse(data) 
                // console.log(urlen);
            
}
