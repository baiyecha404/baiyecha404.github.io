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

var precacheConfig = [["D:/blog/public/2020/01/12/hackthebox-Wall/1.jpg","49e0684a68148adc091ead702d671120"],["D:/blog/public/2020/01/12/hackthebox-Wall/index.html","c52bdf276d6e4d0aa7b29950a46ce371"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/1.jpg","07efdb9a36ca39ab1b3adee06c174c08"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/2.jpg","6aba05000fe3322dcfaf970094157675"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/3.jpg","83e76f83eea00578b878f0214b2b1b07"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/index.html","56818415def6cf00d81de865762c7425"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/1.jpg","2b660ad81af412675d23c7fd615c5949"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/2.jpg","d8b00f856b75cad60913116be56f6591"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/3.jpg","b2e830760e0364f8fdb3aa413aaee4b2"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/4.jpg","8a81ed16c89ea8850b82c4d471a260a6"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/index.html","dcae2f557bf6cd06f2e85ec6137f0b19"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/1.jpg","4a98b463431646b6d7bef2e99b014ff4"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/2.jpg","63ca97fafbbcd8dfc8418e0ea6e4ee22"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/3.jpg","87b2a2202dd5b60ea7e6546889fdc285"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/4.jpg","3209d1298f5e0b7dbb8746e13359ba30"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/5.jpg","19489e468cabc149af22535dc8286356"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/6.jpg","755f50213e2f3ad8f73f2fc95b5109ae"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/7.jpg","a3d773ea65a561c6378b6392815d9f0d"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/index.html","ddda7ed1f7c7ec21e3e3729cd90e76e7"],["D:/blog/public/2020/01/29/hackthebox-AI——有趣的sql-JDWPgetshell/index.html","52355662930dea3748a325677c2cd1d6"],["D:/blog/public/2020/01/30/杭电hgame-week1/1.jpg","f40802729e10c71c5e88118a033c3c8f"],["D:/blog/public/2020/01/30/杭电hgame-week1/10.jpg","51ba4728b34eee045121a78d11190730"],["D:/blog/public/2020/01/30/杭电hgame-week1/11.jpg","52401d7bd01382fc27bba3d89f2fb71f"],["D:/blog/public/2020/01/30/杭电hgame-week1/12.jpg","a6c87f976a1cd2d9a497dc04c8049e30"],["D:/blog/public/2020/01/30/杭电hgame-week1/13.jpg","3fd16ef2a52881ac6f9d4231ec650739"],["D:/blog/public/2020/01/30/杭电hgame-week1/14.jpg","1b541cb0ffe69e7b7726586a5c7e3da0"],["D:/blog/public/2020/01/30/杭电hgame-week1/2.jpg","c5f1933109146a453e197f52874059a8"],["D:/blog/public/2020/01/30/杭电hgame-week1/3.jpg","aa367b5424c7e88ecee0003cecea51a6"],["D:/blog/public/2020/01/30/杭电hgame-week1/4.jpg","7c1f49da38993726f799a5d6a496b118"],["D:/blog/public/2020/01/30/杭电hgame-week1/5.jpg","99ead273b57dba78c1f9b96775ef7f38"],["D:/blog/public/2020/01/30/杭电hgame-week1/6.jpg","7f20125c1a70fd6e871c994b8e773539"],["D:/blog/public/2020/01/30/杭电hgame-week1/7.jpg","3b48cfb9ee060b588037520fcb3a773e"],["D:/blog/public/2020/01/30/杭电hgame-week1/8.jpg","e8d37dd7aec3dc2a8bdb50a9475929ae"],["D:/blog/public/2020/01/30/杭电hgame-week1/9.jpg","5d54c31c95fdac50bc76e2fc94d0ec85"],["D:/blog/public/2020/01/30/杭电hgame-week1/index.html","a79d7e3fd418c24ae4cd318b95595aa8"],["D:/blog/public/2020/01/31/杭电hgame-week2/1.jpg","dea0ab76e5637f1091579b3297269543"],["D:/blog/public/2020/01/31/杭电hgame-week2/10.jpg","d76953c018a4118ebcc4356c230a77d6"],["D:/blog/public/2020/01/31/杭电hgame-week2/11.jpg","383e95c228cabc9f5ebd0af5677dbd3b"],["D:/blog/public/2020/01/31/杭电hgame-week2/12.jpg","2cb1842061331e8589bd8e5b39445e65"],["D:/blog/public/2020/01/31/杭电hgame-week2/13.jpg","66be7253b14531d2f806ce6d2723eaa3"],["D:/blog/public/2020/01/31/杭电hgame-week2/14.jpg","c53a543f195941782eb4ddc35a4dbcd1"],["D:/blog/public/2020/01/31/杭电hgame-week2/15.jpg","48cba2bf395b1352707b5fc3004c0585"],["D:/blog/public/2020/01/31/杭电hgame-week2/16.jpg","28eece3efc2eb96408bb8f7d1e170026"],["D:/blog/public/2020/01/31/杭电hgame-week2/17.jpg","af136b9089267f20fb9fcbcc7d1d9166"],["D:/blog/public/2020/01/31/杭电hgame-week2/2.jpg","a67fad9b44ced31a121f12c1a3a33f74"],["D:/blog/public/2020/01/31/杭电hgame-week2/3.jpg","0cf511a6fa030e5d14598ca63675c64c"],["D:/blog/public/2020/01/31/杭电hgame-week2/4.jpg","aa57c28dd701919cbb0e9dbf579bf974"],["D:/blog/public/2020/01/31/杭电hgame-week2/5.jpg","9244558a704a3dde9e0263bb87402374"],["D:/blog/public/2020/01/31/杭电hgame-week2/6.jpg","dae50cfad44ccc4e0a4a0613a5b0d5cb"],["D:/blog/public/2020/01/31/杭电hgame-week2/7.jpg","29ff78d4045d81b8144869489a52b6e2"],["D:/blog/public/2020/01/31/杭电hgame-week2/8.jpg","4d8f39c1f4ff563a3c95787a20789f0f"],["D:/blog/public/2020/01/31/杭电hgame-week2/9.jpg","3f9467429ded23549903c936bc2bb22d"],["D:/blog/public/2020/01/31/杭电hgame-week2/index.html","298b39857665ce25dd4d9fce27901589"],["D:/blog/public/2020/02/02/杭电hgame-week3/index.html","489f805e0e37f728a4579aa56baa9961"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/1.jpg","bb9290f2ead9594a223473954c241ce8"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/2.jpg","6ccd22dd9d025e676e7421d9301821b0"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/3.jpg","6b87f3c0af60f26e93325db6824ec8f6"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/4.jpg","b975cbc3e3527489166ad2a92cdb4624"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/index.html","697a06a7dcc280d5f7c1018cc2ed29d6"],["D:/blog/public/2020/02/06/hackthebox-ezpz/1.jpg","23bf5a7118ea3f40284a1a517a7f8ab0"],["D:/blog/public/2020/02/06/hackthebox-ezpz/2.jpg","a2ef028bf2dae207de77bafff065b59d"],["D:/blog/public/2020/02/06/hackthebox-ezpz/3.jpg","75f4537ddcfa266586753db9dabdbc7c"],["D:/blog/public/2020/02/06/hackthebox-ezpz/4.jpg","21558e584b8e3737b5a683ca481e2420"],["D:/blog/public/2020/02/06/hackthebox-ezpz/index.html","81513fe71ea8efd03033e5414af6c2de"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/1.jpg","74d6c33a3c724fef3a88b6f6d7dd5b68"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/2.jpg","398b00faa3f431d8c4413f9a23050ce3"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/3.jpg","e319593d03ef31b0ff4b02d8ed9cae4a"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/index.html","17e9418c7412f0ab15014989ab94a3bf"],["D:/blog/public/2020/02/18/从杭电hgame-week4学原型链污染/index.html","e0e824af6174c0196e0b6e504f770027"],["D:/blog/public/2020/02/19/CISCN-2019-web部分复现/index.html","259da37fe262b115951ec50f644fc76a"],["D:/blog/public/2020/02/25/NCTF-phar-matches-everything填坑/index.html","edef311c40c9ef5788b8750e9a2b66ec"],["D:/blog/public/2020/02/26/单独填坑-公益赛NodeGame/index.html","5ccc4615056bd815546054acc3d7496b"],["D:/blog/public/2020/03/02/学习笔记-命令执行及花式bypass写shell/index.html","0f044b0f86ae08d757477f37ad378aad"],["D:/blog/public/2020/03/06/Vulhub复现/index.html","ab7829427cc27e8a4fd5c3effb25b994"],["D:/blog/public/2020/03/09/To-Dolist/index.html","8964dc6a2fe3d751170c56cc8fad7536"],["D:/blog/public/2020/03/10/XCTF高校战“疫”网络安全分享赛/index.html","7132d228ae661ce2884a72d0f99e8be0"],["D:/blog/public/2020/03/18/使用Soap的ssrf-crlf攻击/index.html","65374f4758c3dc61969b51632e21a7d4"],["D:/blog/public/2020/03/29/WUSTCTF&MRCTF部分web题解/index.html","c605fa3187f8bb4866b30a58accb6eee"],["D:/blog/public/2020/03/30/VolgaCTF2020Qualifier复现/index.html","fd5c9aab835c80093b931fecbf39e07f"],["D:/blog/public/2020/04/01/hackthebox-Sniper-初尝windows靶机/index.html","c3bc733f8a334e34a92d3f3277e86da7"],["D:/blog/public/2020/04/13/ByteBanditsCTF2020两道WEB复现/index.html","aebd6abc152928d666f3f966ae097113"],["D:/blog/public/2020/04/20/Nodejs的一些技巧/index.html","72bc100dad642fbfa526df9ab5326fb9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/1.png","4fe77fbf7f8c7b1321a7264e1adbc1d4"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/10.png","7ca2f6e0a2e1d8c4b0f75c9a163db6c9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/11.png","dd30af1e04c6291a1254f94c18299c54"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/12.png","b86912dd1c049d3f275df3ebbdf900f8"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/13.png","645982851c50f071f3910020d5738d60"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/14.png","09617c9808b315fcebdf434d9341bdca"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/15.png","da0117dcb7ccec787277229b9235e821"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/16.png","611ca5de3656b66b8446b529ece39585"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/17.png","bb35beac017d2177d94de9ffcfc6bb2c"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/18.png","cf98f093cab95ab27bc89079ffcb6ba2"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/2.png","932f259dd31e70d840fe18b01fba1d49"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/3.png","fe4f779ed543f748ae63f7cb12d42285"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/4.png","d1289931388fbb1b1b6b0f4b264c19e6"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/5.png","b6b4beb5719c18b5821baa99caf09733"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/6.png","633b9a87d2f998cbeb3ea9ffd08f2140"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/7.png","b6211fc65a2d1774c111179885e7ca57"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/8.png","63e16915e39b2655ee3db50ad44dada9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/9.png","23fd12e89db3886a0d7af33e51f2891f"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/index.html","f5f1f532042a573e4785b1f65471b95b"],["D:/blog/public/2020/05/04/De1CTF2020writeup/index.html","02dbda1a9d03fcc773fa17bcc4e088ab"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/1.png","948eddf999fd3255f0f4afc0cf45c686"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/2.png","daf24f9256e7eef82d20652c3d3b44b8"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/3.png","1e186796519d50b298bc204ddf7cf1c5"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/4.png","a2e5c352c529e9e7e24352e1ab62d084"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/index.html","f5d870ba5f90cbce76f7328e91347a98"],["D:/blog/public/2020/05/24/GKCTF2020writeup/index.html","b0137dfdf0c0eeab210a01ca96eaaaf6"],["D:/blog/public/2020/05/30/初探Redis-wdb玄武组ssrfme&pwnhub公开赛/index.html","6953122cefeea141b1f9c89c8fb3c1d3"],["D:/blog/public/2020/06/23/hackthebox-Quick-一次艰难的渗透/index.html","245cb0f36e0cb469296b39d2ac08b5aa"],["D:/blog/public/2020/06/24/Make-jwt-great-again/index.html","750291a657468fb6b82342fb8350e15c"],["D:/blog/public/2020/07/01/hackthebox-Oouch/index.html","2cf4b1ebba27972283caba9b860c4f2a"],["D:/blog/public/2020/07/05/SCTF2020-writeup/index.html","60226da03132de202bad06c97859489f"],["D:/blog/public/2020/07/07/hackthebox-Travel/index.html","969cdfd2cbaa2652d5803f65515e6576"],["D:/blog/public/2020/07/09/学习笔记-Java相关/index.html","8a1f94a5c9c210003b1f37e29cac6261"],["D:/blog/public/2020/07/16/hackthebox-SneakyMailer/index.html","082b8b4c1a73451284b5a33e7e599966"],["D:/blog/public/2020/07/22/hackthebox-Intense/index.html","25ffec017308cf79f27a881e08591c33"],["D:/blog/public/2020/07/22/RingZer0-CTF-JavascriptChallenge/index.html","d3c43574931aa55e77b9cdbb2b23d847"],["D:/blog/public/2020/07/24/hackthebox-Dyplesher/index.html","984809610d14a2941d4843ec844825f9"],["D:/blog/public/2020/07/26/CyBRICS-CTF-2020/index.html","d2cdd0a43d1f0b5925e1afad3373055c"],["D:/blog/public/2020/08/05/Thinkphp-vuln/index.html","bc9e8149e36c3553311cfb09af434fd5"],["D:/blog/public/2020/08/10/hackthebox-Fatty-JavaExploits/index.html","629f7c7a36f4851758ba9e0ec819078d"],["D:/blog/public/2020/08/15/hackthebox-Unbalanced/index.html","477dd53e1380e1d9ad03b4dc3626d2a5"],["D:/blog/public/2020/08/17/Laravel-popchain/index.html","ee3fe709f9a284232e43e029806db983"],["D:/blog/public/2020/08/27/钓鱼城-zblog/index.html","27e149e6bacfe6922cac9feb5310cfaf"],["D:/blog/public/2020/09/25/DarkCTF-WEB/index.html","67f96bef5421354b2e2cf479e06b6363"],["D:/blog/public/2020/10/05/bootcamp-2020&mctf-2020/index.html","f8a2b66904ef8e321fd8dd62d53d1930"],["D:/blog/public/2020/10/09/学习笔记-Java深入/index.html","3e4c6c5378106d938238fb395253197f"],["D:/blog/public/2020/10/19/N1CTF2020/index.html","8ebafd070583be2fa9e3d04bb39d31aa"],["D:/blog/public/2020/10/26/ByteCTF2020-easyscrapy/index.html","127daea607259951fd10f9a74702e39b"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/0.png","8b14359dfbce0d56fbd880ee4377e33d"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/index.html","7922ad0d1980f2f5b2a540750a3c76d1"],["D:/blog/public/404.html","b48dd0d4375b92eafbc252822e65bf32"],["D:/blog/public/about/index.html","3ccb23ed0ebf6e6ef5e44c4e078d931f"],["D:/blog/public/archives/2020/01/index.html","4e03ab0ee056603cc201237a78ff8116"],["D:/blog/public/archives/2020/02/index.html","4a8260fa38b1377a26d7f76f15305eff"],["D:/blog/public/archives/2020/03/index.html","6eaa0dd0b2d60c4b65bc7fae911d625b"],["D:/blog/public/archives/2020/04/index.html","ae332b5e39723f93c7563575896bf5a6"],["D:/blog/public/archives/2020/05/index.html","c8ed6bc09c008cb0f0d8a24241880029"],["D:/blog/public/archives/2020/06/index.html","6625e08713a354222abc5fbb81c9befe"],["D:/blog/public/archives/2020/07/index.html","79abed33c3b253e4635692fba8554e71"],["D:/blog/public/archives/2020/08/index.html","a4d77a0d8b71f43451e64a17dc81d69d"],["D:/blog/public/archives/2020/09/index.html","5335662475ffbb0f168fb7041d956f1d"],["D:/blog/public/archives/2020/10/index.html","30070abd60edf61540fca67e7bcefb2d"],["D:/blog/public/archives/2020/11/index.html","27a7cdfea84f840ab2d8ab8598154e7a"],["D:/blog/public/archives/2020/index.html","e9cf3f7f94dbf1b5b13d3d2996d90090"],["D:/blog/public/archives/2020/page/2/index.html","4c7e156555b212b02f73e1e116721a5d"],["D:/blog/public/archives/2020/page/3/index.html","cc1d8c4035807b94e6ae037ec355d745"],["D:/blog/public/archives/2020/page/4/index.html","17da89f9f40470d952fdb264ec3845e7"],["D:/blog/public/archives/2020/page/5/index.html","2c2af7c819c02ffcbd2ea5b340040571"],["D:/blog/public/archives/2020/page/6/index.html","0b9e1c1d0417d8674140beaa7a24289e"],["D:/blog/public/archives/index.html","6c70c45d241ed78ba972fed9d8981f49"],["D:/blog/public/archives/page/2/index.html","6c70c45d241ed78ba972fed9d8981f49"],["D:/blog/public/archives/page/3/index.html","6c70c45d241ed78ba972fed9d8981f49"],["D:/blog/public/archives/page/4/index.html","6c70c45d241ed78ba972fed9d8981f49"],["D:/blog/public/archives/page/5/index.html","6c70c45d241ed78ba972fed9d8981f49"],["D:/blog/public/archives/page/6/index.html","6c70c45d241ed78ba972fed9d8981f49"],["D:/blog/public/assests/icon.jpg","931d322663078eb74184292012d7ebd7"],["D:/blog/public/categories/index.html","80b784c8368fc214ee8f131ba5b82cb5"],["D:/blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/blog/public/css/style.css","cc6dde4434ac6c5b3f5fc1e78d8aa9fc"],["D:/blog/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/blog/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/blog/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/blog/public/friends/index.html","e5c7e3d39ad482145b67f8808e25221a"],["D:/blog/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/blog/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/blog/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/blog/public/index.html","117bd6223f5935df61b9735bd95236ce"],["D:/blog/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["D:/blog/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["D:/blog/public/js/valine.js","430596db58e60567246c52c474816ee6"],["D:/blog/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/blog/public/mylist/index.html","63b5bc42b9316f6891b9854c1b2fd309"],["D:/blog/public/page/2/index.html","5ad99546ffefa89446631e04037ae672"],["D:/blog/public/page/3/index.html","deb05f78aa97cb1704a0b815eb184224"],["D:/blog/public/page/4/index.html","f33398811ac7fc26362ccd9593901692"],["D:/blog/public/page/5/index.html","c28129be65887e194c7f82e1c0af5fa0"],["D:/blog/public/page/6/index.html","8fdf056f3233f16049c14c9a8ea8f80d"],["D:/blog/public/tags/CTF/index.html","e8b59be968e67210404753cd9392d670"],["D:/blog/public/tags/CTF/page/2/index.html","1b51cf45632ff3d94a4990f0e270508d"],["D:/blog/public/tags/CTF/page/3/index.html","27483a8eea8a6aab09f2137fc7d370c3"],["D:/blog/public/tags/Java/index.html","cbea1055075b787daeacce4f8b6fb8e3"],["D:/blog/public/tags/Linux/index.html","47cb3ca5c2b71cb7e67f432df79be7ae"],["D:/blog/public/tags/Node-js/index.html","b02b074f6dff1d5522603cbaa84ee524"],["D:/blog/public/tags/PHP/index.html","b1b984edfe6d27338509a8855775c3e2"],["D:/blog/public/tags/WEB/index.html","b29ad23a4beb4f457c5b6ae887fad474"],["D:/blog/public/tags/WEB/page/2/index.html","0f840555f1346a0644f28bbf8117e984"],["D:/blog/public/tags/WEB/page/3/index.html","cd2e7ce3ad76349b2ba3705d70de805a"],["D:/blog/public/tags/WEB/page/4/index.html","edf30589d8956a02251a8b066c6fd231"],["D:/blog/public/tags/hackthebox/index.html","7d458a5f39bbaf1548dfe61ec99efce7"],["D:/blog/public/tags/hackthebox/page/2/index.html","aaeb8d24c476727ee8b05da489f098fe"],["D:/blog/public/tags/index.html","ac7a7827279c634089964d0278ba6860"],["D:/blog/public/tags/javascript/index.html","3e6b3f3af95dad06a985a68a120be410"],["D:/blog/public/tags/pentest/index.html","8584ceb2d5c6d22f91e428fb99198921"],["D:/blog/public/tags/redis/index.html","36e287ee6a14fe55b4bea562856ee9d8"],["D:/blog/public/tags/windows/index.html","13d8c1cf438a923ca3820cdbfb85a3c0"],["D:/blog/public/tags/wp/index.html","fbfd9824d23a3750e5c767997740fc92"],["D:/blog/public/tags/wp/page/2/index.html","85ae16cafae354a5595616af2517a358"]];
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







