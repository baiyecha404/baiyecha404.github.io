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

var precacheConfig = [["D:/blog/public/2020/01/12/hackthebox-Wall/1.jpg","49e0684a68148adc091ead702d671120"],["D:/blog/public/2020/01/12/hackthebox-Wall/index.html","c2244fffd3ec67a6d911c83c903a76b4"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/1.jpg","07efdb9a36ca39ab1b3adee06c174c08"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/2.jpg","6aba05000fe3322dcfaf970094157675"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/3.jpg","83e76f83eea00578b878f0214b2b1b07"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/index.html","b3c0f3b19a0a405cc481e0d955a446f2"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/1.jpg","2b660ad81af412675d23c7fd615c5949"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/2.jpg","d8b00f856b75cad60913116be56f6591"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/3.jpg","b2e830760e0364f8fdb3aa413aaee4b2"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/4.jpg","8a81ed16c89ea8850b82c4d471a260a6"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/index.html","5642a665243b2debdff785280f32e62f"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/1.jpg","4a98b463431646b6d7bef2e99b014ff4"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/2.jpg","63ca97fafbbcd8dfc8418e0ea6e4ee22"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/3.jpg","87b2a2202dd5b60ea7e6546889fdc285"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/4.jpg","3209d1298f5e0b7dbb8746e13359ba30"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/5.jpg","19489e468cabc149af22535dc8286356"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/6.jpg","755f50213e2f3ad8f73f2fc95b5109ae"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/7.jpg","a3d773ea65a561c6378b6392815d9f0d"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/index.html","8c77ea5d20681d9e05717d55be0d9db4"],["D:/blog/public/2020/01/29/hackthebox-AI——有趣的sql-JDWPgetshell/index.html","ae243f6434c0f3b4b708896d05759dd6"],["D:/blog/public/2020/01/30/杭电hgame-week1/1.jpg","f40802729e10c71c5e88118a033c3c8f"],["D:/blog/public/2020/01/30/杭电hgame-week1/10.jpg","51ba4728b34eee045121a78d11190730"],["D:/blog/public/2020/01/30/杭电hgame-week1/11.jpg","52401d7bd01382fc27bba3d89f2fb71f"],["D:/blog/public/2020/01/30/杭电hgame-week1/12.jpg","a6c87f976a1cd2d9a497dc04c8049e30"],["D:/blog/public/2020/01/30/杭电hgame-week1/13.jpg","3fd16ef2a52881ac6f9d4231ec650739"],["D:/blog/public/2020/01/30/杭电hgame-week1/14.jpg","1b541cb0ffe69e7b7726586a5c7e3da0"],["D:/blog/public/2020/01/30/杭电hgame-week1/2.jpg","c5f1933109146a453e197f52874059a8"],["D:/blog/public/2020/01/30/杭电hgame-week1/3.jpg","aa367b5424c7e88ecee0003cecea51a6"],["D:/blog/public/2020/01/30/杭电hgame-week1/4.jpg","7c1f49da38993726f799a5d6a496b118"],["D:/blog/public/2020/01/30/杭电hgame-week1/5.jpg","99ead273b57dba78c1f9b96775ef7f38"],["D:/blog/public/2020/01/30/杭电hgame-week1/6.jpg","7f20125c1a70fd6e871c994b8e773539"],["D:/blog/public/2020/01/30/杭电hgame-week1/7.jpg","3b48cfb9ee060b588037520fcb3a773e"],["D:/blog/public/2020/01/30/杭电hgame-week1/8.jpg","e8d37dd7aec3dc2a8bdb50a9475929ae"],["D:/blog/public/2020/01/30/杭电hgame-week1/9.jpg","5d54c31c95fdac50bc76e2fc94d0ec85"],["D:/blog/public/2020/01/30/杭电hgame-week1/index.html","5fe3c53519af321037cbcf5b6634b423"],["D:/blog/public/2020/01/31/杭电hgame-week2/1.jpg","dea0ab76e5637f1091579b3297269543"],["D:/blog/public/2020/01/31/杭电hgame-week2/10.jpg","d76953c018a4118ebcc4356c230a77d6"],["D:/blog/public/2020/01/31/杭电hgame-week2/11.jpg","383e95c228cabc9f5ebd0af5677dbd3b"],["D:/blog/public/2020/01/31/杭电hgame-week2/12.jpg","2cb1842061331e8589bd8e5b39445e65"],["D:/blog/public/2020/01/31/杭电hgame-week2/13.jpg","66be7253b14531d2f806ce6d2723eaa3"],["D:/blog/public/2020/01/31/杭电hgame-week2/14.jpg","c53a543f195941782eb4ddc35a4dbcd1"],["D:/blog/public/2020/01/31/杭电hgame-week2/15.jpg","48cba2bf395b1352707b5fc3004c0585"],["D:/blog/public/2020/01/31/杭电hgame-week2/16.jpg","28eece3efc2eb96408bb8f7d1e170026"],["D:/blog/public/2020/01/31/杭电hgame-week2/17.jpg","af136b9089267f20fb9fcbcc7d1d9166"],["D:/blog/public/2020/01/31/杭电hgame-week2/2.jpg","a67fad9b44ced31a121f12c1a3a33f74"],["D:/blog/public/2020/01/31/杭电hgame-week2/3.jpg","0cf511a6fa030e5d14598ca63675c64c"],["D:/blog/public/2020/01/31/杭电hgame-week2/4.jpg","aa57c28dd701919cbb0e9dbf579bf974"],["D:/blog/public/2020/01/31/杭电hgame-week2/5.jpg","9244558a704a3dde9e0263bb87402374"],["D:/blog/public/2020/01/31/杭电hgame-week2/6.jpg","dae50cfad44ccc4e0a4a0613a5b0d5cb"],["D:/blog/public/2020/01/31/杭电hgame-week2/7.jpg","29ff78d4045d81b8144869489a52b6e2"],["D:/blog/public/2020/01/31/杭电hgame-week2/8.jpg","4d8f39c1f4ff563a3c95787a20789f0f"],["D:/blog/public/2020/01/31/杭电hgame-week2/9.jpg","3f9467429ded23549903c936bc2bb22d"],["D:/blog/public/2020/01/31/杭电hgame-week2/index.html","012d4674ff0e6d0a1aef8918b4c9301b"],["D:/blog/public/2020/02/02/杭电hgame-week3/index.html","7ce03ffaa7115de593783fa091a8f8da"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/1.jpg","bb9290f2ead9594a223473954c241ce8"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/2.jpg","6ccd22dd9d025e676e7421d9301821b0"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/3.jpg","6b87f3c0af60f26e93325db6824ec8f6"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/4.jpg","b975cbc3e3527489166ad2a92cdb4624"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/index.html","450679831aa3833e3694a21071e0fb3b"],["D:/blog/public/2020/02/06/hackthebox-ezpz/1.jpg","23bf5a7118ea3f40284a1a517a7f8ab0"],["D:/blog/public/2020/02/06/hackthebox-ezpz/2.jpg","a2ef028bf2dae207de77bafff065b59d"],["D:/blog/public/2020/02/06/hackthebox-ezpz/3.jpg","75f4537ddcfa266586753db9dabdbc7c"],["D:/blog/public/2020/02/06/hackthebox-ezpz/4.jpg","21558e584b8e3737b5a683ca481e2420"],["D:/blog/public/2020/02/06/hackthebox-ezpz/index.html","2c2f775e3344f40e404dff8ab4f953b9"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/1.jpg","74d6c33a3c724fef3a88b6f6d7dd5b68"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/2.jpg","398b00faa3f431d8c4413f9a23050ce3"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/3.jpg","e319593d03ef31b0ff4b02d8ed9cae4a"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/index.html","4b43662b4439eacea70a9829f17a3c57"],["D:/blog/public/2020/02/18/从杭电hgame-week4学原型链污染/index.html","72424276a607edee2c75e8b3839b9970"],["D:/blog/public/2020/02/19/CISCN-2019-web部分复现/index.html","816a82f8eea257ce6feebe177efba572"],["D:/blog/public/2020/02/25/NCTF-phar-matches-everything填坑/index.html","628cdc9579d857d0f21945523b91d8b9"],["D:/blog/public/2020/02/26/单独填坑-公益赛NodeGame/index.html","a54d83cd7bbc588ece6a7b7b5de17e7b"],["D:/blog/public/2020/03/02/学习笔记-命令执行及花式bypass写shell/index.html","156b874928e97e2322b2a77a905ba9a8"],["D:/blog/public/2020/03/06/Vulhub复现/index.html","07135ffc7f87d282185063d3c2443568"],["D:/blog/public/2020/03/09/To-Dolist/index.html","d9614d4e8b50c45fe0ba7252a0e0cf8e"],["D:/blog/public/2020/03/10/XCTF高校战“疫”网络安全分享赛/index.html","9d7fdf67fb4b12c11d4a56ecd39f10f6"],["D:/blog/public/2020/03/18/使用Soap的ssrf-crlf攻击/index.html","b3ffa2a92e68519d6a4dfe56168fb5bb"],["D:/blog/public/2020/03/29/WUSTCTF&MRCTF部分web题解/index.html","bad679454b2d8be228c989062e3e36fe"],["D:/blog/public/2020/03/30/VolgaCTF2020Qualifier复现/index.html","6389b67f86dac529c1fe7e89354873ea"],["D:/blog/public/2020/04/01/hackthebox-Sniper-初尝windows靶机/index.html","c7322839bed52e2852073fecb8e0f486"],["D:/blog/public/2020/04/13/ByteBanditsCTF2020两道WEB复现/index.html","7f2c9610c9b9884dac6906db26e062e1"],["D:/blog/public/2020/04/20/Nodejs的一些技巧/index.html","c3a5472832a77458f8cf98777745936a"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/1.png","4fe77fbf7f8c7b1321a7264e1adbc1d4"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/10.png","7ca2f6e0a2e1d8c4b0f75c9a163db6c9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/11.png","dd30af1e04c6291a1254f94c18299c54"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/12.png","b86912dd1c049d3f275df3ebbdf900f8"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/13.png","645982851c50f071f3910020d5738d60"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/14.png","09617c9808b315fcebdf434d9341bdca"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/15.png","da0117dcb7ccec787277229b9235e821"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/16.png","611ca5de3656b66b8446b529ece39585"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/17.png","bb35beac017d2177d94de9ffcfc6bb2c"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/18.png","cf98f093cab95ab27bc89079ffcb6ba2"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/2.png","932f259dd31e70d840fe18b01fba1d49"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/3.png","fe4f779ed543f748ae63f7cb12d42285"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/4.png","d1289931388fbb1b1b6b0f4b264c19e6"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/5.png","b6b4beb5719c18b5821baa99caf09733"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/6.png","633b9a87d2f998cbeb3ea9ffd08f2140"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/7.png","b6211fc65a2d1774c111179885e7ca57"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/8.png","63e16915e39b2655ee3db50ad44dada9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/9.png","23fd12e89db3886a0d7af33e51f2891f"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/index.html","9912d74c0370adbae624eddaae2b56ed"],["D:/blog/public/2020/05/04/De1CTF2020writeup/index.html","604632943f10ad0583640210198f5091"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/1.png","948eddf999fd3255f0f4afc0cf45c686"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/2.png","daf24f9256e7eef82d20652c3d3b44b8"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/3.png","1e186796519d50b298bc204ddf7cf1c5"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/4.png","a2e5c352c529e9e7e24352e1ab62d084"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/index.html","ee321f0f392faa23c33222fbc32c65fb"],["D:/blog/public/2020/05/24/GKCTF2020writeup/index.html","5f385999b2cff0c798fef8c941cffa15"],["D:/blog/public/2020/05/30/初探Redis-wdb玄武组ssrfme&pwnhub公开赛/index.html","c4d3534d73728683ae995f26089f133e"],["D:/blog/public/2020/06/23/hackthebox-Quick-一次艰难的渗透/index.html","fee28ad6100b875f5d07f844d353521b"],["D:/blog/public/2020/06/24/Make-jwt-great-again/index.html","9fc1983ece516e36e16605002da01d6c"],["D:/blog/public/2020/07/01/hackthebox-Oouch/index.html","061349cc8f9216b6ac3c1395c72d0086"],["D:/blog/public/2020/07/05/SCTF2020-writeup/index.html","ed5ef65c372f8ae1d3934afdc8a62c93"],["D:/blog/public/2020/07/07/hackthebox-Travel/index.html","1beae1a2080737d388053ebb0680b9c4"],["D:/blog/public/2020/07/09/学习笔记-Java相关/index.html","e2ae33170964fe97d5e6a4301380b597"],["D:/blog/public/2020/07/16/hackthebox-SneakyMailer/index.html","2aadf7d11ba3406929513bca29d930f4"],["D:/blog/public/2020/07/22/hackthebox-Intense/index.html","f58ee3a3f7553a59d44e3960447bd60d"],["D:/blog/public/2020/07/22/RingZer0-CTF-JavascriptChallenge/index.html","23538768b707cd71e8fdd2fb91fa057e"],["D:/blog/public/2020/07/24/hackthebox-Dyplesher/index.html","d553c7f8b28d5cdc1634f5fe0150c52c"],["D:/blog/public/2020/07/26/CyBRICS-CTF-2020/index.html","c92547bbfb3431fbd50a547ec98ad8d7"],["D:/blog/public/2020/08/05/Thinkphp-vuln/index.html","f8106e29d79e0bbe6aff47095d6a8dd5"],["D:/blog/public/2020/08/10/hackthebox-Fatty-JavaExploits/index.html","b8dc8838d4025e65c8517fac740a4697"],["D:/blog/public/2020/08/15/hackthebox-Unbalanced/index.html","53b83496933282557ffcfce97d16f907"],["D:/blog/public/2020/08/17/Laravel-popchain/index.html","874bdc3f3fcd75c525eeaafc227f55e9"],["D:/blog/public/2020/08/27/钓鱼城-zblog/index.html","5b56b47e61d23587326874b0a8f7eab2"],["D:/blog/public/2020/09/25/DarkCTF-WEB/index.html","187dfecd0c98f52a340036f45441e02b"],["D:/blog/public/2020/10/05/bootcamp-2020&mctf-2020/index.html","a56cdf6b3931ef88d850ad25c3b25373"],["D:/blog/public/2020/10/09/学习笔记-Java深入/index.html","338151a54c187ea0f126b7a686a49c75"],["D:/blog/public/2020/10/19/N1CTF2020/index.html","46e3025992ae28adadbd54e3a75440d6"],["D:/blog/public/2020/10/26/ByteCTF2020-easyscrapy/index.html","7d61cfa9b45fa18da26d8c938c595419"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/0.png","8b14359dfbce0d56fbd880ee4377e33d"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/index.html","e2f1d8171d2970aa9c87a66548562473"],["D:/blog/public/404.html","488af69304fe162a9a49fca98f06d3d0"],["D:/blog/public/about/index.html","956b8eeefca4993083c45ecde81583f5"],["D:/blog/public/archives/2020/01/index.html","31a5f92f745140fa50f5896adc40c1b5"],["D:/blog/public/archives/2020/02/index.html","e8fe004e5080465e07fe3337d0eb422d"],["D:/blog/public/archives/2020/03/index.html","dc368fd0b6f59a7e453a991ff16a981f"],["D:/blog/public/archives/2020/04/index.html","fb1605f110217bf65990542363cbb0eb"],["D:/blog/public/archives/2020/05/index.html","d4f281f3f98aa75abac7836b59a98754"],["D:/blog/public/archives/2020/06/index.html","29efa865186b3027363358a0d4a301de"],["D:/blog/public/archives/2020/07/index.html","e23aada8904a02b3e44f23661e37ea88"],["D:/blog/public/archives/2020/08/index.html","95e8f8f26d53a678e2e68abfce87e102"],["D:/blog/public/archives/2020/09/index.html","777b6afdc1d0a3a229dedfd9b8e3cded"],["D:/blog/public/archives/2020/10/index.html","7454681cd1927e7c77c767adb057409a"],["D:/blog/public/archives/2020/11/index.html","0a3b16d5dcf7f5f5eb797e4b93ee8c92"],["D:/blog/public/archives/2020/index.html","edcdb5ef7f6bb37c940ed6e3da0c6dda"],["D:/blog/public/archives/2020/page/2/index.html","f05402587b496ba3fd4ee6c454331484"],["D:/blog/public/archives/2020/page/3/index.html","9a1a66f3c08578ba52e3458c4e7a950e"],["D:/blog/public/archives/2020/page/4/index.html","b00c114a27c3b0eb3a716c81e74fbbc7"],["D:/blog/public/archives/2020/page/5/index.html","9e743ff2473a7ddcbc1d4c3a0b72c47f"],["D:/blog/public/archives/2020/page/6/index.html","666ed7e74158a69657745aec31cca181"],["D:/blog/public/archives/index.html","0ed3001ee0580095a27ca078cdf81f88"],["D:/blog/public/archives/page/2/index.html","0ed3001ee0580095a27ca078cdf81f88"],["D:/blog/public/archives/page/3/index.html","0ed3001ee0580095a27ca078cdf81f88"],["D:/blog/public/archives/page/4/index.html","0ed3001ee0580095a27ca078cdf81f88"],["D:/blog/public/archives/page/5/index.html","0ed3001ee0580095a27ca078cdf81f88"],["D:/blog/public/archives/page/6/index.html","0ed3001ee0580095a27ca078cdf81f88"],["D:/blog/public/assests/icon.jpg","931d322663078eb74184292012d7ebd7"],["D:/blog/public/categories/index.html","417db88f5cc38f68586914418636f9c4"],["D:/blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/blog/public/css/style.css","cc6dde4434ac6c5b3f5fc1e78d8aa9fc"],["D:/blog/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/blog/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/blog/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/blog/public/friends/index.html","6a695fcb5c233241c422bd7fe8324e0f"],["D:/blog/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/blog/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/blog/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/blog/public/index.html","cf954b1b416a7ca64ea3ad78ae63c87a"],["D:/blog/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["D:/blog/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["D:/blog/public/js/valine.js","430596db58e60567246c52c474816ee6"],["D:/blog/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/blog/public/mylist/index.html","424e65683fa94ef98414645be93d23eb"],["D:/blog/public/page/2/index.html","d09644b868acd7f1dcbbd9e5666d1ca2"],["D:/blog/public/page/3/index.html","c9bd93f08b705acb4a5f4983dc1ebe93"],["D:/blog/public/page/4/index.html","162109ccf759ab10196285b8dd44e417"],["D:/blog/public/page/5/index.html","56ecd3e8c0ec16d7ccb59b0fc1b97c41"],["D:/blog/public/page/6/index.html","5d5d36a2c116333bd2e7b081ba091310"],["D:/blog/public/tags/CTF/index.html","8a4780788f471debd0e7aac7a2a4b892"],["D:/blog/public/tags/CTF/page/2/index.html","c8d5f9e1813622cbc0b1878e0c35c242"],["D:/blog/public/tags/CTF/page/3/index.html","869bf2ca3f0331b6597610105ecab451"],["D:/blog/public/tags/Java/index.html","363b453cfc922a9e879a71fd2b9ef659"],["D:/blog/public/tags/Linux/index.html","f5528561483a35ba35aa9d93976e4394"],["D:/blog/public/tags/Node-js/index.html","d2a3f5817387bbd528f03962379e2df1"],["D:/blog/public/tags/PHP/index.html","459eaa1d0342e8984ee593c4082e72cf"],["D:/blog/public/tags/WEB/index.html","f084c6a6f7d625f57a12ae17afdecbf3"],["D:/blog/public/tags/WEB/page/2/index.html","1bcb006586c68601dffa7f5f8f3181ce"],["D:/blog/public/tags/WEB/page/3/index.html","5198d39af49159c705ea6b85061726bc"],["D:/blog/public/tags/WEB/page/4/index.html","cd42461bf28122fc6ad767c6787393c6"],["D:/blog/public/tags/hackthebox/index.html","ff2bbaef884fd73bf5a26d88655e881d"],["D:/blog/public/tags/hackthebox/page/2/index.html","c779210735476f44abb6ac2c25140825"],["D:/blog/public/tags/index.html","89440ebbdd0c4822172fb9daf318f8cc"],["D:/blog/public/tags/javascript/index.html","77e09dee065e4b8f1f94e6fa5c0e9511"],["D:/blog/public/tags/pentest/index.html","b0b3bb717d4dbd816f14821ff6be5ff1"],["D:/blog/public/tags/redis/index.html","a0580ab85b1c4a7068e4285893abce77"],["D:/blog/public/tags/windows/index.html","2ad1e7f67732154981b5e5b35fcd1de4"],["D:/blog/public/tags/wp/index.html","6551a8a34f5cfc773a9b4f04c451e653"],["D:/blog/public/tags/wp/page/2/index.html","6400bfe81593e821709ac7ffb18862c5"]];
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







