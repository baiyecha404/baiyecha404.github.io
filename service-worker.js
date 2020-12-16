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

var precacheConfig = [["D:/blog/public/2020/01/12/hackthebox-Wall/1.jpg","49e0684a68148adc091ead702d671120"],["D:/blog/public/2020/01/12/hackthebox-Wall/index.html","77a9d1f438eb3913889fedfb3e8064fc"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/1.jpg","07efdb9a36ca39ab1b3adee06c174c08"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/2.jpg","6aba05000fe3322dcfaf970094157675"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/3.jpg","83e76f83eea00578b878f0214b2b1b07"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/index.html","d0df1d0dad7b7e5da4d42a8cb0d8c157"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/1.jpg","2b660ad81af412675d23c7fd615c5949"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/2.jpg","d8b00f856b75cad60913116be56f6591"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/3.jpg","b2e830760e0364f8fdb3aa413aaee4b2"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/4.jpg","8a81ed16c89ea8850b82c4d471a260a6"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/index.html","67b21f3fe97bad447ed41d90de49994c"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/1.jpg","4a98b463431646b6d7bef2e99b014ff4"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/2.jpg","63ca97fafbbcd8dfc8418e0ea6e4ee22"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/3.jpg","87b2a2202dd5b60ea7e6546889fdc285"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/4.jpg","3209d1298f5e0b7dbb8746e13359ba30"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/5.jpg","19489e468cabc149af22535dc8286356"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/6.jpg","755f50213e2f3ad8f73f2fc95b5109ae"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/7.jpg","a3d773ea65a561c6378b6392815d9f0d"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/index.html","7f354b8589671df1e8055c43fd7a7fd0"],["D:/blog/public/2020/01/29/hackthebox-AI——有趣的sql-JDWPgetshell/index.html","ccaff8b36051e6fa2cbc4ae546351a24"],["D:/blog/public/2020/01/30/杭电hgame-week1/1.jpg","f40802729e10c71c5e88118a033c3c8f"],["D:/blog/public/2020/01/30/杭电hgame-week1/10.jpg","51ba4728b34eee045121a78d11190730"],["D:/blog/public/2020/01/30/杭电hgame-week1/11.jpg","52401d7bd01382fc27bba3d89f2fb71f"],["D:/blog/public/2020/01/30/杭电hgame-week1/12.jpg","a6c87f976a1cd2d9a497dc04c8049e30"],["D:/blog/public/2020/01/30/杭电hgame-week1/13.jpg","3fd16ef2a52881ac6f9d4231ec650739"],["D:/blog/public/2020/01/30/杭电hgame-week1/14.jpg","1b541cb0ffe69e7b7726586a5c7e3da0"],["D:/blog/public/2020/01/30/杭电hgame-week1/2.jpg","c5f1933109146a453e197f52874059a8"],["D:/blog/public/2020/01/30/杭电hgame-week1/3.jpg","aa367b5424c7e88ecee0003cecea51a6"],["D:/blog/public/2020/01/30/杭电hgame-week1/4.jpg","7c1f49da38993726f799a5d6a496b118"],["D:/blog/public/2020/01/30/杭电hgame-week1/5.jpg","99ead273b57dba78c1f9b96775ef7f38"],["D:/blog/public/2020/01/30/杭电hgame-week1/6.jpg","7f20125c1a70fd6e871c994b8e773539"],["D:/blog/public/2020/01/30/杭电hgame-week1/7.jpg","3b48cfb9ee060b588037520fcb3a773e"],["D:/blog/public/2020/01/30/杭电hgame-week1/8.jpg","e8d37dd7aec3dc2a8bdb50a9475929ae"],["D:/blog/public/2020/01/30/杭电hgame-week1/9.jpg","5d54c31c95fdac50bc76e2fc94d0ec85"],["D:/blog/public/2020/01/30/杭电hgame-week1/index.html","53cc2076d48b271d5ea61e21af6ff73c"],["D:/blog/public/2020/01/31/杭电hgame-week2/1.jpg","dea0ab76e5637f1091579b3297269543"],["D:/blog/public/2020/01/31/杭电hgame-week2/10.jpg","d76953c018a4118ebcc4356c230a77d6"],["D:/blog/public/2020/01/31/杭电hgame-week2/11.jpg","383e95c228cabc9f5ebd0af5677dbd3b"],["D:/blog/public/2020/01/31/杭电hgame-week2/12.jpg","2cb1842061331e8589bd8e5b39445e65"],["D:/blog/public/2020/01/31/杭电hgame-week2/13.jpg","66be7253b14531d2f806ce6d2723eaa3"],["D:/blog/public/2020/01/31/杭电hgame-week2/14.jpg","c53a543f195941782eb4ddc35a4dbcd1"],["D:/blog/public/2020/01/31/杭电hgame-week2/15.jpg","48cba2bf395b1352707b5fc3004c0585"],["D:/blog/public/2020/01/31/杭电hgame-week2/16.jpg","28eece3efc2eb96408bb8f7d1e170026"],["D:/blog/public/2020/01/31/杭电hgame-week2/17.jpg","af136b9089267f20fb9fcbcc7d1d9166"],["D:/blog/public/2020/01/31/杭电hgame-week2/2.jpg","a67fad9b44ced31a121f12c1a3a33f74"],["D:/blog/public/2020/01/31/杭电hgame-week2/3.jpg","0cf511a6fa030e5d14598ca63675c64c"],["D:/blog/public/2020/01/31/杭电hgame-week2/4.jpg","aa57c28dd701919cbb0e9dbf579bf974"],["D:/blog/public/2020/01/31/杭电hgame-week2/5.jpg","9244558a704a3dde9e0263bb87402374"],["D:/blog/public/2020/01/31/杭电hgame-week2/6.jpg","dae50cfad44ccc4e0a4a0613a5b0d5cb"],["D:/blog/public/2020/01/31/杭电hgame-week2/7.jpg","29ff78d4045d81b8144869489a52b6e2"],["D:/blog/public/2020/01/31/杭电hgame-week2/8.jpg","4d8f39c1f4ff563a3c95787a20789f0f"],["D:/blog/public/2020/01/31/杭电hgame-week2/9.jpg","3f9467429ded23549903c936bc2bb22d"],["D:/blog/public/2020/01/31/杭电hgame-week2/index.html","ba55cbbd19d28b858839519c91c59d4d"],["D:/blog/public/2020/02/02/杭电hgame-week3/index.html","71143b3c5b44104e37a33c8f11ebf2c9"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/1.jpg","bb9290f2ead9594a223473954c241ce8"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/2.jpg","6ccd22dd9d025e676e7421d9301821b0"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/3.jpg","6b87f3c0af60f26e93325db6824ec8f6"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/4.jpg","b975cbc3e3527489166ad2a92cdb4624"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/index.html","073e57834673e3976c35b15571427037"],["D:/blog/public/2020/02/06/hackthebox-ezpz/1.jpg","23bf5a7118ea3f40284a1a517a7f8ab0"],["D:/blog/public/2020/02/06/hackthebox-ezpz/2.jpg","a2ef028bf2dae207de77bafff065b59d"],["D:/blog/public/2020/02/06/hackthebox-ezpz/3.jpg","75f4537ddcfa266586753db9dabdbc7c"],["D:/blog/public/2020/02/06/hackthebox-ezpz/4.jpg","21558e584b8e3737b5a683ca481e2420"],["D:/blog/public/2020/02/06/hackthebox-ezpz/index.html","3ac21b5ed55e554aea6303056d9b6cb8"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/1.jpg","74d6c33a3c724fef3a88b6f6d7dd5b68"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/2.jpg","398b00faa3f431d8c4413f9a23050ce3"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/3.jpg","e319593d03ef31b0ff4b02d8ed9cae4a"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/index.html","1d79d634cd282fa74fbbfc1467057836"],["D:/blog/public/2020/02/18/从杭电hgame-week4学原型链污染/index.html","7f1d3c6d15528eba215d9cdefaa8b644"],["D:/blog/public/2020/02/19/CISCN-2019-web部分复现/index.html","41c7ed317bfcfd19198c88784bd1c923"],["D:/blog/public/2020/02/25/NCTF-phar-matches-everything填坑/index.html","f20c3a20810a2c5af7ca68c414928126"],["D:/blog/public/2020/02/26/单独填坑-公益赛NodeGame/index.html","a80d753ee80233b30d7b2e946870bb9a"],["D:/blog/public/2020/03/02/学习笔记-命令执行及花式bypass写shell/index.html","4686f06664e600bb104bb3963dbb5792"],["D:/blog/public/2020/03/06/Vulhub复现/index.html","57659b46560302934bbeaf01086dd279"],["D:/blog/public/2020/03/09/To-Dolist/index.html","731492373e699cfcd7e28f1e000a17a8"],["D:/blog/public/2020/03/10/XCTF高校战“疫”网络安全分享赛/index.html","1e5df6559982a3668f3feb905b7233b0"],["D:/blog/public/2020/03/18/使用Soap的ssrf-crlf攻击/index.html","26b5b74ecba2e625c87851142bd38e77"],["D:/blog/public/2020/03/29/WUSTCTF&MRCTF部分web题解/index.html","0c4e35bcd68a15e01941f14e6393bbfe"],["D:/blog/public/2020/03/30/VolgaCTF2020Qualifier复现/index.html","cab1121694586cb02389d777d10db4e0"],["D:/blog/public/2020/04/01/hackthebox-Sniper-初尝windows靶机/index.html","fb21cab4c6fcf180fd0bdf59df3a5777"],["D:/blog/public/2020/04/13/ByteBanditsCTF2020两道WEB复现/index.html","f91aca8860717bef5ea62ffe8e9b3b0b"],["D:/blog/public/2020/04/20/Nodejs的一些技巧/index.html","00ea42e51d9cb50b1f895f200072c75c"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/1.png","4fe77fbf7f8c7b1321a7264e1adbc1d4"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/10.png","7ca2f6e0a2e1d8c4b0f75c9a163db6c9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/11.png","dd30af1e04c6291a1254f94c18299c54"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/12.png","b86912dd1c049d3f275df3ebbdf900f8"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/13.png","645982851c50f071f3910020d5738d60"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/14.png","09617c9808b315fcebdf434d9341bdca"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/15.png","da0117dcb7ccec787277229b9235e821"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/16.png","611ca5de3656b66b8446b529ece39585"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/17.png","bb35beac017d2177d94de9ffcfc6bb2c"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/18.png","cf98f093cab95ab27bc89079ffcb6ba2"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/2.png","932f259dd31e70d840fe18b01fba1d49"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/3.png","fe4f779ed543f748ae63f7cb12d42285"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/4.png","d1289931388fbb1b1b6b0f4b264c19e6"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/5.png","b6b4beb5719c18b5821baa99caf09733"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/6.png","633b9a87d2f998cbeb3ea9ffd08f2140"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/7.png","b6211fc65a2d1774c111179885e7ca57"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/8.png","63e16915e39b2655ee3db50ad44dada9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/9.png","23fd12e89db3886a0d7af33e51f2891f"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/index.html","2803d1030d7214eceb57a49182100921"],["D:/blog/public/2020/05/04/De1CTF2020writeup/index.html","1d5816b069c6e66360ea808049afb281"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/1.png","948eddf999fd3255f0f4afc0cf45c686"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/2.png","daf24f9256e7eef82d20652c3d3b44b8"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/3.png","1e186796519d50b298bc204ddf7cf1c5"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/4.png","a2e5c352c529e9e7e24352e1ab62d084"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/index.html","775e4f01178a2d804ccc2b6dd8d57def"],["D:/blog/public/2020/05/24/GKCTF2020writeup/index.html","4161887916a5b7b9ec943006c97f07e0"],["D:/blog/public/2020/05/30/初探Redis-wdb玄武组ssrfme&pwnhub公开赛/index.html","3400a1a367710a3aef20945b5f1ffbdf"],["D:/blog/public/2020/06/23/hackthebox-Quick-一次艰难的渗透/index.html","c5ee68e1b381517a9b5b87a315229aff"],["D:/blog/public/2020/06/24/Make-jwt-great-again/index.html","8c764af7e7174a6e117b9f716f7e4301"],["D:/blog/public/2020/07/01/hackthebox-Oouch/index.html","a4a7e050a20e84ef7e67d2fb9a1bbc14"],["D:/blog/public/2020/07/05/SCTF2020-writeup/index.html","36a454546ee2bbdc898ceeb2d2c1982b"],["D:/blog/public/2020/07/07/hackthebox-Travel/index.html","07dfd10efbc347420c2e8e12e3f932d8"],["D:/blog/public/2020/07/09/学习笔记-Java相关/index.html","a453b487005b329af986af6b7a086bb7"],["D:/blog/public/2020/07/16/hackthebox-SneakyMailer/index.html","2f52a41d0af7465799f67b296a37ddd9"],["D:/blog/public/2020/07/22/hackthebox-Intense/index.html","58f388033049e0b5213943509f69d192"],["D:/blog/public/2020/07/22/RingZer0-CTF-JavascriptChallenge/index.html","b3bd8b9326be24aaca0bc91dd3530690"],["D:/blog/public/2020/07/24/hackthebox-Dyplesher/index.html","062174b9e7ac48a97f62adfe332c2fed"],["D:/blog/public/2020/07/26/CyBRICS-CTF-2020/index.html","c46fdc1c134350f0fdc266df94246bd4"],["D:/blog/public/2020/08/05/Thinkphp-vuln/index.html","64aabfd50727c1affee5ab0aaa07542a"],["D:/blog/public/2020/08/10/hackthebox-Fatty-JavaExploits/index.html","f626c92fcd08c78a0f800c99681dccb6"],["D:/blog/public/2020/08/15/hackthebox-Unbalanced/index.html","93cecb529bf337834354d5d89a1cd3c3"],["D:/blog/public/2020/08/17/Laravel-popchain/index.html","4af9f61a2adff683b91e34751f8c5896"],["D:/blog/public/2020/08/27/钓鱼城-zblog/index.html","363cd6dfedd000c408b0611482230077"],["D:/blog/public/2020/09/25/DarkCTF-WEB/index.html","004f61154010f780b92ebcdbdbf39942"],["D:/blog/public/2020/10/05/bootcamp-2020&mctf-2020/index.html","b1c3942400d6162ab55f68c62fa42fcf"],["D:/blog/public/2020/10/09/学习笔记-Java深入/index.html","9624c984756009964b5c1ce41c3ae958"],["D:/blog/public/2020/10/19/N1CTF2020/index.html","3da7986cfdd739ba1bf196b2a3e11dbc"],["D:/blog/public/2020/10/26/ByteCTF2020-easyscrapy/index.html","8370d0c2dded9d330f4f470d93f99447"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/0.png","8b14359dfbce0d56fbd880ee4377e33d"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/index.html","8f3cd39d0685627c91022453541ee120"],["D:/blog/public/404.html","5c7b343864fb5c42f89fdd2700e204b0"],["D:/blog/public/about/index.html","30d7d5e847ccb1112d327ce38c8ff61b"],["D:/blog/public/archives/2020/01/index.html","cb5d71d3985c0892f78299600d9deb80"],["D:/blog/public/archives/2020/02/index.html","fca1cb8f218f157586168c72f1c14669"],["D:/blog/public/archives/2020/03/index.html","a2997ebf8362e36ad3268b66f4596d96"],["D:/blog/public/archives/2020/04/index.html","094f86178183d7d5dd51c7011191eb59"],["D:/blog/public/archives/2020/05/index.html","a1a0389742d5def7d9f4c561ca77f609"],["D:/blog/public/archives/2020/06/index.html","8cf6483490bc5efd873d0749bec62ef4"],["D:/blog/public/archives/2020/07/index.html","b5bce826e18dcd342b4a106e02ea3315"],["D:/blog/public/archives/2020/08/index.html","9826ac78255d10d5b14e91837cacf9fb"],["D:/blog/public/archives/2020/09/index.html","33c17813f633c902bcd332eed4f25426"],["D:/blog/public/archives/2020/10/index.html","98048cb84671a30819f5af4540566ffe"],["D:/blog/public/archives/2020/11/index.html","3d9bd320b787d7c9a73b5479f5383caf"],["D:/blog/public/archives/2020/index.html","2cd03f2d8957548c5ab62314d378b04a"],["D:/blog/public/archives/2020/page/2/index.html","d0eb3ef01aa7c05cd26791321485656e"],["D:/blog/public/archives/2020/page/3/index.html","d6486377a93273ed05fad364a6af510f"],["D:/blog/public/archives/2020/page/4/index.html","da9c34bda4d93218d87274b1d6b74997"],["D:/blog/public/archives/2020/page/5/index.html","2b7b5ac50fdb018d6b81a58c579bdf38"],["D:/blog/public/archives/2020/page/6/index.html","6d25f81c41a265315be17c088f64e03c"],["D:/blog/public/archives/index.html","efdceb6df1ef2547db8ea5bf39ab87d8"],["D:/blog/public/archives/page/2/index.html","efdceb6df1ef2547db8ea5bf39ab87d8"],["D:/blog/public/archives/page/3/index.html","efdceb6df1ef2547db8ea5bf39ab87d8"],["D:/blog/public/archives/page/4/index.html","efdceb6df1ef2547db8ea5bf39ab87d8"],["D:/blog/public/archives/page/5/index.html","efdceb6df1ef2547db8ea5bf39ab87d8"],["D:/blog/public/archives/page/6/index.html","efdceb6df1ef2547db8ea5bf39ab87d8"],["D:/blog/public/assests/icon.jpg","931d322663078eb74184292012d7ebd7"],["D:/blog/public/categories/index.html","52a9ac040f2a335942c9ed5db861218b"],["D:/blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/blog/public/css/style.css","cc6dde4434ac6c5b3f5fc1e78d8aa9fc"],["D:/blog/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/blog/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/blog/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/blog/public/friends/index.html","6fe02f15942760d6241710e2a28c1992"],["D:/blog/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/blog/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/blog/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/blog/public/index.html","a603df01730a3d9f2bd160dbddd8e1e8"],["D:/blog/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["D:/blog/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["D:/blog/public/js/valine.js","430596db58e60567246c52c474816ee6"],["D:/blog/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/blog/public/mylist/index.html","dd9de92aeaead6e823533b3d71366dbd"],["D:/blog/public/page/2/index.html","79d07e36414212b0617e283014a4a82c"],["D:/blog/public/page/3/index.html","a32e6a9689cd496c830434853a24fac5"],["D:/blog/public/page/4/index.html","4363d410d326737e09c391e78bfa142e"],["D:/blog/public/page/5/index.html","60821218982a8dd77f125af8ed0ae044"],["D:/blog/public/page/6/index.html","338c51a5b5d5eeed7f79efc53e57be0e"],["D:/blog/public/tags/CTF/index.html","a9ebed8e86943569d5c8125f36c8feeb"],["D:/blog/public/tags/CTF/page/2/index.html","5852eb4c2e70dafc9c989bf01f9129b7"],["D:/blog/public/tags/CTF/page/3/index.html","c60e172f7aff8ad6923c980693609f60"],["D:/blog/public/tags/Java/index.html","4b839b79d061242a144cc7ff4c6ed214"],["D:/blog/public/tags/Linux/index.html","ca64902f58156aadae9b10943d951577"],["D:/blog/public/tags/Node-js/index.html","1495ce323d2f4778a638f923c4261206"],["D:/blog/public/tags/PHP/index.html","23fba47eff5369fa265634a443801819"],["D:/blog/public/tags/WEB/index.html","2e5df01929092ae101341737bafb43aa"],["D:/blog/public/tags/WEB/page/2/index.html","d3edbc1160dacbe0453bcb9a445d4e47"],["D:/blog/public/tags/WEB/page/3/index.html","fdfa3aa3ea9db4ff68175ace5dfbe53b"],["D:/blog/public/tags/WEB/page/4/index.html","5ad75a5cc3a0e5fa3694c8a0cb04811b"],["D:/blog/public/tags/hackthebox/index.html","cca3340be430b24905d3474bda19e241"],["D:/blog/public/tags/hackthebox/page/2/index.html","cd276e8a241170a8a4db29fd98f2b5a7"],["D:/blog/public/tags/index.html","e696162d3ee642e9c1b79dfd525cfafe"],["D:/blog/public/tags/javascript/index.html","cd3c0ed8ded5eb1f8a4903123d311180"],["D:/blog/public/tags/pentest/index.html","0f5c4fc43615b09b9b6f6a18580dd73f"],["D:/blog/public/tags/redis/index.html","d459b6459754372f3f4a105462b3d5dd"],["D:/blog/public/tags/windows/index.html","c867793f8d81cd69c674c4dfa720bce3"],["D:/blog/public/tags/wp/index.html","ad5a98dc850676d5c0c5c5d970aa3e01"],["D:/blog/public/tags/wp/page/2/index.html","5c2a74d79fc9d90b0875e681920058de"]];
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







