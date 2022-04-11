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

var precacheConfig = [["D:/blog/public/2020/01/12/hackthebox-Wall/1.jpg","49e0684a68148adc091ead702d671120"],["D:/blog/public/2020/01/12/hackthebox-Wall/index.html","abf5a503092b50abbab9f5a19d6ec893"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/1.jpg","07efdb9a36ca39ab1b3adee06c174c08"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/2.jpg","6aba05000fe3322dcfaf970094157675"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/3.jpg","83e76f83eea00578b878f0214b2b1b07"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/index.html","55c3cc9fd4b902f4f5b9e1c47a81c4ed"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/1.jpg","2b660ad81af412675d23c7fd615c5949"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/2.jpg","d8b00f856b75cad60913116be56f6591"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/3.jpg","b2e830760e0364f8fdb3aa413aaee4b2"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/4.jpg","8a81ed16c89ea8850b82c4d471a260a6"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/index.html","08d0ac765b58e04845d9a1afb7de3761"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/1.jpg","4a98b463431646b6d7bef2e99b014ff4"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/2.jpg","63ca97fafbbcd8dfc8418e0ea6e4ee22"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/3.jpg","87b2a2202dd5b60ea7e6546889fdc285"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/4.jpg","3209d1298f5e0b7dbb8746e13359ba30"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/5.jpg","19489e468cabc149af22535dc8286356"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/6.jpg","755f50213e2f3ad8f73f2fc95b5109ae"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/7.jpg","a3d773ea65a561c6378b6392815d9f0d"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/index.html","69630da515950fa7d01c84bba8ed6037"],["D:/blog/public/2020/01/29/hackthebox-AI——有趣的sql-JDWPgetshell/index.html","ac43bcbfa222794e0a6da3f8fc2477c8"],["D:/blog/public/2020/01/30/杭电hgame-week1/1.jpg","f40802729e10c71c5e88118a033c3c8f"],["D:/blog/public/2020/01/30/杭电hgame-week1/10.jpg","51ba4728b34eee045121a78d11190730"],["D:/blog/public/2020/01/30/杭电hgame-week1/11.jpg","52401d7bd01382fc27bba3d89f2fb71f"],["D:/blog/public/2020/01/30/杭电hgame-week1/12.jpg","a6c87f976a1cd2d9a497dc04c8049e30"],["D:/blog/public/2020/01/30/杭电hgame-week1/13.jpg","3fd16ef2a52881ac6f9d4231ec650739"],["D:/blog/public/2020/01/30/杭电hgame-week1/14.jpg","1b541cb0ffe69e7b7726586a5c7e3da0"],["D:/blog/public/2020/01/30/杭电hgame-week1/2.jpg","c5f1933109146a453e197f52874059a8"],["D:/blog/public/2020/01/30/杭电hgame-week1/3.jpg","aa367b5424c7e88ecee0003cecea51a6"],["D:/blog/public/2020/01/30/杭电hgame-week1/4.jpg","7c1f49da38993726f799a5d6a496b118"],["D:/blog/public/2020/01/30/杭电hgame-week1/5.jpg","99ead273b57dba78c1f9b96775ef7f38"],["D:/blog/public/2020/01/30/杭电hgame-week1/6.jpg","7f20125c1a70fd6e871c994b8e773539"],["D:/blog/public/2020/01/30/杭电hgame-week1/7.jpg","3b48cfb9ee060b588037520fcb3a773e"],["D:/blog/public/2020/01/30/杭电hgame-week1/8.jpg","e8d37dd7aec3dc2a8bdb50a9475929ae"],["D:/blog/public/2020/01/30/杭电hgame-week1/9.jpg","5d54c31c95fdac50bc76e2fc94d0ec85"],["D:/blog/public/2020/01/30/杭电hgame-week1/index.html","c44abaab00fc1fcdc04769c71c5e3c1e"],["D:/blog/public/2020/01/31/杭电hgame-week2/1.jpg","dea0ab76e5637f1091579b3297269543"],["D:/blog/public/2020/01/31/杭电hgame-week2/10.jpg","d76953c018a4118ebcc4356c230a77d6"],["D:/blog/public/2020/01/31/杭电hgame-week2/11.jpg","383e95c228cabc9f5ebd0af5677dbd3b"],["D:/blog/public/2020/01/31/杭电hgame-week2/12.jpg","2cb1842061331e8589bd8e5b39445e65"],["D:/blog/public/2020/01/31/杭电hgame-week2/13.jpg","66be7253b14531d2f806ce6d2723eaa3"],["D:/blog/public/2020/01/31/杭电hgame-week2/14.jpg","c53a543f195941782eb4ddc35a4dbcd1"],["D:/blog/public/2020/01/31/杭电hgame-week2/15.jpg","48cba2bf395b1352707b5fc3004c0585"],["D:/blog/public/2020/01/31/杭电hgame-week2/16.jpg","28eece3efc2eb96408bb8f7d1e170026"],["D:/blog/public/2020/01/31/杭电hgame-week2/17.jpg","af136b9089267f20fb9fcbcc7d1d9166"],["D:/blog/public/2020/01/31/杭电hgame-week2/2.jpg","a67fad9b44ced31a121f12c1a3a33f74"],["D:/blog/public/2020/01/31/杭电hgame-week2/3.jpg","0cf511a6fa030e5d14598ca63675c64c"],["D:/blog/public/2020/01/31/杭电hgame-week2/4.jpg","aa57c28dd701919cbb0e9dbf579bf974"],["D:/blog/public/2020/01/31/杭电hgame-week2/5.jpg","9244558a704a3dde9e0263bb87402374"],["D:/blog/public/2020/01/31/杭电hgame-week2/6.jpg","dae50cfad44ccc4e0a4a0613a5b0d5cb"],["D:/blog/public/2020/01/31/杭电hgame-week2/7.jpg","29ff78d4045d81b8144869489a52b6e2"],["D:/blog/public/2020/01/31/杭电hgame-week2/8.jpg","4d8f39c1f4ff563a3c95787a20789f0f"],["D:/blog/public/2020/01/31/杭电hgame-week2/9.jpg","3f9467429ded23549903c936bc2bb22d"],["D:/blog/public/2020/01/31/杭电hgame-week2/index.html","adaf40d0fd8f374e25b864942b93c899"],["D:/blog/public/2020/02/02/杭电hgame-week3/index.html","84ef0c437fec1a3bf9a6d5095589fca2"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/1.jpg","bb9290f2ead9594a223473954c241ce8"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/2.jpg","6ccd22dd9d025e676e7421d9301821b0"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/3.jpg","6b87f3c0af60f26e93325db6824ec8f6"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/4.jpg","b975cbc3e3527489166ad2a92cdb4624"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/index.html","3ea02660adf4ca1d88a17d2f01d61e87"],["D:/blog/public/2020/02/06/hackthebox-ezpz/1.jpg","23bf5a7118ea3f40284a1a517a7f8ab0"],["D:/blog/public/2020/02/06/hackthebox-ezpz/2.jpg","a2ef028bf2dae207de77bafff065b59d"],["D:/blog/public/2020/02/06/hackthebox-ezpz/3.jpg","75f4537ddcfa266586753db9dabdbc7c"],["D:/blog/public/2020/02/06/hackthebox-ezpz/4.jpg","21558e584b8e3737b5a683ca481e2420"],["D:/blog/public/2020/02/06/hackthebox-ezpz/index.html","29031b2ee2694457a40c096c60812387"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/1.jpg","74d6c33a3c724fef3a88b6f6d7dd5b68"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/2.jpg","398b00faa3f431d8c4413f9a23050ce3"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/3.jpg","e319593d03ef31b0ff4b02d8ed9cae4a"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/index.html","075783d3f723c1684c6344aafa6e8fcd"],["D:/blog/public/2020/02/18/从杭电hgame-week4学原型链污染/index.html","c4c841b7ee62c39eac4972728b2ce46e"],["D:/blog/public/2020/02/19/CISCN-2019-web部分复现/index.html","df28eba5a0a3dddf13128155f9322b6d"],["D:/blog/public/2020/02/25/NCTF-phar-matches-everything填坑/index.html","e173be3ac216d44ad53acd304f74e261"],["D:/blog/public/2020/02/26/单独填坑-公益赛NodeGame/index.html","aab89318924d7b4d90a9f1afe41ee5a0"],["D:/blog/public/2020/03/02/学习笔记-命令执行及花式bypass写shell/index.html","6e285e7e055a47ad4b781f6c2b03a66f"],["D:/blog/public/2020/03/06/Vulhub复现/index.html","bc0618885c7536393c0bb5e485845bc6"],["D:/blog/public/2020/03/09/To-Dolist/index.html","ca9cdd331c3cdf260054a8a10f6d6789"],["D:/blog/public/2020/03/10/XCTF高校战“疫”网络安全分享赛/index.html","8198f0fb983b1e27c5b542b662741990"],["D:/blog/public/2020/03/18/使用Soap的ssrf-crlf攻击/index.html","7300eac635d463ecd2110d851cec55de"],["D:/blog/public/2020/03/29/WUSTCTF&MRCTF部分web题解/index.html","2f89d873ab5977f8fd6367ed1b9a0e69"],["D:/blog/public/2020/03/30/VolgaCTF2020Qualifier复现/index.html","5ab75e5a34020f3d6a845fd654720613"],["D:/blog/public/2020/04/01/hackthebox-Sniper-初尝windows靶机/index.html","208f1efe4a73d0e55bf53cf1aa02f825"],["D:/blog/public/2020/04/13/ByteBanditsCTF2020两道WEB复现/index.html","8f1a6f5fd51a5b0f160ea4bf99b1cad6"],["D:/blog/public/2020/04/20/Nodejs的一些技巧/index.html","d464a74d1ff75c3a56604fffc5043cec"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/1.png","4fe77fbf7f8c7b1321a7264e1adbc1d4"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/10.png","7ca2f6e0a2e1d8c4b0f75c9a163db6c9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/11.png","dd30af1e04c6291a1254f94c18299c54"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/12.png","b86912dd1c049d3f275df3ebbdf900f8"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/13.png","645982851c50f071f3910020d5738d60"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/14.png","09617c9808b315fcebdf434d9341bdca"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/15.png","da0117dcb7ccec787277229b9235e821"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/16.png","611ca5de3656b66b8446b529ece39585"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/17.png","bb35beac017d2177d94de9ffcfc6bb2c"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/18.png","cf98f093cab95ab27bc89079ffcb6ba2"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/2.png","932f259dd31e70d840fe18b01fba1d49"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/3.png","fe4f779ed543f748ae63f7cb12d42285"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/4.png","d1289931388fbb1b1b6b0f4b264c19e6"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/5.png","b6b4beb5719c18b5821baa99caf09733"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/6.png","633b9a87d2f998cbeb3ea9ffd08f2140"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/7.png","b6211fc65a2d1774c111179885e7ca57"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/8.png","63e16915e39b2655ee3db50ad44dada9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/9.png","23fd12e89db3886a0d7af33e51f2891f"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/index.html","a23f9e7f6eb26742d73387ae2b7571af"],["D:/blog/public/2020/05/04/De1CTF2020writeup/index.html","61d83cac9e3bc6d90bdcb1ec1b61bdb8"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/1.png","948eddf999fd3255f0f4afc0cf45c686"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/2.png","daf24f9256e7eef82d20652c3d3b44b8"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/3.png","1e186796519d50b298bc204ddf7cf1c5"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/4.png","a2e5c352c529e9e7e24352e1ab62d084"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/index.html","4c95937f495beb97da36355a6e01cf5d"],["D:/blog/public/2020/05/24/GKCTF2020writeup/index.html","a50fbc485d96e4d4fe93d06b05b1d221"],["D:/blog/public/2020/05/30/初探Redis-wdb玄武组ssrfme&pwnhub公开赛/index.html","5fef7001d989c1f6120b33e61faf5f18"],["D:/blog/public/2020/06/23/hackthebox-Quick-一次艰难的渗透/index.html","1b97c1949ef5d6567023939080791b8d"],["D:/blog/public/2020/06/24/Make-jwt-great-again/index.html","87ca6f74fa13a8656f3b3d9af6dd174e"],["D:/blog/public/2020/07/01/hackthebox-Oouch/index.html","7d05ffdcd3e0542ce55a6c8ff0c20c5a"],["D:/blog/public/2020/07/05/SCTF2020-writeup/index.html","43e4f4da36bad7ff7c0dfba77ae1ba7c"],["D:/blog/public/2020/07/09/学习笔记-Java相关/index.html","0b7e832badb61d1b676ea43fe7b4f16e"],["D:/blog/public/2020/07/16/hackthebox-SneakyMailer/index.html","44145cff0ab2c3b8e03e5b9ea7b30ca2"],["D:/blog/public/2020/07/22/hackthebox-Intense/index.html","3f29658c3dc11834b46f7b3b82ed764a"],["D:/blog/public/2020/07/22/RingZer0-CTF-JavascriptChallenge/index.html","bda06aec9768a6e904a6e58dc851c83b"],["D:/blog/public/2020/07/24/hackthebox-Dyplesher/index.html","67e18bc8fc8ab0cd3a024fdcd2993126"],["D:/blog/public/2020/07/26/CyBRICS-CTF-2020/index.html","48c612d560fce2c14d4cd14eeefd622f"],["D:/blog/public/2020/08/05/Thinkphp-vuln/index.html","e9e4b97da4b50eb90fc96b59dba6daaf"],["D:/blog/public/2020/08/10/hackthebox-Fatty-JavaExploits/index.html","310837bca17fc58b94fe2181f33909d3"],["D:/blog/public/2020/08/15/hackthebox-Unbalanced/index.html","46ba2750e1a9b3d4a94e03e073129957"],["D:/blog/public/2020/08/17/Laravel-popchain/index.html","7234ee1fbb9370bdfc0122b5bbb109f1"],["D:/blog/public/2020/08/27/钓鱼城-zblog/index.html","74bef6bb8b5a060e603f8a9674fb4305"],["D:/blog/public/2020/09/25/DarkCTF-WEB/index.html","f7058c0414f6c1d2943f9adbc56e0c16"],["D:/blog/public/2020/10/05/bootcamp-2020&mctf-2020/index.html","25ea1734a51d34bbb99e6b5c5a523620"],["D:/blog/public/2020/10/09/学习笔记-Java深入/index.html","110f3d4a63cf6a8e2e1e1252cae171bf"],["D:/blog/public/2020/10/19/N1CTF2020/index.html","ac0dd90afba3c91dc2a08c42c1568deb"],["D:/blog/public/2020/10/26/ByteCTF2020-easyscrapy/index.html","056b83d8ccad6a5fb44a2bca4896f408"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/0.png","8b14359dfbce0d56fbd880ee4377e33d"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/index.html","c71ffdf19a8880e08bfa26cb8b122292"],["D:/blog/public/2020/12/30/Farewell-to-2020/index.html","a097b0985a09ba12b70c8fd9de0a6b82"],["D:/blog/public/2021/02/07/golang的一些安全问题/index.html","f47b45353cfc44322f39a1220d4dd4b8"],["D:/blog/public/2021/03/06/D^3CTF-8-bit-pub/index.html","3e42bb3670ba734c85a66b6047688645"],["D:/blog/public/2021/04/04/angstromCTF-2021/index.html","6883a2e752391170dfaf854795aeafdb"],["D:/blog/public/2021/05/30/春秋杯-WEB/index.html","d27bc95ab1c7aa83f37144224a6fa96e"],["D:/blog/public/2021/06/06/使用Node-js实现动态爬虫/index.html","8ca92c615076c18699784f1fa2455f95"],["D:/blog/public/2021/07/07/0ctf-tctf-soracon/index.html","793b881c2d807b9b6b2cb5687a108d41"],["D:/blog/public/2021/10/06/夏令营面试经历/index.html","bea635d99e98453d578fc77feee1d874"],["D:/blog/public/2022/01/10/低版本JDK下gopher的困境/index.html","5d52846ab1daeb8694e2ca9f2909ac3e"],["D:/blog/public/2022/04/05/Netty-内存马的一种思路/index.html","458f248c89ba8a540865310e2bbd4902"],["D:/blog/public/404.html","b231fab28f8b50bf9a4030f955542d17"],["D:/blog/public/about/index.html","df6d8843e4b6a2883d5eb53f465d1440"],["D:/blog/public/archives/2020/01/index.html","f7b34e7bd29aba37fd0007efab7b02e6"],["D:/blog/public/archives/2020/02/index.html","784abfeb9dc939be14af767e05efa0f1"],["D:/blog/public/archives/2020/03/index.html","0e8ec2a1031921833c4ff0315e50263c"],["D:/blog/public/archives/2020/04/index.html","1cea6cda6bf20bc98a564ba861382d0f"],["D:/blog/public/archives/2020/05/index.html","28fc4224d9496094032f41822ef23d8c"],["D:/blog/public/archives/2020/06/index.html","a798e52a5195848260339fa817fb592b"],["D:/blog/public/archives/2020/07/index.html","f916bf851c8b6737d13601ec76e77001"],["D:/blog/public/archives/2020/08/index.html","10233d41ba201246aaadd62222e3bb04"],["D:/blog/public/archives/2020/09/index.html","4534c263c9b97a7ea7af112ab31a0ec7"],["D:/blog/public/archives/2020/10/index.html","fc46f5165e98b5d7f79587e4658dbdf2"],["D:/blog/public/archives/2020/11/index.html","60bc347ee799a75afe516de37eb1aa0b"],["D:/blog/public/archives/2020/12/index.html","c584d4463999f7bd613593839c49308a"],["D:/blog/public/archives/2020/index.html","586611377eb03224a1f22ffc659a845c"],["D:/blog/public/archives/2020/page/2/index.html","715f2ec2e97202d439727f80aff9b741"],["D:/blog/public/archives/2020/page/3/index.html","16a0fc58cc9ba89f4d38d0b3215e808b"],["D:/blog/public/archives/2020/page/4/index.html","14e7846085e0e397df2511a3c9069bb3"],["D:/blog/public/archives/2020/page/5/index.html","9f458841c8b16707ecaee934220037e4"],["D:/blog/public/archives/2020/page/6/index.html","af150e9a6edf35ce02be81140a254704"],["D:/blog/public/archives/2021/02/index.html","78166b1fb28dd8943c6f5945e2f8edbf"],["D:/blog/public/archives/2021/03/index.html","77ed4c5c67d5f48519edfacc9cbf994e"],["D:/blog/public/archives/2021/04/index.html","c33206cf988905340a1427cf8db2e960"],["D:/blog/public/archives/2021/05/index.html","8b6a9542b401dcea760146c19fdbea74"],["D:/blog/public/archives/2021/06/index.html","df07a86c6f8ddb38bbb52bae884daf75"],["D:/blog/public/archives/2021/07/index.html","8e99e9e4af120713c264a15e7e7efcad"],["D:/blog/public/archives/2021/10/index.html","872eebd19b328adac888684e6352637d"],["D:/blog/public/archives/2021/index.html","9f8fb1e5926c187053fbdaa09173d600"],["D:/blog/public/archives/2022/01/index.html","31ea91190bd1550ac437a227877d2844"],["D:/blog/public/archives/2022/04/index.html","b7bf4df7af3e67b34de6acd2e605c124"],["D:/blog/public/archives/2022/index.html","5ef761dffac62816714340516d9b8761"],["D:/blog/public/archives/index.html","14b9e35dac5de671500e0128a2706509"],["D:/blog/public/archives/page/2/index.html","14b9e35dac5de671500e0128a2706509"],["D:/blog/public/archives/page/3/index.html","14b9e35dac5de671500e0128a2706509"],["D:/blog/public/archives/page/4/index.html","14b9e35dac5de671500e0128a2706509"],["D:/blog/public/archives/page/5/index.html","14b9e35dac5de671500e0128a2706509"],["D:/blog/public/archives/page/6/index.html","14b9e35dac5de671500e0128a2706509"],["D:/blog/public/archives/page/7/index.html","14b9e35dac5de671500e0128a2706509"],["D:/blog/public/assests/alipay.jpg","821163f8d5c9d1accd1b7cbeefaba556"],["D:/blog/public/assests/consola.ttf","fb505e28b6d130f08fe8f070e0d6b1b8"],["D:/blog/public/assests/icon.jpg","931d322663078eb74184292012d7ebd7"],["D:/blog/public/assests/wechat.png","57e6a192c26104ede51ff222f6e6080c"],["D:/blog/public/categories/index.html","158ce6303f66d9a33a57b8f5f6604030"],["D:/blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/blog/public/css/first.css","4d46e94427dd863dc8e7e406dd9ba829"],["D:/blog/public/css/style.css","dc60b166cbc7b558e45d8555f52e2c58"],["D:/blog/public/friends/index.html","1dccd6141cfd463bbd2c087e04ab8c99"],["D:/blog/public/index.html","f9d3ed884705b93f4bd492ba7341f06e"],["D:/blog/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["D:/blog/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["D:/blog/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["D:/blog/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["D:/blog/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["D:/blog/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["D:/blog/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["D:/blog/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["D:/blog/public/js/valine.js","9fe07b85c9890960251eaeacf3e38ee1"],["D:/blog/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/blog/public/mylist/index.html","7c54429642c9ede06ad2edae29060d87"],["D:/blog/public/page/2/index.html","4585bfba9b9ff43f2335e38f52fc7ab0"],["D:/blog/public/page/3/index.html","f467d01d1869369b175b98ec093a77b0"],["D:/blog/public/page/4/index.html","15ea64abca3cf0e0639311c60a7d80e1"],["D:/blog/public/page/5/index.html","1f5cb4f116ead25c5c265a325ad5abd9"],["D:/blog/public/page/6/index.html","4274e14a8948a85a9b2dfd6c12e9939e"],["D:/blog/public/page/7/index.html","ff7dd670fbe5978f5247a8203e84742f"],["D:/blog/public/tags/CTF/index.html","3543a87d86b21b77b342b417e9e999ad"],["D:/blog/public/tags/CTF/page/2/index.html","45ada1499b25c0ccd430240ebc980449"],["D:/blog/public/tags/CTF/page/3/index.html","31fd2f827c325423aeb67acb5e9e2779"],["D:/blog/public/tags/CTF/page/4/index.html","82d69760b259b7098b87dd4ba9b074c4"],["D:/blog/public/tags/Go/index.html","c603a9a929cb223062add90795ae84b8"],["D:/blog/public/tags/Java/index.html","3f1db6aadb50d61884d51fa1fdb9d446"],["D:/blog/public/tags/Linux/index.html","bafb958c7812d897cc7f9ce9dee4b681"],["D:/blog/public/tags/Node-js/index.html","9b36c64be8633927038fd3fe4a802732"],["D:/blog/public/tags/PHP/index.html","6e82d90e89860eafc8781b1ecc2adf29"],["D:/blog/public/tags/WEB/index.html","c9e5ecea1b1fb9ef36a2ebeb35054c64"],["D:/blog/public/tags/WEB/page/2/index.html","d663b07bdf64ba36bca822b4579e25d1"],["D:/blog/public/tags/WEB/page/3/index.html","0b7ff1b4a3c417a63144cfd0832d4d15"],["D:/blog/public/tags/WEB/page/4/index.html","c48a505e5defe190a9cde426804e8f03"],["D:/blog/public/tags/hackthebox/index.html","97b43a3b0fa11cf8e7b3ef04cb5191a6"],["D:/blog/public/tags/hackthebox/page/2/index.html","c953eb2d615053078b2798c9b9344bc6"],["D:/blog/public/tags/index.html","b8df0312ec1faf3ac67255887a3b1d50"],["D:/blog/public/tags/javascript/index.html","df385fe216937ff5a76dfcf146ff6ecc"],["D:/blog/public/tags/pentest/index.html","d11f13a13ce05fbb8ca56e0acf66861a"],["D:/blog/public/tags/redis/index.html","12ebb5cbaecff8335c4a1efde2a02507"],["D:/blog/public/tags/windows/index.html","a1525567241542953590c9da16e7c25d"],["D:/blog/public/tags/wp/index.html","e611f6da710d90e4dcc852aa33667062"],["D:/blog/public/tags/wp/page/2/index.html","b4e75d6dca26627c2fa7f50bfe862c7a"]];
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







