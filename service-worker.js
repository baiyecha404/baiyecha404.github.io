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

var precacheConfig = [["D:/blog/public/2020/01/12/hackthebox-Wall/1.jpg","49e0684a68148adc091ead702d671120"],["D:/blog/public/2020/01/12/hackthebox-Wall/index.html","e246b0205267dbaa8561f45a4b3c50ea"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/1.jpg","07efdb9a36ca39ab1b3adee06c174c08"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/2.jpg","6aba05000fe3322dcfaf970094157675"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/3.jpg","83e76f83eea00578b878f0214b2b1b07"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/index.html","2190f90b69bc8b8dfdffc51f66e0dc4a"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/1.jpg","2b660ad81af412675d23c7fd615c5949"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/2.jpg","d8b00f856b75cad60913116be56f6591"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/3.jpg","b2e830760e0364f8fdb3aa413aaee4b2"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/4.jpg","8a81ed16c89ea8850b82c4d471a260a6"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/index.html","6ae4e426e90bdb2a89be7ca1487eb29d"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/1.jpg","4a98b463431646b6d7bef2e99b014ff4"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/2.jpg","63ca97fafbbcd8dfc8418e0ea6e4ee22"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/3.jpg","87b2a2202dd5b60ea7e6546889fdc285"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/4.jpg","3209d1298f5e0b7dbb8746e13359ba30"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/5.jpg","19489e468cabc149af22535dc8286356"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/6.jpg","755f50213e2f3ad8f73f2fc95b5109ae"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/7.jpg","a3d773ea65a561c6378b6392815d9f0d"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/index.html","f6dd6ff83ebb1027dd99713aa0bce120"],["D:/blog/public/2020/01/29/hackthebox-AI——有趣的sql-JDWPgetshell/index.html","7280e23dde9358df97fae878f3ac4947"],["D:/blog/public/2020/01/30/杭电hgame-week1/1.jpg","f40802729e10c71c5e88118a033c3c8f"],["D:/blog/public/2020/01/30/杭电hgame-week1/10.jpg","51ba4728b34eee045121a78d11190730"],["D:/blog/public/2020/01/30/杭电hgame-week1/11.jpg","52401d7bd01382fc27bba3d89f2fb71f"],["D:/blog/public/2020/01/30/杭电hgame-week1/12.jpg","a6c87f976a1cd2d9a497dc04c8049e30"],["D:/blog/public/2020/01/30/杭电hgame-week1/13.jpg","3fd16ef2a52881ac6f9d4231ec650739"],["D:/blog/public/2020/01/30/杭电hgame-week1/14.jpg","1b541cb0ffe69e7b7726586a5c7e3da0"],["D:/blog/public/2020/01/30/杭电hgame-week1/2.jpg","c5f1933109146a453e197f52874059a8"],["D:/blog/public/2020/01/30/杭电hgame-week1/3.jpg","aa367b5424c7e88ecee0003cecea51a6"],["D:/blog/public/2020/01/30/杭电hgame-week1/4.jpg","7c1f49da38993726f799a5d6a496b118"],["D:/blog/public/2020/01/30/杭电hgame-week1/5.jpg","99ead273b57dba78c1f9b96775ef7f38"],["D:/blog/public/2020/01/30/杭电hgame-week1/6.jpg","7f20125c1a70fd6e871c994b8e773539"],["D:/blog/public/2020/01/30/杭电hgame-week1/7.jpg","3b48cfb9ee060b588037520fcb3a773e"],["D:/blog/public/2020/01/30/杭电hgame-week1/8.jpg","e8d37dd7aec3dc2a8bdb50a9475929ae"],["D:/blog/public/2020/01/30/杭电hgame-week1/9.jpg","5d54c31c95fdac50bc76e2fc94d0ec85"],["D:/blog/public/2020/01/30/杭电hgame-week1/index.html","2b3c02e2129d5868b6c8c10be59de4b0"],["D:/blog/public/2020/01/31/杭电hgame-week2/1.jpg","dea0ab76e5637f1091579b3297269543"],["D:/blog/public/2020/01/31/杭电hgame-week2/10.jpg","d76953c018a4118ebcc4356c230a77d6"],["D:/blog/public/2020/01/31/杭电hgame-week2/11.jpg","383e95c228cabc9f5ebd0af5677dbd3b"],["D:/blog/public/2020/01/31/杭电hgame-week2/12.jpg","2cb1842061331e8589bd8e5b39445e65"],["D:/blog/public/2020/01/31/杭电hgame-week2/13.jpg","66be7253b14531d2f806ce6d2723eaa3"],["D:/blog/public/2020/01/31/杭电hgame-week2/14.jpg","c53a543f195941782eb4ddc35a4dbcd1"],["D:/blog/public/2020/01/31/杭电hgame-week2/15.jpg","48cba2bf395b1352707b5fc3004c0585"],["D:/blog/public/2020/01/31/杭电hgame-week2/16.jpg","28eece3efc2eb96408bb8f7d1e170026"],["D:/blog/public/2020/01/31/杭电hgame-week2/17.jpg","af136b9089267f20fb9fcbcc7d1d9166"],["D:/blog/public/2020/01/31/杭电hgame-week2/2.jpg","a67fad9b44ced31a121f12c1a3a33f74"],["D:/blog/public/2020/01/31/杭电hgame-week2/3.jpg","0cf511a6fa030e5d14598ca63675c64c"],["D:/blog/public/2020/01/31/杭电hgame-week2/4.jpg","aa57c28dd701919cbb0e9dbf579bf974"],["D:/blog/public/2020/01/31/杭电hgame-week2/5.jpg","9244558a704a3dde9e0263bb87402374"],["D:/blog/public/2020/01/31/杭电hgame-week2/6.jpg","dae50cfad44ccc4e0a4a0613a5b0d5cb"],["D:/blog/public/2020/01/31/杭电hgame-week2/7.jpg","29ff78d4045d81b8144869489a52b6e2"],["D:/blog/public/2020/01/31/杭电hgame-week2/8.jpg","4d8f39c1f4ff563a3c95787a20789f0f"],["D:/blog/public/2020/01/31/杭电hgame-week2/9.jpg","3f9467429ded23549903c936bc2bb22d"],["D:/blog/public/2020/01/31/杭电hgame-week2/index.html","6c249cb002d5912be60794e85b5ecca8"],["D:/blog/public/2020/02/02/杭电hgame-week3/index.html","4a2f9cc7852064814f4e6932ef582610"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/1.jpg","bb9290f2ead9594a223473954c241ce8"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/2.jpg","6ccd22dd9d025e676e7421d9301821b0"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/3.jpg","6b87f3c0af60f26e93325db6824ec8f6"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/4.jpg","b975cbc3e3527489166ad2a92cdb4624"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/index.html","6c82f9860a888997a120c35106b74285"],["D:/blog/public/2020/02/06/hackthebox-ezpz/1.jpg","23bf5a7118ea3f40284a1a517a7f8ab0"],["D:/blog/public/2020/02/06/hackthebox-ezpz/2.jpg","a2ef028bf2dae207de77bafff065b59d"],["D:/blog/public/2020/02/06/hackthebox-ezpz/3.jpg","75f4537ddcfa266586753db9dabdbc7c"],["D:/blog/public/2020/02/06/hackthebox-ezpz/4.jpg","21558e584b8e3737b5a683ca481e2420"],["D:/blog/public/2020/02/06/hackthebox-ezpz/index.html","50ab99bc291d5da6bc353ce90338aa2e"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/1.jpg","74d6c33a3c724fef3a88b6f6d7dd5b68"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/2.jpg","398b00faa3f431d8c4413f9a23050ce3"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/3.jpg","e319593d03ef31b0ff4b02d8ed9cae4a"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/index.html","0303fd3a1832885c5ba8bd0a428fd823"],["D:/blog/public/2020/02/18/从杭电hgame-week4学原型链污染/index.html","ec94a08cbe263e655b1566f389f0c609"],["D:/blog/public/2020/02/19/CISCN-2019-web部分复现/index.html","9f28e62fcdab72a70b8c74e1e038faa2"],["D:/blog/public/2020/02/25/NCTF-phar-matches-everything填坑/index.html","a64ab8eeb96d3ac2fde2d1634ea776e9"],["D:/blog/public/2020/02/26/单独填坑-公益赛NodeGame/index.html","4af3be55fb5d8ff69bc64416d7478d3c"],["D:/blog/public/2020/03/02/学习笔记-命令执行及花式bypass写shell/index.html","018b0c2ca67ede0dab22f7bc18f3bf5a"],["D:/blog/public/2020/03/06/Vulhub复现/index.html","32d95f94cc483eec85104819297b76a2"],["D:/blog/public/2020/03/09/To-Dolist/index.html","5e58cdcd09278eae2ad6da86843fec41"],["D:/blog/public/2020/03/10/XCTF高校战“疫”网络安全分享赛/index.html","aa10a9d22591c361da2ed12867295fc1"],["D:/blog/public/2020/03/18/使用Soap的ssrf-crlf攻击/index.html","89c8b7678b43af7f020265487c2ae835"],["D:/blog/public/2020/03/29/WUSTCTF&MRCTF部分web题解/index.html","31541d36bc6e2d13a991d904612950e3"],["D:/blog/public/2020/03/30/VolgaCTF2020Qualifier复现/index.html","efe25333d0fedf1e1ffeb5829cbf94c7"],["D:/blog/public/2020/04/01/hackthebox-Sniper-初尝windows靶机/index.html","8f438f7071980703402a16192c83f396"],["D:/blog/public/2020/04/13/ByteBanditsCTF2020两道WEB复现/index.html","c248b16ef0067dcdb67ca3c506dcdbc3"],["D:/blog/public/2020/04/20/Nodejs的一些技巧/index.html","e5205af0a5f40dbc0d513f2115d77def"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/1.png","4fe77fbf7f8c7b1321a7264e1adbc1d4"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/10.png","7ca2f6e0a2e1d8c4b0f75c9a163db6c9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/11.png","dd30af1e04c6291a1254f94c18299c54"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/12.png","b86912dd1c049d3f275df3ebbdf900f8"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/13.png","645982851c50f071f3910020d5738d60"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/14.png","09617c9808b315fcebdf434d9341bdca"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/15.png","da0117dcb7ccec787277229b9235e821"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/16.png","611ca5de3656b66b8446b529ece39585"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/17.png","bb35beac017d2177d94de9ffcfc6bb2c"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/18.png","cf98f093cab95ab27bc89079ffcb6ba2"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/2.png","932f259dd31e70d840fe18b01fba1d49"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/3.png","fe4f779ed543f748ae63f7cb12d42285"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/4.png","d1289931388fbb1b1b6b0f4b264c19e6"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/5.png","b6b4beb5719c18b5821baa99caf09733"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/6.png","633b9a87d2f998cbeb3ea9ffd08f2140"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/7.png","b6211fc65a2d1774c111179885e7ca57"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/8.png","63e16915e39b2655ee3db50ad44dada9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/9.png","23fd12e89db3886a0d7af33e51f2891f"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/index.html","da8f216948c6e01c399185e6ee8d54ce"],["D:/blog/public/2020/05/04/De1CTF2020writeup/index.html","6f46e29d90fa8391f4c85c06e57dc0bf"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/1.png","948eddf999fd3255f0f4afc0cf45c686"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/2.png","daf24f9256e7eef82d20652c3d3b44b8"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/3.png","1e186796519d50b298bc204ddf7cf1c5"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/4.png","a2e5c352c529e9e7e24352e1ab62d084"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/index.html","2f55505adc6a1d7b1bb5a202c0ae02bb"],["D:/blog/public/2020/05/24/GKCTF2020writeup/index.html","5b5890f35fb3da50c819cb5abe9ce0a4"],["D:/blog/public/2020/05/30/初探Redis-wdb玄武组ssrfme&pwnhub公开赛/index.html","8ac0003be88aaf772167b19028635277"],["D:/blog/public/2020/06/23/hackthebox-Quick-一次艰难的渗透/index.html","80354c4268ff704dc87561c59abdbe5e"],["D:/blog/public/2020/06/24/Make-jwt-great-again/index.html","019960e05f00f03e738fea7ca0837142"],["D:/blog/public/2020/07/01/hackthebox-Oouch/index.html","9ef6f17d1d323f436174c3802201f0d9"],["D:/blog/public/2020/07/05/SCTF2020-writeup/index.html","7101f4911f24e75962ea19caa7c51f80"],["D:/blog/public/2020/07/09/学习笔记-Java相关/index.html","df397608427fe68754a765c552cc477e"],["D:/blog/public/2020/07/16/hackthebox-SneakyMailer/index.html","c90f0992d99b289fcee2d40684f34dc8"],["D:/blog/public/2020/07/22/hackthebox-Intense/index.html","94ccf952b6d5cd3a6c086720c070a2eb"],["D:/blog/public/2020/07/22/RingZer0-CTF-JavascriptChallenge/index.html","a1130474b00e0c2c12508afbaa9f2662"],["D:/blog/public/2020/07/24/hackthebox-Dyplesher/index.html","9290cc975544862849ee5ffa49938070"],["D:/blog/public/2020/07/26/CyBRICS-CTF-2020/index.html","60816fabd1362a3ea17654460e7ed0ad"],["D:/blog/public/2020/08/05/Thinkphp-vuln/index.html","1af1453d96f40704f2e7655266272a03"],["D:/blog/public/2020/08/10/hackthebox-Fatty-JavaExploits/index.html","4514bff12111fcdecbd2b648e74bfb4a"],["D:/blog/public/2020/08/15/hackthebox-Unbalanced/index.html","9bbefec4e4a3d572876993ace38733bc"],["D:/blog/public/2020/08/17/Laravel-popchain/index.html","7bd004b4c0c5592596653dfec170a97a"],["D:/blog/public/2020/08/27/钓鱼城-zblog/index.html","5a907d8ac28290a316252ac0cc860b2c"],["D:/blog/public/2020/09/25/DarkCTF-WEB/index.html","971dfb1cbd4a9bbd0a1efd4e8fcbbcb8"],["D:/blog/public/2020/10/05/bootcamp-2020&mctf-2020/index.html","fa5740d57ca5ae60bcea4ee81f435d02"],["D:/blog/public/2020/10/09/学习笔记-Java深入/index.html","94f698d0e9249cbd3a5bcf20c373b8f2"],["D:/blog/public/2020/10/19/N1CTF2020/index.html","ee6068cfb36a5e927a477f0594893515"],["D:/blog/public/2020/10/26/ByteCTF2020-easyscrapy/index.html","1909e88d7efbf71922e000c1d2bba9c4"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/0.png","8b14359dfbce0d56fbd880ee4377e33d"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/index.html","8399abe09fd026025d13e1cbdae744b9"],["D:/blog/public/2020/12/30/Farewell-to-2020/index.html","98a029aed9d68bcb2871424e244a1425"],["D:/blog/public/2021/02/07/golang的一些安全问题/index.html","728f1bc5a29b6554c7c4dd326729ebda"],["D:/blog/public/2021/03/06/D^3CTF-8-bit-pub/index.html","70d40a8775cb104cf6107e62f130492e"],["D:/blog/public/2021/04/04/angstromCTF-2021/index.html","fd96ac7310d0870427ed7c483027681f"],["D:/blog/public/2021/05/30/春秋杯-WEB/index.html","fed0dbcc0c7d05e0fd69106f0423c7f6"],["D:/blog/public/2021/06/06/使用Node-js实现动态爬虫/index.html","7bb52db2e81feafb1dab45c926c1feaa"],["D:/blog/public/2021/07/07/0ctf-tctf-soracon/index.html","482d12b8e601ad72b09b64d051eee8d4"],["D:/blog/public/2021/10/06/夏令营面试经历/index.html","d221fb16172bde696f52566be038eb93"],["D:/blog/public/2022/01/10/低版本JDK下gopher的困境/index.html","7ff30b3d0d48be4d53244cec55af6ee5"],["D:/blog/public/2022/04/05/Netty-内存马的一种思路/index.html","5b4123397382c536fe815c73dcd6aefc"],["D:/blog/public/404.html","cd2bf7fdf1f76c34f540b73f50c84957"],["D:/blog/public/about/index.html","c9ae313bde3a4fc9379d1289b1c267d6"],["D:/blog/public/archives/2020/01/index.html","315c5c99fbbefcc2720708717c2f935e"],["D:/blog/public/archives/2020/02/index.html","e83734dd18e1b6132ef7330f7cf18ebc"],["D:/blog/public/archives/2020/03/index.html","42550066ff415a4ecf442e7c3dd97709"],["D:/blog/public/archives/2020/04/index.html","2a1ddd82ff36a62805cbd778ab8f2f57"],["D:/blog/public/archives/2020/05/index.html","763d10d8ff5448df395ef2cc0eeada8b"],["D:/blog/public/archives/2020/06/index.html","e0da71f6788b9c085ab8403f993e7ca7"],["D:/blog/public/archives/2020/07/index.html","aa48e9a460697151a4804319c9de003a"],["D:/blog/public/archives/2020/08/index.html","c94f79d86670f31cf96b42b2547ac9c1"],["D:/blog/public/archives/2020/09/index.html","6fd3b39812775fc633f6f097f90d0f02"],["D:/blog/public/archives/2020/10/index.html","efaf93241fd3753d580ce6aedba5a610"],["D:/blog/public/archives/2020/11/index.html","21f3091a67376d03cf5fe30194ab0fb2"],["D:/blog/public/archives/2020/12/index.html","d7a289bab043449bccfc0ca17ab5f7f9"],["D:/blog/public/archives/2020/index.html","c2666cf58cea40d74352f2211ac21ad1"],["D:/blog/public/archives/2020/page/2/index.html","07d418ac129c58a7feaf1d9a5e63054d"],["D:/blog/public/archives/2020/page/3/index.html","356b23561f98635b4e193dd3c6a73837"],["D:/blog/public/archives/2020/page/4/index.html","233ec322bfbd840f331c4ffd64856925"],["D:/blog/public/archives/2020/page/5/index.html","edd061ed17fbec93c4abe63ebf58992f"],["D:/blog/public/archives/2020/page/6/index.html","6cebc36cdaa082e714b21293eadf6a8c"],["D:/blog/public/archives/2021/02/index.html","b973d0d69a27ecc513e3ece6c506c1f0"],["D:/blog/public/archives/2021/03/index.html","7d6915b6dd9382df5f3351ecc5028313"],["D:/blog/public/archives/2021/04/index.html","fb54824804693529f65337a1d3558779"],["D:/blog/public/archives/2021/05/index.html","bfba331dd1dca5d5f3b17579d330715b"],["D:/blog/public/archives/2021/06/index.html","26fe927a10ed7254c2ca69271e240325"],["D:/blog/public/archives/2021/07/index.html","a20648687bd1d4337bd75ccab83e91f3"],["D:/blog/public/archives/2021/10/index.html","f1a068d3c80c8243eb550633abbd49cb"],["D:/blog/public/archives/2021/index.html","d11e937e6c5e10126eeb569e68f11028"],["D:/blog/public/archives/2022/01/index.html","68050413de3215788e1e579ad5463367"],["D:/blog/public/archives/2022/04/index.html","856a73ee212334973aba9cea47c87bf5"],["D:/blog/public/archives/2022/index.html","f56d6c5b96a4dd025a315fba7638bef6"],["D:/blog/public/archives/index.html","3e30717c2601f44647e06bba2365c07b"],["D:/blog/public/archives/page/2/index.html","3e30717c2601f44647e06bba2365c07b"],["D:/blog/public/archives/page/3/index.html","3e30717c2601f44647e06bba2365c07b"],["D:/blog/public/archives/page/4/index.html","3e30717c2601f44647e06bba2365c07b"],["D:/blog/public/archives/page/5/index.html","3e30717c2601f44647e06bba2365c07b"],["D:/blog/public/archives/page/6/index.html","3e30717c2601f44647e06bba2365c07b"],["D:/blog/public/archives/page/7/index.html","3e30717c2601f44647e06bba2365c07b"],["D:/blog/public/assests/alipay.jpg","821163f8d5c9d1accd1b7cbeefaba556"],["D:/blog/public/assests/consola.ttf","fb505e28b6d130f08fe8f070e0d6b1b8"],["D:/blog/public/assests/icon.jpg","931d322663078eb74184292012d7ebd7"],["D:/blog/public/assests/wechat.png","57e6a192c26104ede51ff222f6e6080c"],["D:/blog/public/categories/index.html","3b210de02c678f2e3eac855827d1b1b0"],["D:/blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/blog/public/css/first.css","21d6406f5365a29bb46fbf5c688d1ca4"],["D:/blog/public/css/style.css","cbc38cb5e1989d8c2d75176787620231"],["D:/blog/public/friends/index.html","f40d5b62b0b7a576a267b9ca70d9bf56"],["D:/blog/public/index.html","1668704ccd6802facdcbb7caadd5e484"],["D:/blog/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["D:/blog/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["D:/blog/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["D:/blog/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["D:/blog/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["D:/blog/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["D:/blog/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["D:/blog/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["D:/blog/public/js/valine.js","9fe07b85c9890960251eaeacf3e38ee1"],["D:/blog/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/blog/public/mylist/index.html","849bc3d8e1c75e3db6ae7a22c5553a51"],["D:/blog/public/page/2/index.html","9cc287759eeffe264ca1749db95f174a"],["D:/blog/public/page/3/index.html","fdb4cfb68a47ee87ea4ea78d59d03532"],["D:/blog/public/page/4/index.html","be327e79d4bfdcaeb25a0f58ddbe8d1c"],["D:/blog/public/page/5/index.html","18eceb96006834adb64efaf0043dc78e"],["D:/blog/public/page/6/index.html","418e635c1f8a46e9cbf6335f0545d7b3"],["D:/blog/public/page/7/index.html","bfea633966c4523212e96674b768a6ff"],["D:/blog/public/tags/CTF/index.html","9f5d33203e44f909e80122f79d0e6a84"],["D:/blog/public/tags/CTF/page/2/index.html","eab6e5b6d93d88bd214aab8b2b52686d"],["D:/blog/public/tags/CTF/page/3/index.html","7cff53776cfcb6aec3654fd325f50df8"],["D:/blog/public/tags/CTF/page/4/index.html","ad453754685650c8ee5915b8947970f4"],["D:/blog/public/tags/Go/index.html","55134a2d13687d75fed2ab8f91033aae"],["D:/blog/public/tags/Java/index.html","e8f9e4e5408641d5550f9912f779912d"],["D:/blog/public/tags/Linux/index.html","18ef4b1d46749ab3b1abbc594340e4a8"],["D:/blog/public/tags/Node-js/index.html","29b16ca7cdba54b2dbd25180f18b4d04"],["D:/blog/public/tags/PHP/index.html","10a2e012b903efe1259ba37dbed2e19f"],["D:/blog/public/tags/WEB/index.html","dfe82ea74ff101d92670ac0ed358ddb3"],["D:/blog/public/tags/WEB/page/2/index.html","384d5de1582a8f33b08efc87e50b3419"],["D:/blog/public/tags/WEB/page/3/index.html","e7ff6d4393391d02224cb952666395c4"],["D:/blog/public/tags/WEB/page/4/index.html","91733d4f7aceb2e6c7574d8dd3b33f46"],["D:/blog/public/tags/hackthebox/index.html","a4db31fe49555c6a0ef6ef0bbadf6aad"],["D:/blog/public/tags/hackthebox/page/2/index.html","d0b3fd21db4312e2c94724bf55f963dd"],["D:/blog/public/tags/index.html","e75c83e16162e978719f1c3c54e8a3f9"],["D:/blog/public/tags/javascript/index.html","287fb89db56bd3a859a194eb126364d3"],["D:/blog/public/tags/pentest/index.html","6082c8a50b71c9d2cbccb0c3da0f5833"],["D:/blog/public/tags/redis/index.html","50e6b0102196f4ee35254b06d954bc9b"],["D:/blog/public/tags/windows/index.html","df843ac88795d6ad3da836207ddbdd9c"],["D:/blog/public/tags/wp/index.html","a6df2cc4288a5afa7071d6c3d2ad3e7c"],["D:/blog/public/tags/wp/page/2/index.html","ae4aed5440c7fb0b8a4adf52e051965a"]];
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







