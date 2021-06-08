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

var precacheConfig = [["D:/blog/public/2020/01/12/hackthebox-Wall/1.jpg","49e0684a68148adc091ead702d671120"],["D:/blog/public/2020/01/12/hackthebox-Wall/index.html","91a028528ce5c153629492daa7f77f22"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/1.jpg","07efdb9a36ca39ab1b3adee06c174c08"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/2.jpg","6aba05000fe3322dcfaf970094157675"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/3.jpg","83e76f83eea00578b878f0214b2b1b07"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/index.html","d511656cf7d6b4b66ad2034e0ee3794f"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/1.jpg","2b660ad81af412675d23c7fd615c5949"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/2.jpg","d8b00f856b75cad60913116be56f6591"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/3.jpg","b2e830760e0364f8fdb3aa413aaee4b2"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/4.jpg","8a81ed16c89ea8850b82c4d471a260a6"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/index.html","671aed4f4f2c417303a638f1412d690c"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/1.jpg","4a98b463431646b6d7bef2e99b014ff4"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/2.jpg","63ca97fafbbcd8dfc8418e0ea6e4ee22"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/3.jpg","87b2a2202dd5b60ea7e6546889fdc285"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/4.jpg","3209d1298f5e0b7dbb8746e13359ba30"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/5.jpg","19489e468cabc149af22535dc8286356"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/6.jpg","755f50213e2f3ad8f73f2fc95b5109ae"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/7.jpg","a3d773ea65a561c6378b6392815d9f0d"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/index.html","af45efca5b5d74ce719ed9809bd0ab5f"],["D:/blog/public/2020/01/29/hackthebox-AI——有趣的sql-JDWPgetshell/index.html","6087409e184ba64803cccb97c78647fc"],["D:/blog/public/2020/01/30/杭电hgame-week1/1.jpg","f40802729e10c71c5e88118a033c3c8f"],["D:/blog/public/2020/01/30/杭电hgame-week1/10.jpg","51ba4728b34eee045121a78d11190730"],["D:/blog/public/2020/01/30/杭电hgame-week1/11.jpg","52401d7bd01382fc27bba3d89f2fb71f"],["D:/blog/public/2020/01/30/杭电hgame-week1/12.jpg","a6c87f976a1cd2d9a497dc04c8049e30"],["D:/blog/public/2020/01/30/杭电hgame-week1/13.jpg","3fd16ef2a52881ac6f9d4231ec650739"],["D:/blog/public/2020/01/30/杭电hgame-week1/14.jpg","1b541cb0ffe69e7b7726586a5c7e3da0"],["D:/blog/public/2020/01/30/杭电hgame-week1/2.jpg","c5f1933109146a453e197f52874059a8"],["D:/blog/public/2020/01/30/杭电hgame-week1/3.jpg","aa367b5424c7e88ecee0003cecea51a6"],["D:/blog/public/2020/01/30/杭电hgame-week1/4.jpg","7c1f49da38993726f799a5d6a496b118"],["D:/blog/public/2020/01/30/杭电hgame-week1/5.jpg","99ead273b57dba78c1f9b96775ef7f38"],["D:/blog/public/2020/01/30/杭电hgame-week1/6.jpg","7f20125c1a70fd6e871c994b8e773539"],["D:/blog/public/2020/01/30/杭电hgame-week1/7.jpg","3b48cfb9ee060b588037520fcb3a773e"],["D:/blog/public/2020/01/30/杭电hgame-week1/8.jpg","e8d37dd7aec3dc2a8bdb50a9475929ae"],["D:/blog/public/2020/01/30/杭电hgame-week1/9.jpg","5d54c31c95fdac50bc76e2fc94d0ec85"],["D:/blog/public/2020/01/30/杭电hgame-week1/index.html","3172c1c947a8f83e98aed037561754e2"],["D:/blog/public/2020/01/31/杭电hgame-week2/1.jpg","dea0ab76e5637f1091579b3297269543"],["D:/blog/public/2020/01/31/杭电hgame-week2/10.jpg","d76953c018a4118ebcc4356c230a77d6"],["D:/blog/public/2020/01/31/杭电hgame-week2/11.jpg","383e95c228cabc9f5ebd0af5677dbd3b"],["D:/blog/public/2020/01/31/杭电hgame-week2/12.jpg","2cb1842061331e8589bd8e5b39445e65"],["D:/blog/public/2020/01/31/杭电hgame-week2/13.jpg","66be7253b14531d2f806ce6d2723eaa3"],["D:/blog/public/2020/01/31/杭电hgame-week2/14.jpg","c53a543f195941782eb4ddc35a4dbcd1"],["D:/blog/public/2020/01/31/杭电hgame-week2/15.jpg","48cba2bf395b1352707b5fc3004c0585"],["D:/blog/public/2020/01/31/杭电hgame-week2/16.jpg","28eece3efc2eb96408bb8f7d1e170026"],["D:/blog/public/2020/01/31/杭电hgame-week2/17.jpg","af136b9089267f20fb9fcbcc7d1d9166"],["D:/blog/public/2020/01/31/杭电hgame-week2/2.jpg","a67fad9b44ced31a121f12c1a3a33f74"],["D:/blog/public/2020/01/31/杭电hgame-week2/3.jpg","0cf511a6fa030e5d14598ca63675c64c"],["D:/blog/public/2020/01/31/杭电hgame-week2/4.jpg","aa57c28dd701919cbb0e9dbf579bf974"],["D:/blog/public/2020/01/31/杭电hgame-week2/5.jpg","9244558a704a3dde9e0263bb87402374"],["D:/blog/public/2020/01/31/杭电hgame-week2/6.jpg","dae50cfad44ccc4e0a4a0613a5b0d5cb"],["D:/blog/public/2020/01/31/杭电hgame-week2/7.jpg","29ff78d4045d81b8144869489a52b6e2"],["D:/blog/public/2020/01/31/杭电hgame-week2/8.jpg","4d8f39c1f4ff563a3c95787a20789f0f"],["D:/blog/public/2020/01/31/杭电hgame-week2/9.jpg","3f9467429ded23549903c936bc2bb22d"],["D:/blog/public/2020/01/31/杭电hgame-week2/index.html","8600aea47eb335c6f0d8d7041bd022b1"],["D:/blog/public/2020/02/02/杭电hgame-week3/index.html","9768cf5967db33c8d4d954f2f257acef"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/1.jpg","bb9290f2ead9594a223473954c241ce8"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/2.jpg","6ccd22dd9d025e676e7421d9301821b0"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/3.jpg","6b87f3c0af60f26e93325db6824ec8f6"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/4.jpg","b975cbc3e3527489166ad2a92cdb4624"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/index.html","3610db6f39520b117ce36cf234cbda39"],["D:/blog/public/2020/02/06/hackthebox-ezpz/1.jpg","23bf5a7118ea3f40284a1a517a7f8ab0"],["D:/blog/public/2020/02/06/hackthebox-ezpz/2.jpg","a2ef028bf2dae207de77bafff065b59d"],["D:/blog/public/2020/02/06/hackthebox-ezpz/3.jpg","75f4537ddcfa266586753db9dabdbc7c"],["D:/blog/public/2020/02/06/hackthebox-ezpz/4.jpg","21558e584b8e3737b5a683ca481e2420"],["D:/blog/public/2020/02/06/hackthebox-ezpz/index.html","c6e0f050706aaf67dc607b8e520c6f24"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/1.jpg","74d6c33a3c724fef3a88b6f6d7dd5b68"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/2.jpg","398b00faa3f431d8c4413f9a23050ce3"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/3.jpg","e319593d03ef31b0ff4b02d8ed9cae4a"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/index.html","d848092fd8bfc70b202b67e9e1a063ce"],["D:/blog/public/2020/02/18/从杭电hgame-week4学原型链污染/index.html","a123b75fe7e99ca6931122bd0c628877"],["D:/blog/public/2020/02/19/CISCN-2019-web部分复现/index.html","0dc82a13a2b6633078e13c83ba4361a9"],["D:/blog/public/2020/02/25/NCTF-phar-matches-everything填坑/index.html","b7912078a040408ed784d2ecde6c9d9e"],["D:/blog/public/2020/02/26/单独填坑-公益赛NodeGame/index.html","6681ab7b72ab984f8d60d2d0bcd7d012"],["D:/blog/public/2020/03/02/学习笔记-命令执行及花式bypass写shell/index.html","7f331515fdfb363b3dec867a40026c5a"],["D:/blog/public/2020/03/06/Vulhub复现/index.html","66a4cdec387887dd9684eddc0a9c0598"],["D:/blog/public/2020/03/09/To-Dolist/index.html","f4ed06bb864e8d590c74b16120901129"],["D:/blog/public/2020/03/10/XCTF高校战“疫”网络安全分享赛/index.html","2ec1813c8ab3dd505ce713341e560f84"],["D:/blog/public/2020/03/18/使用Soap的ssrf-crlf攻击/index.html","eeb6e3f07b46cad477bdbca67ab287b5"],["D:/blog/public/2020/03/29/WUSTCTF&MRCTF部分web题解/index.html","e6e77d916feb37efc1f36e61fea719eb"],["D:/blog/public/2020/03/30/VolgaCTF2020Qualifier复现/index.html","3b7045d3960012508a92562f13969fae"],["D:/blog/public/2020/04/01/hackthebox-Sniper-初尝windows靶机/index.html","717d8bfc2d99f43b5b081602d3eb599d"],["D:/blog/public/2020/04/13/ByteBanditsCTF2020两道WEB复现/index.html","22a4d5f4c75ad30f6e46e03f13b006cb"],["D:/blog/public/2020/04/20/Nodejs的一些技巧/index.html","4c56e21d0f53026f836ba157194ec23d"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/1.png","4fe77fbf7f8c7b1321a7264e1adbc1d4"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/10.png","7ca2f6e0a2e1d8c4b0f75c9a163db6c9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/11.png","dd30af1e04c6291a1254f94c18299c54"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/12.png","b86912dd1c049d3f275df3ebbdf900f8"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/13.png","645982851c50f071f3910020d5738d60"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/14.png","09617c9808b315fcebdf434d9341bdca"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/15.png","da0117dcb7ccec787277229b9235e821"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/16.png","611ca5de3656b66b8446b529ece39585"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/17.png","bb35beac017d2177d94de9ffcfc6bb2c"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/18.png","cf98f093cab95ab27bc89079ffcb6ba2"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/2.png","932f259dd31e70d840fe18b01fba1d49"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/3.png","fe4f779ed543f748ae63f7cb12d42285"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/4.png","d1289931388fbb1b1b6b0f4b264c19e6"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/5.png","b6b4beb5719c18b5821baa99caf09733"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/6.png","633b9a87d2f998cbeb3ea9ffd08f2140"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/7.png","b6211fc65a2d1774c111179885e7ca57"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/8.png","63e16915e39b2655ee3db50ad44dada9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/9.png","23fd12e89db3886a0d7af33e51f2891f"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/index.html","41796feb8238faef8525342a085142a9"],["D:/blog/public/2020/05/04/De1CTF2020writeup/index.html","91eab1c704275b01ba68966b8142f7d5"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/1.png","948eddf999fd3255f0f4afc0cf45c686"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/2.png","daf24f9256e7eef82d20652c3d3b44b8"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/3.png","1e186796519d50b298bc204ddf7cf1c5"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/4.png","a2e5c352c529e9e7e24352e1ab62d084"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/index.html","eebe7e97cc8eb550ce207a64c8864103"],["D:/blog/public/2020/05/24/GKCTF2020writeup/index.html","a75f37514ec477a6d46f6f54e13d8afa"],["D:/blog/public/2020/05/30/初探Redis-wdb玄武组ssrfme&pwnhub公开赛/index.html","cde9eb2fd1996324996d33bbf68d7b92"],["D:/blog/public/2020/06/23/hackthebox-Quick-一次艰难的渗透/index.html","bbb6a159a408fcc2f11639fcdc336174"],["D:/blog/public/2020/06/24/Make-jwt-great-again/index.html","93cb167020597373e1b297568e93254b"],["D:/blog/public/2020/07/01/hackthebox-Oouch/index.html","2a7b97ea11473a93c7341c78207778ce"],["D:/blog/public/2020/07/05/SCTF2020-writeup/index.html","961e3cc61e15c7253a33c1c9b3af1188"],["D:/blog/public/2020/07/09/学习笔记-Java相关/index.html","5a687db8e62ddcc313fa5b8f09ec86f0"],["D:/blog/public/2020/07/16/hackthebox-SneakyMailer/index.html","bb44b243b5bf7ea31be7aa0db9c9e2a5"],["D:/blog/public/2020/07/22/hackthebox-Intense/index.html","2b3d733439eaa1e7e49c7d871a2586f4"],["D:/blog/public/2020/07/22/RingZer0-CTF-JavascriptChallenge/index.html","5b49d20258b98cf225050791306c50ff"],["D:/blog/public/2020/07/24/hackthebox-Dyplesher/index.html","3657d79fc480dc600dd5faf792d88e1e"],["D:/blog/public/2020/07/26/CyBRICS-CTF-2020/index.html","df82454a0c41ee88afc7f64239f6411c"],["D:/blog/public/2020/08/05/Thinkphp-vuln/index.html","e456ab095556208c16d300dd762162a2"],["D:/blog/public/2020/08/10/hackthebox-Fatty-JavaExploits/index.html","ca25b4723e10bbfa554a3ba2d8ac9b80"],["D:/blog/public/2020/08/15/hackthebox-Unbalanced/index.html","de0e01962d83b4ac72e22fdc1d320ba9"],["D:/blog/public/2020/08/17/Laravel-popchain/index.html","b219ddd18843e4adaa8a044cf6ea18b9"],["D:/blog/public/2020/08/27/钓鱼城-zblog/index.html","348ecce8e4a37680350cf0b57fd0c898"],["D:/blog/public/2020/09/25/DarkCTF-WEB/index.html","2f7f6238b0978f1d2a8d177f7bd2a6cb"],["D:/blog/public/2020/10/05/bootcamp-2020&mctf-2020/index.html","dc8ce1b365d82de0e7d3b1864c21a7fd"],["D:/blog/public/2020/10/09/学习笔记-Java深入/index.html","162d00ebc9f619cd3966e8265bfe7a47"],["D:/blog/public/2020/10/19/N1CTF2020/index.html","72dbaa98b2e1269e4a1e78bee939cac6"],["D:/blog/public/2020/10/26/ByteCTF2020-easyscrapy/index.html","402d04bde8839686a1f10327c34c8924"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/0.png","8b14359dfbce0d56fbd880ee4377e33d"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/index.html","e97000853e6de15f4af726441e2cd866"],["D:/blog/public/2020/12/30/Farewell-to-2020/index.html","7894e14865dc669b878653fbb18f104d"],["D:/blog/public/2021/02/07/golang的一些安全问题/index.html","ec5d3912e44db08252fa641c4f2cd753"],["D:/blog/public/2021/03/06/D^3CTF-8-bit-pub/index.html","30b90146ef893729e322a16d621154da"],["D:/blog/public/2021/04/04/angstromCTF-2021/index.html","a6bed79f4a417bb8c0109f56c9b4161d"],["D:/blog/public/2021/05/30/春秋杯-WEB/index.html","ed0a5d4423000036e1b9d6bcde007838"],["D:/blog/public/2021/06/06/使用Node-js实现动态爬虫/index.html","87c641366455f24672cd3fd7329a8288"],["D:/blog/public/404.html","17f2633384a3d72c1251080531a69242"],["D:/blog/public/about/index.html","d28dc688c3d1d6cac817b7629b418e24"],["D:/blog/public/archives/2020/01/index.html","d13f9e1941cffabd10b31b064cfc6e27"],["D:/blog/public/archives/2020/02/index.html","616b979a575fe46d1736fa9a26499597"],["D:/blog/public/archives/2020/03/index.html","c062a11c5eafefdeab15b7599aa714f5"],["D:/blog/public/archives/2020/04/index.html","7582d1661e8b461e02e196eb94374b48"],["D:/blog/public/archives/2020/05/index.html","06675c31b24e1fd817073d225d97ba1f"],["D:/blog/public/archives/2020/06/index.html","d148e377a024b1c2e87e101160842bd2"],["D:/blog/public/archives/2020/07/index.html","5253f9d904606f86e17c71d6f0870234"],["D:/blog/public/archives/2020/08/index.html","ba993c1cd857d8db120e0ba6d30af648"],["D:/blog/public/archives/2020/09/index.html","f964125458230fb1eecf882d1dad39e5"],["D:/blog/public/archives/2020/10/index.html","b2a662f86c27efb8bab49a12931a18e6"],["D:/blog/public/archives/2020/11/index.html","2083828dc705c0a36c45d70b2292a19f"],["D:/blog/public/archives/2020/12/index.html","24c209afe1aa8e5ae303c0e10079eaac"],["D:/blog/public/archives/2020/index.html","b294900fa6b2e797724033ca6c67d163"],["D:/blog/public/archives/2020/page/2/index.html","865d3bfbefa783965967c928e642ea9a"],["D:/blog/public/archives/2020/page/3/index.html","884ad3273bf832f9dc91082639b30c9c"],["D:/blog/public/archives/2020/page/4/index.html","2cd60bac48753f3203bbd8cba34b9116"],["D:/blog/public/archives/2020/page/5/index.html","381314967f8e870a2887ae28711fe71f"],["D:/blog/public/archives/2020/page/6/index.html","9f98372e03b14b4a2f524882b84673a1"],["D:/blog/public/archives/2021/02/index.html","00d29a739fa34f5209df3d3d67b0a070"],["D:/blog/public/archives/2021/03/index.html","bb501ba39d7464d0ae7584dff3fd1df9"],["D:/blog/public/archives/2021/04/index.html","7bbf03e147fe50639b7f2ece7448ba19"],["D:/blog/public/archives/2021/05/index.html","f769a8533798d524ba5d53baf3deddb5"],["D:/blog/public/archives/2021/06/index.html","2452cc8103d7348d47732eb35d8dd006"],["D:/blog/public/archives/2021/index.html","8087dd576b8f0d2b9bc22940f6b8767f"],["D:/blog/public/archives/index.html","85f991cc29497d3ccfc540a816840301"],["D:/blog/public/archives/page/2/index.html","85f991cc29497d3ccfc540a816840301"],["D:/blog/public/archives/page/3/index.html","85f991cc29497d3ccfc540a816840301"],["D:/blog/public/archives/page/4/index.html","85f991cc29497d3ccfc540a816840301"],["D:/blog/public/archives/page/5/index.html","85f991cc29497d3ccfc540a816840301"],["D:/blog/public/archives/page/6/index.html","85f991cc29497d3ccfc540a816840301"],["D:/blog/public/assests/alipay.jpg","821163f8d5c9d1accd1b7cbeefaba556"],["D:/blog/public/assests/consola.ttf","fb505e28b6d130f08fe8f070e0d6b1b8"],["D:/blog/public/assests/icon.jpg","931d322663078eb74184292012d7ebd7"],["D:/blog/public/assests/wechat.png","57e6a192c26104ede51ff222f6e6080c"],["D:/blog/public/categories/index.html","f14bc2cbb2c82a3224481ea0ddd37e4e"],["D:/blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/blog/public/css/first.css","ef36b890903233b2d482d1c1a6192fd9"],["D:/blog/public/css/style.css","bc1306da088b03c9586aafb7ca6dd689"],["D:/blog/public/friends/index.html","4769c7368bbb686769280b53f770414b"],["D:/blog/public/index.html","a59f134f5493f269f5160b9153d62dda"],["D:/blog/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["D:/blog/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["D:/blog/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["D:/blog/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["D:/blog/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["D:/blog/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["D:/blog/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["D:/blog/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["D:/blog/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["D:/blog/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/blog/public/mylist/index.html","dc5af9373ba2862acf81b9c34d07d09a"],["D:/blog/public/page/2/index.html","8446e2dc939f50f6b6f29d4f83d37d26"],["D:/blog/public/page/3/index.html","d233888c9c6e9ea666be5f69245da2c1"],["D:/blog/public/page/4/index.html","47941a4679e414a3a79a9fc1c1274d64"],["D:/blog/public/page/5/index.html","21157c1054efbbb1cfc89b56a15a05ee"],["D:/blog/public/page/6/index.html","f6924af582109d6520ee08c121961d98"],["D:/blog/public/tags/CTF/index.html","461c7995b11ca89bd0c473e68ce9a4a1"],["D:/blog/public/tags/CTF/page/2/index.html","7df8a343c9452fc7997a5b307ac63944"],["D:/blog/public/tags/CTF/page/3/index.html","4bedb80a6328be84f8715ce62aadbfb0"],["D:/blog/public/tags/CTF/page/4/index.html","31021202c51f31c5b0eecb31b2226250"],["D:/blog/public/tags/Go/index.html","08405af9532c5c069baa485d1cb1c8ae"],["D:/blog/public/tags/Java/index.html","f5a1220f0c5fa583f1908247e4493968"],["D:/blog/public/tags/Linux/index.html","b58db0e22001fb123181a42d8dbca86e"],["D:/blog/public/tags/Node-js/index.html","423420255a4158a3b4b404c5a32d977f"],["D:/blog/public/tags/PHP/index.html","d6bf9bce8766dc504f2e453243837135"],["D:/blog/public/tags/WEB/index.html","318a038fe308194b71dc7b3cd1422bab"],["D:/blog/public/tags/WEB/page/2/index.html","4d687a560d13da84008421c0beed87d4"],["D:/blog/public/tags/WEB/page/3/index.html","4e44e1449d0ac75097c8df32efe57df1"],["D:/blog/public/tags/WEB/page/4/index.html","929b31037d082d248efeede8fc9dcbff"],["D:/blog/public/tags/hackthebox/index.html","af6f7a0a7284f56c14147be85fe50660"],["D:/blog/public/tags/hackthebox/page/2/index.html","7062b31da7f71562100a45f9cbd9a9b5"],["D:/blog/public/tags/index.html","fc71c0129a5e01d504d58e88cd14c8ef"],["D:/blog/public/tags/javascript/index.html","c5dcf5b174686759d66dbe9f43410048"],["D:/blog/public/tags/pentest/index.html","6bf269128d35622193590d660400e145"],["D:/blog/public/tags/redis/index.html","26a1e7345bbe5eb34e87931c40cdaae2"],["D:/blog/public/tags/windows/index.html","40034809b8d0342f353bbae2ff12342a"],["D:/blog/public/tags/wp/index.html","97af75bcb5f18e4d6eff44cde8283710"],["D:/blog/public/tags/wp/page/2/index.html","e57bb793f614235bcadc1a7fffae3117"]];
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







