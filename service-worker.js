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

var precacheConfig = [["D:/blog/public/2020/01/12/hackthebox-Wall/1.jpg","49e0684a68148adc091ead702d671120"],["D:/blog/public/2020/01/12/hackthebox-Wall/index.html","fbab5caea31bd7c4dd49b6ac7ee84a7f"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/1.jpg","07efdb9a36ca39ab1b3adee06c174c08"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/2.jpg","6aba05000fe3322dcfaf970094157675"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/3.jpg","83e76f83eea00578b878f0214b2b1b07"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/index.html","34f82b5177868ee60fb089ecbccdd23c"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/1.jpg","2b660ad81af412675d23c7fd615c5949"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/2.jpg","d8b00f856b75cad60913116be56f6591"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/3.jpg","b2e830760e0364f8fdb3aa413aaee4b2"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/4.jpg","8a81ed16c89ea8850b82c4d471a260a6"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/index.html","c081f26f9c9d50eb1367a848eaf3fbdb"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/1.jpg","4a98b463431646b6d7bef2e99b014ff4"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/2.jpg","63ca97fafbbcd8dfc8418e0ea6e4ee22"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/3.jpg","87b2a2202dd5b60ea7e6546889fdc285"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/4.jpg","3209d1298f5e0b7dbb8746e13359ba30"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/5.jpg","19489e468cabc149af22535dc8286356"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/6.jpg","755f50213e2f3ad8f73f2fc95b5109ae"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/7.jpg","a3d773ea65a561c6378b6392815d9f0d"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/index.html","0a0e6dbbdc4e9f5ed5402d44b9448e97"],["D:/blog/public/2020/01/29/hackthebox-AI——有趣的sql-JDWPgetshell/index.html","4b5355b609e135bf70690a4db48d4d16"],["D:/blog/public/2020/01/30/杭电hgame-week1/1.jpg","f40802729e10c71c5e88118a033c3c8f"],["D:/blog/public/2020/01/30/杭电hgame-week1/10.jpg","51ba4728b34eee045121a78d11190730"],["D:/blog/public/2020/01/30/杭电hgame-week1/11.jpg","52401d7bd01382fc27bba3d89f2fb71f"],["D:/blog/public/2020/01/30/杭电hgame-week1/12.jpg","a6c87f976a1cd2d9a497dc04c8049e30"],["D:/blog/public/2020/01/30/杭电hgame-week1/13.jpg","3fd16ef2a52881ac6f9d4231ec650739"],["D:/blog/public/2020/01/30/杭电hgame-week1/14.jpg","1b541cb0ffe69e7b7726586a5c7e3da0"],["D:/blog/public/2020/01/30/杭电hgame-week1/2.jpg","c5f1933109146a453e197f52874059a8"],["D:/blog/public/2020/01/30/杭电hgame-week1/3.jpg","aa367b5424c7e88ecee0003cecea51a6"],["D:/blog/public/2020/01/30/杭电hgame-week1/4.jpg","7c1f49da38993726f799a5d6a496b118"],["D:/blog/public/2020/01/30/杭电hgame-week1/5.jpg","99ead273b57dba78c1f9b96775ef7f38"],["D:/blog/public/2020/01/30/杭电hgame-week1/6.jpg","7f20125c1a70fd6e871c994b8e773539"],["D:/blog/public/2020/01/30/杭电hgame-week1/7.jpg","3b48cfb9ee060b588037520fcb3a773e"],["D:/blog/public/2020/01/30/杭电hgame-week1/8.jpg","e8d37dd7aec3dc2a8bdb50a9475929ae"],["D:/blog/public/2020/01/30/杭电hgame-week1/9.jpg","5d54c31c95fdac50bc76e2fc94d0ec85"],["D:/blog/public/2020/01/30/杭电hgame-week1/index.html","127d182dd49aef99ee910ea8cc45847d"],["D:/blog/public/2020/01/31/杭电hgame-week2/1.jpg","dea0ab76e5637f1091579b3297269543"],["D:/blog/public/2020/01/31/杭电hgame-week2/10.jpg","d76953c018a4118ebcc4356c230a77d6"],["D:/blog/public/2020/01/31/杭电hgame-week2/11.jpg","383e95c228cabc9f5ebd0af5677dbd3b"],["D:/blog/public/2020/01/31/杭电hgame-week2/12.jpg","2cb1842061331e8589bd8e5b39445e65"],["D:/blog/public/2020/01/31/杭电hgame-week2/13.jpg","66be7253b14531d2f806ce6d2723eaa3"],["D:/blog/public/2020/01/31/杭电hgame-week2/14.jpg","c53a543f195941782eb4ddc35a4dbcd1"],["D:/blog/public/2020/01/31/杭电hgame-week2/15.jpg","48cba2bf395b1352707b5fc3004c0585"],["D:/blog/public/2020/01/31/杭电hgame-week2/16.jpg","28eece3efc2eb96408bb8f7d1e170026"],["D:/blog/public/2020/01/31/杭电hgame-week2/17.jpg","af136b9089267f20fb9fcbcc7d1d9166"],["D:/blog/public/2020/01/31/杭电hgame-week2/2.jpg","a67fad9b44ced31a121f12c1a3a33f74"],["D:/blog/public/2020/01/31/杭电hgame-week2/3.jpg","0cf511a6fa030e5d14598ca63675c64c"],["D:/blog/public/2020/01/31/杭电hgame-week2/4.jpg","aa57c28dd701919cbb0e9dbf579bf974"],["D:/blog/public/2020/01/31/杭电hgame-week2/5.jpg","9244558a704a3dde9e0263bb87402374"],["D:/blog/public/2020/01/31/杭电hgame-week2/6.jpg","dae50cfad44ccc4e0a4a0613a5b0d5cb"],["D:/blog/public/2020/01/31/杭电hgame-week2/7.jpg","29ff78d4045d81b8144869489a52b6e2"],["D:/blog/public/2020/01/31/杭电hgame-week2/8.jpg","4d8f39c1f4ff563a3c95787a20789f0f"],["D:/blog/public/2020/01/31/杭电hgame-week2/9.jpg","3f9467429ded23549903c936bc2bb22d"],["D:/blog/public/2020/01/31/杭电hgame-week2/index.html","42489f02a0ef46184a67bbc57f49cf2d"],["D:/blog/public/2020/02/02/杭电hgame-week3/index.html","736d47c6a3a480f0e48d53b7c3e0d5d7"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/1.jpg","bb9290f2ead9594a223473954c241ce8"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/2.jpg","6ccd22dd9d025e676e7421d9301821b0"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/3.jpg","6b87f3c0af60f26e93325db6824ec8f6"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/4.jpg","b975cbc3e3527489166ad2a92cdb4624"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/index.html","e3c8e082783f65ec44b4618e801143f5"],["D:/blog/public/2020/02/06/hackthebox-ezpz/1.jpg","23bf5a7118ea3f40284a1a517a7f8ab0"],["D:/blog/public/2020/02/06/hackthebox-ezpz/2.jpg","a2ef028bf2dae207de77bafff065b59d"],["D:/blog/public/2020/02/06/hackthebox-ezpz/3.jpg","75f4537ddcfa266586753db9dabdbc7c"],["D:/blog/public/2020/02/06/hackthebox-ezpz/4.jpg","21558e584b8e3737b5a683ca481e2420"],["D:/blog/public/2020/02/06/hackthebox-ezpz/index.html","63202a5572b8a766641f859a46ba6d44"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/1.jpg","74d6c33a3c724fef3a88b6f6d7dd5b68"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/2.jpg","398b00faa3f431d8c4413f9a23050ce3"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/3.jpg","e319593d03ef31b0ff4b02d8ed9cae4a"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/index.html","160e78208fb218e03891cac2666a20d0"],["D:/blog/public/2020/02/18/从杭电hgame-week4学原型链污染/index.html","169fc61b7a6a4ff1b09b532483b14e59"],["D:/blog/public/2020/02/19/CISCN-2019-web部分复现/index.html","b5b222e53339226e3b6a69b256392c4a"],["D:/blog/public/2020/02/25/NCTF-phar-matches-everything填坑/index.html","3f5fc13f829b4a1cc7ad5971a4aaab66"],["D:/blog/public/2020/02/26/单独填坑-公益赛NodeGame/index.html","b38b5e89e263ab80e72267dbe17a1509"],["D:/blog/public/2020/03/02/学习笔记-命令执行及花式bypass写shell/index.html","4e9578d478ca1981cd87693b410061e0"],["D:/blog/public/2020/03/06/Vulhub复现/index.html","5df0c4e64243eec10848336a3440068b"],["D:/blog/public/2020/03/09/To-Dolist/index.html","d13c6ab942f50fd19b5d799df441feed"],["D:/blog/public/2020/03/10/XCTF高校战“疫”网络安全分享赛/index.html","0b28af12363b5e1ce0775885a58b8023"],["D:/blog/public/2020/03/18/使用Soap的ssrf-crlf攻击/index.html","263baefc4bb252567cf581c900e26a9a"],["D:/blog/public/2020/03/29/WUSTCTF&MRCTF部分web题解/index.html","6b0f1930c0cadd8a0885c3625340da84"],["D:/blog/public/2020/03/30/VolgaCTF2020Qualifier复现/index.html","54963d73e0772f4728b7f89f45ea7b98"],["D:/blog/public/2020/04/01/hackthebox-Sniper-初尝windows靶机/index.html","ec5c8b64ab958b693dae835e976a36cb"],["D:/blog/public/2020/04/13/ByteBanditsCTF2020两道WEB复现/index.html","02c9ed42e7329250a48f6087d8bc1dd8"],["D:/blog/public/2020/04/20/Nodejs的一些技巧/index.html","6b2b47cd49c763d72ad800fe982807be"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/1.png","4fe77fbf7f8c7b1321a7264e1adbc1d4"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/10.png","7ca2f6e0a2e1d8c4b0f75c9a163db6c9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/11.png","dd30af1e04c6291a1254f94c18299c54"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/12.png","b86912dd1c049d3f275df3ebbdf900f8"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/13.png","645982851c50f071f3910020d5738d60"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/14.png","09617c9808b315fcebdf434d9341bdca"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/15.png","da0117dcb7ccec787277229b9235e821"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/16.png","611ca5de3656b66b8446b529ece39585"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/17.png","bb35beac017d2177d94de9ffcfc6bb2c"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/18.png","cf98f093cab95ab27bc89079ffcb6ba2"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/2.png","932f259dd31e70d840fe18b01fba1d49"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/3.png","fe4f779ed543f748ae63f7cb12d42285"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/4.png","d1289931388fbb1b1b6b0f4b264c19e6"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/5.png","b6b4beb5719c18b5821baa99caf09733"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/6.png","633b9a87d2f998cbeb3ea9ffd08f2140"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/7.png","b6211fc65a2d1774c111179885e7ca57"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/8.png","63e16915e39b2655ee3db50ad44dada9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/9.png","23fd12e89db3886a0d7af33e51f2891f"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/index.html","0ed0932fdc8d5644a5e22a7122aa717a"],["D:/blog/public/2020/05/04/De1CTF2020writeup/index.html","0871724d81aeb719b53a14e9d799540f"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/1.png","948eddf999fd3255f0f4afc0cf45c686"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/2.png","daf24f9256e7eef82d20652c3d3b44b8"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/3.png","1e186796519d50b298bc204ddf7cf1c5"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/4.png","a2e5c352c529e9e7e24352e1ab62d084"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/index.html","9029cac910798f3c18e806085ec0e335"],["D:/blog/public/2020/05/24/GKCTF2020writeup/index.html","6dc75f3aeb9ff5d86f6f29e082780401"],["D:/blog/public/2020/05/30/初探Redis-wdb玄武组ssrfme&pwnhub公开赛/index.html","e481fc0098c9b730e2fdc1b4a5333f39"],["D:/blog/public/2020/06/23/hackthebox-Quick-一次艰难的渗透/index.html","fc1dfe4d7720460770c2e4a4d54a4a66"],["D:/blog/public/2020/06/24/Make-jwt-great-again/index.html","b0305fd300de778540378c8c695d6339"],["D:/blog/public/2020/07/01/hackthebox-Oouch/index.html","a8112505b17698c811ce38cceacac912"],["D:/blog/public/2020/07/05/SCTF2020-writeup/index.html","3f6c3d47ce0d8b3b562812297682a816"],["D:/blog/public/2020/07/09/学习笔记-Java相关/index.html","bed94c91fc41e867a8e1645ea66e67b7"],["D:/blog/public/2020/07/16/hackthebox-SneakyMailer/index.html","fe0ea63e6c50841f6b1d4bd87f43805f"],["D:/blog/public/2020/07/22/hackthebox-Intense/index.html","373a0b289c9ac0f3949713ca5e57b385"],["D:/blog/public/2020/07/22/RingZer0-CTF-JavascriptChallenge/index.html","432e5110c0184a9e3be4db13213402ed"],["D:/blog/public/2020/07/24/hackthebox-Dyplesher/index.html","9f5a12801d7a34c78898e29de30c5c89"],["D:/blog/public/2020/07/26/CyBRICS-CTF-2020/index.html","a99467cc5485cdfe766bda26be6948e5"],["D:/blog/public/2020/08/05/Thinkphp-vuln/index.html","abec1234d80e2b8d68e637e1cc941c36"],["D:/blog/public/2020/08/10/hackthebox-Fatty-JavaExploits/index.html","066e62357a189dc578bddb7664b7a535"],["D:/blog/public/2020/08/15/hackthebox-Unbalanced/index.html","0cfc831a8d426c9b169d814cfd6446e6"],["D:/blog/public/2020/08/17/Laravel-popchain/index.html","178fb13e12cb245f6ddbdb0f8f7c852c"],["D:/blog/public/2020/08/27/钓鱼城-zblog/index.html","3187d62cdc2b807e6e319109d7dfadf3"],["D:/blog/public/2020/09/25/DarkCTF-WEB/index.html","dd70f3cfd2f5e23ac3cc4e1d60c26b34"],["D:/blog/public/2020/10/05/bootcamp-2020&mctf-2020/index.html","132dc89d203de8a035e4cdd4c84e1853"],["D:/blog/public/2020/10/09/学习笔记-Java深入/index.html","4e3e9ef64c1f076e082f26cdf9d3b268"],["D:/blog/public/2020/10/19/N1CTF2020/index.html","d50db88ad2bb83feb597e4ec2ae6d7e7"],["D:/blog/public/2020/10/26/ByteCTF2020-easyscrapy/index.html","566406e9f1d3a2da3af732af0e3d7764"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/0.png","8b14359dfbce0d56fbd880ee4377e33d"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/index.html","e68ca88c0c4a28183fb2416f1057fc03"],["D:/blog/public/2020/12/30/Farewell-to-2020/index.html","780a17ad969fd19716d95c6f7e6ca89e"],["D:/blog/public/2021/02/07/golang的一些安全问题/index.html","c642715660194594746728c61743ca2a"],["D:/blog/public/2021/03/06/D^3CTF-8-bit-pub/index.html","7df0b55429ca620d12ebf974f9748a30"],["D:/blog/public/2021/04/04/angstromCTF-2021/index.html","3d6dc140c359929bd9307651806bc2a9"],["D:/blog/public/2021/05/30/春秋杯-WEB/index.html","b50c10edb3e853c4277a1e2aa55d21de"],["D:/blog/public/2021/06/06/使用Node-js实现动态爬虫/index.html","241532a2402243db5ffc735bf0d9b1ae"],["D:/blog/public/2021/07/07/0ctf-tctf-soracon/index.html","37d6d7bd534e4a8ba7148b697e673696"],["D:/blog/public/404.html","2cb9aa39593f74b80797e641c95883d4"],["D:/blog/public/about/index.html","6cec8222aa5ba386cce428db1183b35f"],["D:/blog/public/archives/2020/01/index.html","d1a55af59a9eb3b452ce7cc1e6fd178e"],["D:/blog/public/archives/2020/02/index.html","230c8968129eb5a9fa399bdb9a7696ef"],["D:/blog/public/archives/2020/03/index.html","990af9effaeddc2b1cb618f6b4213ef4"],["D:/blog/public/archives/2020/04/index.html","3bf90206c084513d698fccbfbbe24ef0"],["D:/blog/public/archives/2020/05/index.html","b49b11587c37c5ad2940191d589c6b68"],["D:/blog/public/archives/2020/06/index.html","9e734e1a095196445175f089d2e6e59a"],["D:/blog/public/archives/2020/07/index.html","4d28d272c6885107d95205f01034702c"],["D:/blog/public/archives/2020/08/index.html","630eea85754a2b1a89f2ca19bd6dca28"],["D:/blog/public/archives/2020/09/index.html","9c08dbe9163382e697ea357d9a16ff38"],["D:/blog/public/archives/2020/10/index.html","c2d8ed9882ba85ad3b473d91a9f1f219"],["D:/blog/public/archives/2020/11/index.html","9f914f2e9b1ab1841f4d7c14b8408283"],["D:/blog/public/archives/2020/12/index.html","ff96f6cad46b5d2e17152af14942ecb1"],["D:/blog/public/archives/2020/index.html","9254bf68e6bc769533099ecdea64b416"],["D:/blog/public/archives/2020/page/2/index.html","46d466936f39ef355266e99da5b5e808"],["D:/blog/public/archives/2020/page/3/index.html","5dfd312cb68c63204eede23ecc923e92"],["D:/blog/public/archives/2020/page/4/index.html","da5e8bb607d28f43023d533a41f5b9d8"],["D:/blog/public/archives/2020/page/5/index.html","afd3307c5be58ebaf874fc6866f9e4bf"],["D:/blog/public/archives/2020/page/6/index.html","99de7d9003541668ad2715a77dbcf805"],["D:/blog/public/archives/2021/02/index.html","ef78cdc8e85020495b60264bd7331b23"],["D:/blog/public/archives/2021/03/index.html","092a170621c2f9a4ae55e2ade65584d8"],["D:/blog/public/archives/2021/04/index.html","1b55702a4930cf5138d6c98733dbccfa"],["D:/blog/public/archives/2021/05/index.html","e7ee0efe1ee01e617441200cbcf9f648"],["D:/blog/public/archives/2021/06/index.html","8b3c7b775e94cc7166780be3843fd703"],["D:/blog/public/archives/2021/07/index.html","6e41d3552de9782c1b5279953b009627"],["D:/blog/public/archives/2021/index.html","a4b559f7b5d0bdd4e560ff134a0e2b24"],["D:/blog/public/archives/index.html","fdeed039946ab56f1db933a2913f5e1f"],["D:/blog/public/archives/page/2/index.html","fdeed039946ab56f1db933a2913f5e1f"],["D:/blog/public/archives/page/3/index.html","fdeed039946ab56f1db933a2913f5e1f"],["D:/blog/public/archives/page/4/index.html","fdeed039946ab56f1db933a2913f5e1f"],["D:/blog/public/archives/page/5/index.html","fdeed039946ab56f1db933a2913f5e1f"],["D:/blog/public/archives/page/6/index.html","fdeed039946ab56f1db933a2913f5e1f"],["D:/blog/public/assests/alipay.jpg","821163f8d5c9d1accd1b7cbeefaba556"],["D:/blog/public/assests/consola.ttf","fb505e28b6d130f08fe8f070e0d6b1b8"],["D:/blog/public/assests/icon.jpg","931d322663078eb74184292012d7ebd7"],["D:/blog/public/assests/wechat.png","57e6a192c26104ede51ff222f6e6080c"],["D:/blog/public/categories/index.html","99082bf001059937bd1a43c8eb8ba24e"],["D:/blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/blog/public/css/first.css","ef36b890903233b2d482d1c1a6192fd9"],["D:/blog/public/css/style.css","bc1306da088b03c9586aafb7ca6dd689"],["D:/blog/public/friends/index.html","47b3bd655eac9d48cf5cd9666b403bb4"],["D:/blog/public/index.html","2941ffc619b865811c0f699680c59854"],["D:/blog/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["D:/blog/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["D:/blog/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["D:/blog/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["D:/blog/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["D:/blog/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["D:/blog/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["D:/blog/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["D:/blog/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["D:/blog/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/blog/public/mylist/index.html","2be19e3a0d191eb4aa0bf9349ce55376"],["D:/blog/public/page/2/index.html","0b44f534bd90464b5d94c2b8ca535b88"],["D:/blog/public/page/3/index.html","50d73954a22cb7e4cb84db026c67116e"],["D:/blog/public/page/4/index.html","b206c9f95a054cab5c1ef6b4e7c4d456"],["D:/blog/public/page/5/index.html","b59f9ac7a1d729b8878a147a6000a452"],["D:/blog/public/page/6/index.html","d7721bdede11bc503f456eba781ac8f4"],["D:/blog/public/tags/CTF/index.html","e64532bb9d65012823776f423c2317ca"],["D:/blog/public/tags/CTF/page/2/index.html","7d8dc7f782f583d7f91c0777dfc04c0c"],["D:/blog/public/tags/CTF/page/3/index.html","a94c6a495c5ad38317610a49a9c89208"],["D:/blog/public/tags/CTF/page/4/index.html","e8aa1de5455e14b2c7d6921cd0b98bfd"],["D:/blog/public/tags/Go/index.html","b5a58e94e4c3524db76c79ff45311631"],["D:/blog/public/tags/Java/index.html","9d0a4a9fa8bb9ccca9157226c48ea270"],["D:/blog/public/tags/Linux/index.html","bcf83108173265b62f3dad5a1471a610"],["D:/blog/public/tags/Node-js/index.html","00b816b0820e107c141b76649c293306"],["D:/blog/public/tags/PHP/index.html","77129410fd5601ea3edb62b0d362a9f0"],["D:/blog/public/tags/WEB/index.html","bc3d8ccbca4df7f994a1f2525b2bc374"],["D:/blog/public/tags/WEB/page/2/index.html","9fd30bab333d5d6e9e23f8f555568719"],["D:/blog/public/tags/WEB/page/3/index.html","10b58386c4e9fcefeeee244269ed541d"],["D:/blog/public/tags/WEB/page/4/index.html","2756cd8953d3ace4128b330b784db9bf"],["D:/blog/public/tags/hackthebox/index.html","7a6300af096f03b73f51781ae9af689e"],["D:/blog/public/tags/hackthebox/page/2/index.html","5c3b5ad47ec1624973d0f3ecfcda93f1"],["D:/blog/public/tags/index.html","1bf3fd22806395edbd563ba498c1f6b5"],["D:/blog/public/tags/javascript/index.html","024e86ec82b50c9186636b06192018a8"],["D:/blog/public/tags/pentest/index.html","e4446cd24994e8c7d9efa3402bea52f8"],["D:/blog/public/tags/redis/index.html","f5e7affe840f3ca93a1a0d4c5d1883f7"],["D:/blog/public/tags/windows/index.html","0cdf1e5f993c578ba9e638415ebaf983"],["D:/blog/public/tags/wp/index.html","2237c75b4131b9855fa101a5e518e06e"],["D:/blog/public/tags/wp/page/2/index.html","047df73e650bb1e21987152029cc24ad"]];
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







