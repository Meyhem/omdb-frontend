(this["webpackJsonpomdb-frontend"]=this["webpackJsonpomdb-frontend"]||[]).push([[0],{35:function(e,t,a){e.exports=a(52)},46:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),i=a(16),l=a(15),o=a(8),s=Object(o.a)({basename:"/omdb-frontend"}),u=a(6),m=a.n(u),f=a(14),d=a(5),E=a(33),p=a(29),v=a.n(p),b=a(30),h=a(12),g=a(31),O=Object(g.actionCreatorFactory)("movie-search"),x=O("set-search"),N=O("set-page"),y={BEGIN:O("BEGIN_FETCH_SEARCH_MOVIES"),ERROR:O("ERROR_FETCH_SEARCH_MOVIES"),SUCCESS:O("SUCCESS_FETCH_SEARCH_MOVIES")},S={BEGIN:O("BEGIN_FETCH_MOVIE_DETAIL"),ERROR:O("ERROR_FETCH_MOVIE_DETAIL"),SUCCESS:O("SUCCESS_FETCH_MOVIE_DETAIL")},C=O("SET_MOVIE_FAVOURITE"),j=O("RESET_MOVIE_FAVOURITE");console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/omdb-frontend"}).TEST_VAL);var w={search:"",page:1,loading:!1,movieThumbnails:[],movieDetail:null,favourites:function(e){var t=localStorage.getItem(e);return JSON.parse(t)}("favorited-movies")||[]},I=Object(b.reducerWithInitialState)(w).case(x,(function(e,t){return Object(h.a)(e,(function(e){e.search=t,e.movieThumbnails=[],e.page=1}))})).case(N,(function(e,t){return Object(h.a)(e,(function(e){e.page=t}))})).case(y.SUCCESS,(function(e,t){return Object(h.a)(e,(function(e){e.movieThumbnails=t,e.loading=!1}))})).case(S.SUCCESS,(function(e,t){return Object(h.a)(e,(function(e){e.movieDetail=t,e.loading=!1}))})).case(S.BEGIN,(function(e,t){return Object(h.a)(e,(function(e){e.loading=!1,e.movieDetail=null}))})).case(C,(function(e,t){return Object(h.a)(e,(function(e){e.favourites.push(t.movie)}))})).case(j,(function(e,t){return Object(h.a)(e,(function(e){e.favourites.splice(e.favourites.findIndex((function(e){return e.id===t.movieId})),1)}))})).cases([y.BEGIN],(function(e,t){return Object(h.a)(e,(function(e){e.loading=!0}))})).cases([y.ERROR,S.ERROR],(function(e,t){return Object(h.a)(e,(function(e){e.loading=!1}))})),R=m.a.mark(D),T=m.a.mark(F),k=m.a.mark(G),_=m.a.mark(V),M=m.a.mark(P),U=m.a.mark(A),B=m.a.mark(H);function D(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.d)(G);case 2:return e.next=4,Object(d.h)(y.BEGIN.type,P);case 4:return e.next=6,Object(d.h)(S.BEGIN.type,A);case 6:return e.next=8,Object(d.h)(N.type,F);case 8:return e.next=10,Object(d.h)(C.type,H);case 10:return e.next=12,Object(d.h)(j.type,H);case 12:case"end":return e.stop()}}),R)}function F(e){var t;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(d.f)((function(e){return e.movies.search}));case 2:return t=a.sent,a.next=5,Object(d.e)(y.BEGIN({query:t,page:e.payload}));case 5:case"end":return a.stop()}}),T)}function G(){var e,t,a;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=null;case 1:return n.next=4,Object(d.g)(x.type);case 4:if(t=n.sent,!((a=t.payload).length<5)){n.next=8;break}return n.abrupt("continue",1);case 8:if(!e){n.next=11;break}return n.next=11,Object(d.b)(e);case 11:return n.next=13,Object(d.d)(V,a);case 13:e=n.sent,n.next=1;break;case 16:case"end":return n.stop()}}),k)}function V(e){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.c)(1200);case 2:return t.next=4,Object(d.e)(y.BEGIN({query:e,page:1}));case 4:case"end":return t.stop()}}),_)}function P(e){var t,a,n;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(d.a)(fetch,"https://www.omdbapi.com/?s=".concat(e.payload.query,"&page=").concat(e.payload.page,"&apikey=82342796"));case 3:return t=r.sent,r.next=6,t.json();case 6:if(!(a=r.sent).Error){r.next=11;break}return r.next=10,Object(d.e)(y.SUCCESS(null));case 10:return r.abrupt("return");case 11:return n=a.Search.map((function(e){return{id:e.imdbID,name:e.Title,year:Number(e.Year),posterUrl:"N/A"===e.Poster?null:e.Poster}})),r.next=14,Object(d.e)(y.SUCCESS(n));case 14:r.next=20;break;case 16:return r.prev=16,r.t0=r.catch(0),r.next=20,Object(d.e)(y.ERROR(r.t0));case 20:case"end":return r.stop()}}),M,null,[[0,16]])}function A(e){var t,a,n;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(d.a)(fetch,"https://www.omdbapi.com/?apikey=82342796&i=".concat(e.payload.id));case 3:return t=r.sent,r.next=6,t.json();case 6:if(!(a=r.sent).Error){r.next=13;break}return r.next=10,Object(d.e)(S.SUCCESS(null));case 10:return alert("Unable to display page (".concat(a.Error,")")),s.push("/"),r.abrupt("return");case 13:return console.log(a),n={id:a.imdbID,title:a.Title,genre:a.Genre,released:a.Released,year:Number(a.Year),poster:a.Poster,plot:a.Plot},r.next=17,Object(d.e)(S.SUCCESS(n));case 17:r.next=23;break;case 19:return r.prev=19,r.t0=r.catch(0),r.next=23,Object(d.e)(S.ERROR(r.t0));case 23:case"end":return r.stop()}}),U,null,[[0,19]])}function H(){var e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.f)((function(e){return e.movies.favourites}));case 2:e=t.sent,a="favorited-movies",n=e,localStorage.setItem(a,JSON.stringify(n));case 4:case"end":return t.stop()}var a,n}),B)}var L=Object(f.c)({movies:I}),J=m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.d)(D);case 2:case"end":return e.stop()}}),e)})),W=Object(E.a)(),q=Object(f.e)(L,void 0,Object(f.a)(v.a,W));W.run(J);var Y=a(34),z=(a(46),function(e){return r.a.createElement("div",{className:"search-bar"},r.a.createElement("input",{className:"input ".concat(e.inputClassName||""),type:"text",value:e.value,placeholder:e.placeholder,disabled:e.disabled,onChange:function(t){return!e.disabled&&e.onChange(t.target.value)}}))}),$=(a(47),a(23)),K=function(e){return r.a.createElement("div",{className:"movie-box box"},r.a.createElement($.a,{to:"/movie/".concat(e.id)},r.a.createElement("div",null,r.a.createElement("strong",null,e.name)),r.a.createElement("div",{className:""},r.a.createElement("img",{src:e.posterUrl,alt:"Poster"}))))},Q=function(){return r.a.createElement("svg",{width:"58",height:"58",viewBox:"0 0 58 58",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("g",{fill:"#ddd",fillRule:"evenodd"},r.a.createElement("g",{transform:"translate(2 1)",stroke:"#FFF",strokeWidth:"1.5"},r.a.createElement("circle",{cx:"42.601",cy:"11.462",r:"5",fillOpacity:"1",fill:"#fff"},r.a.createElement("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1.3s",values:"1;0;0;0;0;0;0;0",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("circle",{cx:"49.063",cy:"27.063",r:"5",fillOpacity:"0",fill:"#fff"},r.a.createElement("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1.3s",values:"0;1;0;0;0;0;0;0",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("circle",{cx:"42.601",cy:"42.663",r:"5",fillOpacity:"0",fill:"#fff"},r.a.createElement("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1.3s",values:"0;0;1;0;0;0;0;0",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("circle",{cx:"27",cy:"49.125",r:"5",fillOpacity:"0",fill:"#fff"},r.a.createElement("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1.3s",values:"0;0;0;1;0;0;0;0",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("circle",{cx:"11.399",cy:"42.663",r:"5",fillOpacity:"0",fill:"#fff"},r.a.createElement("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1.3s",values:"0;0;0;0;1;0;0;0",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("circle",{cx:"4.938",cy:"27.063",r:"5",fillOpacity:"0",fill:"#fff"},r.a.createElement("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1.3s",values:"0;0;0;0;0;1;0;0",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("circle",{cx:"11.399",cy:"11.462",r:"5",fillOpacity:"0",fill:"#fff"},r.a.createElement("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1.3s",values:"0;0;0;0;0;0;1;0",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("circle",{cx:"27",cy:"5",r:"5",fillOpacity:"0",fill:"#fff"},r.a.createElement("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1.3s",values:"0;0;0;0;0;0;0;1",calcMode:"linear",repeatCount:"indefinite"})))))},X=(a(49),Object(i.b)((function(e){return Object(Y.a)({},e.movies)}),(function(e){return{setSearchText:function(t){return e(x(t))},setPage:function(t){return e(N(t))}}}))((function(e){return r.a.createElement("div",{className:"movies-search-page"},r.a.createElement("section",{className:"hero is-info"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"control"},r.a.createElement(z,{value:e.search,inputClassName:"is-large ".concat(null===e.movieThumbnails?"is-danger":""),placeholder:"Enter movie title",onChange:e.setSearchText})))))))),r.a.createElement("section",{className:"container movie-box-container"},!e.loading&&e.movieThumbnails&&!!e.movieThumbnails.length&&e.page>1&&r.a.createElement("button",{className:"button primary next-button",onClick:function(){return e.setPage(e.page-1)}},"Prev \u2190"),"\xa0",!e.loading&&e.movieThumbnails&&!!e.movieThumbnails.length&&r.a.createElement("button",{className:"button primary next-button",onClick:function(){return e.setPage(e.page+1)}},"Next \u2192"),e.loading&&r.a.createElement(Q,null),r.a.createElement("div",{className:"columns is-multiline"},!e.loading&&e.movieThumbnails&&e.movieThumbnails.map((function(e){return r.a.createElement("div",{className:"column is-mobile-full is-one-fifth",key:e.id},r.a.createElement(K,{name:e.name,id:e.id,posterUrl:e.posterUrl}))})))))}))),Z=(a(50),Object(i.b)((function(e,t){return{id:t.match.params.id,movie:e.movies.movieDetail,loading:e.movies.loading}}),(function(e){return{fetchMovie:function(t){return e(S.BEGIN({id:t}))}}}))((function(e){var t=e.id,a=e.movie,n=e.loading,c=e.fetchMovie;return r.a.useEffect((function(){c(t)}),[t,c]),r.a.createElement("div",{className:"container movie-detail-page"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-4"}),n&&r.a.createElement("div",{className:"column is-4"},r.a.createElement(Q,null)),!n&&r.a.createElement("div",{className:"card favourite-card column is-4"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-3by4"},r.a.createElement("img",{src:null===a||void 0===a?void 0:a.poster,alt:"Poster"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-4"},null===a||void 0===a?void 0:a.title," ",r.a.createElement("span",{className:"favourite-button"},"\u2605")),r.a.createElement("p",{className:"subtitle"},null===a||void 0===a?void 0:a.year))),r.a.createElement("div",{className:"content"},r.a.createElement("p",null,null===a||void 0===a?void 0:a.genre),r.a.createElement("p",null,null===a||void 0===a?void 0:a.plot),r.a.createElement("br",null),r.a.createElement("time",{dateTime:"2016-1-1"},null===a||void 0===a?void 0:a.released))))))}))),ee=function(){return r.a.createElement(i.a,{store:q},r.a.createElement("div",{className:"page"},r.a.createElement("section",null,r.a.createElement("h1",{className:"is-size-1"},"OMDB - Demo app")),r.a.createElement(l.b,{history:s},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,component:X}),r.a.createElement(l.a,{path:"/movie/:id",exact:!0,component:Z})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(51);c.render(n.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.7f014bff.chunk.js.map