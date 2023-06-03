import requests
from urllib.parse import urlencode
import execjs
import time


with open('Crack.js', 'r') as f:
    jsx = f.read()

def T_R(nkey):
    ctx = execjs.compile(jsx)
    try:
        signdic = ctx.call('getkey', str(nkey), '253ddddd57eed895a945c1e2658b9c7b')
    except Exception as EX:
        print('Error:', repr(EX))
    print(signdic)
    tim = signdic['t']
    sign = signdic['sign']
    urldata = {
        'jsv': "2.5.1",
        'appKey': 24815441,
        't': tim,
        'sign': sign,
        'api': "mtop.relationrecommend.AliexpressRecommend.recommend",
        'v': "1.0",
        'type': "jsonp",
        'dataType': "jsonp",
        'callback': 'mtopjsonp10',
        'data': '{"appId":18390,"params":"{\\"query\\":\\"' + str(nkey) + '\\",\\"userMemberSeq\\":\\"\\",\\"language\\":\\"es\\",\\"site\\":\\"esp\\",\\"shipToCountry\\":\\"US\\",\\"shipToCity\\":\\"\\",\\"clientType\\":\\"pc\\",\\"cookieId\\":\\"YRsUF5pqAkgCAbegKYZu6mi2\\",\\"statusOfUsingPrivacy\\":\\"\\"}"}',
    }

    nurl = 'https://acs.aliexpress.com/h5/mtop.relationrecommend.aliexpressrecommend.recommend/1.0/?' + urlencode(urldata)

    headers = {
        'referer': 'https://es.aliexpress.com/',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'
    }

    cookies = {
        'acs_usuc_t': 'x_csrf=11seej0l3cz1t&acs_rt=536fe81b8f1c45d9b943bc2937aab95b',
        'aep_usuc_f': 'site=esp&c_tp=NGN&region=NG&b_locale=es_ES',
        'ali_apache_id': '33.27.136.240.1685753574113.562710.5',
        'intl_common_forever': 'kDphtyUm6kAytq0IU5CmutKArgcY9MghHqzNiDPMbUHw/FSeYq9rcw==',
        'intl_locale': 'es_ES',
        'xman_f': 'M1gRsng1hSrXt8xULxw+ynL1tSo+8daz8hutPswElphLgHWDX4dmVCF/2ScGpgeUR41+JJ7qS0cdLvLFPDPohaCYnIYISq0SRPZwzWfY6e/O8EpZ5BSWsw==',
        'xman_t': 'RJGCr+9ARy+0/T1b/e4MkG2sn54X3wCslqDBkrMb/CNXF5E2JAASOTSWiwWJJu88',
        'xman_us_f': 'x_l=0&x_locale=es_ES&x_c_chg=0&acs_rt=536fe81b8f1c45d9b943bc2937aab95b&x_as_i=%7B%22aeuCID%22%3A%22%22%2C%22cookieCacheEffectTime%22%3A1685753874956%2C%22isCookieCache%22%3A%22Y%22%2C%22ms%22%3A%220%22%7D',
        '_m_h5_tk': 'db2ef45b9ce4e7a0c5aed25ff1a30c54_1685755919566',
        '_m_h5_tk_enc': '3a760c6450133ba37e60199b989a4458',
    }

    response = requests.request("POST", nurl, headers=headers, cookies=cookies)
    print (response.text)
