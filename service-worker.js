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

var precacheConfig = [["D:/blog/public/2020/01/12/hackthebox-Wall/1.jpg","49e0684a68148adc091ead702d671120"],["D:/blog/public/2020/01/12/hackthebox-Wall/index.html","2b69d8345c515664fca9008c3d91b5f7"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/1.jpg","07efdb9a36ca39ab1b3adee06c174c08"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/2.jpg","6aba05000fe3322dcfaf970094157675"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/3.jpg","83e76f83eea00578b878f0214b2b1b07"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/index.html","5f035bccc4a111085dd92e2abeaed8a9"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/1.jpg","2b660ad81af412675d23c7fd615c5949"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/2.jpg","d8b00f856b75cad60913116be56f6591"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/3.jpg","b2e830760e0364f8fdb3aa413aaee4b2"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/4.jpg","8a81ed16c89ea8850b82c4d471a260a6"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/index.html","7374a596262965731c6a86940960efe1"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/1.jpg","4a98b463431646b6d7bef2e99b014ff4"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/2.jpg","63ca97fafbbcd8dfc8418e0ea6e4ee22"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/3.jpg","87b2a2202dd5b60ea7e6546889fdc285"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/4.jpg","3209d1298f5e0b7dbb8746e13359ba30"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/5.jpg","19489e468cabc149af22535dc8286356"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/6.jpg","755f50213e2f3ad8f73f2fc95b5109ae"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/7.jpg","a3d773ea65a561c6378b6392815d9f0d"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/index.html","0590ee8e71e811d64756d38f4d61de7d"],["D:/blog/public/2020/01/29/hackthebox-AI——有趣的sql-JDWPgetshell/index.html","6f05fff816bf387d3b9ea34c5396db2c"],["D:/blog/public/2020/01/30/杭电hgame-week1/1.jpg","f40802729e10c71c5e88118a033c3c8f"],["D:/blog/public/2020/01/30/杭电hgame-week1/10.jpg","51ba4728b34eee045121a78d11190730"],["D:/blog/public/2020/01/30/杭电hgame-week1/11.jpg","52401d7bd01382fc27bba3d89f2fb71f"],["D:/blog/public/2020/01/30/杭电hgame-week1/12.jpg","a6c87f976a1cd2d9a497dc04c8049e30"],["D:/blog/public/2020/01/30/杭电hgame-week1/13.jpg","3fd16ef2a52881ac6f9d4231ec650739"],["D:/blog/public/2020/01/30/杭电hgame-week1/14.jpg","1b541cb0ffe69e7b7726586a5c7e3da0"],["D:/blog/public/2020/01/30/杭电hgame-week1/2.jpg","c5f1933109146a453e197f52874059a8"],["D:/blog/public/2020/01/30/杭电hgame-week1/3.jpg","aa367b5424c7e88ecee0003cecea51a6"],["D:/blog/public/2020/01/30/杭电hgame-week1/4.jpg","7c1f49da38993726f799a5d6a496b118"],["D:/blog/public/2020/01/30/杭电hgame-week1/5.jpg","99ead273b57dba78c1f9b96775ef7f38"],["D:/blog/public/2020/01/30/杭电hgame-week1/6.jpg","7f20125c1a70fd6e871c994b8e773539"],["D:/blog/public/2020/01/30/杭电hgame-week1/7.jpg","3b48cfb9ee060b588037520fcb3a773e"],["D:/blog/public/2020/01/30/杭电hgame-week1/8.jpg","e8d37dd7aec3dc2a8bdb50a9475929ae"],["D:/blog/public/2020/01/30/杭电hgame-week1/9.jpg","5d54c31c95fdac50bc76e2fc94d0ec85"],["D:/blog/public/2020/01/30/杭电hgame-week1/index.html","9492b62b0dd11459081094be18a6aec1"],["D:/blog/public/2020/01/31/杭电hgame-week2/1.jpg","dea0ab76e5637f1091579b3297269543"],["D:/blog/public/2020/01/31/杭电hgame-week2/10.jpg","d76953c018a4118ebcc4356c230a77d6"],["D:/blog/public/2020/01/31/杭电hgame-week2/11.jpg","383e95c228cabc9f5ebd0af5677dbd3b"],["D:/blog/public/2020/01/31/杭电hgame-week2/12.jpg","2cb1842061331e8589bd8e5b39445e65"],["D:/blog/public/2020/01/31/杭电hgame-week2/13.jpg","66be7253b14531d2f806ce6d2723eaa3"],["D:/blog/public/2020/01/31/杭电hgame-week2/14.jpg","c53a543f195941782eb4ddc35a4dbcd1"],["D:/blog/public/2020/01/31/杭电hgame-week2/15.jpg","48cba2bf395b1352707b5fc3004c0585"],["D:/blog/public/2020/01/31/杭电hgame-week2/16.jpg","28eece3efc2eb96408bb8f7d1e170026"],["D:/blog/public/2020/01/31/杭电hgame-week2/17.jpg","af136b9089267f20fb9fcbcc7d1d9166"],["D:/blog/public/2020/01/31/杭电hgame-week2/2.jpg","a67fad9b44ced31a121f12c1a3a33f74"],["D:/blog/public/2020/01/31/杭电hgame-week2/3.jpg","0cf511a6fa030e5d14598ca63675c64c"],["D:/blog/public/2020/01/31/杭电hgame-week2/4.jpg","aa57c28dd701919cbb0e9dbf579bf974"],["D:/blog/public/2020/01/31/杭电hgame-week2/5.jpg","9244558a704a3dde9e0263bb87402374"],["D:/blog/public/2020/01/31/杭电hgame-week2/6.jpg","dae50cfad44ccc4e0a4a0613a5b0d5cb"],["D:/blog/public/2020/01/31/杭电hgame-week2/7.jpg","29ff78d4045d81b8144869489a52b6e2"],["D:/blog/public/2020/01/31/杭电hgame-week2/8.jpg","4d8f39c1f4ff563a3c95787a20789f0f"],["D:/blog/public/2020/01/31/杭电hgame-week2/9.jpg","3f9467429ded23549903c936bc2bb22d"],["D:/blog/public/2020/01/31/杭电hgame-week2/index.html","5fa2c400595e674dc9051c72f908bffb"],["D:/blog/public/2020/02/02/杭电hgame-week3/index.html","42b93173eb1ac420916809e5bef1ff10"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/1.jpg","bb9290f2ead9594a223473954c241ce8"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/2.jpg","6ccd22dd9d025e676e7421d9301821b0"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/3.jpg","6b87f3c0af60f26e93325db6824ec8f6"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/4.jpg","b975cbc3e3527489166ad2a92cdb4624"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/index.html","26fb6d0739c5bf5953026c073c6ae986"],["D:/blog/public/2020/02/06/hackthebox-ezpz/1.jpg","23bf5a7118ea3f40284a1a517a7f8ab0"],["D:/blog/public/2020/02/06/hackthebox-ezpz/2.jpg","a2ef028bf2dae207de77bafff065b59d"],["D:/blog/public/2020/02/06/hackthebox-ezpz/3.jpg","75f4537ddcfa266586753db9dabdbc7c"],["D:/blog/public/2020/02/06/hackthebox-ezpz/4.jpg","21558e584b8e3737b5a683ca481e2420"],["D:/blog/public/2020/02/06/hackthebox-ezpz/index.html","795580e3157a9c0ff079b6972871ff8a"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/1.jpg","74d6c33a3c724fef3a88b6f6d7dd5b68"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/2.jpg","398b00faa3f431d8c4413f9a23050ce3"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/3.jpg","e319593d03ef31b0ff4b02d8ed9cae4a"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/index.html","b7f0035bc24e4d79d3cc3cc28fdcc613"],["D:/blog/public/2020/02/18/从杭电hgame-week4学原型链污染/index.html","7a1589306f00c9b4dad4d50fcc29c31e"],["D:/blog/public/2020/02/19/CISCN-2019-web部分复现/index.html","dd71c03989b9ea13e322c01b2d280f35"],["D:/blog/public/2020/02/25/NCTF-phar-matches-everything填坑/index.html","12f66d2803f764a80d1218b0869d44e4"],["D:/blog/public/2020/02/26/单独填坑-公益赛NodeGame/index.html","de973c2ac6d749f780d87bb4aa511acd"],["D:/blog/public/2020/03/02/学习笔记-命令执行及花式bypass写shell/index.html","8174e15788140a24f74764b149d7cb24"],["D:/blog/public/2020/03/06/Vulhub复现/index.html","e4fb5e18cd3444f126eb7ee578caa810"],["D:/blog/public/2020/03/09/To-Dolist/index.html","d06346e77dafea8e7c3adf9ad1c14011"],["D:/blog/public/2020/03/10/XCTF高校战“疫”网络安全分享赛/index.html","c61b776af595f53398b7f4e0913c5c8a"],["D:/blog/public/2020/03/18/使用Soap的ssrf-crlf攻击/index.html","0cf596e20564dd430f70d20161f864fd"],["D:/blog/public/2020/03/29/WUSTCTF&MRCTF部分web题解/index.html","335620866582d41eaa88901db2d5dc5f"],["D:/blog/public/2020/03/30/VolgaCTF2020Qualifier复现/index.html","83cc745417eac05d334daabd61c336a9"],["D:/blog/public/2020/04/01/hackthebox-Sniper-初尝windows靶机/index.html","d2a05b2107fe52b3034a3e33e05a5f55"],["D:/blog/public/2020/04/13/ByteBanditsCTF2020两道WEB复现/index.html","e78cdebb6f5ae96cb41ed457d1c33f81"],["D:/blog/public/2020/04/20/Nodejs的一些技巧/index.html","1e94c94a8e0b205d61755c44f5024e3e"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/1.png","4fe77fbf7f8c7b1321a7264e1adbc1d4"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/10.png","7ca2f6e0a2e1d8c4b0f75c9a163db6c9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/11.png","dd30af1e04c6291a1254f94c18299c54"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/12.png","b86912dd1c049d3f275df3ebbdf900f8"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/13.png","645982851c50f071f3910020d5738d60"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/14.png","09617c9808b315fcebdf434d9341bdca"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/15.png","da0117dcb7ccec787277229b9235e821"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/16.png","611ca5de3656b66b8446b529ece39585"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/17.png","bb35beac017d2177d94de9ffcfc6bb2c"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/18.png","cf98f093cab95ab27bc89079ffcb6ba2"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/2.png","932f259dd31e70d840fe18b01fba1d49"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/3.png","fe4f779ed543f748ae63f7cb12d42285"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/4.png","d1289931388fbb1b1b6b0f4b264c19e6"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/5.png","b6b4beb5719c18b5821baa99caf09733"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/6.png","633b9a87d2f998cbeb3ea9ffd08f2140"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/7.png","b6211fc65a2d1774c111179885e7ca57"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/8.png","63e16915e39b2655ee3db50ad44dada9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/9.png","23fd12e89db3886a0d7af33e51f2891f"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/index.html","cabd5cc41f8c56b0497b977d58f0cb9e"],["D:/blog/public/2020/05/04/De1CTF2020writeup/index.html","39ac3c2fd70e47377dde2185e7234c6b"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/1.png","948eddf999fd3255f0f4afc0cf45c686"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/2.png","daf24f9256e7eef82d20652c3d3b44b8"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/3.png","1e186796519d50b298bc204ddf7cf1c5"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/4.png","a2e5c352c529e9e7e24352e1ab62d084"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/index.html","ee6cde3d058da2a0883708c646b0b150"],["D:/blog/public/2020/05/24/GKCTF2020writeup/index.html","fa2912bc3f3479d7c9eb960329edba23"],["D:/blog/public/2020/05/30/初探Redis-wdb玄武组ssrfme&pwnhub公开赛/index.html","e8ad894a3a258aa2054daf61b094b1cf"],["D:/blog/public/2020/06/23/hackthebox-Quick-一次艰难的渗透/index.html","f42d80feaf6c1900bf8e43ec735f7533"],["D:/blog/public/2020/06/24/Make-jwt-great-again/index.html","3dcf4a50adc7dfc11a4eb6e09b31b9ad"],["D:/blog/public/2020/07/01/hackthebox-Oouch/index.html","f9cd2355bf33b2cf7ea7b7836f146b09"],["D:/blog/public/2020/07/05/SCTF2020-writeup/index.html","37c835d546c8174233fdb7aa6eeae4df"],["D:/blog/public/2020/07/09/学习笔记-Java相关/index.html","b59f64ba0fa1257ad9ebae162632cb82"],["D:/blog/public/2020/07/16/hackthebox-SneakyMailer/index.html","9772366008490720775878ba07d84c65"],["D:/blog/public/2020/07/22/hackthebox-Intense/index.html","cdcc83d774646c022873a46c144452a8"],["D:/blog/public/2020/07/22/RingZer0-CTF-JavascriptChallenge/index.html","d3e323535ef872b25390102690ce68ee"],["D:/blog/public/2020/07/24/hackthebox-Dyplesher/index.html","445c0f15a38a10d3a7e189c55c07aae3"],["D:/blog/public/2020/07/26/CyBRICS-CTF-2020/index.html","2521b8adea064d2ea253a733036c1f0b"],["D:/blog/public/2020/08/05/Thinkphp-vuln/index.html","097cc9f33ce97031dfd703b970bab658"],["D:/blog/public/2020/08/10/hackthebox-Fatty-JavaExploits/index.html","037e091045778c7758adc7ece00d08b1"],["D:/blog/public/2020/08/15/hackthebox-Unbalanced/index.html","76ea1e752550e5cf0f465de426ea6e1c"],["D:/blog/public/2020/08/17/Laravel-popchain/index.html","220a650509650efe70e8002ea69f7328"],["D:/blog/public/2020/08/27/钓鱼城-zblog/index.html","87c1b38201a674fd2077f6d265f16460"],["D:/blog/public/2020/09/25/DarkCTF-WEB/index.html","64293c1c0609bc9fbc8a0926ed842db9"],["D:/blog/public/2020/10/05/bootcamp-2020&mctf-2020/index.html","0432e62e8535d3ad69eaf840dc6803a6"],["D:/blog/public/2020/10/09/学习笔记-Java深入/index.html","23c921c30ebcab604911a1f4c412ef2d"],["D:/blog/public/2020/10/19/N1CTF2020/index.html","a42f477fc77b3d7acaa847548bf4ec02"],["D:/blog/public/2020/10/26/ByteCTF2020-easyscrapy/index.html","0c37fdc219fdf15948a43b6ebd38de45"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/0.png","8b14359dfbce0d56fbd880ee4377e33d"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/index.html","ce97d72eb0275fb81479c951967e7411"],["D:/blog/public/2020/12/30/Farewell-to-2020/index.html","0d4fcd7ffe56bce4725b7a6b76b527bd"],["D:/blog/public/2021/02/07/golang的一些安全问题/index.html","7a3acef399797cf0826f4d09d56686e1"],["D:/blog/public/2021/03/06/D^3CTF-8-bit-pub/index.html","f959ba66f40b009d87461a6e78d175c3"],["D:/blog/public/2021/04/04/angstromCTF-2021/index.html","b79faaaf351402fb983e1feb0cf2144a"],["D:/blog/public/2021/05/30/春秋杯-WEB/index.html","b7fcb093740021403b9a27fb836814b0"],["D:/blog/public/404.html","9f87d601afedd144a03c0f831f32a180"],["D:/blog/public/about/index.html","0763c5b3d75cb95f9cfbb1c112411123"],["D:/blog/public/archives/2020/01/index.html","e679fed86746aa7d4f27d64792f4130e"],["D:/blog/public/archives/2020/02/index.html","7a090fab74b07ad787109a4eea1a06c9"],["D:/blog/public/archives/2020/03/index.html","09160ca3bfe36eabe0ecff06b98fa7a0"],["D:/blog/public/archives/2020/04/index.html","48e2ecbb6fd8835c3d890381a3a25dff"],["D:/blog/public/archives/2020/05/index.html","107625c6308348667746cea400ca7ef6"],["D:/blog/public/archives/2020/06/index.html","3b23181a312d6b3f79216fca76872966"],["D:/blog/public/archives/2020/07/index.html","b36f7a3038d8bec765575a13011e59f5"],["D:/blog/public/archives/2020/08/index.html","aff68aafcf699925c9119a5a0fa07705"],["D:/blog/public/archives/2020/09/index.html","0459fa5c285d4b9e3d2d21d46654491d"],["D:/blog/public/archives/2020/10/index.html","517912b7caeef9ee12c58b16bd307a85"],["D:/blog/public/archives/2020/11/index.html","56c8625ac13b25d210453a3567515f78"],["D:/blog/public/archives/2020/12/index.html","37caffd49a7fcb65b52378678664113e"],["D:/blog/public/archives/2020/index.html","730a4cf80006f79dfb8bf818510b77e8"],["D:/blog/public/archives/2020/page/2/index.html","482535eac5994c9d9ff9a828753a5f58"],["D:/blog/public/archives/2020/page/3/index.html","317aca57e8fb7edf38f43f0532f6d668"],["D:/blog/public/archives/2020/page/4/index.html","3ec6f86043aa584cafa274350cf05b7c"],["D:/blog/public/archives/2020/page/5/index.html","f8786401fba5091fa71d9fc99834227d"],["D:/blog/public/archives/2020/page/6/index.html","cdd90be889abd769e9e9f2074332c7b8"],["D:/blog/public/archives/2021/02/index.html","126af12c4c55f0a943793947ff6cabbd"],["D:/blog/public/archives/2021/03/index.html","9453d6c14d7f5124c515929738b8e9d3"],["D:/blog/public/archives/2021/04/index.html","7d82bfa6753504fccc0e40e7dd4be30b"],["D:/blog/public/archives/2021/05/index.html","83e5594ddc326959d6b494ee126e60fc"],["D:/blog/public/archives/2021/index.html","6a10be1effc1aeb45ec8f1b0e3e2628f"],["D:/blog/public/archives/index.html","c1ab5c44721f72408df0b1beb5710994"],["D:/blog/public/archives/page/2/index.html","c1ab5c44721f72408df0b1beb5710994"],["D:/blog/public/archives/page/3/index.html","c1ab5c44721f72408df0b1beb5710994"],["D:/blog/public/archives/page/4/index.html","c1ab5c44721f72408df0b1beb5710994"],["D:/blog/public/archives/page/5/index.html","c1ab5c44721f72408df0b1beb5710994"],["D:/blog/public/archives/page/6/index.html","c1ab5c44721f72408df0b1beb5710994"],["D:/blog/public/assests/alipay.jpg","821163f8d5c9d1accd1b7cbeefaba556"],["D:/blog/public/assests/consola.ttf","fb505e28b6d130f08fe8f070e0d6b1b8"],["D:/blog/public/assests/icon.jpg","931d322663078eb74184292012d7ebd7"],["D:/blog/public/assests/wechat.png","57e6a192c26104ede51ff222f6e6080c"],["D:/blog/public/categories/index.html","c9a680f0b17ea8ca8f9ac16434307914"],["D:/blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/blog/public/css/first.css","ef36b890903233b2d482d1c1a6192fd9"],["D:/blog/public/css/style.css","bc1306da088b03c9586aafb7ca6dd689"],["D:/blog/public/friends/index.html","43f725d56912b2bdd12ba16234b46ea1"],["D:/blog/public/index.html","1d291b05853a56b0a52b55990554c863"],["D:/blog/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["D:/blog/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["D:/blog/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["D:/blog/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["D:/blog/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["D:/blog/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["D:/blog/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["D:/blog/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["D:/blog/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["D:/blog/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/blog/public/mylist/index.html","6d86f867a18ac98ee58026a007105be1"],["D:/blog/public/page/2/index.html","48b307d27e81ae1a9fd364760178fe37"],["D:/blog/public/page/3/index.html","2ce5a70b4a023897e78579c4315f1ad6"],["D:/blog/public/page/4/index.html","f94c5cf5588b1edcf49221d82de225d5"],["D:/blog/public/page/5/index.html","f8c4daef6e6450b27154a817e07b7322"],["D:/blog/public/page/6/index.html","b3e0e218fb0fbf3a5ac0b072c993a1b2"],["D:/blog/public/tags/CTF/index.html","b20ff70ea4f12f941d9fd7f61268ccb9"],["D:/blog/public/tags/CTF/page/2/index.html","7082468d09a17f25164c968391ab6d12"],["D:/blog/public/tags/CTF/page/3/index.html","fb344b5434419e4cfd2189a46bc604b0"],["D:/blog/public/tags/CTF/page/4/index.html","a6cfd7b3c89c8dc745cd3223a778cbe6"],["D:/blog/public/tags/Go/index.html","a5a1dbd27932609732f3a087f36ade0b"],["D:/blog/public/tags/Java/index.html","7043cb66be950d32c923a94ec30910c7"],["D:/blog/public/tags/Linux/index.html","3113ca091425de34eba2c6b6a9218fa0"],["D:/blog/public/tags/Node-js/index.html","f5cd6707ed5b4d58e3832092ec931a07"],["D:/blog/public/tags/PHP/index.html","3140539f83561d8caae99aa0356b54bf"],["D:/blog/public/tags/WEB/index.html","66dcd57e4a7759c1ecc8561d3f7f2a70"],["D:/blog/public/tags/WEB/page/2/index.html","758810e93581bbe53a1176da6153fa05"],["D:/blog/public/tags/WEB/page/3/index.html","d137b869693541b3519c88464dddb508"],["D:/blog/public/tags/WEB/page/4/index.html","e0bcedc5a98b8778654c0e5ad9fa9e69"],["D:/blog/public/tags/hackthebox/index.html","2764a46a0d2709b764991d1f6927c743"],["D:/blog/public/tags/hackthebox/page/2/index.html","6bb9c52e989912d21982e286a74ba627"],["D:/blog/public/tags/index.html","d095c34cc39a494fd25c1f40b62832ad"],["D:/blog/public/tags/javascript/index.html","38e1f9ed727ec6156698c77b686be88e"],["D:/blog/public/tags/pentest/index.html","4e931591c72c7e3775bd87581453f2aa"],["D:/blog/public/tags/redis/index.html","ab0a7ced3f1e3f4ad5fc3352e5defce9"],["D:/blog/public/tags/windows/index.html","cf60f862334c533ee1f6a772fda4af77"],["D:/blog/public/tags/wp/index.html","4b1a1939a0fca691bf232b921abef804"],["D:/blog/public/tags/wp/page/2/index.html","7dc1e7fa23c6913ee0bbefcca263ed61"]];
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







