"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[67],{338:function(e,t,n){n.r(t),n.d(t,{getImagePath:function(){return x},getMovieCredits:function(){return v},getMovieInfo:function(){return p},getMovieReview:function(){return l},getTrending:function(){return o},searchMovie:function(){return m}});var r=n(861),a=n(687),c=n.n(a),u="cedb0d61b1d63f0d25850ca71581631f",s="https://api.themoviedb.org/3/";function o(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"trending/all/week?api_key=").concat(u));case 3:if(200!==(t=e.sent).status){e.next=11;break}return e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n.results.map((function(e){return{id:e.id,name:e.name||e.title}})));case 11:return e.abrupt("return",[]);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"movie/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 3:if(200!==(n=e.sent).status){e.next=11;break}return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:return e.abrupt("return",{});case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 3:if(200!==(n=e.sent).status){e.next=11;break}return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",null===r||void 0===r?void 0:r.results.map((function(e){return{author:e.author,content:e.content,id:e.id}})));case 11:return e.abrupt("return",[]);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function v(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US&page=1"));case 3:if(200!==(n=e.sent).status){e.next=12;break}return e.next=7,n.json();case 7:return r=e.sent,a=r.cast.map((function(e){return{id:e.id,name:e.name,original_name:e.original_name,popularity:e.popularity,profile_path:e.profile_path,character:e.character}})),e.abrupt("return",a);case 12:return e.abrupt("return",[]);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}function m(){return g.apply(this,arguments)}function g(){return g=(0,r.Z)(c().mark((function e(){var t,n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.length>0&&void 0!==a[0]?a[0]:"",e.prev=1,""!==t){e.next=4;break}return e.abrupt("return",[]);case 4:return e.next=6,fetch("".concat(s,"search/movie?api_key=").concat(u,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 6:if(200!==(n=e.sent).status){e.next=14;break}return e.next=10,n.json();case 10:return r=e.sent,e.abrupt("return",r.results.map((function(e){return{id:e.id,name:e.name||e.title}})));case 14:return e.abrupt("return",[]);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),console.error(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[1,17]])}))),g.apply(this,arguments)}function x(e){return e?"https://image.tmdb.org/t/p/w500"+e:""}},67:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(439),a=n(338),c=n(184),u=n(338).getImagePath,s=function(e){var t=e.cast;return(0,c.jsx)("li",{children:(0,c.jsx)("img",{src:u(t.profile_path),alt:""})})},o=n(791),i=n(689),p=function(){var e=(0,i.UO)().id,t=(0,o.useState)(null),n=(0,r.Z)(t,2),u=n[0],p=n[1];return console.dir(u),(0,o.useEffect)((function(){(0,a.getMovieCredits)(e).then((function(e){console.dir(e),p(e)}))}),[e]),(0,c.jsx)("ul",{children:u&&u.map((function(e){return(0,c.jsx)(s,{cast:e},e.id)}))})}},861:function(e,t,n){function r(e,t,n,r,a,c,u){try{var s=e[c](u),o=s.value}catch(i){return void n(i)}s.done?t(o):Promise.resolve(o).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var u=e.apply(t,n);function s(e){r(u,a,c,s,o,"next",e)}function o(e){r(u,a,c,s,o,"throw",e)}s(void 0)}))}}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=67.4f4218ae.chunk.js.map