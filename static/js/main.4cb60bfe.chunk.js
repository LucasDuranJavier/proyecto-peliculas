(this["webpackJsonpproyecto-peliculas"]=this["webpackJsonpproyecto-peliculas"]||[]).push([[0],{101:function(e,t){},110:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){},129:function(e,t,c){},130:function(e,t,c){},131:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(32),r=c.n(s),o=(c(109),c(110),c(138)),i=c(29),j=c(21),l=c(84),u=c.n(l),p=c(93),b=c(78),d=function(e,t){var c=Object(n.useState)(!0),a=Object(b.a)(c,2),s=a[0],r=a[1],o=Object(n.useState)(null),i=Object(b.a)(o,2),j=i[0],l=i[1],d=Object(n.useState)(null),m=Object(b.a)(d,2),h=m[0],x=m[1];return Object(n.useEffect)((function(){(function(){var c=Object(p.a)(u.a.mark((function c(){var n,a;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,fetch(e,t);case 3:return n=c.sent,c.next=6,n.json();case 6:a=c.sent,l(a),r(!1),c.next=15;break;case 11:c.prev=11,c.t0=c.catch(0),x(c.t0),r(!1);case 15:case"end":return c.stop()}}),c,null,[[0,11]])})));return function(){return c.apply(this,arguments)}})()()}),[e,t]),{loading:s,result:j,error:h}},m="https://api.themoviedb.org/3",h="6e81433c7560e32de5ab3261a7b5f31b",x=c(140),O=c(136),v=c(141),g=(c(111),c(94)),f=(c(112),c(6)),y=function(){return Object(f.jsx)("div",{className:"loading",children:Object(f.jsx)(g.a,{size:"large"})})},w=function(e){var t=e.movie,c=t.id,n=t.backdrop_path,a=t.title,s=t.overview,r="https://image.tmdb.org/t/p/original".concat(n);return Object(f.jsx)("div",{className:"slider-movies__movie",style:{backgroundImage:"url('".concat(r,"')")},children:Object(f.jsx)("div",{className:"slider-movies__movie-info",children:Object(f.jsxs)(O.a,{xs:{span:18},sm:{span:18},md:{span:12},lg:{span:8},className:"card",children:[Object(f.jsx)("h2",{children:a}),Object(f.jsx)("p",{children:s}),Object(f.jsx)(i.b,{to:"/movie/".concat(c),children:Object(f.jsx)(v.a,{type:"primary",children:"Ver m\xe1s"})})]})})})},N=function(e){console.log(e);var t=e.newMovies;if(t.loading||!t.result)return Object(f.jsx)(y,{});var c=t.result.results;return console.log(c),Object(f.jsx)(x.a,{outoplay:!0,className:"slider-movies",children:c.map((function(e){return Object(f.jsx)(w,{movie:e},e.id)}))})},_=c(137),M=c(139),k=c(142),I=c(60),S=(c(129),function(e){var t=e.movie,c=t.poster_path,n=t.id,a=t.title,s="https://image.tmdb.org/t/p/original".concat(c);return Object(f.jsxs)(M.b.Item,{className:"movie-list__movie",children:[Object(f.jsx)(M.b.Item.Meta,{avatar:Object(f.jsx)(k.a,{src:s}),title:Object(f.jsx)(i.b,{to:"/movie/".concat(n),children:a})}),Object(f.jsx)(i.b,{to:"/movie/".concat(n),children:Object(f.jsx)(v.a,{type:"primary",shape:"circle",icon:Object(f.jsx)(I.a,{})})})]})}),E=function(e){var t=e.title,c=e.popularMovies;return c.Loading||!c.result?Object(f.jsx)(y,{}):Object(f.jsx)(M.b,{className:"movie-list",size:"default",header:Object(f.jsx)("h2",{children:t}),bordered:!0,dataSource:c.result.results,renderItem:function(e){return Object(f.jsx)(S,{movie:e})}})},P=function(){var e="".concat(m,"/movie/now_playing?api_key=").concat(h,"&language=en-US&page=1"),t="".concat(m,"/movie/popular?api_key=").concat(h,"&language=en-US&page=1"),c="".concat(m,"/movie/popular?api_key=").concat(h,"&language=en-US&page=1"),n=d(e),a=d(t),s=d(c);return Object(f.jsxs)("div",{children:[Object(f.jsx)(N,{newMovies:n}),Object(f.jsxs)(_.a,{children:[Object(f.jsx)(O.a,{xs:{span:24},sm:{span:24},md:{span:12},lg:{span:12},className:"height",style:{marginBottom:10},children:Object(f.jsx)(E,{title:"Peliculas Populares",popularMovies:a})}),Object(f.jsx)(O.a,{xs:{span:24},sm:{span:24},md:{span:12},lg:{span:12},className:"height",style:{marginBottom:10},children:Object(f.jsx)(E,{title:"Top 20",popularMovies:s})})]})]})},B=function(){return"Estamos en New Movies"},C=function(){return"Estamos en Popular"},F=c(101),z=c.n(F),L=function(){return"Estamos en Movie"},T=function(){return"Error 404..."},U=c(143),H=(c(130),function(){return Object(f.jsx)("div",{className:"menu-top",children:Object(f.jsxs)(U.a,{theme:"dark",mode:"horizontal",children:[Object(f.jsx)(U.a.Item,{children:Object(f.jsx)(i.b,{to:"/proyecto-peliculas",children:"Home"})},"1"),Object(f.jsx)(U.a.Item,{children:Object(f.jsx)(i.b,{to:"/new-movies",children:"New Movies"})},"2"),Object(f.jsx)(U.a.Item,{children:Object(f.jsx)(i.b,{to:"/popular",children:"Popular"})},"3"),Object(f.jsx)(U.a.Item,{children:Object(f.jsx)(i.b,{to:"/search",children:"Search"})},"4")]})})}),J=function(){var e=o.a.Header,t=o.a.Content;return Object(f.jsx)(o.a,{children:Object(f.jsxs)(i.a,{children:[Object(f.jsx)(e,{children:Object(f.jsx)(H,{})}),Object(f.jsx)(t,{children:Object(f.jsxs)(j.c,{children:[Object(f.jsx)(j.a,{path:"/proyecto-peliculas",exact:!0,component:P}),Object(f.jsx)(j.a,{path:"/newMovies",exact:!0,component:B}),Object(f.jsx)(j.a,{path:"/popular",exact:!0,component:C}),Object(f.jsx)(j.a,{path:"/search",exact:!0,component:z.a}),Object(f.jsx)(j.a,{path:"/movie/:id",exact:!0,component:L}),Object(f.jsx)(j.a,{path:"*",component:T})]})})]})})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,144)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(J,{})}),document.getElementById("root")),D()}},[[131,1,2]]]);
//# sourceMappingURL=main.4cb60bfe.chunk.js.map