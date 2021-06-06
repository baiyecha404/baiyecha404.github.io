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

var precacheConfig = [["D:/blog/public/2020/01/12/hackthebox-Wall/1.jpg","49e0684a68148adc091ead702d671120"],["D:/blog/public/2020/01/12/hackthebox-Wall/index.html","ca5d523d565fbe7872e5f7b116ef93ca"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/1.jpg","07efdb9a36ca39ab1b3adee06c174c08"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/2.jpg","6aba05000fe3322dcfaf970094157675"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/3.jpg","83e76f83eea00578b878f0214b2b1b07"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/index.html","2615c23c46ab925ccf8c04d0147c655c"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/1.jpg","2b660ad81af412675d23c7fd615c5949"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/2.jpg","d8b00f856b75cad60913116be56f6591"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/3.jpg","b2e830760e0364f8fdb3aa413aaee4b2"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/4.jpg","8a81ed16c89ea8850b82c4d471a260a6"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/index.html","3f9b6d92037ce37d69cc6da3a23572ad"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/1.jpg","4a98b463431646b6d7bef2e99b014ff4"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/2.jpg","63ca97fafbbcd8dfc8418e0ea6e4ee22"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/3.jpg","87b2a2202dd5b60ea7e6546889fdc285"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/4.jpg","3209d1298f5e0b7dbb8746e13359ba30"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/5.jpg","19489e468cabc149af22535dc8286356"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/6.jpg","755f50213e2f3ad8f73f2fc95b5109ae"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/7.jpg","a3d773ea65a561c6378b6392815d9f0d"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/index.html","be36ab3669122fcf2ae13363631e50d5"],["D:/blog/public/2020/01/29/hackthebox-AI——有趣的sql-JDWPgetshell/index.html","ba964e6cd3c3fd45c305079d502535c8"],["D:/blog/public/2020/01/30/杭电hgame-week1/1.jpg","f40802729e10c71c5e88118a033c3c8f"],["D:/blog/public/2020/01/30/杭电hgame-week1/10.jpg","51ba4728b34eee045121a78d11190730"],["D:/blog/public/2020/01/30/杭电hgame-week1/11.jpg","52401d7bd01382fc27bba3d89f2fb71f"],["D:/blog/public/2020/01/30/杭电hgame-week1/12.jpg","a6c87f976a1cd2d9a497dc04c8049e30"],["D:/blog/public/2020/01/30/杭电hgame-week1/13.jpg","3fd16ef2a52881ac6f9d4231ec650739"],["D:/blog/public/2020/01/30/杭电hgame-week1/14.jpg","1b541cb0ffe69e7b7726586a5c7e3da0"],["D:/blog/public/2020/01/30/杭电hgame-week1/2.jpg","c5f1933109146a453e197f52874059a8"],["D:/blog/public/2020/01/30/杭电hgame-week1/3.jpg","aa367b5424c7e88ecee0003cecea51a6"],["D:/blog/public/2020/01/30/杭电hgame-week1/4.jpg","7c1f49da38993726f799a5d6a496b118"],["D:/blog/public/2020/01/30/杭电hgame-week1/5.jpg","99ead273b57dba78c1f9b96775ef7f38"],["D:/blog/public/2020/01/30/杭电hgame-week1/6.jpg","7f20125c1a70fd6e871c994b8e773539"],["D:/blog/public/2020/01/30/杭电hgame-week1/7.jpg","3b48cfb9ee060b588037520fcb3a773e"],["D:/blog/public/2020/01/30/杭电hgame-week1/8.jpg","e8d37dd7aec3dc2a8bdb50a9475929ae"],["D:/blog/public/2020/01/30/杭电hgame-week1/9.jpg","5d54c31c95fdac50bc76e2fc94d0ec85"],["D:/blog/public/2020/01/30/杭电hgame-week1/index.html","639dbda8cae97494cdf25e9de945fcf3"],["D:/blog/public/2020/01/31/杭电hgame-week2/1.jpg","dea0ab76e5637f1091579b3297269543"],["D:/blog/public/2020/01/31/杭电hgame-week2/10.jpg","d76953c018a4118ebcc4356c230a77d6"],["D:/blog/public/2020/01/31/杭电hgame-week2/11.jpg","383e95c228cabc9f5ebd0af5677dbd3b"],["D:/blog/public/2020/01/31/杭电hgame-week2/12.jpg","2cb1842061331e8589bd8e5b39445e65"],["D:/blog/public/2020/01/31/杭电hgame-week2/13.jpg","66be7253b14531d2f806ce6d2723eaa3"],["D:/blog/public/2020/01/31/杭电hgame-week2/14.jpg","c53a543f195941782eb4ddc35a4dbcd1"],["D:/blog/public/2020/01/31/杭电hgame-week2/15.jpg","48cba2bf395b1352707b5fc3004c0585"],["D:/blog/public/2020/01/31/杭电hgame-week2/16.jpg","28eece3efc2eb96408bb8f7d1e170026"],["D:/blog/public/2020/01/31/杭电hgame-week2/17.jpg","af136b9089267f20fb9fcbcc7d1d9166"],["D:/blog/public/2020/01/31/杭电hgame-week2/2.jpg","a67fad9b44ced31a121f12c1a3a33f74"],["D:/blog/public/2020/01/31/杭电hgame-week2/3.jpg","0cf511a6fa030e5d14598ca63675c64c"],["D:/blog/public/2020/01/31/杭电hgame-week2/4.jpg","aa57c28dd701919cbb0e9dbf579bf974"],["D:/blog/public/2020/01/31/杭电hgame-week2/5.jpg","9244558a704a3dde9e0263bb87402374"],["D:/blog/public/2020/01/31/杭电hgame-week2/6.jpg","dae50cfad44ccc4e0a4a0613a5b0d5cb"],["D:/blog/public/2020/01/31/杭电hgame-week2/7.jpg","29ff78d4045d81b8144869489a52b6e2"],["D:/blog/public/2020/01/31/杭电hgame-week2/8.jpg","4d8f39c1f4ff563a3c95787a20789f0f"],["D:/blog/public/2020/01/31/杭电hgame-week2/9.jpg","3f9467429ded23549903c936bc2bb22d"],["D:/blog/public/2020/01/31/杭电hgame-week2/index.html","c086994ad0904b4c28668a07eb495603"],["D:/blog/public/2020/02/02/杭电hgame-week3/index.html","9c8dd7c334e71f0b283c3882acc18814"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/1.jpg","bb9290f2ead9594a223473954c241ce8"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/2.jpg","6ccd22dd9d025e676e7421d9301821b0"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/3.jpg","6b87f3c0af60f26e93325db6824ec8f6"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/4.jpg","b975cbc3e3527489166ad2a92cdb4624"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/index.html","bead350b00d757093441bfb883d2f329"],["D:/blog/public/2020/02/06/hackthebox-ezpz/1.jpg","23bf5a7118ea3f40284a1a517a7f8ab0"],["D:/blog/public/2020/02/06/hackthebox-ezpz/2.jpg","a2ef028bf2dae207de77bafff065b59d"],["D:/blog/public/2020/02/06/hackthebox-ezpz/3.jpg","75f4537ddcfa266586753db9dabdbc7c"],["D:/blog/public/2020/02/06/hackthebox-ezpz/4.jpg","21558e584b8e3737b5a683ca481e2420"],["D:/blog/public/2020/02/06/hackthebox-ezpz/index.html","16e3e4f89d0e4a1c40644f0efff3fca3"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/1.jpg","74d6c33a3c724fef3a88b6f6d7dd5b68"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/2.jpg","398b00faa3f431d8c4413f9a23050ce3"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/3.jpg","e319593d03ef31b0ff4b02d8ed9cae4a"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/index.html","ef01647acef598c75527dfc730722aaa"],["D:/blog/public/2020/02/18/从杭电hgame-week4学原型链污染/index.html","9d5e02be5df3a64ef5da952e3b867e08"],["D:/blog/public/2020/02/19/CISCN-2019-web部分复现/index.html","7020ac1384bfaa82bf231dc9611d6479"],["D:/blog/public/2020/02/25/NCTF-phar-matches-everything填坑/index.html","13c7cfe42ba5d4676dbf283f729b8e13"],["D:/blog/public/2020/02/26/单独填坑-公益赛NodeGame/index.html","812e118fe4b9dd029982cb93313ec014"],["D:/blog/public/2020/03/02/学习笔记-命令执行及花式bypass写shell/index.html","80ed64f90601c9c1efc990fd3a9efca3"],["D:/blog/public/2020/03/06/Vulhub复现/index.html","0402324316f5b9bb787af748ce1a25d8"],["D:/blog/public/2020/03/09/To-Dolist/index.html","c523b4a8027443050aa9ab7f8ca4a293"],["D:/blog/public/2020/03/10/XCTF高校战“疫”网络安全分享赛/index.html","7ac63558aebd5494fced7a4f4a3ba189"],["D:/blog/public/2020/03/18/使用Soap的ssrf-crlf攻击/index.html","a1ffda488606f8e4d9a89c6242ce533e"],["D:/blog/public/2020/03/29/WUSTCTF&MRCTF部分web题解/index.html","0b174bfa08231f975ac053ece5e655e8"],["D:/blog/public/2020/03/30/VolgaCTF2020Qualifier复现/index.html","9f15ce2649719cb278f1c92ea96723d1"],["D:/blog/public/2020/04/01/hackthebox-Sniper-初尝windows靶机/index.html","e6313b5f76811e951780d8bd8e0e2d15"],["D:/blog/public/2020/04/13/ByteBanditsCTF2020两道WEB复现/index.html","2e72874af0ee8dee816dd12904fc0ef4"],["D:/blog/public/2020/04/20/Nodejs的一些技巧/index.html","8885d113058c97b8fa7f9cda968e7bef"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/1.png","4fe77fbf7f8c7b1321a7264e1adbc1d4"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/10.png","7ca2f6e0a2e1d8c4b0f75c9a163db6c9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/11.png","dd30af1e04c6291a1254f94c18299c54"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/12.png","b86912dd1c049d3f275df3ebbdf900f8"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/13.png","645982851c50f071f3910020d5738d60"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/14.png","09617c9808b315fcebdf434d9341bdca"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/15.png","da0117dcb7ccec787277229b9235e821"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/16.png","611ca5de3656b66b8446b529ece39585"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/17.png","bb35beac017d2177d94de9ffcfc6bb2c"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/18.png","cf98f093cab95ab27bc89079ffcb6ba2"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/2.png","932f259dd31e70d840fe18b01fba1d49"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/3.png","fe4f779ed543f748ae63f7cb12d42285"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/4.png","d1289931388fbb1b1b6b0f4b264c19e6"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/5.png","b6b4beb5719c18b5821baa99caf09733"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/6.png","633b9a87d2f998cbeb3ea9ffd08f2140"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/7.png","b6211fc65a2d1774c111179885e7ca57"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/8.png","63e16915e39b2655ee3db50ad44dada9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/9.png","23fd12e89db3886a0d7af33e51f2891f"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/index.html","a2e6a851dfac1c011695345db5c2c000"],["D:/blog/public/2020/05/04/De1CTF2020writeup/index.html","e8ddcf62165335fdaff8677f765e7040"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/1.png","948eddf999fd3255f0f4afc0cf45c686"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/2.png","daf24f9256e7eef82d20652c3d3b44b8"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/3.png","1e186796519d50b298bc204ddf7cf1c5"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/4.png","a2e5c352c529e9e7e24352e1ab62d084"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/index.html","1c4ba401c218a4ee1d140fbee4a7d577"],["D:/blog/public/2020/05/24/GKCTF2020writeup/index.html","39e71ceb594d82872a859d6304831501"],["D:/blog/public/2020/05/30/初探Redis-wdb玄武组ssrfme&pwnhub公开赛/index.html","125c4f94619fa0cede7c02b92b29f903"],["D:/blog/public/2020/06/23/hackthebox-Quick-一次艰难的渗透/index.html","632a4adec6d8cfc749001dfd990d6dff"],["D:/blog/public/2020/06/24/Make-jwt-great-again/index.html","be933916be6f8649c89451704c3d6922"],["D:/blog/public/2020/07/01/hackthebox-Oouch/index.html","802ee7bb3bca8e27947cb4aee869d332"],["D:/blog/public/2020/07/05/SCTF2020-writeup/index.html","2ebd4b3aed233e9495ed9d03f36f9d83"],["D:/blog/public/2020/07/09/学习笔记-Java相关/index.html","43928e9119218f547863c19271627785"],["D:/blog/public/2020/07/16/hackthebox-SneakyMailer/index.html","ecfd6b6739e1b06d52745ab896490b74"],["D:/blog/public/2020/07/22/hackthebox-Intense/index.html","0fd983e15f8e6db6ab095002b63ea357"],["D:/blog/public/2020/07/22/RingZer0-CTF-JavascriptChallenge/index.html","91249edd3ab5431e7ad7764548382094"],["D:/blog/public/2020/07/24/hackthebox-Dyplesher/index.html","548979fc31852e9fbf1219d41babc5ba"],["D:/blog/public/2020/07/26/CyBRICS-CTF-2020/index.html","fc5b5d14ae3c00bbc4498bf86ecb3632"],["D:/blog/public/2020/08/05/Thinkphp-vuln/index.html","bf87b964cac9a42125308e6ad55f9f19"],["D:/blog/public/2020/08/10/hackthebox-Fatty-JavaExploits/index.html","8356cc98e8189bd7090f2ce89cb6e66e"],["D:/blog/public/2020/08/15/hackthebox-Unbalanced/index.html","a59288346fa763b9a27af71ba0da31e7"],["D:/blog/public/2020/08/17/Laravel-popchain/index.html","b4b8affe03d28588debf5d98789a8cb6"],["D:/blog/public/2020/08/27/钓鱼城-zblog/index.html","1e63b68d888c5a13544a016725899d4f"],["D:/blog/public/2020/09/25/DarkCTF-WEB/index.html","0ed4f7ec5dcf619c0efea6ac6230ccb8"],["D:/blog/public/2020/10/05/bootcamp-2020&mctf-2020/index.html","1315da60e4569d8ceb9e163b771bf0fb"],["D:/blog/public/2020/10/09/学习笔记-Java深入/index.html","cb47e536909179f34ca1e33b90d77e94"],["D:/blog/public/2020/10/19/N1CTF2020/index.html","eafb1c2b45dc67ba683adaffd72c4f22"],["D:/blog/public/2020/10/26/ByteCTF2020-easyscrapy/index.html","e8db8517ff247e2ff5d4fe64f110cb89"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/0.png","8b14359dfbce0d56fbd880ee4377e33d"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/index.html","359b99bebf4928cc0a5b8866cc57c62d"],["D:/blog/public/2020/12/30/Farewell-to-2020/index.html","29efb753d3c24e293cf3e1a42de14e0e"],["D:/blog/public/2021/02/07/golang的一些安全问题/index.html","8decb03589e5b162daeb4107563b4617"],["D:/blog/public/2021/03/06/D^3CTF-8-bit-pub/index.html","8e03cf66ccab61c8abc003a417c0951c"],["D:/blog/public/2021/04/04/angstromCTF-2021/index.html","4e3891bb784895ada737f7a11844aa1c"],["D:/blog/public/2021/05/30/春秋杯-WEB/index.html","74bf773a4a1455f19d3a642187b63833"],["D:/blog/public/2021/06/06/使用Node-js实现动态爬虫/index.html","38d0a1fe97c6a107531886aa9a886b57"],["D:/blog/public/404.html","1631ad082c0cdd7e9c95948062b20397"],["D:/blog/public/about/index.html","f66e375442b6e5c7d924e7fb873924e4"],["D:/blog/public/archives/2020/01/index.html","5de42a105cb681425a20f18ea153caa9"],["D:/blog/public/archives/2020/02/index.html","cb21afecb8fa4da51a18194009882c12"],["D:/blog/public/archives/2020/03/index.html","98e644dce0310c0b7a1d29b515d65a80"],["D:/blog/public/archives/2020/04/index.html","5b0488e3ae344ceeeb5a27e461533dbe"],["D:/blog/public/archives/2020/05/index.html","49ee384853ff5070398173c0ad394dab"],["D:/blog/public/archives/2020/06/index.html","14eda06345c548f6e19c1f583483b7fa"],["D:/blog/public/archives/2020/07/index.html","cbe59c3e6f73001aea630c1465329f7b"],["D:/blog/public/archives/2020/08/index.html","339c3c5d3f66955fd12d0148058d25ce"],["D:/blog/public/archives/2020/09/index.html","b4d70f9fb8e8027c41da04d373e71817"],["D:/blog/public/archives/2020/10/index.html","5f47811003917fb42e25f45fffe9a208"],["D:/blog/public/archives/2020/11/index.html","515c81b1e33a7d2d350cbb27ff83d55a"],["D:/blog/public/archives/2020/12/index.html","bf7b366ab3850f2e3d435772f7cbbcc1"],["D:/blog/public/archives/2020/index.html","cbf13831be725194a099c82f713b7c3d"],["D:/blog/public/archives/2020/page/2/index.html","64105dc687b53ad0284e536f0fad654f"],["D:/blog/public/archives/2020/page/3/index.html","b4d889f4c8e17660d589e4cadc6d1373"],["D:/blog/public/archives/2020/page/4/index.html","7e7e48c49a29663d2be0a55c01dc3497"],["D:/blog/public/archives/2020/page/5/index.html","09146d5e86f3902717c5b546d6f5350e"],["D:/blog/public/archives/2020/page/6/index.html","4f20360e3260ecbc5da9eb7bd008b050"],["D:/blog/public/archives/2021/02/index.html","35709cb8498626e4b61d8f702ae264fc"],["D:/blog/public/archives/2021/03/index.html","cf5d59f06d0c62c2d24937d356ee96ff"],["D:/blog/public/archives/2021/04/index.html","69786cfecaca6a2db2d777f8bedf5514"],["D:/blog/public/archives/2021/05/index.html","0d548c28a13030479330ddddaf4dc00d"],["D:/blog/public/archives/2021/06/index.html","1baec224f2a8b633909fb73090922abf"],["D:/blog/public/archives/2021/index.html","20898d806ed35ea5b7abba6521c73048"],["D:/blog/public/archives/index.html","ee74c3fd701d5c4446690a52cfb29391"],["D:/blog/public/archives/page/2/index.html","ee74c3fd701d5c4446690a52cfb29391"],["D:/blog/public/archives/page/3/index.html","ee74c3fd701d5c4446690a52cfb29391"],["D:/blog/public/archives/page/4/index.html","ee74c3fd701d5c4446690a52cfb29391"],["D:/blog/public/archives/page/5/index.html","ee74c3fd701d5c4446690a52cfb29391"],["D:/blog/public/archives/page/6/index.html","ee74c3fd701d5c4446690a52cfb29391"],["D:/blog/public/assests/alipay.jpg","821163f8d5c9d1accd1b7cbeefaba556"],["D:/blog/public/assests/consola.ttf","fb505e28b6d130f08fe8f070e0d6b1b8"],["D:/blog/public/assests/icon.jpg","931d322663078eb74184292012d7ebd7"],["D:/blog/public/assests/wechat.png","57e6a192c26104ede51ff222f6e6080c"],["D:/blog/public/categories/index.html","edf24f828bd74e135aed8875c7bbb3a3"],["D:/blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/blog/public/css/first.css","ef36b890903233b2d482d1c1a6192fd9"],["D:/blog/public/css/style.css","bc1306da088b03c9586aafb7ca6dd689"],["D:/blog/public/friends/index.html","9043b8e766dcd3c3b6df6bdcdd3c87b4"],["D:/blog/public/index.html","cd5c8179b5953abe1ed82cad2fcc4745"],["D:/blog/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["D:/blog/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["D:/blog/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["D:/blog/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["D:/blog/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["D:/blog/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["D:/blog/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["D:/blog/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["D:/blog/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["D:/blog/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/blog/public/mylist/index.html","221bae112d46870224502cdec6ed1452"],["D:/blog/public/page/2/index.html","1d71c8b45712b31b1457d2741936ed45"],["D:/blog/public/page/3/index.html","6b8572f4fd9770d776e983bb6072db29"],["D:/blog/public/page/4/index.html","716e9ed606661efd9a67a84326469f3b"],["D:/blog/public/page/5/index.html","af8962d3216c0b53827ddc5e14afa4c0"],["D:/blog/public/page/6/index.html","65b5527cf090ef8616dcd2e661434fb4"],["D:/blog/public/tags/CTF/index.html","211396f39c19fed6cb151d3c1d55f364"],["D:/blog/public/tags/CTF/page/2/index.html","ad76f3637003f059c256f34f72b5e188"],["D:/blog/public/tags/CTF/page/3/index.html","5ae46ba3f5d08c2572a7b5e5f620840b"],["D:/blog/public/tags/CTF/page/4/index.html","875933b6bf6e200c52a641323e63d786"],["D:/blog/public/tags/Go/index.html","ae30b36b77fc392873ecff3e6be65df4"],["D:/blog/public/tags/Java/index.html","9f7556bc98e290586912810650b043ab"],["D:/blog/public/tags/Linux/index.html","bec27c9d45d3f97854fe256dc586a3d7"],["D:/blog/public/tags/Node-js/index.html","79bab976be9bf17dca35f1a804bbec65"],["D:/blog/public/tags/PHP/index.html","c0ae3fdf80de02132c45a4f029d42370"],["D:/blog/public/tags/WEB/index.html","7784e538324872afbf318b44d6eaf58f"],["D:/blog/public/tags/WEB/page/2/index.html","c1995daa51a27a9a5337790ade0ad564"],["D:/blog/public/tags/WEB/page/3/index.html","bde676b100bcc0e2e908dc4c2c31963c"],["D:/blog/public/tags/WEB/page/4/index.html","bed015f27622b602a2395db700b36d54"],["D:/blog/public/tags/hackthebox/index.html","9dad09a5ab67fdafb0a31e0ac6c89e33"],["D:/blog/public/tags/hackthebox/page/2/index.html","9b1ae85ed6d6a8b492005f1b7ad54d08"],["D:/blog/public/tags/index.html","440c127a02a5438764976ecfe4bc4606"],["D:/blog/public/tags/javascript/index.html","031147b102255d1a17a85837aa36cd91"],["D:/blog/public/tags/pentest/index.html","6b0a905e943c29dde921332dc3a9fc97"],["D:/blog/public/tags/redis/index.html","c2ee4861d862e7b43dbd0a24a9c43a4b"],["D:/blog/public/tags/windows/index.html","1a5b276f089375f04e4875e0699b1cba"],["D:/blog/public/tags/wp/index.html","ac54b5851be962478342dbb08b40592a"],["D:/blog/public/tags/wp/page/2/index.html","dba02aeac05f903ebd6eb46beaba9aa0"]];
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







