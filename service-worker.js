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

var precacheConfig = [["D:/blog/public/2020/01/12/hackthebox-Wall/1.jpg","49e0684a68148adc091ead702d671120"],["D:/blog/public/2020/01/12/hackthebox-Wall/index.html","e2061f8c1388f98d1d97a3d057abc4b5"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/1.jpg","07efdb9a36ca39ab1b3adee06c174c08"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/2.jpg","6aba05000fe3322dcfaf970094157675"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/3.jpg","83e76f83eea00578b878f0214b2b1b07"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/index.html","7bb334d08b4b9c3cd02412eed4d9cec3"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/1.jpg","2b660ad81af412675d23c7fd615c5949"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/2.jpg","d8b00f856b75cad60913116be56f6591"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/3.jpg","b2e830760e0364f8fdb3aa413aaee4b2"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/4.jpg","8a81ed16c89ea8850b82c4d471a260a6"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/index.html","c9fb08f2979cb66dedff056613ee52b6"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/1.jpg","4a98b463431646b6d7bef2e99b014ff4"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/2.jpg","63ca97fafbbcd8dfc8418e0ea6e4ee22"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/3.jpg","87b2a2202dd5b60ea7e6546889fdc285"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/4.jpg","3209d1298f5e0b7dbb8746e13359ba30"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/5.jpg","19489e468cabc149af22535dc8286356"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/6.jpg","755f50213e2f3ad8f73f2fc95b5109ae"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/7.jpg","a3d773ea65a561c6378b6392815d9f0d"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/index.html","215c77b252a921eaef33367bdb1a11cc"],["D:/blog/public/2020/01/29/hackthebox-AI——有趣的sql-JDWPgetshell/index.html","d9812bacea3e3e8337558582d5338f84"],["D:/blog/public/2020/01/30/杭电hgame-week1/1.jpg","f40802729e10c71c5e88118a033c3c8f"],["D:/blog/public/2020/01/30/杭电hgame-week1/10.jpg","51ba4728b34eee045121a78d11190730"],["D:/blog/public/2020/01/30/杭电hgame-week1/11.jpg","52401d7bd01382fc27bba3d89f2fb71f"],["D:/blog/public/2020/01/30/杭电hgame-week1/12.jpg","a6c87f976a1cd2d9a497dc04c8049e30"],["D:/blog/public/2020/01/30/杭电hgame-week1/13.jpg","3fd16ef2a52881ac6f9d4231ec650739"],["D:/blog/public/2020/01/30/杭电hgame-week1/14.jpg","1b541cb0ffe69e7b7726586a5c7e3da0"],["D:/blog/public/2020/01/30/杭电hgame-week1/2.jpg","c5f1933109146a453e197f52874059a8"],["D:/blog/public/2020/01/30/杭电hgame-week1/3.jpg","aa367b5424c7e88ecee0003cecea51a6"],["D:/blog/public/2020/01/30/杭电hgame-week1/4.jpg","7c1f49da38993726f799a5d6a496b118"],["D:/blog/public/2020/01/30/杭电hgame-week1/5.jpg","99ead273b57dba78c1f9b96775ef7f38"],["D:/blog/public/2020/01/30/杭电hgame-week1/6.jpg","7f20125c1a70fd6e871c994b8e773539"],["D:/blog/public/2020/01/30/杭电hgame-week1/7.jpg","3b48cfb9ee060b588037520fcb3a773e"],["D:/blog/public/2020/01/30/杭电hgame-week1/8.jpg","e8d37dd7aec3dc2a8bdb50a9475929ae"],["D:/blog/public/2020/01/30/杭电hgame-week1/9.jpg","5d54c31c95fdac50bc76e2fc94d0ec85"],["D:/blog/public/2020/01/30/杭电hgame-week1/index.html","dc322646864c31303225ee355f5b02cf"],["D:/blog/public/2020/01/31/杭电hgame-week2/1.jpg","dea0ab76e5637f1091579b3297269543"],["D:/blog/public/2020/01/31/杭电hgame-week2/10.jpg","d76953c018a4118ebcc4356c230a77d6"],["D:/blog/public/2020/01/31/杭电hgame-week2/11.jpg","383e95c228cabc9f5ebd0af5677dbd3b"],["D:/blog/public/2020/01/31/杭电hgame-week2/12.jpg","2cb1842061331e8589bd8e5b39445e65"],["D:/blog/public/2020/01/31/杭电hgame-week2/13.jpg","66be7253b14531d2f806ce6d2723eaa3"],["D:/blog/public/2020/01/31/杭电hgame-week2/14.jpg","c53a543f195941782eb4ddc35a4dbcd1"],["D:/blog/public/2020/01/31/杭电hgame-week2/15.jpg","48cba2bf395b1352707b5fc3004c0585"],["D:/blog/public/2020/01/31/杭电hgame-week2/16.jpg","28eece3efc2eb96408bb8f7d1e170026"],["D:/blog/public/2020/01/31/杭电hgame-week2/17.jpg","af136b9089267f20fb9fcbcc7d1d9166"],["D:/blog/public/2020/01/31/杭电hgame-week2/2.jpg","a67fad9b44ced31a121f12c1a3a33f74"],["D:/blog/public/2020/01/31/杭电hgame-week2/3.jpg","0cf511a6fa030e5d14598ca63675c64c"],["D:/blog/public/2020/01/31/杭电hgame-week2/4.jpg","aa57c28dd701919cbb0e9dbf579bf974"],["D:/blog/public/2020/01/31/杭电hgame-week2/5.jpg","9244558a704a3dde9e0263bb87402374"],["D:/blog/public/2020/01/31/杭电hgame-week2/6.jpg","dae50cfad44ccc4e0a4a0613a5b0d5cb"],["D:/blog/public/2020/01/31/杭电hgame-week2/7.jpg","29ff78d4045d81b8144869489a52b6e2"],["D:/blog/public/2020/01/31/杭电hgame-week2/8.jpg","4d8f39c1f4ff563a3c95787a20789f0f"],["D:/blog/public/2020/01/31/杭电hgame-week2/9.jpg","3f9467429ded23549903c936bc2bb22d"],["D:/blog/public/2020/01/31/杭电hgame-week2/index.html","a4c74969459c8be440ff98e9dff9fcb8"],["D:/blog/public/2020/02/02/杭电hgame-week3/index.html","b28247a10743a599dd4fe8f62f04ccc9"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/1.jpg","bb9290f2ead9594a223473954c241ce8"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/2.jpg","6ccd22dd9d025e676e7421d9301821b0"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/3.jpg","6b87f3c0af60f26e93325db6824ec8f6"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/4.jpg","b975cbc3e3527489166ad2a92cdb4624"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/index.html","51158996584ea07cfaefabd27ed9d593"],["D:/blog/public/2020/02/06/hackthebox-ezpz/1.jpg","23bf5a7118ea3f40284a1a517a7f8ab0"],["D:/blog/public/2020/02/06/hackthebox-ezpz/2.jpg","a2ef028bf2dae207de77bafff065b59d"],["D:/blog/public/2020/02/06/hackthebox-ezpz/3.jpg","75f4537ddcfa266586753db9dabdbc7c"],["D:/blog/public/2020/02/06/hackthebox-ezpz/4.jpg","21558e584b8e3737b5a683ca481e2420"],["D:/blog/public/2020/02/06/hackthebox-ezpz/index.html","048b46cfab133b18595c02379fd742d4"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/1.jpg","74d6c33a3c724fef3a88b6f6d7dd5b68"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/2.jpg","398b00faa3f431d8c4413f9a23050ce3"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/3.jpg","e319593d03ef31b0ff4b02d8ed9cae4a"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/index.html","3a27c1b349207103d45eff6555290537"],["D:/blog/public/2020/02/18/从杭电hgame-week4学原型链污染/index.html","8ca5ebd256d9c95107961a6a43f5c103"],["D:/blog/public/2020/02/19/CISCN-2019-web部分复现/index.html","b7084344588006f3b58fdc007658e958"],["D:/blog/public/2020/02/25/NCTF-phar-matches-everything填坑/index.html","4606269b60f2a706da7b1a7df59758be"],["D:/blog/public/2020/02/26/单独填坑-公益赛NodeGame/index.html","fd94f13503dc5e3123b50e005daa6e75"],["D:/blog/public/2020/03/02/学习笔记-命令执行及花式bypass写shell/index.html","5736a9283b0ead5767af0ee575a1c009"],["D:/blog/public/2020/03/06/Vulhub复现/index.html","e56bfdd02c7066b256d89635d28f0be5"],["D:/blog/public/2020/03/09/To-Dolist/index.html","d781e60d6049a3f3a673b70c9b16cd9d"],["D:/blog/public/2020/03/10/XCTF高校战“疫”网络安全分享赛/index.html","8770b73361ec81f375a7713ee657c443"],["D:/blog/public/2020/03/18/使用Soap的ssrf-crlf攻击/index.html","c25261c2dc95d9886bcdf552a39e5f27"],["D:/blog/public/2020/03/29/WUSTCTF&MRCTF部分web题解/index.html","f7e3caf8404f1ae7039d4555cfd8c960"],["D:/blog/public/2020/03/30/VolgaCTF2020Qualifier复现/index.html","40aee20ad8aae1e00f05c135a746c9e1"],["D:/blog/public/2020/04/01/hackthebox-Sniper-初尝windows靶机/index.html","e90cb3137793f33888ce158d64bdcfa7"],["D:/blog/public/2020/04/13/ByteBanditsCTF2020两道WEB复现/index.html","efbe1434544b0ccfa6503d8d7641b483"],["D:/blog/public/2020/04/20/Nodejs的一些技巧/index.html","220c8197f3b46e3f8dab27ebb812f177"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/1.png","4fe77fbf7f8c7b1321a7264e1adbc1d4"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/10.png","7ca2f6e0a2e1d8c4b0f75c9a163db6c9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/11.png","dd30af1e04c6291a1254f94c18299c54"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/12.png","b86912dd1c049d3f275df3ebbdf900f8"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/13.png","645982851c50f071f3910020d5738d60"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/14.png","09617c9808b315fcebdf434d9341bdca"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/15.png","da0117dcb7ccec787277229b9235e821"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/16.png","611ca5de3656b66b8446b529ece39585"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/17.png","bb35beac017d2177d94de9ffcfc6bb2c"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/18.png","cf98f093cab95ab27bc89079ffcb6ba2"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/2.png","932f259dd31e70d840fe18b01fba1d49"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/3.png","fe4f779ed543f748ae63f7cb12d42285"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/4.png","d1289931388fbb1b1b6b0f4b264c19e6"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/5.png","b6b4beb5719c18b5821baa99caf09733"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/6.png","633b9a87d2f998cbeb3ea9ffd08f2140"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/7.png","b6211fc65a2d1774c111179885e7ca57"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/8.png","63e16915e39b2655ee3db50ad44dada9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/9.png","23fd12e89db3886a0d7af33e51f2891f"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/index.html","235874aa954117d1c72331382cceded5"],["D:/blog/public/2020/05/04/De1CTF2020writeup/index.html","8ccc8bf84a524966fe86e6794d09214c"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/1.png","948eddf999fd3255f0f4afc0cf45c686"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/2.png","daf24f9256e7eef82d20652c3d3b44b8"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/3.png","1e186796519d50b298bc204ddf7cf1c5"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/4.png","a2e5c352c529e9e7e24352e1ab62d084"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/index.html","3326fcd9eb129d843d399ce5d3f2e636"],["D:/blog/public/2020/05/24/GKCTF2020writeup/index.html","eb3fa08c4a0139fbd002a3b9b47a195f"],["D:/blog/public/2020/05/30/初探Redis-wdb玄武组ssrfme&pwnhub公开赛/index.html","b7e1f4b949a4825792dc8867fecb46b9"],["D:/blog/public/2020/06/23/hackthebox-Quick-一次艰难的渗透/index.html","e325ac366955c8662d0a3ec966c8f26c"],["D:/blog/public/2020/06/24/Make-jwt-great-again/index.html","d3583b132f1112d8e6cadf3441f9e082"],["D:/blog/public/2020/07/01/hackthebox-Oouch/index.html","066777e36019a3f51aacbf99cef46588"],["D:/blog/public/2020/07/05/SCTF2020-writeup/index.html","ce1e78441db1d21cd355c2210c2df712"],["D:/blog/public/2020/07/09/学习笔记-Java相关/index.html","fa35a134e23da811431c287e5ee259fe"],["D:/blog/public/2020/07/16/hackthebox-SneakyMailer/index.html","89c291b1b28d112c88060ba4725ede12"],["D:/blog/public/2020/07/22/hackthebox-Intense/index.html","73d6c505e534bc2f927d53561e44e588"],["D:/blog/public/2020/07/22/RingZer0-CTF-JavascriptChallenge/index.html","ea5b32c15afb86cfd3d0b57a492a7a64"],["D:/blog/public/2020/07/24/hackthebox-Dyplesher/index.html","128eba2bc1e65cd865a2f1079aca23a9"],["D:/blog/public/2020/07/26/CyBRICS-CTF-2020/index.html","c4adad0c377d8c47429dbf353e48db5f"],["D:/blog/public/2020/08/05/Thinkphp-vuln/index.html","3879f35ddb31d2ffbe1643049c5c1ca0"],["D:/blog/public/2020/08/10/hackthebox-Fatty-JavaExploits/index.html","3208a4f993d5bd5588aecb05562e6192"],["D:/blog/public/2020/08/15/hackthebox-Unbalanced/index.html","2f9c5ce5fe99db875a32f660eb857e5c"],["D:/blog/public/2020/08/17/Laravel-popchain/index.html","e9bd95ed9d14e018a8c96448ede29039"],["D:/blog/public/2020/08/27/钓鱼城-zblog/index.html","d3b6e3174ea000671c8d85473d98e148"],["D:/blog/public/2020/09/25/DarkCTF-WEB/index.html","cee7f9eee32688b44941477267a2c1b9"],["D:/blog/public/2020/10/05/bootcamp-2020&mctf-2020/index.html","1e341aef1fa91746888353fc1759063c"],["D:/blog/public/2020/10/09/学习笔记-Java深入/index.html","2dea7a5ba281493ae66528e5bf2a527a"],["D:/blog/public/2020/10/19/N1CTF2020/index.html","3da26f24420901e8bbb01d903714c255"],["D:/blog/public/2020/10/26/ByteCTF2020-easyscrapy/index.html","faa71a25cff72d8859ab183ff484bbc8"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/0.png","8b14359dfbce0d56fbd880ee4377e33d"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/index.html","10ab6e61a4775389a82f8012f7b863ce"],["D:/blog/public/2020/12/30/Farewell-to-2020/index.html","aac1f63d7d20a538888b5890c086a72d"],["D:/blog/public/2021/02/07/golang的一些安全问题/index.html","54855fb4e39c16038e7d6d68f8a180af"],["D:/blog/public/2021/03/06/D^3CTF-8-bit-pub/index.html","a2536c8547ae1ad49a6047968168f453"],["D:/blog/public/2021/04/04/angstromCTF-2021/index.html","547149b1133ffe7a1ad7185b230be287"],["D:/blog/public/2021/05/30/春秋杯-WEB/index.html","816887219e220260e6feda768f9dc806"],["D:/blog/public/2021/06/06/使用Node-js实现动态爬虫/index.html","ab8aa4f87759cdb2201aaacb62382172"],["D:/blog/public/2021/07/07/0ctf-tctf-soracon/index.html","1dd35fcb758b690663f7615f088128ac"],["D:/blog/public/2021/10/06/夏令营面试经历/index.html","450f92f99840490d29f51c181129b893"],["D:/blog/public/404.html","a5f99a5db024b16c27fda84ddaaca3e9"],["D:/blog/public/about/index.html","6f969f17e73f2934c1fe2bbc3323fe9d"],["D:/blog/public/archives/2020/01/index.html","341ba8b0819f84f40453af8b7fb60971"],["D:/blog/public/archives/2020/02/index.html","3597bffe7dcee0bdf6acf202d448cf6a"],["D:/blog/public/archives/2020/03/index.html","7c4b0fa2935d18f83110ace605ed42ac"],["D:/blog/public/archives/2020/04/index.html","d046a31c3cbb23e4f428dde20e53fe4e"],["D:/blog/public/archives/2020/05/index.html","7cc270d573024ac2015542e3d731c275"],["D:/blog/public/archives/2020/06/index.html","e317fdf985afd7b9459284611317b350"],["D:/blog/public/archives/2020/07/index.html","f8c9faa202137fce3120099b3067735a"],["D:/blog/public/archives/2020/08/index.html","a803f9ce11c6b38025722c6641963efc"],["D:/blog/public/archives/2020/09/index.html","e6068a303c073cf46d865eb41cbec351"],["D:/blog/public/archives/2020/10/index.html","cb24e646c05c5a1e66da4002b339dad0"],["D:/blog/public/archives/2020/11/index.html","e8fa07ddd9a95a24869c20b769f473e0"],["D:/blog/public/archives/2020/12/index.html","9d29a439a53c4d7f43e09ab6acb110c0"],["D:/blog/public/archives/2020/index.html","7c46d7ec5518c06c149998064c4fef20"],["D:/blog/public/archives/2020/page/2/index.html","54c165cd58be7c0358d9a41bf1ffe793"],["D:/blog/public/archives/2020/page/3/index.html","0ea5411e0c51be0c14cc1cadbf82b823"],["D:/blog/public/archives/2020/page/4/index.html","663a9a20582940f92ffb396ce628e67a"],["D:/blog/public/archives/2020/page/5/index.html","aa85ed43945e6e50aac95da42acaf2a4"],["D:/blog/public/archives/2020/page/6/index.html","795c41aa5544570b90a109ffbb0ddaf1"],["D:/blog/public/archives/2021/02/index.html","172cc0c11189ad1af8082b0b2fd0db58"],["D:/blog/public/archives/2021/03/index.html","2f6f1ab5b7ca2e640c60e3e4c2e34f60"],["D:/blog/public/archives/2021/04/index.html","43a9d56e5231df56498d40ae0c532275"],["D:/blog/public/archives/2021/05/index.html","a0f1a957c6bb4efff7f5728fdff258a3"],["D:/blog/public/archives/2021/06/index.html","dc0c7af248eeb0ef7b1825bacaf7b4c0"],["D:/blog/public/archives/2021/07/index.html","687fe4fc7bc4f3b21a76a98d3110264a"],["D:/blog/public/archives/2021/10/index.html","bb7b6c2dd1d280893febd84fe604fe8c"],["D:/blog/public/archives/2021/index.html","e692bacb70df177b8ee4b703bec00f50"],["D:/blog/public/archives/index.html","9b6819703838e40bfc51fd53f44a3d69"],["D:/blog/public/archives/page/2/index.html","9b6819703838e40bfc51fd53f44a3d69"],["D:/blog/public/archives/page/3/index.html","9b6819703838e40bfc51fd53f44a3d69"],["D:/blog/public/archives/page/4/index.html","9b6819703838e40bfc51fd53f44a3d69"],["D:/blog/public/archives/page/5/index.html","9b6819703838e40bfc51fd53f44a3d69"],["D:/blog/public/archives/page/6/index.html","9b6819703838e40bfc51fd53f44a3d69"],["D:/blog/public/assests/alipay.jpg","821163f8d5c9d1accd1b7cbeefaba556"],["D:/blog/public/assests/consola.ttf","fb505e28b6d130f08fe8f070e0d6b1b8"],["D:/blog/public/assests/icon.jpg","931d322663078eb74184292012d7ebd7"],["D:/blog/public/assests/wechat.png","57e6a192c26104ede51ff222f6e6080c"],["D:/blog/public/categories/index.html","e62be1c4c3308ef6d7f69f6906155ae1"],["D:/blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/blog/public/css/first.css","ef36b890903233b2d482d1c1a6192fd9"],["D:/blog/public/css/style.css","bc1306da088b03c9586aafb7ca6dd689"],["D:/blog/public/friends/index.html","23f7a4e2c3606706f51eb4f44a977ff8"],["D:/blog/public/index.html","6ed295b3f7c7bf3cdfe8237773305ae7"],["D:/blog/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["D:/blog/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["D:/blog/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["D:/blog/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["D:/blog/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["D:/blog/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["D:/blog/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["D:/blog/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["D:/blog/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["D:/blog/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/blog/public/mylist/index.html","13ca9be11f4554ec326c0b3916d93767"],["D:/blog/public/page/2/index.html","aeee178ea796bbc54f5be01d02e1c0bb"],["D:/blog/public/page/3/index.html","514f8da4b856a3111a1c413b475ab418"],["D:/blog/public/page/4/index.html","2ba4f34d5af4b11271c6e7c4f9bf1b8c"],["D:/blog/public/page/5/index.html","509b474372be6f03b39cdb213f6c8b5a"],["D:/blog/public/page/6/index.html","51dc34ae2a1d84ce4b8a9d735efecb0a"],["D:/blog/public/tags/CTF/index.html","25145538e3032da671ef0e663c6b5656"],["D:/blog/public/tags/CTF/page/2/index.html","876ebf5944258c118eb28e2c33b3b426"],["D:/blog/public/tags/CTF/page/3/index.html","3a73b8c05a746e348b84685a3e9f20e1"],["D:/blog/public/tags/CTF/page/4/index.html","9ea3d027b97f4cb6fa93f6d680f23231"],["D:/blog/public/tags/Go/index.html","058e18765892ca72662af7b480adbf18"],["D:/blog/public/tags/Java/index.html","45dd0b6a3c0be56b6e83c0169dcb7173"],["D:/blog/public/tags/Linux/index.html","fafab78c63503113081df6abe95b717e"],["D:/blog/public/tags/Node-js/index.html","2d79fdf61287f6230634a63cc195c73b"],["D:/blog/public/tags/PHP/index.html","c1c2fb37971617a174bf391bcea2cba5"],["D:/blog/public/tags/WEB/index.html","b0919523502925007e09622bd0afd2f0"],["D:/blog/public/tags/WEB/page/2/index.html","f91645cb05193a6cfbf6a99060a691f4"],["D:/blog/public/tags/WEB/page/3/index.html","1658baff564a823a830fec87d9ed3751"],["D:/blog/public/tags/WEB/page/4/index.html","bd93426b68bdcd9a5df5bab1fc46e3b9"],["D:/blog/public/tags/hackthebox/index.html","d3a19497b37b149b4c0a5ed8d55f2b49"],["D:/blog/public/tags/hackthebox/page/2/index.html","168313f4286dcb772dcd33dda853edb3"],["D:/blog/public/tags/index.html","86bbd1bd3ce67d70e9319c8437334b81"],["D:/blog/public/tags/javascript/index.html","56d127fa22811311a12b644063879f26"],["D:/blog/public/tags/pentest/index.html","e7ea866403f6cf7b176db9468a5cde7a"],["D:/blog/public/tags/redis/index.html","57026002c4a8a71a99e204a8e8e298c5"],["D:/blog/public/tags/windows/index.html","9c93bf2301b02d2d4816c6c8a4594d56"],["D:/blog/public/tags/wp/index.html","c26fd18106ce7f7b7faa88c47fd92bdd"],["D:/blog/public/tags/wp/page/2/index.html","1ddf475e6959fadcee2cd91123529439"]];
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







