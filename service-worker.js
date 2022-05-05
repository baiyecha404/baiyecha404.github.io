/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/blog/public/2020/01/12/hackthebox-Wall/1.jpg","49e0684a68148adc091ead702d671120"],["D:/blog/public/2020/01/12/hackthebox-Wall/index.html","3c2960fdd9b20ee53acfa508a6bdcd19"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/1.jpg","07efdb9a36ca39ab1b3adee06c174c08"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/2.jpg","6aba05000fe3322dcfaf970094157675"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/3.jpg","83e76f83eea00578b878f0214b2b1b07"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/index.html","64a254d513956dc203089071f75bb0e6"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/1.jpg","2b660ad81af412675d23c7fd615c5949"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/2.jpg","d8b00f856b75cad60913116be56f6591"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/3.jpg","b2e830760e0364f8fdb3aa413aaee4b2"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/4.jpg","8a81ed16c89ea8850b82c4d471a260a6"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/index.html","95e094bb6f3979c09e4a8eca8f6227c1"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/1.jpg","4a98b463431646b6d7bef2e99b014ff4"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/2.jpg","63ca97fafbbcd8dfc8418e0ea6e4ee22"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/3.jpg","87b2a2202dd5b60ea7e6546889fdc285"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/4.jpg","3209d1298f5e0b7dbb8746e13359ba30"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/5.jpg","19489e468cabc149af22535dc8286356"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/6.jpg","755f50213e2f3ad8f73f2fc95b5109ae"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/7.jpg","a3d773ea65a561c6378b6392815d9f0d"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/index.html","e9f352c8d17adac692d7ffb93f605a28"],["D:/blog/public/2020/01/29/hackthebox-AI——有趣的sql-JDWPgetshell/index.html","054664f933fe80c910ff97823528481b"],["D:/blog/public/2020/01/30/杭电hgame-week1/1.jpg","f40802729e10c71c5e88118a033c3c8f"],["D:/blog/public/2020/01/30/杭电hgame-week1/10.jpg","51ba4728b34eee045121a78d11190730"],["D:/blog/public/2020/01/30/杭电hgame-week1/11.jpg","52401d7bd01382fc27bba3d89f2fb71f"],["D:/blog/public/2020/01/30/杭电hgame-week1/12.jpg","a6c87f976a1cd2d9a497dc04c8049e30"],["D:/blog/public/2020/01/30/杭电hgame-week1/13.jpg","3fd16ef2a52881ac6f9d4231ec650739"],["D:/blog/public/2020/01/30/杭电hgame-week1/14.jpg","1b541cb0ffe69e7b7726586a5c7e3da0"],["D:/blog/public/2020/01/30/杭电hgame-week1/2.jpg","c5f1933109146a453e197f52874059a8"],["D:/blog/public/2020/01/30/杭电hgame-week1/3.jpg","aa367b5424c7e88ecee0003cecea51a6"],["D:/blog/public/2020/01/30/杭电hgame-week1/4.jpg","7c1f49da38993726f799a5d6a496b118"],["D:/blog/public/2020/01/30/杭电hgame-week1/5.jpg","99ead273b57dba78c1f9b96775ef7f38"],["D:/blog/public/2020/01/30/杭电hgame-week1/6.jpg","7f20125c1a70fd6e871c994b8e773539"],["D:/blog/public/2020/01/30/杭电hgame-week1/7.jpg","3b48cfb9ee060b588037520fcb3a773e"],["D:/blog/public/2020/01/30/杭电hgame-week1/8.jpg","e8d37dd7aec3dc2a8bdb50a9475929ae"],["D:/blog/public/2020/01/30/杭电hgame-week1/9.jpg","5d54c31c95fdac50bc76e2fc94d0ec85"],["D:/blog/public/2020/01/30/杭电hgame-week1/index.html","eb2a362fcedfd2c1814b2e8a08ebb3a0"],["D:/blog/public/2020/01/31/杭电hgame-week2/1.jpg","dea0ab76e5637f1091579b3297269543"],["D:/blog/public/2020/01/31/杭电hgame-week2/10.jpg","d76953c018a4118ebcc4356c230a77d6"],["D:/blog/public/2020/01/31/杭电hgame-week2/11.jpg","383e95c228cabc9f5ebd0af5677dbd3b"],["D:/blog/public/2020/01/31/杭电hgame-week2/12.jpg","2cb1842061331e8589bd8e5b39445e65"],["D:/blog/public/2020/01/31/杭电hgame-week2/13.jpg","66be7253b14531d2f806ce6d2723eaa3"],["D:/blog/public/2020/01/31/杭电hgame-week2/14.jpg","c53a543f195941782eb4ddc35a4dbcd1"],["D:/blog/public/2020/01/31/杭电hgame-week2/15.jpg","48cba2bf395b1352707b5fc3004c0585"],["D:/blog/public/2020/01/31/杭电hgame-week2/16.jpg","28eece3efc2eb96408bb8f7d1e170026"],["D:/blog/public/2020/01/31/杭电hgame-week2/17.jpg","af136b9089267f20fb9fcbcc7d1d9166"],["D:/blog/public/2020/01/31/杭电hgame-week2/2.jpg","a67fad9b44ced31a121f12c1a3a33f74"],["D:/blog/public/2020/01/31/杭电hgame-week2/3.jpg","0cf511a6fa030e5d14598ca63675c64c"],["D:/blog/public/2020/01/31/杭电hgame-week2/4.jpg","aa57c28dd701919cbb0e9dbf579bf974"],["D:/blog/public/2020/01/31/杭电hgame-week2/5.jpg","9244558a704a3dde9e0263bb87402374"],["D:/blog/public/2020/01/31/杭电hgame-week2/6.jpg","dae50cfad44ccc4e0a4a0613a5b0d5cb"],["D:/blog/public/2020/01/31/杭电hgame-week2/7.jpg","29ff78d4045d81b8144869489a52b6e2"],["D:/blog/public/2020/01/31/杭电hgame-week2/8.jpg","4d8f39c1f4ff563a3c95787a20789f0f"],["D:/blog/public/2020/01/31/杭电hgame-week2/9.jpg","3f9467429ded23549903c936bc2bb22d"],["D:/blog/public/2020/01/31/杭电hgame-week2/index.html","35e05812ccd514576026e318c2ea4e9c"],["D:/blog/public/2020/02/02/杭电hgame-week3/index.html","d4528115a14749f49475fac739bd0021"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/1.jpg","bb9290f2ead9594a223473954c241ce8"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/2.jpg","6ccd22dd9d025e676e7421d9301821b0"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/3.jpg","6b87f3c0af60f26e93325db6824ec8f6"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/4.jpg","b975cbc3e3527489166ad2a92cdb4624"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/index.html","b8535783dbe9343e302b43ae54feb640"],["D:/blog/public/2020/02/06/hackthebox-ezpz/1.jpg","23bf5a7118ea3f40284a1a517a7f8ab0"],["D:/blog/public/2020/02/06/hackthebox-ezpz/2.jpg","a2ef028bf2dae207de77bafff065b59d"],["D:/blog/public/2020/02/06/hackthebox-ezpz/3.jpg","75f4537ddcfa266586753db9dabdbc7c"],["D:/blog/public/2020/02/06/hackthebox-ezpz/4.jpg","21558e584b8e3737b5a683ca481e2420"],["D:/blog/public/2020/02/06/hackthebox-ezpz/index.html","af0cd973552e8f35058facca4ca3ce0c"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/1.jpg","74d6c33a3c724fef3a88b6f6d7dd5b68"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/2.jpg","398b00faa3f431d8c4413f9a23050ce3"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/3.jpg","e319593d03ef31b0ff4b02d8ed9cae4a"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/index.html","b058624710b1cc41a06ca8eee4ac0ef3"],["D:/blog/public/2020/02/18/从杭电hgame-week4学原型链污染/index.html","6b72266074a3b1e04ca347af4173039f"],["D:/blog/public/2020/02/19/CISCN-2019-web部分复现/index.html","f4b56c9faf117b1eb83dd0032544972d"],["D:/blog/public/2020/02/25/NCTF-phar-matches-everything填坑/index.html","246e2bf0981697e4905c72e75fd71b92"],["D:/blog/public/2020/02/26/单独填坑-公益赛NodeGame/index.html","5656988d7e0e52834a46ce61839312da"],["D:/blog/public/2020/03/02/学习笔记-命令执行及花式bypass写shell/index.html","46b3a8823f99301e3a3b83f976cc2820"],["D:/blog/public/2020/03/06/Vulhub复现/index.html","78cc90b6b2859c6d0ab95f20c2a07abe"],["D:/blog/public/2020/03/09/To-Dolist/index.html","32526171858565d05310d8e25688db0a"],["D:/blog/public/2020/03/10/XCTF高校战“疫”网络安全分享赛/index.html","7e6e5fefa9257140b662e55eb58c3446"],["D:/blog/public/2020/03/18/使用Soap的ssrf-crlf攻击/index.html","76d88423c07b9cd7f98904b2c98cfb3a"],["D:/blog/public/2020/03/29/WUSTCTF&MRCTF部分web题解/index.html","ebf3516a9f9a99cfe3adb4c2aa1c9c71"],["D:/blog/public/2020/03/30/VolgaCTF2020Qualifier复现/index.html","a450c4d87f3f5082fee16901ce05aefd"],["D:/blog/public/2020/04/01/hackthebox-Sniper-初尝windows靶机/index.html","21252558c661199ae45401dc3343f482"],["D:/blog/public/2020/04/13/ByteBanditsCTF2020两道WEB复现/index.html","96aa00f745b60e14758ed9f09be4ea47"],["D:/blog/public/2020/04/20/Nodejs的一些技巧/index.html","349e1a90bc7655b10000d4b1279470bd"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/1.png","4fe77fbf7f8c7b1321a7264e1adbc1d4"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/10.png","7ca2f6e0a2e1d8c4b0f75c9a163db6c9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/11.png","dd30af1e04c6291a1254f94c18299c54"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/12.png","b86912dd1c049d3f275df3ebbdf900f8"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/13.png","645982851c50f071f3910020d5738d60"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/14.png","09617c9808b315fcebdf434d9341bdca"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/15.png","da0117dcb7ccec787277229b9235e821"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/16.png","611ca5de3656b66b8446b529ece39585"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/17.png","bb35beac017d2177d94de9ffcfc6bb2c"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/18.png","cf98f093cab95ab27bc89079ffcb6ba2"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/2.png","932f259dd31e70d840fe18b01fba1d49"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/3.png","fe4f779ed543f748ae63f7cb12d42285"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/4.png","d1289931388fbb1b1b6b0f4b264c19e6"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/5.png","b6b4beb5719c18b5821baa99caf09733"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/6.png","633b9a87d2f998cbeb3ea9ffd08f2140"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/7.png","b6211fc65a2d1774c111179885e7ca57"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/8.png","63e16915e39b2655ee3db50ad44dada9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/9.png","23fd12e89db3886a0d7af33e51f2891f"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/index.html","6d051958b7413027b1325a0f6cfd52f2"],["D:/blog/public/2020/05/04/De1CTF2020writeup/index.html","8614d05e040f648c8810b83fe86d04b4"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/1.png","948eddf999fd3255f0f4afc0cf45c686"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/2.png","daf24f9256e7eef82d20652c3d3b44b8"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/3.png","1e186796519d50b298bc204ddf7cf1c5"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/4.png","a2e5c352c529e9e7e24352e1ab62d084"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/index.html","f9bb141d41d11b5c7bbcd429ac7ccce0"],["D:/blog/public/2020/05/24/GKCTF2020writeup/index.html","9e059a0fda7793b055e055a4758f3a2f"],["D:/blog/public/2020/05/30/初探Redis-wdb玄武组ssrfme&pwnhub公开赛/index.html","68fb100faf459aad6aba9407c6e4f306"],["D:/blog/public/2020/06/23/hackthebox-Quick-一次艰难的渗透/index.html","757d13fd22d2bf7dd1f4d0ee2bccebeb"],["D:/blog/public/2020/06/24/Make-jwt-great-again/index.html","0525647acb840611267c89cb72396eb9"],["D:/blog/public/2020/07/01/hackthebox-Oouch/index.html","f8f71f091ed9362b1ee1d7c3cee96768"],["D:/blog/public/2020/07/05/SCTF2020-writeup/index.html","a7518a52bc545ac5765261f003623eed"],["D:/blog/public/2020/07/09/学习笔记-Java相关/index.html","01996d4e8d391e6fb9d49909634b7dd3"],["D:/blog/public/2020/07/16/hackthebox-SneakyMailer/index.html","36e517f450883325d297922550d05e66"],["D:/blog/public/2020/07/22/hackthebox-Intense/index.html","98f8c82cecad05adbe75e3ccf581cdba"],["D:/blog/public/2020/07/22/RingZer0-CTF-JavascriptChallenge/index.html","e370b745d811a62ed1324f2d9d0911b4"],["D:/blog/public/2020/07/24/hackthebox-Dyplesher/index.html","e9c510df973973b8d1e3fa725e845890"],["D:/blog/public/2020/07/26/CyBRICS-CTF-2020/index.html","66d1162f0cc4b661a1599d93a0ec436c"],["D:/blog/public/2020/08/05/Thinkphp-vuln/index.html","1a425363e306ba8be8a2c6f740c88601"],["D:/blog/public/2020/08/10/hackthebox-Fatty-JavaExploits/index.html","2e0a4c03f6674cd32391b4d76b8c99a3"],["D:/blog/public/2020/08/15/hackthebox-Unbalanced/index.html","300ab56ec96fe9c315db9850710437ba"],["D:/blog/public/2020/08/17/Laravel-popchain/index.html","ea4acc9fc846a90c5e7ba12d6561aa0d"],["D:/blog/public/2020/08/27/钓鱼城-zblog/index.html","654e462b352eebd42b3d7a633dac1434"],["D:/blog/public/2020/09/25/DarkCTF-WEB/index.html","83778e3bdf3357c14cd4fc4828305ef1"],["D:/blog/public/2020/10/05/bootcamp-2020&mctf-2020/index.html","68ec08847eb4044ad6ee02e8cea9576e"],["D:/blog/public/2020/10/09/学习笔记-Java深入/index.html","d2aaecc23c7b50d95148fba42d0b5022"],["D:/blog/public/2020/10/19/N1CTF2020/index.html","bd68997bfb091c7d493dbb7da11ad030"],["D:/blog/public/2020/10/26/ByteCTF2020-easyscrapy/index.html","b4c05a188d0c5c746d803640f38bc11c"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/0.png","8b14359dfbce0d56fbd880ee4377e33d"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/index.html","a9b8ef77eef116dfbf3ab2e62f8586b0"],["D:/blog/public/2020/12/30/Farewell-to-2020/index.html","3a4d0927969fbb47a19bb587873e0cbb"],["D:/blog/public/2021/02/07/golang的一些安全问题/index.html","4ceabf5214bea3f941d2dee8a581aa86"],["D:/blog/public/2021/03/06/D^3CTF-8-bit-pub/index.html","9865167970341060641c1190ac5557e9"],["D:/blog/public/2021/04/04/angstromCTF-2021/index.html","3a654fc1a00f368eed5874f73de64feb"],["D:/blog/public/2021/05/30/春秋杯-WEB/index.html","2006c4f1b9ac729d43d6fc954ed23c26"],["D:/blog/public/2021/06/06/使用Node-js实现动态爬虫/index.html","772d3e3fb00d3da349e2ca73cdc2babc"],["D:/blog/public/2021/07/07/0ctf-tctf-soracon/index.html","71fa5dbb5c37e0ed83f8071d79121938"],["D:/blog/public/2021/10/06/夏令营面试经历/index.html","dc28e9bd754f2f7100e577ff46a0a33d"],["D:/blog/public/2022/01/10/低版本JDK下gopher的困境/index.html","ab199feed391e56193dd165840a1008e"],["D:/blog/public/2022/04/05/Netty-内存马的一种思路/index.html","d9048159357ce7a24aeda0032a9332c1"],["D:/blog/public/2022/05/05/angstormCTF-2022/index.html","96414eb9868e1bc9eafd3ab2083e2a68"],["D:/blog/public/404.html","c21cbb7d181d58b80757a1f426eb4c37"],["D:/blog/public/about/index.html","2eff77bc3ebd7d7885c20d7e10018aa0"],["D:/blog/public/archives/2020/01/index.html","13f8af4a32b40b205f4ec47893018a8f"],["D:/blog/public/archives/2020/02/index.html","2f90771f78dd08902ab0be1973bf302d"],["D:/blog/public/archives/2020/03/index.html","413b0d9d7149567f5150a84199fe552e"],["D:/blog/public/archives/2020/04/index.html","7cf78e91aec6c9b22ddab8226ed74168"],["D:/blog/public/archives/2020/05/index.html","e6d5cd2d376ce9e465b707c1700fdc79"],["D:/blog/public/archives/2020/06/index.html","39207c1c1c99daef6b378bba8f3e78f8"],["D:/blog/public/archives/2020/07/index.html","2dfdd4888f4a1d3cd9da4da23ecca998"],["D:/blog/public/archives/2020/08/index.html","d4c00a516351499fc211e3e1fae91fcc"],["D:/blog/public/archives/2020/09/index.html","5e2cd125df6ca02c2a5d823e78487079"],["D:/blog/public/archives/2020/10/index.html","ac1473701a92b2bd2bd044285b7ddbc5"],["D:/blog/public/archives/2020/11/index.html","5fa8cf8f2c41fd0ee270743e71df360a"],["D:/blog/public/archives/2020/12/index.html","f9df88cde5afd6fad3aa81c845da8068"],["D:/blog/public/archives/2020/index.html","b16a47d06de9678083c032a98f94c346"],["D:/blog/public/archives/2020/page/2/index.html","e16a22852877766da8446f49669d9843"],["D:/blog/public/archives/2020/page/3/index.html","cd3712bd2a25b5929df53079daceda58"],["D:/blog/public/archives/2020/page/4/index.html","2a04ce7d5876b319d668bad60690854f"],["D:/blog/public/archives/2020/page/5/index.html","2e8bc6670531ac6b736dd55ad3b1df75"],["D:/blog/public/archives/2020/page/6/index.html","a5d9ef221fb5c15f836a6584debc09b2"],["D:/blog/public/archives/2021/02/index.html","399b662a457a89b898fb31507d50d17b"],["D:/blog/public/archives/2021/03/index.html","5e020f8cc9578009a29b99f5245b82ef"],["D:/blog/public/archives/2021/04/index.html","dd90b8995c0a55a0494cf4a8043fdb58"],["D:/blog/public/archives/2021/05/index.html","bf8d16bb6077003af9578b50cd06bd32"],["D:/blog/public/archives/2021/06/index.html","bd9206c4c477683c7db3536d78d8f187"],["D:/blog/public/archives/2021/07/index.html","60f0153d7e5aa112c89b0f7aebfca5d8"],["D:/blog/public/archives/2021/10/index.html","694d930bc31a0e8f6f5f8298404cf611"],["D:/blog/public/archives/2021/index.html","b87008ffa44b9be0edd59d8306405d32"],["D:/blog/public/archives/2022/01/index.html","7aa9ade6336e31dd1c8ddaf7929b4710"],["D:/blog/public/archives/2022/04/index.html","610f6de42b631dcbe06f27d0ce521864"],["D:/blog/public/archives/2022/05/index.html","cbbe4a98c5930eb23f657300579a7b9c"],["D:/blog/public/archives/2022/index.html","406c7fc4ff62800d0a10168a09e5926f"],["D:/blog/public/archives/index.html","fe8ada42b4e64ce82a5ac2119c36585a"],["D:/blog/public/archives/page/2/index.html","fe8ada42b4e64ce82a5ac2119c36585a"],["D:/blog/public/archives/page/3/index.html","fe8ada42b4e64ce82a5ac2119c36585a"],["D:/blog/public/archives/page/4/index.html","fe8ada42b4e64ce82a5ac2119c36585a"],["D:/blog/public/archives/page/5/index.html","fe8ada42b4e64ce82a5ac2119c36585a"],["D:/blog/public/archives/page/6/index.html","fe8ada42b4e64ce82a5ac2119c36585a"],["D:/blog/public/archives/page/7/index.html","fe8ada42b4e64ce82a5ac2119c36585a"],["D:/blog/public/assests/alipay.jpg","821163f8d5c9d1accd1b7cbeefaba556"],["D:/blog/public/assests/consola.ttf","fb505e28b6d130f08fe8f070e0d6b1b8"],["D:/blog/public/assests/icon.jpg","931d322663078eb74184292012d7ebd7"],["D:/blog/public/assests/wechat.png","57e6a192c26104ede51ff222f6e6080c"],["D:/blog/public/categories/index.html","0810e630dec65f372d6f626a4ad91c88"],["D:/blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/blog/public/css/first.css","21d6406f5365a29bb46fbf5c688d1ca4"],["D:/blog/public/css/style.css","cbc38cb5e1989d8c2d75176787620231"],["D:/blog/public/friends/index.html","4bfb6c6c2e24004e3a895ac5dccbd95a"],["D:/blog/public/index.html","9e66b2bd121b77dc0b6d025a6e1bb955"],["D:/blog/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["D:/blog/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["D:/blog/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["D:/blog/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["D:/blog/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["D:/blog/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["D:/blog/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["D:/blog/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["D:/blog/public/js/valine.js","9fe07b85c9890960251eaeacf3e38ee1"],["D:/blog/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/blog/public/mylist/index.html","e162a116eedd9f6e12d20911d2a6c35c"],["D:/blog/public/page/2/index.html","c9353d9a6c58b877bad5281c586af91c"],["D:/blog/public/page/3/index.html","4e968c6795d48a8a8d55ccd364d8bea0"],["D:/blog/public/page/4/index.html","172769c75472f79e556667138c7b3aa9"],["D:/blog/public/page/5/index.html","02068862cff8472aa6f32f8a238dc83c"],["D:/blog/public/page/6/index.html","7fd56fd18028393994c1f3043d3712a8"],["D:/blog/public/page/7/index.html","5344fd7c8172ac8600c982f3494cf58f"],["D:/blog/public/tags/CTF/index.html","bdbcdeb30d81f440e89c6cb10c26fa28"],["D:/blog/public/tags/CTF/page/2/index.html","f2b0353bb68c7e10e9935ea17b32da19"],["D:/blog/public/tags/CTF/page/3/index.html","c613fd8cc6db939b446b0f0727b0cd79"],["D:/blog/public/tags/CTF/page/4/index.html","edf4d618a1b5e194a556d7d2f0c0978b"],["D:/blog/public/tags/Go/index.html","1d6164c69061130d349be0059091c4c4"],["D:/blog/public/tags/Java/index.html","0a023c89ffefc8a3ed5a86aee13bbef6"],["D:/blog/public/tags/Linux/index.html","f3c69540e9e80cb8028ae30cb47a5209"],["D:/blog/public/tags/Node-js/index.html","2b1cef3d1e918cbac74d3a01a8cd00f3"],["D:/blog/public/tags/PHP/index.html","4b0ce0e46ee4f511c91f0eec22ef0730"],["D:/blog/public/tags/WEB/index.html","f906206540656c2a28f135050e8a83b3"],["D:/blog/public/tags/WEB/page/2/index.html","bd3394ec9469b48fbfab3618c3524fa8"],["D:/blog/public/tags/WEB/page/3/index.html","e9e9e049a5253595287c84de5253fa99"],["D:/blog/public/tags/WEB/page/4/index.html","f82ac83050adc5ec28bca935c70f0816"],["D:/blog/public/tags/hackthebox/index.html","60a10e96e21896c4e1c0c251b22e764c"],["D:/blog/public/tags/hackthebox/page/2/index.html","f3d87baea5d9c7251bc6b2ee8b33e5ca"],["D:/blog/public/tags/index.html","010480539de2d9d9961fa4115d1d3c07"],["D:/blog/public/tags/javascript/index.html","206a9ca0e5feb28fa08e006fc45b66c0"],["D:/blog/public/tags/pentest/index.html","632cac48f001035fd653348a6c957b4c"],["D:/blog/public/tags/redis/index.html","69f61682070ef3e8391cfa89532aedde"],["D:/blog/public/tags/windows/index.html","420a54557f020689bfe8634817a546f8"],["D:/blog/public/tags/wp/index.html","0ad4aa64a5662580825f25718e17964d"],["D:/blog/public/tags/wp/page/2/index.html","1740f89171f5641fa1b2378c9ebee168"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







