"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8783],{3905:(e,a,i)=>{i.d(a,{Zo:()=>s,kt:()=>j});var r=i(7294);function t(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}function o(e,a){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),i.push.apply(i,r)}return i}function n(e){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?o(Object(i),!0).forEach((function(a){t(e,a,i[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))}))}return e}function l(e,a){if(null==e)return{};var i,r,t=function(e,a){if(null==e)return{};var i,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],a.indexOf(i)>=0||(t[i]=e[i]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],a.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var d=r.createContext({}),u=function(e){var a=r.useContext(d),i=a;return e&&(i="function"==typeof e?e(a):n(n({},a),e)),i},s=function(e){var a=u(e.components);return r.createElement(d.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var i=e.components,t=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(i),j=t,k=p["".concat(d,".").concat(j)]||p[j]||m[j]||o;return i?r.createElement(k,n(n({ref:a},s),{},{components:i})):r.createElement(k,n({ref:a},s))}));function j(e,a){var i=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=i.length,n=new Array(o);n[0]=p;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l.mdxType="string"==typeof e?e:t,n[1]=l;for(var u=2;u<o;u++)n[u]=i[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,i)}p.displayName="MDXCreateElement"},9195:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>d,contentTitle:()=>n,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=i(7462),t=(i(7294),i(3905));const o={title:"Primjeri"},n="Zadaci za vje\u017ebu",l={unversionedId:"sortiranje-i-pretrazivanje/primjeri",id:"sortiranje-i-pretrazivanje/primjeri",title:"Primjeri",description:"Zadatak: Years",source:"@site/docs/sortiranje-i-pretrazivanje/primjeri.md",sourceDirName:"sortiranje-i-pretrazivanje",slug:"/sortiranje-i-pretrazivanje/primjeri",permalink:"/docs/sortiranje-i-pretrazivanje/primjeri",draft:!1,editUrl:"https://github.com/x-fer/natpro/edit/main/docs/sortiranje-i-pretrazivanje/primjeri.md",tags:[],version:"current",frontMatter:{title:"Primjeri"},sidebar:"materijaliSidebar",previous:{title:"Ternarno pretra\u017eivanje",permalink:"/docs/sortiranje-i-pretrazivanje/ternarno-pretrazivanje"},next:{title:"Potpuno pretra\u017eivanje",permalink:"/docs/potpuno-pretrazivanje-i-pohlepni-pristupi/uvod"}},d={},u=[{value:"Zadatak: Years",id:"zadatak-years",level:3},{value:"Zadatak: The Parade",id:"zadatak-the-parade",level:3},{value:"Ostali zadaci",id:"ostali-zadaci",level:3}],s={toc:u};function m(e){let{components:a,...i}=e;return(0,t.kt)("wrapper",(0,r.Z)({},s,i,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"zadaci-za-vje\u017ebu"},"Zadaci za vje\u017ebu"),(0,t.kt)("h3",{id:"zadatak-years"},"Zadatak: Years"),(0,t.kt)("p",null,"Tekst zadatka: ",(0,t.kt)("a",{parentName:"p",href:"https://codeforces.com/problemset/problem/1424/G"},"Years")),(0,t.kt)("details",null,(0,t.kt)("summary",null,"Hint 1"),(0,t.kt)("div",null,"Zamislite da u zadatku imate samo popis godina ro\u0111enja svih mogu\u0107ih ljudi na tom planetu i pitanje je koliko je ljudi ro\u0111eno PRIJE neke godine? Da bismo mogli efikasno odgovarati na ovakve upite (koriste\u0107i binarnu pretragu), potrebno je prvo SORTIRATI dobiveni niz godina.")),(0,t.kt)("details",null,(0,t.kt)("summary",null,"Hint 2"),(0,t.kt)("div",null,"Koje sve godine mogu biti rje\u0161enje? Ako malo razmislite, primijetit \u0107ete da su jedino godine kada se netko rodio / umro mogu\u0107a rje\u0161enja upita (broj mogu\u0107ih rje\u0161enja 'odgovara' broju ljudi). Drugim rije\u010dima, ako je neka godina u kojoj nije bilo promjene broja stanovnika rje\u0161enje, onda je sigurno i prethodna godina rje\u0161enje, ali njoj dajemo prednost zbog uvjeta zadatka koji tra\u017ei minimalnu godinu.")),(0,t.kt)("details",null,(0,t.kt)("summary",null,"Hint 3"),(0,t.kt)("div",null,"Iako nam je prirodno vezati godinu ro\u0111enja i godinu smrti uz pojedinu osobu, va\u017eno je primijetiti da u ovom zadatku ta dva podatka ne trebaju biti povezana i da ih mo\u017eemo gledati neovisno.")),(0,t.kt)("details",null,(0,t.kt)("summary",null,"Rje\u0161enje"),(0,t.kt)("div",null,"Jedan od pristupa je da pri unosu podataka skupimo sve godine koje su mogu\u0107e rje\u0161enje zadatka i potom za svku provjeravamo koliko je ljudi tada bilo \u017eivo (pamtimo samo godinu s maksimalnim brojem i broj ljudi koji su \u017eivjeli te godine). Recimo da nas zanima koliko je ljudi bilo \u017eivo 1996. Taj podatak mo\u017eemo odrediti ako od svih ljudi koji su se rodili prije 1996. oduzmemo sve one koji su umrli prije 1996. Prvi \u010dlan u razlici dobivamo binarnom pretragom po godinama ro\u0111enja, a drugi pretragom po godinama smrti. Ukupna slo\u017eenost algoritma je O(n logn)")),(0,t.kt)("h3",{id:"zadatak-the-parade"},"Zadatak: The Parade"),(0,t.kt)("p",null,"Tekst zadatka: ",(0,t.kt)("a",{parentName:"p",href:"https://codeforces.com/problemset/problem/1250/J"},"The Parade")),(0,t.kt)("details",null,(0,t.kt)("summary",null,"Hint 1"),(0,t.kt)("div",null,"\u0160to ako odaberemo neku veli\u010dinu reda ",(0,t.kt)("b",null,"r")," i pitamo se mo\u017eemo li napraviti ",(0,t.kt)("b",null,"k redova veli\u010dine r"),"? U kojoj slo\u017eenosti mo\u017eemo izra\u010dunati taj podatak?")),(0,t.kt)("details",null,(0,t.kt)("summary",null,"Hint 2"),(0,t.kt)("div",null,"Prethodna se provjera mo\u017ee napraviti u linearnoj slo\u017eenosti (O(n)). Neka su brojevi vojnika redom 7, 3 i 2. Poku\u0161ajmo napraviti redove veli\u010dine 3. Od prvih 7 vojnika visine 1 mo\u017eemo napraviti dva reda veli\u010dine 3 (ostao je jedan vojnik). Tada tog jednog poku\u0161amo ubaciti u idu\u0107i red zajedno s vojnicima visine 2. Napravili smo red [1,2,2] i preostao je jedan vojnik visine 2. Sada spajamo tog preostalog vojnika s 2 vojnika visine 3 i dobili smo red [2,3,3].")),(0,t.kt)("details",null,(0,t.kt)("summary",null,"Rje\u0161enje"),(0,t.kt)("div",null,"Time limit je 2s pa dozvoljen broj operacija redom veli\u010dine odgovara 10^8. Budu\u0107i da je u zadatku do 10^4 test-primjera, ostatak se koda tako\u0111er treba izvr\u0161avati u slo\u017eenosti O(10^4). Uo\u010dite da postoji neka grani\u010dna veli\u010dina reda, tj. maksimalna mogu\u0107a s kojom mo\u017eemo napraviti k redova. Ideja je da binary-searchamo tu veli\u010dinu reda (",(0,t.kt)("b",null,"r"),") i za svaku mogu\u0107u u linearnoj slo\u017eenosti provjeravamo je li mogu\u0107e slo\u017eiti k redova. Ako nije, pretra\u017eujemo po ni\u017eim veli\u010dinama, a ako je, pretra\u017eujemo po vi\u0161ima. Kona\u010dno rje\u0161enje je onda r*k.")),(0,t.kt)("h3",{id:"ostali-zadaci"},"Ostali zadaci"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://codeforces.com/problemset/problem/1339/B"},"Sorted Adjacent Differences")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://codeforces.com/problemset/problem/474/B"},"Worms"))))}m.isMDXComponent=!0}}]);