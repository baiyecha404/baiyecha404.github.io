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

var precacheConfig = [["D:/blog/public/2020/01/12/hackthebox-Wall/1.jpg","49e0684a68148adc091ead702d671120"],["D:/blog/public/2020/01/12/hackthebox-Wall/index.html","985dc391fc8091aa2d3ea0c8ddbda2fc"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/1.jpg","07efdb9a36ca39ab1b3adee06c174c08"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/2.jpg","6aba05000fe3322dcfaf970094157675"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/3.jpg","83e76f83eea00578b878f0214b2b1b07"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/index.html","4b7b9a27cdbefd4621a5d1521e78a963"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/1.jpg","2b660ad81af412675d23c7fd615c5949"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/2.jpg","d8b00f856b75cad60913116be56f6591"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/3.jpg","b2e830760e0364f8fdb3aa413aaee4b2"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/4.jpg","8a81ed16c89ea8850b82c4d471a260a6"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/index.html","a378c30901275a97bcc26174e79be111"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/1.jpg","4a98b463431646b6d7bef2e99b014ff4"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/2.jpg","63ca97fafbbcd8dfc8418e0ea6e4ee22"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/3.jpg","87b2a2202dd5b60ea7e6546889fdc285"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/4.jpg","3209d1298f5e0b7dbb8746e13359ba30"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/5.jpg","19489e468cabc149af22535dc8286356"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/6.jpg","755f50213e2f3ad8f73f2fc95b5109ae"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/7.jpg","a3d773ea65a561c6378b6392815d9f0d"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/index.html","6f025ae2db657f02916b409935fc379c"],["D:/blog/public/2020/01/29/hackthebox-AI——有趣的sql-JDWPgetshell/index.html","d0a2c624423aa552145e21719859da31"],["D:/blog/public/2020/01/30/杭电hgame-week1/1.jpg","f40802729e10c71c5e88118a033c3c8f"],["D:/blog/public/2020/01/30/杭电hgame-week1/10.jpg","51ba4728b34eee045121a78d11190730"],["D:/blog/public/2020/01/30/杭电hgame-week1/11.jpg","52401d7bd01382fc27bba3d89f2fb71f"],["D:/blog/public/2020/01/30/杭电hgame-week1/12.jpg","a6c87f976a1cd2d9a497dc04c8049e30"],["D:/blog/public/2020/01/30/杭电hgame-week1/13.jpg","3fd16ef2a52881ac6f9d4231ec650739"],["D:/blog/public/2020/01/30/杭电hgame-week1/14.jpg","1b541cb0ffe69e7b7726586a5c7e3da0"],["D:/blog/public/2020/01/30/杭电hgame-week1/2.jpg","c5f1933109146a453e197f52874059a8"],["D:/blog/public/2020/01/30/杭电hgame-week1/3.jpg","aa367b5424c7e88ecee0003cecea51a6"],["D:/blog/public/2020/01/30/杭电hgame-week1/4.jpg","7c1f49da38993726f799a5d6a496b118"],["D:/blog/public/2020/01/30/杭电hgame-week1/5.jpg","99ead273b57dba78c1f9b96775ef7f38"],["D:/blog/public/2020/01/30/杭电hgame-week1/6.jpg","7f20125c1a70fd6e871c994b8e773539"],["D:/blog/public/2020/01/30/杭电hgame-week1/7.jpg","3b48cfb9ee060b588037520fcb3a773e"],["D:/blog/public/2020/01/30/杭电hgame-week1/8.jpg","e8d37dd7aec3dc2a8bdb50a9475929ae"],["D:/blog/public/2020/01/30/杭电hgame-week1/9.jpg","5d54c31c95fdac50bc76e2fc94d0ec85"],["D:/blog/public/2020/01/30/杭电hgame-week1/index.html","ac6702760fa8cfc4698c904bb45201dd"],["D:/blog/public/2020/01/31/杭电hgame-week2/1.jpg","dea0ab76e5637f1091579b3297269543"],["D:/blog/public/2020/01/31/杭电hgame-week2/10.jpg","d76953c018a4118ebcc4356c230a77d6"],["D:/blog/public/2020/01/31/杭电hgame-week2/11.jpg","383e95c228cabc9f5ebd0af5677dbd3b"],["D:/blog/public/2020/01/31/杭电hgame-week2/12.jpg","2cb1842061331e8589bd8e5b39445e65"],["D:/blog/public/2020/01/31/杭电hgame-week2/13.jpg","66be7253b14531d2f806ce6d2723eaa3"],["D:/blog/public/2020/01/31/杭电hgame-week2/14.jpg","c53a543f195941782eb4ddc35a4dbcd1"],["D:/blog/public/2020/01/31/杭电hgame-week2/15.jpg","48cba2bf395b1352707b5fc3004c0585"],["D:/blog/public/2020/01/31/杭电hgame-week2/16.jpg","28eece3efc2eb96408bb8f7d1e170026"],["D:/blog/public/2020/01/31/杭电hgame-week2/17.jpg","af136b9089267f20fb9fcbcc7d1d9166"],["D:/blog/public/2020/01/31/杭电hgame-week2/2.jpg","a67fad9b44ced31a121f12c1a3a33f74"],["D:/blog/public/2020/01/31/杭电hgame-week2/3.jpg","0cf511a6fa030e5d14598ca63675c64c"],["D:/blog/public/2020/01/31/杭电hgame-week2/4.jpg","aa57c28dd701919cbb0e9dbf579bf974"],["D:/blog/public/2020/01/31/杭电hgame-week2/5.jpg","9244558a704a3dde9e0263bb87402374"],["D:/blog/public/2020/01/31/杭电hgame-week2/6.jpg","dae50cfad44ccc4e0a4a0613a5b0d5cb"],["D:/blog/public/2020/01/31/杭电hgame-week2/7.jpg","29ff78d4045d81b8144869489a52b6e2"],["D:/blog/public/2020/01/31/杭电hgame-week2/8.jpg","4d8f39c1f4ff563a3c95787a20789f0f"],["D:/blog/public/2020/01/31/杭电hgame-week2/9.jpg","3f9467429ded23549903c936bc2bb22d"],["D:/blog/public/2020/01/31/杭电hgame-week2/index.html","3f94bd8b99bfa64b420163e15bfe6e5f"],["D:/blog/public/2020/02/02/杭电hgame-week3/index.html","2344d94ad715f06417c3346853a95a69"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/1.jpg","bb9290f2ead9594a223473954c241ce8"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/2.jpg","6ccd22dd9d025e676e7421d9301821b0"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/3.jpg","6b87f3c0af60f26e93325db6824ec8f6"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/4.jpg","b975cbc3e3527489166ad2a92cdb4624"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/index.html","e055d760f5c3e19bd076fa2be04994bb"],["D:/blog/public/2020/02/06/hackthebox-ezpz/1.jpg","23bf5a7118ea3f40284a1a517a7f8ab0"],["D:/blog/public/2020/02/06/hackthebox-ezpz/2.jpg","a2ef028bf2dae207de77bafff065b59d"],["D:/blog/public/2020/02/06/hackthebox-ezpz/3.jpg","75f4537ddcfa266586753db9dabdbc7c"],["D:/blog/public/2020/02/06/hackthebox-ezpz/4.jpg","21558e584b8e3737b5a683ca481e2420"],["D:/blog/public/2020/02/06/hackthebox-ezpz/index.html","d2605f5dbcd2d87e2327d70c91ae6539"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/1.jpg","74d6c33a3c724fef3a88b6f6d7dd5b68"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/2.jpg","398b00faa3f431d8c4413f9a23050ce3"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/3.jpg","e319593d03ef31b0ff4b02d8ed9cae4a"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/index.html","41f985087e9a689dee1f22b1f7be0917"],["D:/blog/public/2020/02/18/从杭电hgame-week4学原型链污染/index.html","190f8a31fb18a56afff33cb4b310a159"],["D:/blog/public/2020/02/19/CISCN-2019-web部分复现/index.html","e42fb1c9d926cc2dccda64305a7615bd"],["D:/blog/public/2020/02/25/NCTF-phar-matches-everything填坑/index.html","e30ba1bf410923e30bd9e71d6530e5d0"],["D:/blog/public/2020/02/26/单独填坑-公益赛NodeGame/index.html","184c3efcfa07dd7706ad7ce49ae10af3"],["D:/blog/public/2020/03/02/学习笔记-命令执行及花式bypass写shell/index.html","398dc5111a23a8340a08d9d185d6dcff"],["D:/blog/public/2020/03/06/Vulhub复现/index.html","b3a038b89727a2ed67d9d615dd03ae68"],["D:/blog/public/2020/03/09/To-Dolist/index.html","1bbe6bc653641dd4a4ce5040c39864d0"],["D:/blog/public/2020/03/10/XCTF高校战“疫”网络安全分享赛/index.html","77004929c7ac4821699b54905b1d49bf"],["D:/blog/public/2020/03/18/使用Soap的ssrf-crlf攻击/index.html","d48a8bd90080b17b40459e3d0124a46e"],["D:/blog/public/2020/03/29/WUSTCTF&MRCTF部分web题解/index.html","62c79d1557ba8915ecddc2d12b210789"],["D:/blog/public/2020/03/30/VolgaCTF2020Qualifier复现/index.html","1b12243c0e7996b2d5c5392e543e7f22"],["D:/blog/public/2020/04/01/hackthebox-Sniper-初尝windows靶机/index.html","518e8758f60f26f572d4f24ec96a0a73"],["D:/blog/public/2020/04/13/ByteBanditsCTF2020两道WEB复现/index.html","9d695b3577459303baf408351d345c5e"],["D:/blog/public/2020/04/20/Nodejs的一些技巧/index.html","0efba8e715a78f79386f20944f2ad316"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/1.png","4fe77fbf7f8c7b1321a7264e1adbc1d4"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/10.png","7ca2f6e0a2e1d8c4b0f75c9a163db6c9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/11.png","dd30af1e04c6291a1254f94c18299c54"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/12.png","b86912dd1c049d3f275df3ebbdf900f8"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/13.png","645982851c50f071f3910020d5738d60"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/14.png","09617c9808b315fcebdf434d9341bdca"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/15.png","da0117dcb7ccec787277229b9235e821"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/16.png","611ca5de3656b66b8446b529ece39585"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/17.png","bb35beac017d2177d94de9ffcfc6bb2c"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/18.png","cf98f093cab95ab27bc89079ffcb6ba2"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/2.png","932f259dd31e70d840fe18b01fba1d49"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/3.png","fe4f779ed543f748ae63f7cb12d42285"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/4.png","d1289931388fbb1b1b6b0f4b264c19e6"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/5.png","b6b4beb5719c18b5821baa99caf09733"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/6.png","633b9a87d2f998cbeb3ea9ffd08f2140"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/7.png","b6211fc65a2d1774c111179885e7ca57"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/8.png","63e16915e39b2655ee3db50ad44dada9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/9.png","23fd12e89db3886a0d7af33e51f2891f"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/index.html","7782c2451df4fa4c0de7a289744d53d3"],["D:/blog/public/2020/05/04/De1CTF2020writeup/index.html","5d0d146f6f40df9c63a9b7b116616821"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/1.png","948eddf999fd3255f0f4afc0cf45c686"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/2.png","daf24f9256e7eef82d20652c3d3b44b8"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/3.png","1e186796519d50b298bc204ddf7cf1c5"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/4.png","a2e5c352c529e9e7e24352e1ab62d084"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/index.html","5598ca3538cbcc1742a64a61e968f721"],["D:/blog/public/2020/05/24/GKCTF2020writeup/index.html","b04dce0c35e1c686350fc147a02853c2"],["D:/blog/public/2020/05/30/初探Redis-wdb玄武组ssrfme&pwnhub公开赛/index.html","cf56d9692df540a165e1229229b120e0"],["D:/blog/public/2020/06/23/hackthebox-Quick-一次艰难的渗透/index.html","e0e605b4aba59837ff8c76aa6ed9e591"],["D:/blog/public/2020/06/24/Make-jwt-great-again/index.html","743a51dc015cebf3dbb48c6894d50f8d"],["D:/blog/public/2020/07/01/hackthebox-Oouch/index.html","c485b0a0d41db581e7c59660ca540a18"],["D:/blog/public/2020/07/05/SCTF2020-writeup/index.html","aa85b5abca8baaef38329dcb5b7480bc"],["D:/blog/public/2020/07/09/学习笔记-Java相关/index.html","ca50da4b4ba9fed977083529a997383f"],["D:/blog/public/2020/07/16/hackthebox-SneakyMailer/index.html","7f678f0dda2845710df92ab4f8ff8447"],["D:/blog/public/2020/07/22/hackthebox-Intense/index.html","37af4af653917917e0de75c684567168"],["D:/blog/public/2020/07/22/RingZer0-CTF-JavascriptChallenge/index.html","697b351709f2d4fb7b4ec834fde3519b"],["D:/blog/public/2020/07/24/hackthebox-Dyplesher/index.html","26055aa23c087761b73bca163130b1bd"],["D:/blog/public/2020/07/26/CyBRICS-CTF-2020/index.html","53ec2ebe7bf84601307a6bd34017bbc3"],["D:/blog/public/2020/08/05/Thinkphp-vuln/index.html","ab9fdb84b4f48a5b5fad8b2ac7bfdc76"],["D:/blog/public/2020/08/10/hackthebox-Fatty-JavaExploits/index.html","2d6f23a97520ee80ff8cfb17df240f38"],["D:/blog/public/2020/08/15/hackthebox-Unbalanced/index.html","b099ed920c8bbfb7755d0a9401d9449e"],["D:/blog/public/2020/08/17/Laravel-popchain/index.html","adbfd8ca20fbd7110b59f2512dcff1c3"],["D:/blog/public/2020/08/27/钓鱼城-zblog/index.html","f57f89088ce3673e4c0aa873ba64138c"],["D:/blog/public/2020/09/25/DarkCTF-WEB/index.html","1e516bd9e0338f5adf57a06e8f6695e8"],["D:/blog/public/2020/10/05/bootcamp-2020&mctf-2020/index.html","ffafb9f275c63f6ebf0cf47af2c0bd82"],["D:/blog/public/2020/10/09/学习笔记-Java深入/index.html","254df2fa4fdaf0348cd55b94662e722c"],["D:/blog/public/2020/10/19/N1CTF2020/index.html","f6850c94de3cb7cc86a365300d5004e8"],["D:/blog/public/2020/10/26/ByteCTF2020-easyscrapy/index.html","63b562f3a1fa13a8b0f6b7653c3db6f1"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/0.png","8b14359dfbce0d56fbd880ee4377e33d"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/index.html","c239f023a60218713f9953b73e6f34bb"],["D:/blog/public/2020/12/30/Farewell-to-2020/index.html","4abee996e6c8e23217d1ba9fc025ba7c"],["D:/blog/public/2021/02/07/golang的一些安全问题/index.html","a8af39e8811a8177b52084a7429f8fa9"],["D:/blog/public/2021/03/06/D^3CTF-8-bit-pub/index.html","9ccace0dd0846b6a101f1a995a22a33f"],["D:/blog/public/2021/04/04/angstromCTF-2021/index.html","25d315aab98df1c4e6befd9cc746550d"],["D:/blog/public/2021/05/30/春秋杯-WEB/index.html","e549d00331fab58e11b943072c28e6d7"],["D:/blog/public/2021/06/06/使用Node-js实现动态爬虫/index.html","292ef146a82252838ed6bb995b6c1844"],["D:/blog/public/2021/07/07/0ctf-tctf-soracon/index.html","842522e9a1483206a58de83a6272263a"],["D:/blog/public/2021/10/06/夏令营面试经历/index.html","fcfba1d7fbe684dc7357e9f378c69293"],["D:/blog/public/404.html","a1ca93de01f792359740e6014bf64202"],["D:/blog/public/about/index.html","b51c9b4aeb6819f03ead8daf38067be9"],["D:/blog/public/archives/2020/01/index.html","5a1671106e85e76fe3d3f3722d4b47be"],["D:/blog/public/archives/2020/02/index.html","df5ed54ae515208d70be125faa93ae66"],["D:/blog/public/archives/2020/03/index.html","e318404bbb12320ad1283e115d391313"],["D:/blog/public/archives/2020/04/index.html","14166c40a8082e59c833ceb2aff29693"],["D:/blog/public/archives/2020/05/index.html","ffd29465a4f3b72420bcb9922af35940"],["D:/blog/public/archives/2020/06/index.html","87b6b15079221b12a88dda963517320c"],["D:/blog/public/archives/2020/07/index.html","30f97bffb750dfb7283b2954e8f26e74"],["D:/blog/public/archives/2020/08/index.html","72d0d17fa56eb66960b8ab5522a0b65b"],["D:/blog/public/archives/2020/09/index.html","676a5a3f249e31b9a80c8d7024e21644"],["D:/blog/public/archives/2020/10/index.html","682341fd6d0caea43a9769b87ae3081d"],["D:/blog/public/archives/2020/11/index.html","b98d69e16989ce4d78c15ff929dd38a8"],["D:/blog/public/archives/2020/12/index.html","81f7cea0841dea71cfcf7c52d9012e33"],["D:/blog/public/archives/2020/index.html","816491a7e38030e23948ec50572b5756"],["D:/blog/public/archives/2020/page/2/index.html","91d456411e3b4e93055ba7227748d6ed"],["D:/blog/public/archives/2020/page/3/index.html","e50f3cb7200aa8b84798cc52f934586a"],["D:/blog/public/archives/2020/page/4/index.html","49a044131acca32a942da2dcbec08fed"],["D:/blog/public/archives/2020/page/5/index.html","e477cdd48820fe3e21dc46862d58c3f9"],["D:/blog/public/archives/2020/page/6/index.html","378bc5465927e43c151fe8773bc5960f"],["D:/blog/public/archives/2021/02/index.html","69de600c839ae3a7e12704486d79dff1"],["D:/blog/public/archives/2021/03/index.html","074f6fbd330a5d3ca027520a1ab5ccf6"],["D:/blog/public/archives/2021/04/index.html","38a90c17997e89a100d6e198783c2133"],["D:/blog/public/archives/2021/05/index.html","339a0a123c5a6ffd98811b73df888e85"],["D:/blog/public/archives/2021/06/index.html","07411f2efc0f233ab8acbbec20ba449c"],["D:/blog/public/archives/2021/07/index.html","5003de3ae7405ff1d368645259dedcb8"],["D:/blog/public/archives/2021/10/index.html","c9ab8d33a1d5343cb15e7a49dfdd0844"],["D:/blog/public/archives/2021/index.html","ade8e2e28f967c50e9ceb3ce3d7c90bc"],["D:/blog/public/archives/index.html","83ed2c0112fe1874cde829d7e90a0749"],["D:/blog/public/archives/page/2/index.html","83ed2c0112fe1874cde829d7e90a0749"],["D:/blog/public/archives/page/3/index.html","83ed2c0112fe1874cde829d7e90a0749"],["D:/blog/public/archives/page/4/index.html","83ed2c0112fe1874cde829d7e90a0749"],["D:/blog/public/archives/page/5/index.html","83ed2c0112fe1874cde829d7e90a0749"],["D:/blog/public/archives/page/6/index.html","83ed2c0112fe1874cde829d7e90a0749"],["D:/blog/public/assests/alipay.jpg","821163f8d5c9d1accd1b7cbeefaba556"],["D:/blog/public/assests/consola.ttf","fb505e28b6d130f08fe8f070e0d6b1b8"],["D:/blog/public/assests/icon.jpg","931d322663078eb74184292012d7ebd7"],["D:/blog/public/assests/wechat.png","57e6a192c26104ede51ff222f6e6080c"],["D:/blog/public/categories/index.html","95aab65f45622cc37c090d00e4563e7d"],["D:/blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/blog/public/css/first.css","ef36b890903233b2d482d1c1a6192fd9"],["D:/blog/public/css/style.css","bc1306da088b03c9586aafb7ca6dd689"],["D:/blog/public/friends/index.html","62caff4987b5197f4a0806b4cbab16e7"],["D:/blog/public/index.html","d367c7d0d73eb1656541868682839cbf"],["D:/blog/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["D:/blog/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["D:/blog/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["D:/blog/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["D:/blog/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["D:/blog/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["D:/blog/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["D:/blog/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["D:/blog/public/js/valine.js","9fe07b85c9890960251eaeacf3e38ee1"],["D:/blog/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/blog/public/mylist/index.html","1105871372eab34661aa2a74ecfbaf38"],["D:/blog/public/page/2/index.html","ea98b33184f619c1bf2d0c0ffd5f2ff4"],["D:/blog/public/page/3/index.html","0f4db61411dd992d52097cb46390e59d"],["D:/blog/public/page/4/index.html","46a06228720a208d8dd563c613c5e603"],["D:/blog/public/page/5/index.html","693b2be40c565c98f144e3126028b54c"],["D:/blog/public/page/6/index.html","d01cc18f22133135e2e23c9f4a417fb5"],["D:/blog/public/tags/CTF/index.html","dbe454b50862b30b8e09f729e80b4176"],["D:/blog/public/tags/CTF/page/2/index.html","474d706438dd2ee7b332435f01b6639c"],["D:/blog/public/tags/CTF/page/3/index.html","e623d9fcab56651a1b991da2fd7584f4"],["D:/blog/public/tags/CTF/page/4/index.html","89932bbe151eef5ccac714794e7efc9c"],["D:/blog/public/tags/Go/index.html","cd4577f65ea453b159c67e010aed39e3"],["D:/blog/public/tags/Java/index.html","84015181347645f0719c201cb4e0495d"],["D:/blog/public/tags/Linux/index.html","fbf20e0a13711aa09ca6ea9287f8c24b"],["D:/blog/public/tags/Node-js/index.html","4c5f7743531bf6b23eeed745d4ac86e6"],["D:/blog/public/tags/PHP/index.html","10929dc38ac6559ab14c6326958baf56"],["D:/blog/public/tags/WEB/index.html","64b9df72afdb42bda457026f9756a125"],["D:/blog/public/tags/WEB/page/2/index.html","96b77fbe6a18a1012404f6ff4e533a78"],["D:/blog/public/tags/WEB/page/3/index.html","119e27ea11a4b918e5b1a6b3df84baa0"],["D:/blog/public/tags/WEB/page/4/index.html","b801050e71636178606e8aa91bd1cc10"],["D:/blog/public/tags/hackthebox/index.html","f480cb4bd0bef6852c8b8a57ba446170"],["D:/blog/public/tags/hackthebox/page/2/index.html","5fadf0933fb088bd9ebd0e286b965768"],["D:/blog/public/tags/index.html","3e9fe68b9d67a528e6335aca70e27499"],["D:/blog/public/tags/javascript/index.html","6e83e3c0f7347db62b03aabe6c2e9b9b"],["D:/blog/public/tags/pentest/index.html","e97c75749f0862614444773bcff92c4c"],["D:/blog/public/tags/redis/index.html","57963de1fca63f543a9351e0ebbfe052"],["D:/blog/public/tags/windows/index.html","85e734298968c7a27c2db79bc4cc9d0f"],["D:/blog/public/tags/wp/index.html","158f3327521434d99028132613a735f6"],["D:/blog/public/tags/wp/page/2/index.html","3b3b08a96ecf9cc996adbca2260f8653"]];
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







