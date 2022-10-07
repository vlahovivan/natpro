"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1463],{3905:(a,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>d});var n=t(7294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function i(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function s(a,e){if(null==a)return{};var t,n,m=function(a,e){if(null==a)return{};var t,n,m={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var o=n.createContext({}),p=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):i(i({},e),a)),t},l=function(a){var e=p(a.components);return n.createElement(o.Provider,{value:e},a.children)},k={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(a,e){var t=a.components,m=a.mdxType,r=a.originalType,o=a.parentName,l=s(a,["components","mdxType","originalType","parentName"]),c=p(t),d=m,N=c["".concat(o,".").concat(d)]||c[d]||k[d]||r;return t?n.createElement(N,i(i({ref:e},l),{},{components:t})):n.createElement(N,i({ref:e},l))}));function d(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var r=t.length,i=new Array(r);i[0]=c;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=a,s.mdxType="string"==typeof a?a:m,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},903:(a,e,t)=>{t.d(e,{Z:()=>m});var n=t(7294);const m=a=>{let{authorName:e,githubUsername:t}=a;return n.createElement("div",{className:"author"},"Autor: ",n.createElement("a",{target:"_blank",href:"https://github.com/"+t},e))}},5884:(a,e,t)=>{t.d(e,{Z:()=>r});var n=t(7294);const{useState:m}=n,r=a=>{let{text:e}=a;const[t,r]=m(!1);return n.createElement("span",{onClick:()=>r(!t),className:"react-spoiler-"+(t?"shown":"hidden")},e)}},4565:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(7462),m=(t(7294),t(3905)),r=t(903);t(5884);const i={title:"MST"},s=void 0,o={unversionedId:"algoritmi-nad-grafovima-1/mst",id:"algoritmi-nad-grafovima-1/mst",title:"MST",description:"Minimalno razapinju\u0107e stablo (MST)",source:"@site/docs/algoritmi-nad-grafovima-1/mst.md",sourceDirName:"algoritmi-nad-grafovima-1",slug:"/algoritmi-nad-grafovima-1/mst",permalink:"/docs/algoritmi-nad-grafovima-1/mst",draft:!1,editUrl:"https://github.com/x-fer/natpro/edit/main/docs/algoritmi-nad-grafovima-1/mst.md",tags:[],version:"current",frontMatter:{title:"MST"},sidebar:"materijaliSidebar",previous:{title:"Union-find struktura",permalink:"/docs/algoritmi-nad-grafovima-1/union-find-struktura"},next:{title:"Topolo\u0161ko sortiranje",permalink:"/docs/algoritmi-nad-grafovima-2/topolosko-sortiranje"}},p={},l=[{value:"Minimalno razapinju\u0107e stablo (MST)",id:"minimalno-razapinju\u0107e-stablo-mst",level:2},{value:"Kruskalov algoritam",id:"kruskalov-algoritam",level:2},{value:"Za\u0161to ovo radi?",id:"za\u0161to-ovo-radi",level:3},{value:"Implementacija",id:"implementacija",level:3}],k={toc:l};function c(a){let{components:e,...t}=a;return(0,m.kt)("wrapper",(0,n.Z)({},k,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)(r.Z,{authorName:"Maja Milas",githubUsername:"javascript-m",mdxType:"Author"}),(0,m.kt)("h2",{id:"minimalno-razapinju\u0107e-stablo-mst"},"Minimalno razapinju\u0107e stablo (MST)"),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Razapinju\u0107e stablo")," nekog grafa je podgraf koji se sastoji od svih njegovih vrhova i nekih bridova tako da ",(0,m.kt)("strong",{parentName:"p"},"postoji put izme\u0111u svaka dva vrha"),". Kao i obi\u010dna stabla, razapinju\u0107a stabla su povezana i nemaju cikluse. MST je razapinju\u0107e stablo \u010diji je zbroj te\u017eina bridova minimalan."),(0,m.kt)("img",{src:"/img/algoritmi-nad-grafovima-1/mst1.png",alt:"mst1",width:"600"}),(0,m.kt)("p",null,"Na slici lijevo prikazan je neki graf, a desno njegov MST. Sli\u010dnom logikom mo\u017eemo konstruirati i maksimalno razapinju\u0107e stablo (ima maksimalnu sumu te\u017eina bridova)."),(0,m.kt)("admonition",{title:"primijetite",type:"note"},(0,m.kt)("p",{parentName:"admonition"},"Minimalno (maksimalno) razapinju\u0107e stablo ne mora biti jedinstven graf.")),(0,m.kt)("h2",{id:"kruskalov-algoritam"},"Kruskalov algoritam"),(0,m.kt)("p",null,"Kruskalov je algoritam jedan u nizu algoritama koji ",(0,m.kt)("strong",{parentName:"p"},"konstruiraju MST"),". Na po\u010detku \u0107emo u graf dodati samo vrhove, a potom \u0107emo dodavati bridove po redu ",(0,m.kt)("em",{parentName:"p"},"od manjih prema ve\u0107ima"),". Algoritam dodaje brid u stablo ako dodavanjem tog brida ne nastaje ciklus. Kako bi to jednostavno provjeravali, koristit \u0107emo Union find strukturu."),(0,m.kt)("p",null,"Pogledajmo kako bi Kruskalov algoritam radio za graf s prethodne slike. Na po\u010detku u stablu imamo samo vrhove i svaki vrh \u010dini zaseban skup. Bridove smo sortirali po te\u017einama."),(0,m.kt)("img",{src:"/img/algoritmi-nad-grafovima-1/mst2.png",alt:"mst2",width:"500"}),(0,m.kt)("p",null,"Prvo dodajemo brid 5-6 te skupove {5} i {6} spajamo funkcijom unite (lijevo). Nakon toga dodajemo bridove 1-2, 3-6 i 1-5 na sli\u010dan na\u010din spajamo odgovaraju\u0107e skupove (desno)."),(0,m.kt)("img",{src:"/img/algoritmi-nad-grafovima-1/mst3.png",alt:"mst3",width:"600"}),(0,m.kt)("p",null,"Sada u strukturi imamo 2 skupa: {1,2,3,5,6} i {4}. Sljede\u0107i brid na popisu je 2-3, ali njega ne\u0107emo dodavati jer su 2 i 3 unutar iste komponente (dodavanjem bi nastao ciklus). Sli\u010dno je i za brid 4-5. Na kraju dodamo brid 4-6 i gotovi smo (jej!)."),(0,m.kt)("img",{src:"/img/algoritmi-nad-grafovima-1/mst4.png",alt:"mst4",width:"300"}),(0,m.kt)("admonition",{title:"primijetite",type:"note"},(0,m.kt)("p",{parentName:"admonition"},"Kruskalov algoritam spada u pohlepne algoritme.")),(0,m.kt)("h3",{id:"za\u0161to-ovo-radi"},"Za\u0161to ovo radi?"),(0,m.kt)("p",null,"Ovaj \u0107e algoritam uvijek u MST dodati najmanji brid, ali zamislimo da postoji situacija kada to nije rje\u0161enje. U na\u0161em bi primjeru to zna\u010dilo da postoji bolje razapinju\u0107e stablo koje ne sadr\u017eava brid 5-6. Me\u0111utim, ovo ne mo\u017ee biti rje\u0161enje zato \u0161to uvijek mo\u017eemo maknuti jedan brid iz takvog grafa i zamijeniti ga s bridom 5-6 \u0161to sigurno smanjuje rje\u0161enje (primjer na slici ispod). Sli\u010dnim razmi\u0161ljanjem mo\u017eemo obrazlo\u017eiti i dodavanje drugih bridova. Dakle, Kruskalov algoritam radi."),(0,m.kt)("img",{src:"/img/algoritmi-nad-grafovima-1/mst5.png",alt:"mst5",width:"600"}),(0,m.kt)("h3",{id:"implementacija"},"Implementacija"),(0,m.kt)("p",null,"Za implementaciju koristimo Union find strukturu i njezine funkcije iz pro\u0161le lekcije. Bridove \u0107emo dr\u017eati u listi ",(0,m.kt)("inlineCode",{parentName:"p"},"vector<tuple<int, int, int>> edgeList")," u kojoj je svaki brid izme\u0111u ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"a")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," i ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"b")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))," te\u017eine ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"w")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"w")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w")))))," ",(0,m.kt)("inlineCode",{parentName:"p"},"tuple")," oblika (",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"w")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"w")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"))))),", ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"a")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"))))),", ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"b")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"))))),"). Tu \u0107emo listu sortirati po te\u017einama kako bi se algoritam pravilno provodio."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"vector<tuple<int, int, int>> mst;\nfor(auto &edge : edgeList) {\n    int a, b;\n    tie(ignore, a, b) = edge;\n\n    if(!same(a, b)) {\n        mst.push_back(edge);\n        unite(a, b);\n    }\n}\n")),(0,m.kt)("admonition",{title:"primijetite",type:"note"},(0,m.kt)("p",{parentName:"admonition"},"Slo\u017eenost ovog algoritma je ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mi",{parentName:"mrow"},"log"),(0,m.kt)("mo",{parentName:"mrow"},"\u2061"),(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(m \\log m)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},"lo",(0,m.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," zbog sortiranja, gdje je ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"m")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"m")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m")))))," broj bridova.")))}c.isMDXComponent=!0}}]);