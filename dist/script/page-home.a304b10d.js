"use strict";(self.webpackChunkcnblogs_theme_simplememory=self.webpackChunkcnblogs_theme_simplememory||[]).push([[628],{8991:function(t,e,n){function o(t){return(t=>{let e=t.replace(/[\r\n]/g,""),n=$("#digg_count"),o=e.match(/.*posted\s*@\s*([0-9\-:\s]{16}).*阅读\s*\((\d*)\).*评论\s*\((\d*)\).*推荐\s*\((\d*)\).*/)||e.match(/.*posted\s*@\s*([0-9\-:\s]{16}).*阅读\s*\((\d*)\).*评论\s*\((\d*)\).*/)||e.match(/.*posted\s*@\s*([0-9\-:\s]{16}).*/);return{date:void 0===o[1]?"1970-01-01 00:00":o[1],vnum:void 0===o[2]?"0":o[2],cnum:void 0===o[3]?"0":o[3],tnum:void 0===o[4]?n.length?n.text():"0":o[4]}})(t)}n.d(e,{Z:function(){return o}})},565:function(t,e,n){n.r(e),n.d(e,{default:function(){return s}});var o=n(8991),i=n(5299);function s(){(()=>{$("#homeTopTitle span").text($.__config.info.name),$.__config.animate.infoName.enable&&$("#homeTopTitle span").hover((function(){$("#homeTopTitle span").css("animation","pageTitleText 2s infinite"),$("#homeTopTitle span").css("-webkit-animation","pageTitleText 1s infinite")}),(function(){$("#homeTopTitle span").css("animation","none"),$("#homeTopTitle span").css("-webkit-animation","none")}));let t=$.__config.banner.home.title,e=$("#hitokoto");if($.isArray(t)&&t.length>0){let n=$.__tools.randomNum(0,t.length-1);return e.html(t[n]).css("display","-webkit-box"),$.__tools.setDomHomePosition(),!0}if("string"==typeof t&&""!==t)return e.html(t).css("display","-webkit-box"),$.__tools.setDomHomePosition(),!0;let n=["当你凝视深渊时，深渊也在凝视着你。","有的人25岁就死了，只是到75岁才埋葬"];function o(t){if("success"===t?.status){let n=t?.note||t.data.content,o=t?.content||`《${t.data.origin.title}》 - ${t.data.origin.dynasty} - ${t.data.origin.author}`;e.html(n).css("display","-webkit-box"),$("#hitokotoAuthor").text(o).show()}else{let t=$.__tools.randomNum(0,n.length-1);e.html(n[t]).css("display","-webkit-box")}$.__tools.setDomHomePosition()}"one"===$.__config.banner.home.titleSource&&(0,i.W)("https://api.wangyangyang.vip/").then((t=>o(t))),"jinrishici"===$.__config.banner.home.titleSource&&(0,i.W)("https://v2.jinrishici.com/one.json").then((t=>o(t)))})(),$(".scroll-down").click((function(){let t;t=$("#home").offset().top+10,$.__tools.actScroll(t,500)})),(()=>{$("#main .c_b_p_desc_readmore");let t=$("#main .postTitle");function e(t){let e=(0,o.Z)(t);return'<span class="postMeta"><i class="iconfont icon-schedule"></i>发表于 '+e.date+'<i class="iconfont icon-browse"></i>阅读：'+e.vnum+'<i class="iconfont icon-interactive"></i>评论：'+e.cnum+'<i class="iconfont icon-hot"></i>推荐：'+e.tnum+"</span>"}$.each(t,(n=>{let o=$(t[n]),i=o.text(),s=o.nextAll(".postDesc:eq(0)").text();o.after(e(s)),/\[置顶\]/.test(i)&&o.append('<span class="postSticky">置顶</span>'),o.find("a").text(i.replace("[置顶]",""))})),t=$("#main .entrylistPosttitle"),$.each(t,(n=>{let o=$(t[n]),i=o.nextAll(".entrylistItemPostDesc:eq(0)").text();o.after(e(i))}))})(),(()=>{let t=$(".c_b_p_desc");$.each(t,(e=>{t[e].html('\n                <div class="custom-image-container">\n                  <img src="https://bing.img.run/rand_uhd.php" alt="随机获取Bing历史壁纸UHD超高清原图"/>\n                </div>\n              ')}))})(),$.__config.animate.homeBanner.enable&&n.e(86).then(n.t.bind(n,3255,23)).then((t=>{$(".main-header").circleMagic($.__config.animate.homeBanner.options)}))}}}]);