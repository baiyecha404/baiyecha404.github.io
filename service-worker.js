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

var precacheConfig = [["D:/blog/public/2020/01/12/hackthebox-Wall/1.jpg","49e0684a68148adc091ead702d671120"],["D:/blog/public/2020/01/12/hackthebox-Wall/index.html","c52bdf276d6e4d0aa7b29950a46ce371"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/1.jpg","07efdb9a36ca39ab1b3adee06c174c08"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/2.jpg","6aba05000fe3322dcfaf970094157675"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/3.jpg","83e76f83eea00578b878f0214b2b1b07"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/index.html","56818415def6cf00d81de865762c7425"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/1.jpg","2b660ad81af412675d23c7fd615c5949"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/2.jpg","d8b00f856b75cad60913116be56f6591"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/3.jpg","b2e830760e0364f8fdb3aa413aaee4b2"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/4.jpg","8a81ed16c89ea8850b82c4d471a260a6"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/index.html","dcae2f557bf6cd06f2e85ec6137f0b19"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/1.jpg","4a98b463431646b6d7bef2e99b014ff4"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/2.jpg","63ca97fafbbcd8dfc8418e0ea6e4ee22"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/3.jpg","87b2a2202dd5b60ea7e6546889fdc285"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/4.jpg","3209d1298f5e0b7dbb8746e13359ba30"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/5.jpg","19489e468cabc149af22535dc8286356"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/6.jpg","755f50213e2f3ad8f73f2fc95b5109ae"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/7.jpg","a3d773ea65a561c6378b6392815d9f0d"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/index.html","ddda7ed1f7c7ec21e3e3729cd90e76e7"],["D:/blog/public/2020/01/29/hackthebox-AI——有趣的sql-JDWPgetshell/index.html","52355662930dea3748a325677c2cd1d6"],["D:/blog/public/2020/01/30/杭电hgame-week1/1.jpg","f40802729e10c71c5e88118a033c3c8f"],["D:/blog/public/2020/01/30/杭电hgame-week1/10.jpg","51ba4728b34eee045121a78d11190730"],["D:/blog/public/2020/01/30/杭电hgame-week1/11.jpg","52401d7bd01382fc27bba3d89f2fb71f"],["D:/blog/public/2020/01/30/杭电hgame-week1/12.jpg","a6c87f976a1cd2d9a497dc04c8049e30"],["D:/blog/public/2020/01/30/杭电hgame-week1/13.jpg","3fd16ef2a52881ac6f9d4231ec650739"],["D:/blog/public/2020/01/30/杭电hgame-week1/14.jpg","1b541cb0ffe69e7b7726586a5c7e3da0"],["D:/blog/public/2020/01/30/杭电hgame-week1/2.jpg","c5f1933109146a453e197f52874059a8"],["D:/blog/public/2020/01/30/杭电hgame-week1/3.jpg","aa367b5424c7e88ecee0003cecea51a6"],["D:/blog/public/2020/01/30/杭电hgame-week1/4.jpg","7c1f49da38993726f799a5d6a496b118"],["D:/blog/public/2020/01/30/杭电hgame-week1/5.jpg","99ead273b57dba78c1f9b96775ef7f38"],["D:/blog/public/2020/01/30/杭电hgame-week1/6.jpg","7f20125c1a70fd6e871c994b8e773539"],["D:/blog/public/2020/01/30/杭电hgame-week1/7.jpg","3b48cfb9ee060b588037520fcb3a773e"],["D:/blog/public/2020/01/30/杭电hgame-week1/8.jpg","e8d37dd7aec3dc2a8bdb50a9475929ae"],["D:/blog/public/2020/01/30/杭电hgame-week1/9.jpg","5d54c31c95fdac50bc76e2fc94d0ec85"],["D:/blog/public/2020/01/30/杭电hgame-week1/index.html","a79d7e3fd418c24ae4cd318b95595aa8"],["D:/blog/public/2020/01/31/杭电hgame-week2/1.jpg","dea0ab76e5637f1091579b3297269543"],["D:/blog/public/2020/01/31/杭电hgame-week2/10.jpg","d76953c018a4118ebcc4356c230a77d6"],["D:/blog/public/2020/01/31/杭电hgame-week2/11.jpg","383e95c228cabc9f5ebd0af5677dbd3b"],["D:/blog/public/2020/01/31/杭电hgame-week2/12.jpg","2cb1842061331e8589bd8e5b39445e65"],["D:/blog/public/2020/01/31/杭电hgame-week2/13.jpg","66be7253b14531d2f806ce6d2723eaa3"],["D:/blog/public/2020/01/31/杭电hgame-week2/14.jpg","c53a543f195941782eb4ddc35a4dbcd1"],["D:/blog/public/2020/01/31/杭电hgame-week2/15.jpg","48cba2bf395b1352707b5fc3004c0585"],["D:/blog/public/2020/01/31/杭电hgame-week2/16.jpg","28eece3efc2eb96408bb8f7d1e170026"],["D:/blog/public/2020/01/31/杭电hgame-week2/17.jpg","af136b9089267f20fb9fcbcc7d1d9166"],["D:/blog/public/2020/01/31/杭电hgame-week2/2.jpg","a67fad9b44ced31a121f12c1a3a33f74"],["D:/blog/public/2020/01/31/杭电hgame-week2/3.jpg","0cf511a6fa030e5d14598ca63675c64c"],["D:/blog/public/2020/01/31/杭电hgame-week2/4.jpg","aa57c28dd701919cbb0e9dbf579bf974"],["D:/blog/public/2020/01/31/杭电hgame-week2/5.jpg","9244558a704a3dde9e0263bb87402374"],["D:/blog/public/2020/01/31/杭电hgame-week2/6.jpg","dae50cfad44ccc4e0a4a0613a5b0d5cb"],["D:/blog/public/2020/01/31/杭电hgame-week2/7.jpg","29ff78d4045d81b8144869489a52b6e2"],["D:/blog/public/2020/01/31/杭电hgame-week2/8.jpg","4d8f39c1f4ff563a3c95787a20789f0f"],["D:/blog/public/2020/01/31/杭电hgame-week2/9.jpg","3f9467429ded23549903c936bc2bb22d"],["D:/blog/public/2020/01/31/杭电hgame-week2/index.html","298b39857665ce25dd4d9fce27901589"],["D:/blog/public/2020/02/02/杭电hgame-week3/index.html","489f805e0e37f728a4579aa56baa9961"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/1.jpg","bb9290f2ead9594a223473954c241ce8"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/2.jpg","6ccd22dd9d025e676e7421d9301821b0"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/3.jpg","6b87f3c0af60f26e93325db6824ec8f6"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/4.jpg","b975cbc3e3527489166ad2a92cdb4624"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/index.html","697a06a7dcc280d5f7c1018cc2ed29d6"],["D:/blog/public/2020/02/06/hackthebox-ezpz/1.jpg","23bf5a7118ea3f40284a1a517a7f8ab0"],["D:/blog/public/2020/02/06/hackthebox-ezpz/2.jpg","a2ef028bf2dae207de77bafff065b59d"],["D:/blog/public/2020/02/06/hackthebox-ezpz/3.jpg","75f4537ddcfa266586753db9dabdbc7c"],["D:/blog/public/2020/02/06/hackthebox-ezpz/4.jpg","21558e584b8e3737b5a683ca481e2420"],["D:/blog/public/2020/02/06/hackthebox-ezpz/index.html","81513fe71ea8efd03033e5414af6c2de"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/1.jpg","74d6c33a3c724fef3a88b6f6d7dd5b68"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/2.jpg","398b00faa3f431d8c4413f9a23050ce3"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/3.jpg","e319593d03ef31b0ff4b02d8ed9cae4a"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/index.html","17e9418c7412f0ab15014989ab94a3bf"],["D:/blog/public/2020/02/18/从杭电hgame-week4学原型链污染/index.html","e0e824af6174c0196e0b6e504f770027"],["D:/blog/public/2020/02/19/CISCN-2019-web部分复现/index.html","259da37fe262b115951ec50f644fc76a"],["D:/blog/public/2020/02/25/NCTF-phar-matches-everything填坑/index.html","edef311c40c9ef5788b8750e9a2b66ec"],["D:/blog/public/2020/02/26/单独填坑-公益赛NodeGame/index.html","5ccc4615056bd815546054acc3d7496b"],["D:/blog/public/2020/03/02/学习笔记-命令执行及花式bypass写shell/index.html","0f044b0f86ae08d757477f37ad378aad"],["D:/blog/public/2020/03/06/Vulhub复现/index.html","ab7829427cc27e8a4fd5c3effb25b994"],["D:/blog/public/2020/03/09/To-Dolist/index.html","8964dc6a2fe3d751170c56cc8fad7536"],["D:/blog/public/2020/03/10/XCTF高校战“疫”网络安全分享赛/index.html","7132d228ae661ce2884a72d0f99e8be0"],["D:/blog/public/2020/03/18/使用Soap的ssrf-crlf攻击/index.html","65374f4758c3dc61969b51632e21a7d4"],["D:/blog/public/2020/03/29/WUSTCTF&MRCTF部分web题解/index.html","c605fa3187f8bb4866b30a58accb6eee"],["D:/blog/public/2020/03/30/VolgaCTF2020Qualifier复现/index.html","fd5c9aab835c80093b931fecbf39e07f"],["D:/blog/public/2020/04/01/hackthebox-Sniper-初尝windows靶机/index.html","c3bc733f8a334e34a92d3f3277e86da7"],["D:/blog/public/2020/04/13/ByteBanditsCTF2020两道WEB复现/index.html","aebd6abc152928d666f3f966ae097113"],["D:/blog/public/2020/04/20/Nodejs的一些技巧/index.html","72bc100dad642fbfa526df9ab5326fb9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/1.png","4fe77fbf7f8c7b1321a7264e1adbc1d4"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/10.png","7ca2f6e0a2e1d8c4b0f75c9a163db6c9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/11.png","dd30af1e04c6291a1254f94c18299c54"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/12.png","b86912dd1c049d3f275df3ebbdf900f8"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/13.png","645982851c50f071f3910020d5738d60"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/14.png","09617c9808b315fcebdf434d9341bdca"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/15.png","da0117dcb7ccec787277229b9235e821"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/16.png","611ca5de3656b66b8446b529ece39585"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/17.png","bb35beac017d2177d94de9ffcfc6bb2c"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/18.png","cf98f093cab95ab27bc89079ffcb6ba2"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/2.png","932f259dd31e70d840fe18b01fba1d49"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/3.png","fe4f779ed543f748ae63f7cb12d42285"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/4.png","d1289931388fbb1b1b6b0f4b264c19e6"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/5.png","b6b4beb5719c18b5821baa99caf09733"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/6.png","633b9a87d2f998cbeb3ea9ffd08f2140"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/7.png","b6211fc65a2d1774c111179885e7ca57"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/8.png","63e16915e39b2655ee3db50ad44dada9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/9.png","23fd12e89db3886a0d7af33e51f2891f"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/index.html","f5f1f532042a573e4785b1f65471b95b"],["D:/blog/public/2020/05/04/De1CTF2020writeup/index.html","02dbda1a9d03fcc773fa17bcc4e088ab"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/1.png","948eddf999fd3255f0f4afc0cf45c686"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/2.png","daf24f9256e7eef82d20652c3d3b44b8"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/3.png","1e186796519d50b298bc204ddf7cf1c5"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/4.png","a2e5c352c529e9e7e24352e1ab62d084"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/index.html","f5d870ba5f90cbce76f7328e91347a98"],["D:/blog/public/2020/05/24/GKCTF2020writeup/index.html","b0137dfdf0c0eeab210a01ca96eaaaf6"],["D:/blog/public/2020/05/30/初探Redis-wdb玄武组ssrfme&pwnhub公开赛/index.html","6953122cefeea141b1f9c89c8fb3c1d3"],["D:/blog/public/2020/06/23/hackthebox-Quick-一次艰难的渗透/index.html","245cb0f36e0cb469296b39d2ac08b5aa"],["D:/blog/public/2020/06/24/Make-jwt-great-again/index.html","750291a657468fb6b82342fb8350e15c"],["D:/blog/public/2020/07/01/hackthebox-Oouch/index.html","2cf4b1ebba27972283caba9b860c4f2a"],["D:/blog/public/2020/07/05/SCTF2020-writeup/index.html","60226da03132de202bad06c97859489f"],["D:/blog/public/2020/07/07/hackthebox-Travel/index.html","969cdfd2cbaa2652d5803f65515e6576"],["D:/blog/public/2020/07/09/学习笔记-Java相关/index.html","8a1f94a5c9c210003b1f37e29cac6261"],["D:/blog/public/2020/07/16/hackthebox-SneakyMailer/index.html","082b8b4c1a73451284b5a33e7e599966"],["D:/blog/public/2020/07/22/hackthebox-Intense/index.html","25ffec017308cf79f27a881e08591c33"],["D:/blog/public/2020/07/22/RingZer0-CTF-JavascriptChallenge/index.html","d3c43574931aa55e77b9cdbb2b23d847"],["D:/blog/public/2020/07/24/hackthebox-Dyplesher/index.html","984809610d14a2941d4843ec844825f9"],["D:/blog/public/2020/07/26/CyBRICS-CTF-2020/index.html","d2cdd0a43d1f0b5925e1afad3373055c"],["D:/blog/public/2020/08/05/Thinkphp-vuln/index.html","bc9e8149e36c3553311cfb09af434fd5"],["D:/blog/public/2020/08/10/hackthebox-Fatty-JavaExploits/index.html","913795cfef7fd8369194cb6a9e8f1ae9"],["D:/blog/public/2020/08/15/hackthebox-Unbalanced/index.html","f62c4dae3d5368b39ca3738702d64590"],["D:/blog/public/2020/08/17/Laravel-popchain/index.html","213b97490179529884d86454b4fe1b97"],["D:/blog/public/2020/08/27/钓鱼城-zblog/index.html","27e149e6bacfe6922cac9feb5310cfaf"],["D:/blog/public/2020/09/25/DarkCTF-WEB/index.html","67f96bef5421354b2e2cf479e06b6363"],["D:/blog/public/2020/10/05/bootcamp-2020&mctf-2020/index.html","f8a2b66904ef8e321fd8dd62d53d1930"],["D:/blog/public/2020/10/09/学习笔记-Java深入/index.html","3e4c6c5378106d938238fb395253197f"],["D:/blog/public/2020/10/19/N1CTF2020/index.html","8ebafd070583be2fa9e3d04bb39d31aa"],["D:/blog/public/2020/10/26/ByteCTF2020-easyscrapy/index.html","127daea607259951fd10f9a74702e39b"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/0.png","8b14359dfbce0d56fbd880ee4377e33d"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/index.html","bc974ac8ddb170ff65570b1972798ae1"],["D:/blog/public/2020/12/30/Farewell-to-2020/index.html","398f59bc0a56f6eec6e133b2d4f6423d"],["D:/blog/public/2021/02/07/golang的一些安全问题/index.html","2d2b1769efb48ee145c7f23da28f62f6"],["D:/blog/public/404.html","b48dd0d4375b92eafbc252822e65bf32"],["D:/blog/public/about/index.html","50e8f2f94ac82a46b098edfc58c71bbb"],["D:/blog/public/archives/2020/01/index.html","741e27dcbe2762a6bb66b8dd6403bef8"],["D:/blog/public/archives/2020/02/index.html","83ea58cde19399e55bf9076ab04375b1"],["D:/blog/public/archives/2020/03/index.html","beb26c9e1f41b7929bde9bcfefeb63b4"],["D:/blog/public/archives/2020/04/index.html","eb407f1839c5f2247990e829adc0073c"],["D:/blog/public/archives/2020/05/index.html","2cbfdea9939da9affe0edcdc72463791"],["D:/blog/public/archives/2020/06/index.html","9406ff22eba80adea891de2c5caed1af"],["D:/blog/public/archives/2020/07/index.html","03d4b151300afe6d862d3d22e4c1a05c"],["D:/blog/public/archives/2020/08/index.html","da9dc3c893528257357781c2e5550d9d"],["D:/blog/public/archives/2020/09/index.html","322cbe4ad8c1660afb18d025b6a4df41"],["D:/blog/public/archives/2020/10/index.html","f87a682c83479595dbceae3b555206e3"],["D:/blog/public/archives/2020/11/index.html","45a091d1cfe6f7ea81a0a34dcf20d2c3"],["D:/blog/public/archives/2020/12/index.html","ad9d8f6c8b21fb088df925e162fcc1ed"],["D:/blog/public/archives/2020/index.html","29195333563eef926cd5d2b8b0897d0d"],["D:/blog/public/archives/2020/page/2/index.html","d74a0334a922e982851797867ff8600b"],["D:/blog/public/archives/2020/page/3/index.html","7fc8ae41c253a55c22457335234fa075"],["D:/blog/public/archives/2020/page/4/index.html","e8d009759f6295e0a988e112c8f0836e"],["D:/blog/public/archives/2020/page/5/index.html","ac4d07b176f46ccc9956ac1328dc435b"],["D:/blog/public/archives/2020/page/6/index.html","5d6474a6b1a218ed9638121c3b9b4302"],["D:/blog/public/archives/2021/02/index.html","14dab32c7bd981ad6dd41dd53a2e1641"],["D:/blog/public/archives/2021/index.html","6aad921a9b9d1e7f36f5e828fb4c4d26"],["D:/blog/public/archives/index.html","55d6206ef7be67edcd8132c464270574"],["D:/blog/public/archives/page/2/index.html","55d6206ef7be67edcd8132c464270574"],["D:/blog/public/archives/page/3/index.html","55d6206ef7be67edcd8132c464270574"],["D:/blog/public/archives/page/4/index.html","55d6206ef7be67edcd8132c464270574"],["D:/blog/public/archives/page/5/index.html","55d6206ef7be67edcd8132c464270574"],["D:/blog/public/archives/page/6/index.html","55d6206ef7be67edcd8132c464270574"],["D:/blog/public/assests/icon.jpg","931d322663078eb74184292012d7ebd7"],["D:/blog/public/categories/index.html","80b784c8368fc214ee8f131ba5b82cb5"],["D:/blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/blog/public/css/style.css","cc6dde4434ac6c5b3f5fc1e78d8aa9fc"],["D:/blog/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/blog/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/blog/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/blog/public/friends/index.html","e5c7e3d39ad482145b67f8808e25221a"],["D:/blog/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/blog/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/blog/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/blog/public/index.html","d7cae7bcd3d4c86b1b65bcaae45fb9e5"],["D:/blog/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["D:/blog/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["D:/blog/public/js/valine.js","430596db58e60567246c52c474816ee6"],["D:/blog/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/blog/public/mylist/index.html","f54c1767ae00dd18f3c5093060885772"],["D:/blog/public/page/2/index.html","aabab42ba86f95d78e3ebfde7cba65a5"],["D:/blog/public/page/3/index.html","8642790046e929bafc8cbe14034ed43a"],["D:/blog/public/page/4/index.html","c31bfb833fdb48cf09f9a2862b83f914"],["D:/blog/public/page/5/index.html","a2c060ce5b7192eb960c43b254a9b751"],["D:/blog/public/page/6/index.html","41b11de384c213d168886ca8eb50046d"],["D:/blog/public/tags/CTF/index.html","b31143c0651d1200fe83c38f8d663baf"],["D:/blog/public/tags/CTF/page/2/index.html","deb719d8b73a0bcc169adc6b39932362"],["D:/blog/public/tags/CTF/page/3/index.html","efed27de05217d6dae1c98257cc5354c"],["D:/blog/public/tags/Go/index.html","6e13c6dc6fce2d09cfa1ddfbb83f6c47"],["D:/blog/public/tags/Java/index.html","f884b6ddd2f1f9b70a43da33787ccde5"],["D:/blog/public/tags/Linux/index.html","41705408fbafe91cfc190802c8f4f021"],["D:/blog/public/tags/Node-js/index.html","fec3d2f4300c04f21283cbc8493ac421"],["D:/blog/public/tags/PHP/index.html","2d52874d123c0d14f0c76a4829dd78e5"],["D:/blog/public/tags/WEB/index.html","129b7e9c5e4650dcc332c8fd3a62c8fc"],["D:/blog/public/tags/WEB/page/2/index.html","4aeb9fe73876906253cb8f87670edcc5"],["D:/blog/public/tags/WEB/page/3/index.html","d8e4f0ade9ae1142af49168cd8fee260"],["D:/blog/public/tags/WEB/page/4/index.html","f901f12e2c97145b6d95d857749ea74a"],["D:/blog/public/tags/hackthebox/index.html","3ba73b3de324c22a2c3738b78a3d4fec"],["D:/blog/public/tags/hackthebox/page/2/index.html","8b17e444a45e7404fded3e9d58199429"],["D:/blog/public/tags/index.html","2363bba001985a0ccf51b0f661099d5f"],["D:/blog/public/tags/javascript/index.html","0fc119cfd72a2c0f9adb2202aaaf8cf0"],["D:/blog/public/tags/pentest/index.html","14e1afe0169d8c56c3d23cd53dc3c6da"],["D:/blog/public/tags/redis/index.html","24595b1dbe86a4977a1b17d5cf6ca583"],["D:/blog/public/tags/windows/index.html","6a7858c96ed222a1d1befdc8efb6c3ad"],["D:/blog/public/tags/wp/index.html","f450bbc183905155b99cbaa7327541fd"],["D:/blog/public/tags/wp/page/2/index.html","7bde0066a5002403acf225c3fdd6b00f"]];
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







