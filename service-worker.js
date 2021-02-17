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

var precacheConfig = [["D:/blog/public/2020/01/12/hackthebox-Wall/1.jpg","49e0684a68148adc091ead702d671120"],["D:/blog/public/2020/01/12/hackthebox-Wall/index.html","30371416458337930b5ca55fbff42716"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/1.jpg","07efdb9a36ca39ab1b3adee06c174c08"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/2.jpg","6aba05000fe3322dcfaf970094157675"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/3.jpg","83e76f83eea00578b878f0214b2b1b07"],["D:/blog/public/2020/01/13/GXYCTF-PingPingPing-BabySqli/index.html","e04a61c99d5c4c8780cc0a8912f4c7e8"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/1.jpg","2b660ad81af412675d23c7fd615c5949"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/2.jpg","d8b00f856b75cad60913116be56f6591"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/3.jpg","b2e830760e0364f8fdb3aa413aaee4b2"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/4.jpg","8a81ed16c89ea8850b82c4d471a260a6"],["D:/blog/public/2020/01/14/GXYCTF--禁止套娃&BabaySqli-v3.0/index.html","ef12e902eb77b111b56783bfaed616d4"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/1.jpg","4a98b463431646b6d7bef2e99b014ff4"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/2.jpg","63ca97fafbbcd8dfc8418e0ea6e4ee22"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/3.jpg","87b2a2202dd5b60ea7e6546889fdc285"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/4.jpg","3209d1298f5e0b7dbb8746e13359ba30"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/5.jpg","19489e468cabc149af22535dc8286356"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/6.jpg","755f50213e2f3ad8f73f2fc95b5109ae"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/7.jpg","a3d773ea65a561c6378b6392815d9f0d"],["D:/blog/public/2020/01/19/从SWPU2019-WEB1-WEB4学sql注入/index.html","57c91311dc128233b086309636514fd6"],["D:/blog/public/2020/01/29/hackthebox-AI——有趣的sql-JDWPgetshell/index.html","ddc2fd0221606cc175bc3c5cf508b711"],["D:/blog/public/2020/01/30/杭电hgame-week1/1.jpg","f40802729e10c71c5e88118a033c3c8f"],["D:/blog/public/2020/01/30/杭电hgame-week1/10.jpg","51ba4728b34eee045121a78d11190730"],["D:/blog/public/2020/01/30/杭电hgame-week1/11.jpg","52401d7bd01382fc27bba3d89f2fb71f"],["D:/blog/public/2020/01/30/杭电hgame-week1/12.jpg","a6c87f976a1cd2d9a497dc04c8049e30"],["D:/blog/public/2020/01/30/杭电hgame-week1/13.jpg","3fd16ef2a52881ac6f9d4231ec650739"],["D:/blog/public/2020/01/30/杭电hgame-week1/14.jpg","1b541cb0ffe69e7b7726586a5c7e3da0"],["D:/blog/public/2020/01/30/杭电hgame-week1/2.jpg","c5f1933109146a453e197f52874059a8"],["D:/blog/public/2020/01/30/杭电hgame-week1/3.jpg","aa367b5424c7e88ecee0003cecea51a6"],["D:/blog/public/2020/01/30/杭电hgame-week1/4.jpg","7c1f49da38993726f799a5d6a496b118"],["D:/blog/public/2020/01/30/杭电hgame-week1/5.jpg","99ead273b57dba78c1f9b96775ef7f38"],["D:/blog/public/2020/01/30/杭电hgame-week1/6.jpg","7f20125c1a70fd6e871c994b8e773539"],["D:/blog/public/2020/01/30/杭电hgame-week1/7.jpg","3b48cfb9ee060b588037520fcb3a773e"],["D:/blog/public/2020/01/30/杭电hgame-week1/8.jpg","e8d37dd7aec3dc2a8bdb50a9475929ae"],["D:/blog/public/2020/01/30/杭电hgame-week1/9.jpg","5d54c31c95fdac50bc76e2fc94d0ec85"],["D:/blog/public/2020/01/30/杭电hgame-week1/index.html","f7e886828a246520b32852b193412c01"],["D:/blog/public/2020/01/31/杭电hgame-week2/1.jpg","dea0ab76e5637f1091579b3297269543"],["D:/blog/public/2020/01/31/杭电hgame-week2/10.jpg","d76953c018a4118ebcc4356c230a77d6"],["D:/blog/public/2020/01/31/杭电hgame-week2/11.jpg","383e95c228cabc9f5ebd0af5677dbd3b"],["D:/blog/public/2020/01/31/杭电hgame-week2/12.jpg","2cb1842061331e8589bd8e5b39445e65"],["D:/blog/public/2020/01/31/杭电hgame-week2/13.jpg","66be7253b14531d2f806ce6d2723eaa3"],["D:/blog/public/2020/01/31/杭电hgame-week2/14.jpg","c53a543f195941782eb4ddc35a4dbcd1"],["D:/blog/public/2020/01/31/杭电hgame-week2/15.jpg","48cba2bf395b1352707b5fc3004c0585"],["D:/blog/public/2020/01/31/杭电hgame-week2/16.jpg","28eece3efc2eb96408bb8f7d1e170026"],["D:/blog/public/2020/01/31/杭电hgame-week2/17.jpg","af136b9089267f20fb9fcbcc7d1d9166"],["D:/blog/public/2020/01/31/杭电hgame-week2/2.jpg","a67fad9b44ced31a121f12c1a3a33f74"],["D:/blog/public/2020/01/31/杭电hgame-week2/3.jpg","0cf511a6fa030e5d14598ca63675c64c"],["D:/blog/public/2020/01/31/杭电hgame-week2/4.jpg","aa57c28dd701919cbb0e9dbf579bf974"],["D:/blog/public/2020/01/31/杭电hgame-week2/5.jpg","9244558a704a3dde9e0263bb87402374"],["D:/blog/public/2020/01/31/杭电hgame-week2/6.jpg","dae50cfad44ccc4e0a4a0613a5b0d5cb"],["D:/blog/public/2020/01/31/杭电hgame-week2/7.jpg","29ff78d4045d81b8144869489a52b6e2"],["D:/blog/public/2020/01/31/杭电hgame-week2/8.jpg","4d8f39c1f4ff563a3c95787a20789f0f"],["D:/blog/public/2020/01/31/杭电hgame-week2/9.jpg","3f9467429ded23549903c936bc2bb22d"],["D:/blog/public/2020/01/31/杭电hgame-week2/index.html","92a374ebf87a506457cd909bdfc9a308"],["D:/blog/public/2020/02/02/杭电hgame-week3/index.html","d42c9aa7f52e4088d057933d2fcdfeaa"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/1.jpg","bb9290f2ead9594a223473954c241ce8"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/2.jpg","6ccd22dd9d025e676e7421d9301821b0"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/3.jpg","6b87f3c0af60f26e93325db6824ec8f6"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/4.jpg","b975cbc3e3527489166ad2a92cdb4624"],["D:/blog/public/2020/02/05/学习笔记-SSRF基础/index.html","464933c4953e399dd59d4ed09f67790a"],["D:/blog/public/2020/02/06/hackthebox-ezpz/1.jpg","23bf5a7118ea3f40284a1a517a7f8ab0"],["D:/blog/public/2020/02/06/hackthebox-ezpz/2.jpg","a2ef028bf2dae207de77bafff065b59d"],["D:/blog/public/2020/02/06/hackthebox-ezpz/3.jpg","75f4537ddcfa266586753db9dabdbc7c"],["D:/blog/public/2020/02/06/hackthebox-ezpz/4.jpg","21558e584b8e3737b5a683ca481e2420"],["D:/blog/public/2020/02/06/hackthebox-ezpz/index.html","3201d865d468df90102f4ef614b92c97"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/1.jpg","74d6c33a3c724fef3a88b6f6d7dd5b68"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/2.jpg","398b00faa3f431d8c4413f9a23050ce3"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/3.jpg","e319593d03ef31b0ff4b02d8ed9cae4a"],["D:/blog/public/2020/02/10/安洵杯2019-web复现/index.html","49c9b3052ba27743aded2d09604a1c96"],["D:/blog/public/2020/02/18/从杭电hgame-week4学原型链污染/index.html","f65ef2e0d4f19c0995c7123cb1fe710c"],["D:/blog/public/2020/02/19/CISCN-2019-web部分复现/index.html","c72d2e229679f6f91a97cfcb3f1641fc"],["D:/blog/public/2020/02/25/NCTF-phar-matches-everything填坑/index.html","358af78d5aa0dc0c24aa38341d916ff9"],["D:/blog/public/2020/02/26/单独填坑-公益赛NodeGame/index.html","13a9aa0b692806963c4a75a7e9c75009"],["D:/blog/public/2020/03/02/学习笔记-命令执行及花式bypass写shell/index.html","e71c8dd71d05758e96a6d4636224b091"],["D:/blog/public/2020/03/06/Vulhub复现/index.html","25cf2f810387c0d31e5149115be3b872"],["D:/blog/public/2020/03/09/To-Dolist/index.html","999b5b638d68a13ce0154c12dd46ba81"],["D:/blog/public/2020/03/10/XCTF高校战“疫”网络安全分享赛/index.html","d7ba8b7991bad18835bd855cb8c3cbcc"],["D:/blog/public/2020/03/18/使用Soap的ssrf-crlf攻击/index.html","3b19df7be3f2b45842ab6d4f2898cae4"],["D:/blog/public/2020/03/29/WUSTCTF&MRCTF部分web题解/index.html","790b1902ad8e26add6701e8fe844f315"],["D:/blog/public/2020/03/30/VolgaCTF2020Qualifier复现/index.html","949cce5efd9cfe1fc57be0fdc8fa3709"],["D:/blog/public/2020/04/01/hackthebox-Sniper-初尝windows靶机/index.html","c1fc80efa78fcd863621f2b4b9ceba25"],["D:/blog/public/2020/04/13/ByteBanditsCTF2020两道WEB复现/index.html","baf45558d525c1e0183b01458299e243"],["D:/blog/public/2020/04/20/Nodejs的一些技巧/index.html","8b99b40d14dcadb44113fbece8415815"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/1.png","4fe77fbf7f8c7b1321a7264e1adbc1d4"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/10.png","7ca2f6e0a2e1d8c4b0f75c9a163db6c9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/11.png","dd30af1e04c6291a1254f94c18299c54"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/12.png","b86912dd1c049d3f275df3ebbdf900f8"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/13.png","645982851c50f071f3910020d5738d60"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/14.png","09617c9808b315fcebdf434d9341bdca"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/15.png","da0117dcb7ccec787277229b9235e821"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/16.png","611ca5de3656b66b8446b529ece39585"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/17.png","bb35beac017d2177d94de9ffcfc6bb2c"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/18.png","cf98f093cab95ab27bc89079ffcb6ba2"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/2.png","932f259dd31e70d840fe18b01fba1d49"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/3.png","fe4f779ed543f748ae63f7cb12d42285"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/4.png","d1289931388fbb1b1b6b0f4b264c19e6"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/5.png","b6b4beb5719c18b5821baa99caf09733"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/6.png","633b9a87d2f998cbeb3ea9ffd08f2140"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/7.png","b6211fc65a2d1774c111179885e7ca57"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/8.png","63e16915e39b2655ee3db50ad44dada9"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/9.png","23fd12e89db3886a0d7af33e51f2891f"],["D:/blog/public/2020/04/27/PHP-Audit-Labs审计学习/index.html","0f7c63065066929efefcbf90ac2a121a"],["D:/blog/public/2020/05/04/De1CTF2020writeup/index.html","9f2a98503eb9f09be90cbb5638743cd6"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/1.png","948eddf999fd3255f0f4afc0cf45c686"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/2.png","daf24f9256e7eef82d20652c3d3b44b8"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/3.png","1e186796519d50b298bc204ddf7cf1c5"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/4.png","a2e5c352c529e9e7e24352e1ab62d084"],["D:/blog/public/2020/05/10/网鼎杯-青龙组-WEB-writeup/index.html","0f467281ad0e5d209e56a5e0cb34cb23"],["D:/blog/public/2020/05/24/GKCTF2020writeup/index.html","17c79a1870a07ba2339288a9241b7259"],["D:/blog/public/2020/05/30/初探Redis-wdb玄武组ssrfme&pwnhub公开赛/index.html","81859692a2c5d136a550e69344da840d"],["D:/blog/public/2020/06/23/hackthebox-Quick-一次艰难的渗透/index.html","008a9b8989cee236d5e008c891ea25ef"],["D:/blog/public/2020/06/24/Make-jwt-great-again/index.html","37c84282adaadd02b3a367388634bb33"],["D:/blog/public/2020/07/01/hackthebox-Oouch/index.html","090433776ba47d8264e71c22062e2b95"],["D:/blog/public/2020/07/05/SCTF2020-writeup/index.html","1dba16987d6903b9158e9d41145cebc7"],["D:/blog/public/2020/07/07/hackthebox-Travel/index.html","69468ec5f9b79d3283c65af02b0538b3"],["D:/blog/public/2020/07/09/学习笔记-Java相关/index.html","ed8e21c9e98b0623929de412edeada44"],["D:/blog/public/2020/07/16/hackthebox-SneakyMailer/index.html","3288b9ef304f8e058761051b9c0db7fc"],["D:/blog/public/2020/07/22/hackthebox-Intense/index.html","ecd99cbdb5c9681ec11c09d56b20ef0a"],["D:/blog/public/2020/07/22/RingZer0-CTF-JavascriptChallenge/index.html","a5bdf3e2c25937f9fccde60a2e829931"],["D:/blog/public/2020/07/24/hackthebox-Dyplesher/index.html","fe20c259ddc5470a107823444ce7c8a8"],["D:/blog/public/2020/07/26/CyBRICS-CTF-2020/index.html","969deb9eb82b7e80447ecd4a3e55e3ca"],["D:/blog/public/2020/08/05/Thinkphp-vuln/index.html","44a3d0a06f6d66b13286f726108e27fe"],["D:/blog/public/2020/08/10/hackthebox-Fatty-JavaExploits/index.html","27ade3387d989001f29446a21068a159"],["D:/blog/public/2020/08/15/hackthebox-Unbalanced/index.html","d49d0126de85fb4214c27f682c0de8c7"],["D:/blog/public/2020/08/17/Laravel-popchain/index.html","d941269ff56028282899528694591291"],["D:/blog/public/2020/08/27/钓鱼城-zblog/index.html","fa9b01db4cea710b1928c76d90334f7f"],["D:/blog/public/2020/09/25/DarkCTF-WEB/index.html","18f0c7563a0131b4e8398b59dc391e91"],["D:/blog/public/2020/10/05/bootcamp-2020&mctf-2020/index.html","8d9fa0718808a39ec4df1f31729cf502"],["D:/blog/public/2020/10/09/学习笔记-Java深入/index.html","31f7d67e6cb992b485ca92a8d8a3c0bf"],["D:/blog/public/2020/10/19/N1CTF2020/index.html","1f288f2d9aae67e625d1ed4e1085d656"],["D:/blog/public/2020/10/26/ByteCTF2020-easyscrapy/index.html","a6bf16d2d53c6344fe79f59126bdd824"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/0.png","8b14359dfbce0d56fbd880ee4377e33d"],["D:/blog/public/2020/11/11/NCTF2020-出题小记/index.html","a0cd5b8909c1032177c246aa36420143"],["D:/blog/public/2020/12/30/Farewell-to-2020/index.html","57ba2fb71849b77fce57318e05837dbf"],["D:/blog/public/2021/02/07/golang的一些安全问题/index.html","98e31a3ba2148191c029cffc302f7a0e"],["D:/blog/public/404.html","c2084abf3a2825aa9f7e675e8d6d93ef"],["D:/blog/public/about/index.html","d28dc688c3d1d6cac817b7629b418e24"],["D:/blog/public/archives/2020/01/index.html","b30bfaee00c593a1d989cb033e4d7beb"],["D:/blog/public/archives/2020/02/index.html","2e2d9ff24910254b8f7cd110b5d08736"],["D:/blog/public/archives/2020/03/index.html","b2c934c749dfa204bfff5ab669fbd182"],["D:/blog/public/archives/2020/04/index.html","694609248f4b70fd991262f082018179"],["D:/blog/public/archives/2020/05/index.html","63a7a9ef7a323e8fb5e3783dbc621332"],["D:/blog/public/archives/2020/06/index.html","336b86382ae32392ac41d437ae9d7a3e"],["D:/blog/public/archives/2020/07/index.html","61a2d61ed9bbcc096d7ac3c46a6b0f7c"],["D:/blog/public/archives/2020/08/index.html","6cf55bd4532908b64820e7e91fb9624b"],["D:/blog/public/archives/2020/09/index.html","99158187816ec46cdfa5bf8ef4e0419b"],["D:/blog/public/archives/2020/10/index.html","539ee81261ef631fcae612b55283d49a"],["D:/blog/public/archives/2020/11/index.html","d6b2a41f8a9e2cbed7d708cfa41b5b7f"],["D:/blog/public/archives/2020/12/index.html","c939055bd7f2db70f5e5afd059b2a9ce"],["D:/blog/public/archives/2020/index.html","ad3bceef0957f32ec15621906c910921"],["D:/blog/public/archives/2020/page/2/index.html","dc3e7348e452315c7d8070bc05d94234"],["D:/blog/public/archives/2020/page/3/index.html","a9efe9b0aae480c1b83e94e0fb82f18c"],["D:/blog/public/archives/2020/page/4/index.html","4a58213a365c910005fa05d493296f0d"],["D:/blog/public/archives/2020/page/5/index.html","49ecc9a4cc5286d51b4fb04291c1e8b9"],["D:/blog/public/archives/2020/page/6/index.html","48497fd3125820202ae2db44d1423964"],["D:/blog/public/archives/2021/02/index.html","3ee9e8f0826c046ae1e8952f5863e8ca"],["D:/blog/public/archives/2021/index.html","902b148ea4ec1de2232e0c21d83161c1"],["D:/blog/public/archives/index.html","2942608439e85422526a25d2fd49d032"],["D:/blog/public/archives/page/2/index.html","2942608439e85422526a25d2fd49d032"],["D:/blog/public/archives/page/3/index.html","2942608439e85422526a25d2fd49d032"],["D:/blog/public/archives/page/4/index.html","2942608439e85422526a25d2fd49d032"],["D:/blog/public/archives/page/5/index.html","2942608439e85422526a25d2fd49d032"],["D:/blog/public/archives/page/6/index.html","2942608439e85422526a25d2fd49d032"],["D:/blog/public/assests/alipay.jpg","821163f8d5c9d1accd1b7cbeefaba556"],["D:/blog/public/assests/consola.ttf","fb505e28b6d130f08fe8f070e0d6b1b8"],["D:/blog/public/assests/icon.jpg","931d322663078eb74184292012d7ebd7"],["D:/blog/public/assests/wechat.png","d0ee7e910b087f8f316d1183ffce24d8"],["D:/blog/public/categories/index.html","f14bc2cbb2c82a3224481ea0ddd37e4e"],["D:/blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/blog/public/css/first.css","ef36b890903233b2d482d1c1a6192fd9"],["D:/blog/public/css/style.css","2e176fb91479bdf0b3f3ae6596ddc0d4"],["D:/blog/public/friends/index.html","4769c7368bbb686769280b53f770414b"],["D:/blog/public/index.html","5449407d38fcc9db6eae712adaf61b2d"],["D:/blog/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["D:/blog/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["D:/blog/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["D:/blog/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["D:/blog/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["D:/blog/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["D:/blog/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["D:/blog/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["D:/blog/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["D:/blog/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/blog/public/mylist/index.html","25f3d6107748b50abf5985bcc0251675"],["D:/blog/public/page/2/index.html","8521ab60589ebc0edd3b90989bd2abaa"],["D:/blog/public/page/3/index.html","e63d9433fbb5084420213fb15a3ffbb9"],["D:/blog/public/page/4/index.html","318b6f2e17272899cb4ed268f7a52cb7"],["D:/blog/public/page/5/index.html","18f0cf541457f64fb6d9a437e3dff941"],["D:/blog/public/page/6/index.html","f7b298a4fe51a3b2d5186ea4cdf3d475"],["D:/blog/public/tags/CTF/index.html","6a195c0080310a98e695216b0d1d73e1"],["D:/blog/public/tags/CTF/page/2/index.html","fb306ba37a211681d7273516986552d5"],["D:/blog/public/tags/CTF/page/3/index.html","0bdfff47824695ea177f7e9849984c9a"],["D:/blog/public/tags/Go/index.html","1803152b596c11cb57aa9cf2caa93a03"],["D:/blog/public/tags/Java/index.html","b835a31807406e20c01acad0cc5484b8"],["D:/blog/public/tags/Linux/index.html","f320c7e3a11082f196b84497a17d99ef"],["D:/blog/public/tags/Node-js/index.html","9938aaa2935a04f40148f9c5221f841a"],["D:/blog/public/tags/PHP/index.html","24875f80ca9e9c7b31f704797681668f"],["D:/blog/public/tags/WEB/index.html","41047f7b48739176ab5d3b20c99f2747"],["D:/blog/public/tags/WEB/page/2/index.html","01b91f4758dacf488d5d96ac5560f238"],["D:/blog/public/tags/WEB/page/3/index.html","eed2d10aa3c24907edf13afd3da6d8a9"],["D:/blog/public/tags/WEB/page/4/index.html","500067d6464bc43486979abff7eca5a6"],["D:/blog/public/tags/hackthebox/index.html","8fc8223ae90f054d25c2b78c337aaf12"],["D:/blog/public/tags/hackthebox/page/2/index.html","cca1e7d83b068f47bba3ffb053a5f0d8"],["D:/blog/public/tags/index.html","58e8712d47371158518f90b6250ddf7d"],["D:/blog/public/tags/javascript/index.html","598bb03a1dc0ef2ffcbacdd4696477eb"],["D:/blog/public/tags/pentest/index.html","4b90ef9124b9c1525ae6674533758622"],["D:/blog/public/tags/redis/index.html","0ab04e884e9db0152eaabc75b2f49fc0"],["D:/blog/public/tags/windows/index.html","209fa1d8506fa533bbda388e96561ab3"],["D:/blog/public/tags/wp/index.html","ae644155dcead1d7066a3ace7dcdb8e0"],["D:/blog/public/tags/wp/page/2/index.html","481244ba812d793a0b8a66207d19a37f"]];
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







