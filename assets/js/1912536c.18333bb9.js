"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3958],{3905:(a,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>c});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var i=n.createContext({}),o=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},l=function(a){var e=o(a.components);return n.createElement(i.Provider,{value:e},a.children)},k={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,i=a.parentName,l=r(a,["components","mdxType","originalType","parentName"]),N=o(t),c=s,d=N["".concat(i,".").concat(c)]||N[c]||k[c]||m;return t?n.createElement(d,p(p({ref:e},l),{},{components:t})):n.createElement(d,p({ref:e},l))}));function c(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,p=new Array(m);p[0]=N;var r={};for(var i in e)hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.originalType=a,r.mdxType="string"==typeof a?a:s,p[1]=r;for(var o=2;o<m;o++)p[o]=t[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},903:(a,e,t)=>{t.d(e,{Z:()=>s});var n=t(7294);const s=a=>{let{authorName:e,githubUsername:t}=a;return n.createElement("div",{className:"author"},"Autor: ",n.createElement("a",{target:"_blank",href:"https://github.com/"+t},e))}},5884:(a,e,t)=>{t.d(e,{Z:()=>m});var n=t(7294);const{useState:s}=n,m=a=>{let{text:e}=a;const[t,m]=s(!1);return n.createElement("span",{onClick:()=>m(!t),className:"react-spoiler-"+(t?"shown":"hidden")},e)}},8111:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>N,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var n=t(7462),s=(t(7294),t(3905)),m=t(903);t(5884);const p={title:"LCA"},r=void 0,i={unversionedId:"algoritmi-nad-grafovima-2/LCA",id:"algoritmi-nad-grafovima-2/LCA",title:"LCA",description:"Uvod",source:"@site/docs/algoritmi-nad-grafovima-2/LCA.md",sourceDirName:"algoritmi-nad-grafovima-2",slug:"/algoritmi-nad-grafovima-2/LCA",permalink:"/docs/algoritmi-nad-grafovima-2/LCA",draft:!1,editUrl:"https://github.com/x-fer/natpro/edit/main/docs/algoritmi-nad-grafovima-2/LCA.md",tags:[],version:"current",frontMatter:{title:"LCA"},sidebar:"materijaliSidebar",previous:{title:"2SAT",permalink:"/docs/algoritmi-nad-grafovima-2/2SAT"},next:{title:"Prosti brojevi",permalink:"/docs/matematika/prosti-brojevi"}},o={},l=[{value:"Uvod",id:"uvod",level:3},{value:"Problem",id:"problem",level:3},{value:"Primjena",id:"primjena",level:3},{value:"Rje\u0161enje u logaritamskoj slo\u017eenosti",id:"rje\u0161enje-u-logaritamskoj-slo\u017eenosti",level:3}],k={toc:l};function N(a){let{components:e,...p}=a;return(0,s.kt)("wrapper",(0,n.Z)({},k,p,{components:e,mdxType:"MDXLayout"}),(0,s.kt)(m.Z,{authorName:"Martin Josip Kocijan",githubUsername:"kocijan",mdxType:"Author"}),(0,s.kt)("h3",{id:"uvod"},"Uvod"),(0,s.kt)("p",null,"Nekad funkcije mo\u017eemo zapisati pomo\u0107u usmjerenih grafova. Tada svaki vrh ima izlazni stupanj to\u010dno 1. Ako ne postoji nijedan ciklus duljine ve\u0107e od 1, postojat \u0107e barem jedna petlja. Prvi nasljednik nekog vrha definiramo kao jedini njemu susjedan vrh. Mo\u017eemo napraviti kompoziciju funkcije, pa nas tako zanima drugi nasljednik, tre\u0107i nasljednik, pa \u010dak i ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mn",{parentName:"msup"},"18"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10^{18}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141079999999999em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"8"))))))))))))),"-ti nasljednik. Rje\u0161enje je da iterativno izra\u010dunamo svaki ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mi",{parentName:"msup"},"n"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.664392em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.664392em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))))))))))),"-ti nasljednik. Tada brzim potenciranjem mo\u017eemo izra\u010dunati svaki ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"m")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"m")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"))))),"-ti nasljednik u slo\u017eenosti ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"log"),(0,s.kt)("mo",{parentName:"mrow"},"\u2061"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(\\log m)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mop"},"lo",(0,s.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"."),(0,s.kt)("h3",{id:"problem"},"Problem"),(0,s.kt)("p",null,"Ako je stablo ukorijenjeno, za svaki vrh postoji to\u010dno jedan vrh koji nazivamo njegovim roditeljem. Za korijen stabla mo\u017eemo re\u0107i da nema korijen, ili ka\u017eemo da je on sam sebi roditelj. Predak nekog vrha definiramo ovako:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"ako je vrh ",(0,s.kt)("em",{parentName:"li"},"x")," roditelj vrha ",(0,s.kt)("em",{parentName:"li"},"y"),", tada ka\u017eemo i da je ",(0,s.kt)("em",{parentName:"li"},"x")," (prvi) predak od ",(0,s.kt)("em",{parentName:"li"},"y")),(0,s.kt)("li",{parentName:"ul"},"ako je vrh ",(0,s.kt)("em",{parentName:"li"},"x")," (",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),"-ti) predak vrha ",(0,s.kt)("em",{parentName:"li"},"y"),", a ",(0,s.kt)("em",{parentName:"li"},"y")," je roditelj vrha ",(0,s.kt)("em",{parentName:"li"},"z"),", tada je vrh ",(0,s.kt)("em",{parentName:"li"},"x")," (",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n+1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.66666em",verticalAlign:"-0.08333em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"))))),"-ti predak) vrha ",(0,s.kt)("em",{parentName:"li"},"z"))),(0,s.kt)("p",null,"Svaka dva vrha imaju zajedni\u010dke podskupove predaka, tj. za svaka dva vrha ",(0,s.kt)("em",{parentName:"p"},"u")," i ",(0,s.kt)("em",{parentName:"p"},"v")," postoji njima zajedni\u010dki predak ",(0,s.kt)("em",{parentName:"p"},"x")," takav da je svaki predak od ",(0,s.kt)("em",{parentName:"p"},"x")," ujedno i predak od ",(0,s.kt)("em",{parentName:"p"},"u")," i ",(0,s.kt)("em",{parentName:"p"},"v"),"."),(0,s.kt)("p",null,"\u017delimo za neka dva vrha saznati koji im je ",(0,s.kt)("strong",{parentName:"p"},"najni\u017ei zajedni\u010dki predak")," (engl. ",(0,s.kt)("em",{parentName:"p"},"lowest common ancestor"),", ",(0,s.kt)("em",{parentName:"p"},"LCA"),") u stablu, odnosno koji im je zajedni\u010dki predak najudaljeniji od korijena stabla."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Primjer najni\u017eeg zajedni\u010dkog predka",src:t(1279).Z,width:"156",height:"415"})),(0,s.kt)("p",null,"Na slici je tamno zeleno obojan najni\u017ei zajedni\u010dki predak vrhova ",(0,s.kt)("em",{parentName:"p"},"x")," i ",(0,s.kt)("em",{parentName:"p"},"y"),". Svijetlo zeleni vrhovi predstavljaju zajedni\u010dke predke vrhova ",(0,s.kt)("em",{parentName:"p"},"x")," i ",(0,s.kt)("em",{parentName:"p"},"y")," koji nisu najni\u017ei."),(0,s.kt)("h3",{id:"primjena"},"Primjena"),(0,s.kt)("p",null,"Za svaka tri vrha ",(0,s.kt)("em",{parentName:"p"},"x"),", ",(0,s.kt)("em",{parentName:"p"},"y")," i ",(0,s.kt)("em",{parentName:"p"},"z")," u nekom grafu ",(0,s.kt)("em",{parentName:"p"},"G")," postoji vrh ",(0,s.kt)("em",{parentName:"p"},"m")," takav da je on sadr\u017ean u svakom putu izme\u0111u neka dva vrha me\u0111u ",(0,s.kt)("em",{parentName:"p"},"x"),", ",(0,s.kt)("em",{parentName:"p"},"y")," i ",(0,s.kt)("em",{parentName:"p"},"z"),". Ako imamo neke ",(0,s.kt)("em",{parentName:"p"},"x"),", ",(0,s.kt)("em",{parentName:"p"},"y")," i ",(0,s.kt)("em",{parentName:"p"},"z"),", mo\u017eemo izra\u010dunati ",(0,s.kt)("inlineCode",{parentName:"p"},"lca(x,y)"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"lca(x,z)"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"lca(y,z)")," i ",(0,s.kt)("inlineCode",{parentName:"p"},"lca(x,lca(y,z))"),". Barem tri od njih bit \u0107e isti vrh. Tako\u0111er vrijedi ",(0,s.kt)("inlineCode",{parentName:"p"},"lca(x,lca(y,z)) == lca(y,lca(x,z)) == lca(z,lca(x,y))"),"."),(0,s.kt)("p",null,"Neka smo za svaki vrh izra\u010dunali njegovu dubinu, odnosno njegovu udaljenost od korijena. Ozna\u010dimo dubinu vrha ",(0,s.kt)("em",{parentName:"p"},"x")," sa ",(0,s.kt)("inlineCode",{parentName:"p"},"dep[x]"),". Tada je udaljenost nekog vrha ",(0,s.kt)("em",{parentName:"p"},"x")," od vrha ",(0,s.kt)("em",{parentName:"p"},"y")," jednaka: ",(0,s.kt)("inlineCode",{parentName:"p"},"dep[x] + dep[y] - 2 * dep[lca(x,y)]"),"."),(0,s.kt)("h3",{id:"rje\u0161enje-u-logaritamskoj-slo\u017eenosti"},"Rje\u0161enje u logaritamskoj slo\u017eenosti"),(0,s.kt)("p",null,"Dovoljno je za svaki vrh izra\u010dunati njegov ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mi",{parentName:"msup"},"i"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^i")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.824664em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.824664em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))))))))))),"-ti predak, za svaki nenegativni cijeli broj ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"i")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.65952em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i")))))," manji ili jednak ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mo",{parentName:"msub"},(0,s.kt)("mi",{parentName:"mo"},"log"),(0,s.kt)("mo",{parentName:"mo"},"\u2061")),(0,s.kt)("mn",{parentName:"msub"},"2")),(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\log_{2}n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.93858em",verticalAlign:"-0.24414em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},(0,s.kt)("span",{parentName:"span",className:"mop"},"lo",(0,s.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.20696799999999996em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.4558600000000004em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.24414em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),", gdje je ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," broj vrhova u grafu. Re\u0107i \u0107emo da je korijen sam sebi roditelj."),(0,s.kt)("p",null,"Algoritam je opisan u donjem kodu."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\nusing namespace std;\n\nconst int N = 1e5;\nconst int LOG = 22;\n\nint n;\n// a[i][j] pamti 2^i-ti predak od j\n// a[0][j] predstavlja roditelja od j\nint a[LOG][N];\nint dep[N];\n\n// lca(u, v) == lca(v, u)\nint lca(int u, int v)\n{\n  if (dep[u] < dep[v]) swap(u, v);\n  // sada je sigurno dep[u] >= dep[v]\n\n  // ako u i v nisu na istoj razini (udaljenosti od korijena), tada je x-ti predak od u jednak x-tom predku od v samo ako se radi o korijenu\n  for (int i = LOG - 1; i >= 0; i--) {\n    // svaki broj ima jedinstveni binarni zapis\n    // di\u017eemo vrh u na istu razinu kao \u0161to je vrh v\n    // to jest, di\u017eemo vrh u za dep[u] - dep[v] razina\n    if (dep[a[i][u]] >= dep[v])\n      u = a[i][u];\n  }\n\n  // dva vrha se nikada ne podudaraju ako nisu na istoj razini\n  // dep[lca(u,v)] <= min(dep[u], dep[v])\n  // ako smo dizanjem u do razine s v dobili da su u i v isti vrh, ispi\u0161emo ga, to nam je tra\u017eeni LCA\n  // ovo se de\u0161ava kada je u predak od v, ili je v predak od u\n  if (u == v) return u;\n\n  // di\u017eemo u i v na istu razinu \u010dim bli\u017ee korijenu, ali dokle god nisu isti\n  for (int i = LOG - 1; i >= 0; i--) {\n    if (a[i][u] != a[i][v]) {\n      u = a[i][u];\n      v = a[i][v];\n    }\n  }\n  \n  // maksimalno smo digli u i v na istu razinu bez da su isti\n  // slijedi da su roditelji od u i v isti\n  // a[0][u] = a[0][v], pa nam je svejedno koji vratimo, to je tra\u017eeni LCA\n  return a[0][u];\n}\n\nint main()\n{\n  scanf("%d", &n);\n  // 2^0=1-ti predak od korijena je on sam\n  a[0][1] = 1;\n  // dubina nekog cvora je njegova udaljenost od korijena + 1\n  dep[1] = 1;\n  for (int i = 1; i <= n; i++) {\n    int m;\n    // \u010dvor i ima m djece\n    scanf("%d", &m);\n    for (int j = 0; j < m; j++) {\n      int ch;\n      // unosimo dijete od \u010dvora i\n      scanf("%d", &ch);\n      // roditelj \u010dvora ch jest i\n      a[0][ch] = i;\n      // ch je za 1 udaljeniji od korijena nego i\n      dep[ch] = dep[i] + 1;\n    }\n  }\n  // pretprocesiramo matricu predaka\n  for (int i = 1; i < LOG; i++) {\n    // obavezno mora biti ovo iznad vanjska petlja a ovo ispod unutarnja\n    for (int j = 1; j <= n; j++) {\n      // ovo je klju\u010dno\n      // 2^i-ti predak od j jest 2^(i-1)-ti predak od 2^(i-1)-tog predka od j\n      a[i][j] = a[i - 1][a[i - 1][j]];\n    }\n  }\n  int q;\n  // postavljamo q upita o najni\u017eim zajedni\u010dkim predcima\n  scanf("%d", &q);\n  for (int i = 0; i < q; i++) {\n    int u, v;\n    // zanima nas najni\u017ei zajedni\u010dki predak vrhova u i v\n    scanf("%d%d", &u, &v);\n    // ispisujemo lca(u, v) koja ga ra\u010duna\n    printf("%d\\n", lca(u, v));\n  }\n  return 0;\n}\n')))}N.isMDXComponent=!0},1279:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/lca-18f8a2c9260dac6ca42f6acccc5cad28.png"}}]);