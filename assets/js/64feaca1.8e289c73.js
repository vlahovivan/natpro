"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1040],{3905:(a,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>u});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var i=n.createContext({}),l=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},o=function(a){var e=l(a.components);return n.createElement(i.Provider,{value:e},a.children)},k="mdxType",N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,i=a.parentName,o=r(a,["components","mdxType","originalType","parentName"]),k=l(t),c=s,u=k["".concat(i,".").concat(c)]||k[c]||N[c]||m;return t?n.createElement(u,p(p({ref:e},o),{},{components:t})):n.createElement(u,p({ref:e},o))}));function u(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,p=new Array(m);p[0]=c;var r={};for(var i in e)hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.originalType=a,r[k]="string"==typeof a?a:s,p[1]=r;for(var l=2;l<m;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},903:(a,e,t)=>{t.d(e,{Z:()=>s});var n=t(7294);const s=a=>{let{authorName:e,githubUsername:t}=a;return n.createElement("div",{className:"author"},"Autor: ",n.createElement("a",{target:"_blank",href:"https://github.com/"+t},e))}},5884:(a,e,t)=>{t.d(e,{Z:()=>m});var n=t(7294);const{useState:s}=n,m=a=>{let{text:e}=a;const[t,m]=s(!1);return n.createElement("span",{onClick:()=>m(!t),className:"react-spoiler-"+(t?"shown":"hidden")},e)}},747:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>o});var n=t(7462),s=(t(7294),t(3905)),m=t(903);t(5884);const p={title:"Union-find struktura"},r=void 0,i={unversionedId:"algoritmi-nad-grafovima-1/union-find-struktura",id:"algoritmi-nad-grafovima-1/union-find-struktura",title:"Union-find struktura",description:"Zadatak",source:"@site/docs/algoritmi-nad-grafovima-1/union-find-struktura.md",sourceDirName:"algoritmi-nad-grafovima-1",slug:"/algoritmi-nad-grafovima-1/union-find-struktura",permalink:"/docs/algoritmi-nad-grafovima-1/union-find-struktura",draft:!1,editUrl:"https://github.com/x-fer/natpro/edit/main/docs/algoritmi-nad-grafovima-1/union-find-struktura.md",tags:[],version:"current",frontMatter:{title:"Union-find struktura"},sidebar:"materijaliSidebar",previous:{title:"Najkra\u0107i putovi",permalink:"/docs/algoritmi-nad-grafovima-1/najkraci-putovi"},next:{title:"MST",permalink:"/docs/algoritmi-nad-grafovima-1/mst"}},l={},o=[{value:"Zadatak",id:"zadatak",level:3},{value:"Struktura",id:"struktura",level:2},{value:"Implementacija",id:"implementacija",level:2}],k={toc:o},N="wrapper";function c(a){let{components:e,...t}=a;return(0,s.kt)(N,(0,n.Z)({},k,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)(m.Z,{authorName:"Maja Milas",githubUsername:"javascript-m",mdxType:"Author"}),(0,s.kt)("h3",{id:"zadatak"},"Zadatak"),(0,s.kt)("p",null,"Zamislite da u nekoj zemlji postoji ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," gradova i ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"m")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"m")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m")))))," cesta koje ih povezuju, a u svakom gradu na po\u010detku \u017eivi ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"x")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," ljudi. Tijekom vremena, neke ceste postaju nestabilne i uru\u0161avaju se. U tom svijetu provodite 2 oblika queryja:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"D ",(0,s.kt)("strong",{parentName:"li"},"K")," - uru\u0161ila se cesta ",(0,s.kt)("strong",{parentName:"li"},"K")),(0,s.kt)("li",{parentName:"ul"},"P ",(0,s.kt)("strong",{parentName:"li"},"A x")," - populacija ",(0,s.kt)("strong",{parentName:"li"},"A"),"-tog grada postala je ",(0,s.kt)("strong",{parentName:"li"},"x"))),(0,s.kt)("p",null,"Vi ste mladi nadobudni geograf i \u017eelite nakon svakog upita odgovoriti koji je broj stanovnika trenutno najnaseljenije regije. Regija je definirana kao podskup gradova u kojem se mo\u017ee do\u0107i cestom izme\u0111u bilo koja dva."),(0,s.kt)("p",null,"Ovaj je zadatak ovdje samo za ilustraciju, ali probajte malo razmisliti kako biste ga rije\u0161ili. Puni tekst problema mo\u017eete na\u0107i ",(0,s.kt)("a",{parentName:"p",href:"https://www.codechef.com/problems/ABROADS"},"ovdje"),"."),(0,s.kt)("h2",{id:"struktura"},"Struktura"),(0,s.kt)("p",null,"Union find (nekad i disjoint set) je struktura podataka koja elemente raspodjeljuje u ",(0,s.kt)("strong",{parentName:"p"},"skupove"),". Za dva skupa ka\u017eemo da su ",(0,s.kt)("strong",{parentName:"p"},"disjunktni")," (disjoint) ako ne postoji element koji pripada u oba skupa. Struktura je napravljena tako da svaki skup ima svoga predstavnika (representative), a elementi skupa su preko lanca povezani s predstavnikom. Na slici ispod su prikazana tri skupa, {1, 4, 7}, {5} i {2, 3, 6, 8}. Predstavnici skupova su redom 4, 5 i 2."),(0,s.kt)("img",{src:"/img/algoritmi-nad-grafovima-1/uf1.png",alt:"union_find",width:"500"}),(0,s.kt)("p",null,"Predstavnike tako\u0111er mo\u017eemo gledati na razini lanca. Npr. re\u0107i \u0107emo da elementi 6 i 8 imaju za predstavnika element 3."),(0,s.kt)("p",null,"Union find podr\u017eava dvije operacije:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"unite(",(0,s.kt)("span",{parentName:"strong",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"))))),",",(0,s.kt)("span",{parentName:"strong",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"b")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"))))),")")," - operacija koja spaja skup koji sadr\u017ei element ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," sa skupom koji sadr\u017ei element ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"b")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"find(",(0,s.kt)("span",{parentName:"strong",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"x")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))),")")," - operacija koja tra\u017ei predstavnika skupa koji sadr\u017ei element ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"x")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))))),(0,s.kt)("admonition",{title:"bitno",type:"important"},(0,s.kt)("p",{parentName:"admonition"},"Obje operacije rade u logaritamskoj slo\u017eenosti.")),(0,s.kt)("p",null,"Dva skupa mo\u017eemo spojiti tako da pove\u017eemo njihove predstavnike. Na slici ispod spojili smo skupove {1, 4, 7} i {2, 3, 6, 8} tako da 2 postaje novi predstavnik, a skup koji u kona\u010dnici dobivamo je {1, 2, 3, 4, 6, 7, 8}."),(0,s.kt)("img",{src:"/img/algoritmi-nad-grafovima-1/uf2.png",alt:"union_find2",width:"400"}),(0,s.kt)("p",null,"Pokazuje se da je prilikom spajanja uvijek ",(0,s.kt)("strong",{parentName:"p"},"efikasnije spajati manji skup na ve\u0107i"),". Na taj je na\u010din na\u0161 skup vi\u0161e 'razgranat' i mo\u017eemo posti\u0107i logaritamsku slo\u017eenost pretra\u017eivanja."),(0,s.kt)("h2",{id:"implementacija"},"Implementacija"),(0,s.kt)("p",null,"Za ovu \u0107emo implementaciju koristiti 1D polje ",(0,s.kt)("inlineCode",{parentName:"p"},"link")," gdje \u0107e na i-tom mjestu pisati ",(0,s.kt)("em",{parentName:"p"},"predstavnik i-tog elemenata")," te polje ",(0,s.kt)("inlineCode",{parentName:"p"},"len")," gdje \u0107emo na mjestima na kojima su predstavnici pisati ",(0,s.kt)("em",{parentName:"p"},"veli\u010dina skupa kojeg predstavljaju"),". Na gornjoj bi slici bilo ",(0,s.kt)("inlineCode",{parentName:"p"},"link[7]=4")," i ",(0,s.kt)("inlineCode",{parentName:"p"},"len[2]=7"),"."),(0,s.kt)("p",null,"Na po\u010detku svaki element pripada svom skupu pa je i sam svoj predstavnik. Duljina svih skupova je ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"))))),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"for(int i=0; i<n; i++) link[i] = i;\nfor(int i=0; i<n; i++) len[i] = 1;\n")),(0,s.kt)("p",null,"Funkcija ",(0,s.kt)("strong",{parentName:"p"},"find(",(0,s.kt)("span",{parentName:"strong",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"x")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))),")")," vra\u0107a predstavnika skupa koji sadr\u017ei element ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"x")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))),". Pretra\u017eivanje obavljamo penjanjem po lancu dok ne do\u0111emo do predstavnika."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"int find(int x) {\n    while(x != link[x]) x = link[x];\n    return x;\n}\n")),(0,s.kt)("p",null,"Mo\u017eemo napisati i funkciju ",(0,s.kt)("strong",{parentName:"p"},"same(a,b)")," koja provjerava jesu li dva elementa u istom skupu."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"bool same(int a, int b) {\n    return find(a) == find(b);\n}\n")),(0,s.kt)("p",null,"Funkcija ",(0,s.kt)("strong",{parentName:"p"},"unite(",(0,s.kt)("span",{parentName:"strong",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"))))),",",(0,s.kt)("span",{parentName:"strong",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"b")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"))))),")")," spaja skupove koji sadr\u017ee element ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," i element ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"b")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"))))),". Prvo nalazimo njihove predstavnike i provjeravamo koji je skup manji, a potom spajamo manji skup na ve\u0107i."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"void unite(int a, int b) {\n    a = find(a);\n    b = find(b);\n    if(len[a] < len[b]) swap(a,b);\n    len[a] += len[b];\n    link[b] = a;\n}\n")),(0,s.kt)("p",null,"Poku\u0161ajte sada sami napisati kod koji bi rje\u0161avao problem s po\u010detka lekcije. Happy coding!"))}c.isMDXComponent=!0}}]);