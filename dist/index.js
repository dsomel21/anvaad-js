!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports["anvaad-js"]=r():e["anvaad-js"]=r()}("undefined"!=typeof self?self:this,function(){return function(e){function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var n={};return r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=1)}([function(e,r,n){"use strict";var t,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":o(window))&&(t=window)}e.exports=t},function(e,r,n){"use strict";var t=n(2),o=n(3),i=n(4),a=n(5),u=n(18);e.exports={ascii:t,firstLetters:o,mainLetters:i,translit:a,unicode:u}},function(e,r,n){"use strict";function t(e){return","+e.split("").map(function(e){return String(e.charCodeAt(0)).padStart(3,"0")}).join(",")+","}e.exports=t},function(e,r,n){"use strict";function t(){function e(e){return e?"i"!==e[0]||n?"|"===e[0]?"":e[0]:e[1]:""}var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r?r.replace(/\]/g,"").replace(/rhwa/g,"").replace(/[0-9]/g,"").split(" ").map(e).join(""):""}e.exports=t},function(e,r,n){"use strict";function t(e){return e.replace(/[^A-Za-z ]/g,"").replace(/[uUiIyYwWoOMNØRH@~®`]/g,"").trim()}e.exports=t},function(e,r,n){"use strict";function t(e){function r(e,r,n,t){var o=[" ","pehilaa","doojaa","teejaa","chauthhaa","panjavaa","chhayvaa","satvaa","atthvaa","nauvaa","dasvaa","gayaarvaa","baarvaa","tayrvaa","chaudavaa","pandaravaa","solavaa","sataaravaa"];return n.replace("m:","mahalaa")+" "+o[t]}[["Ú",":"],["ˆ","N"],["Í","vY"],["vYY","vY"],["Œ","œ"],["†","t"],["ey","e"]].forEach(function(r){e=i(r[0],r[1],e)}),e=o(e,"ENT_QUOTES","UTF-8"),f&&console.log("step 1"),f&&console.log(e);var n=/i./gm;e=e.replace(n,function(e){return e.split("").reverse().join("")}),f&&console.log("step 3 beginning"),f&&console.log(e),e=a(e,1);var t=e.length;for(x=0;x<t;x++){var h,m,y;!function(){h=e[x],m=u(e[x+1])?e[x+1]:"",y=[["!","!"],['"','"'],["#","#"],["$","$"],["%","%"],["&","ph"],["'","'"],["(","("],[")",")"],["*","i"],["+","+"],[",",","],["-","-"],[".","."],["/","-"],[0,"0"],[1,"1"],[2,"2"],[3,"3"],[4,"4"],[5,"5"],[6,"6"],[7,"7"],[8,"8"],[9,"9"],[":",":"],[";",";"],["<","ik"],["=","="],[">","Oankaar"],["?","?"],["@","(h)"],["A","a"],["B","bh"],["C","chh"],["D","dh"],["E","o"],["F","dd"],["G","gh"],["H","h"],["I","ee"],["J","jh"],["K","kh"],["L","l"],["M","(n)"],["N","(n)"],["O","au"],["P","f"],["Q","thh"],["R","r"],["S","sh"],["T","tt"],["U","oo"],["V","R"],["W","aa(n)"],["X","y"],["Y","ai"],["Z","g(h)"],["[","|"],["\\","n(j)"],["]","||"],["^","kh"],["_","_"],["`",""],["a","u"],["b","b"],["c","ch"],["d","dh"],["e","e"],["f","dd"],["g","g"],["h","h"],["i","i"],["j","j"],["k","k"],["l","l"],["m","m"],["n","n"],["o","o"],["p","p"],["q","t"],["r","r"],["s","s"],["t","tt"],["u","u"],["v","v"],["w","aa"],["x","nn"],["y","ay"],["z","z"],["{","{"],["|","n(g)"],["}","}"],["~","’, "],["¡","ikOankaar "],["¢","¢"],["£","£"],["¤",""],["¥","¥"],["§","hoo"],["¨","oo"],["ª",""],["®","r"],["°",""],["±","±"],["´","ye"],["µ","n"],["¶","¶"],["·","·"],["¿","x"],["Å","ik"],["Æ","Oankaar"],["Ç",""],["Í","vY"],["Î","y"],["Ï","y"],["Ò","||"],["Ó",""],["Ô",""],["Ø",""],["Ú",":"],["å","Oankaar"],["æ",""],["ç","ch"],["ü","u"],["Œ",""],["œ","t"],["ƒ","noo(n)"],["ˆ","(n)"],["˜","n"],["–","–"],["—","—"],["‘","'"],["’","'"],["‚",""],["“",'"'],["”",'"'],["†","T"],["•","•"],["…","…"],["‰",""]];var r=[],n=[];y.forEach(function(e){r.push(e[0]),n.push(e[1])})," "!=h&&(h=-1!==r.indexOf(h)?n[r.indexOf(h)]:s(h)?h:""),2==f&&console.log("step 3 before if"),2==f&&console.log({current:h,next:m}),""==h||!1!==l("aeou ooaiee",h)||!p(h)||h==n[r.indexOf("N")]||h==n[r.indexOf("M")]||"hoo"==h||"ye"==h||"noo(n)"==h||h==n[r.indexOf("<")]||h==n[r.indexOf(">")]||"ay"==h||!u(m)||""==m||!1!==l("iaeouyw",m)||!1!==c("@ HRªÅÆÇÍÏÒÓÔØÚåæçüŒœ:[]()",m)||!1!==l(m,"i")&&u(e[x+2])&&" "==e[$x+2]||(h+="a"),2==f&&console.log("step 3 2.1"),2==f&&console.log({current:h,next:m}),"e"!=h||!u(e[x-1])&&" "!=e[x-1]&&"]"!=e[x-1]||!1===l("i",m)||(h="i"),2==f&&console.log("step 3 3"),2==f&&console.log({current:h,next:m}),e[x]=h}()}e=e.join("");var n=/[^aeiouy]i(\s|$|\|)/gm;e=e.replace(n,function(e){return e.replace("i","")}),f&&console.log("step 3"),f&&console.log(e);var n=/((m:|mahalaa|mahalu|ghar|gharu)\s*([0-9]0?))/gm;e=e.replace(n,r);var n=/([aeiou]|oo|ai|ee)(ie)aaa/gm;e=e.replace(n,function(e,r,n){return e.replace("ie","i")});var n=/ih\s+|$/gm;e=e.replace(n,function(e){return e.replace("ih","eh")});var n=/aie\s+|$/gm;return e=e.replace(n,function(e){return e.replace("ie","ey")}),f&&console.log("step 3 end"),f&&console.log(e),[["(N)","n"],["ah ","eh "],["eee","e'ee"],["uu","au"],["Aih","ahai"],["aaa","aa"],["ii","i"],["eay","ey"],["jIA","jee"],["a'eh","eh"],["u "," "],["Re'ee","Reeay"],["re'ee","reeay"]].forEach(function(r){e=i(r[0],r[1],e)}),f&&console.log("completed"),f&&console.log("-------------------------------------------------------------"),e}var o=n(6),i=n(8),a=n(9),u=n(10),l=n(11),c=n(12),p=n(13),s=n(17),f=0;if(1===f){var h="CMqu ] ijau jwnhu iqau rwKu hir pRB qyirAw ] kyqy gnau AsMK Avgx myirAw ] AsMK Avgx Kqy Pyry inqpRiq sd BUlIAY ] moh mgn ibkrwl mwieAw qau pRswdI GUlIAY ] lUk krq ibkwr ibKVy pRB nyr hU qy nyirAw ] ibnvMiq nwnk dieAw Dwrhu kwiF Bvjl PyirAw ]1] rwgu sUhI mhlw 5 Gru 5 pVqwl <> siqgur pRswid ] pRIiq pRIiq gurIAw mohn lwlnw ] jip mn goibMd eykY Avru nhI ko lyKY sMq lwgu mnih Cwfu duibDw kI kurIAw ]1] rhwau ] inrgun hrIAw srgun DrIAw Aink koTrIAw iBMn iBMn iBMn iBn krIAw ] ivic mn kotvrIAw ] inj mMdir iprIAw ] qhw Awnd krIAw ] nh mrIAw nh jrIAw ]1] ikrqin jurIAw bhu ibiD iPrIAw pr kau ihrIAw ] ibKnw iGrIAw ] Ab swDU sMig prIAw ] hir duAwrY KrIAw ] drsnu krIAw ] nwnk gur imrIAw ] bhuir n iPrIAw ]2]1]44] ";h+="ibhwgVw mhlw 4 ] jig suik®qu kIriq nwmu hY myrI ijMduVIey hir kIriq hir min Dwry rwm ] hir hir nwmu pivqu hY myrI ijMduVIey jip hir hir nwmu auDwry rwm ] sB iklivK pwp duK kitAw myrI ijMduVIey mlu gurmuiK nwim auqwry rwm ] vf puMnI hir iDAwieAw jn nwnk hm mUrK mugD insqwry rwm ]1] jo hir nwmu iDAwiedy myrI ijMduVIey iqnw pMcy vsgiq Awey rwm ] AMqir nv iniD nwmu hY myrI ijMduVIey guru siqguru AlKu lKwey rwm ] guir Awsw mnsw pUrIAw myrI ijMduVIey hir imilAw BuK sB jwey rwm ] Duir msqik hir pRiB iliKAw myrI ijMduVIey jn nwnk hir gux gwey rwm ]2] hm pwpI blvMcIAw myrI ijMduVIey prdRohI Tg mwieAw rwm ] vfBwgI guru pwieAw myrI ijMduVIey guir pUrY giq imiq pwieAw rwm ] guir AMimRqu hir muiK coieAw myrI ijMduVIey iPir mrdw bhuiV jIvwieAw rwm ] jn nwnk siqgur jo imly myrI ijMduVIey iqn ky sB duK gvwieAw rwm ]3] Aiq aUqmu hir nwmu hY myrI ijMduVIey ijqu jipAY pwp gvwqy rwm ] piqq pivqR guir hir kIey myrI ijMduVIey chu kuMfI chu juig jwqy rwm ] haumY mYlu sB auqrI myrI ijMduVIey hir AMimRiq hir sir nwqy rwm ] AprwDI pwpI auDry myrI ijMduVIey jn nwnk iKnu hir rwqy rwm ]4]3] ",console.log(t(h))}e.exports=t},function(e,r,n){"use strict";e.exports=function(e,r){var t=n(7),o="",i="",a="";o=e.toString();var u=t("HTML_ENTITIES",r);if(!1===u)return!1;delete u["&"],u["&"]="&amp;";for(a in u)i=u[a],o=o.split(i).join(a);return o=o.split("&#039;").join("'")}},function(e,r,n){"use strict";e.exports=function(e,r){var n,t={},o={},i={},a={},u={},l={};if(i[0]="HTML_SPECIALCHARS",i[1]="HTML_ENTITIES",a[0]="ENT_NOQUOTES",a[2]="ENT_COMPAT",a[3]="ENT_QUOTES",u=isNaN(e)?e?e.toUpperCase():"HTML_SPECIALCHARS":i[e],l=isNaN(r)?r?r.toUpperCase():"ENT_COMPAT":a[r],"HTML_SPECIALCHARS"!==u&&"HTML_ENTITIES"!==u)throw new Error("Table: "+u+" not supported");t[38]="&amp;","HTML_ENTITIES"===u&&(t[160]="&nbsp;",t[161]="&iexcl;",t[162]="&cent;",t[163]="&pound;",t[164]="&curren;",t[165]="&yen;",t[166]="&brvbar;",t[167]="&sect;",t[168]="&uml;",t[169]="&copy;",t[170]="&ordf;",t[171]="&laquo;",t[172]="&not;",t[173]="&shy;",t[174]="&reg;",t[175]="&macr;",t[176]="&deg;",t[177]="&plusmn;",t[178]="&sup2;",t[179]="&sup3;",t[180]="&acute;",t[181]="&micro;",t[182]="&para;",t[183]="&middot;",t[184]="&cedil;",t[185]="&sup1;",t[186]="&ordm;",t[187]="&raquo;",t[188]="&frac14;",t[189]="&frac12;",t[190]="&frac34;",t[191]="&iquest;",t[192]="&Agrave;",t[193]="&Aacute;",t[194]="&Acirc;",t[195]="&Atilde;",t[196]="&Auml;",t[197]="&Aring;",t[198]="&AElig;",t[199]="&Ccedil;",t[200]="&Egrave;",t[201]="&Eacute;",t[202]="&Ecirc;",t[203]="&Euml;",t[204]="&Igrave;",t[205]="&Iacute;",t[206]="&Icirc;",t[207]="&Iuml;",t[208]="&ETH;",t[209]="&Ntilde;",t[210]="&Ograve;",t[211]="&Oacute;",t[212]="&Ocirc;",t[213]="&Otilde;",t[214]="&Ouml;",t[215]="&times;",t[216]="&Oslash;",t[217]="&Ugrave;",t[218]="&Uacute;",t[219]="&Ucirc;",t[220]="&Uuml;",t[221]="&Yacute;",t[222]="&THORN;",t[223]="&szlig;",t[224]="&agrave;",t[225]="&aacute;",t[226]="&acirc;",t[227]="&atilde;",t[228]="&auml;",t[229]="&aring;",t[230]="&aelig;",t[231]="&ccedil;",t[232]="&egrave;",t[233]="&eacute;",t[234]="&ecirc;",t[235]="&euml;",t[236]="&igrave;",t[237]="&iacute;",t[238]="&icirc;",t[239]="&iuml;",t[240]="&eth;",t[241]="&ntilde;",t[242]="&ograve;",t[243]="&oacute;",t[244]="&ocirc;",t[245]="&otilde;",t[246]="&ouml;",t[247]="&divide;",t[248]="&oslash;",t[249]="&ugrave;",t[250]="&uacute;",t[251]="&ucirc;",t[252]="&uuml;",t[253]="&yacute;",t[254]="&thorn;",t[255]="&yuml;"),"ENT_NOQUOTES"!==l&&(t[34]="&quot;"),"ENT_QUOTES"===l&&(t[39]="&#39;"),t[60]="&lt;",t[62]="&gt;";for(n in t)t.hasOwnProperty(n)&&(o[String.fromCharCode(n)]=t[n]);return o}},function(e,r,n){"use strict";(function(r){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return void 0===e?"undefined":n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":n(e)};e.exports=function(e,n,o,i){var a=0,u=0,l="",c="",p=0,s=0,f=[].concat(e),h=[].concat(n),m=o,y="[object Array]"===Object.prototype.toString.call(h),g="[object Array]"===Object.prototype.toString.call(m);m=[].concat(m);var d="undefined"!=typeof window?window:r;d.$locutus=d.$locutus||{};var w=d.$locutus;if(w.php=w.php||{},"object"===(void 0===e?"undefined":t(e))&&"string"==typeof n){for(l=n,n=[],a=0;a<e.length;a+=1)n[a]=l;l="",h=[].concat(n),y="[object Array]"===Object.prototype.toString.call(h)}for(void 0!==i&&(i.value=0),a=0,p=m.length;a<p;a++)if(""!==m[a])for(u=0,s=f.length;u<s;u++)l=m[a]+"",c=y?void 0!==h[u]?h[u]:"":h[0],m[a]=l.split(f[u]).join(c),void 0!==i&&(i.value+=l.split(f[u]).length-1);return g?m:m[0]}}).call(r,n(0))},function(e,r,n){"use strict";e.exports=function(e,r){if(null===r&&(r=1),null===e||r<1)return!1;e+="";for(var n=[],t=0,o=e.length;t<o;)n.push(e.slice(t,t+=r));return n}},function(e,r,n){"use strict";e.exports=function(){var e=arguments,r=e.length,n=0;if(0===r)throw new Error("Empty isset");for(;n!==r;){if(void 0===e[n]||null===e[n])return!1;n++}return!0}},function(e,r,n){"use strict";e.exports=function(e,r,n){var t=(e+"").toLowerCase(),o=(r+"").toLowerCase(),i=0;return-1!==(i=t.indexOf(o,n))&&i}},function(e,r,n){"use strict";e.exports=function(e,r,n){var t=(e+"").indexOf(r,n||0);return-1!==t&&t}},function(e,r,n){"use strict";(function(r){e.exports=function(e){var t=n(14);if("string"!=typeof e)return!1;t("LC_ALL",0);var o="undefined"!=typeof window?window:r;o.$locutus=o.$locutus||{};var i=o.$locutus,a=i.php;return-1!==e.search(a.locales[a.localeCategories.LC_CTYPE].LC_CTYPE.al)}}).call(r,n(0))},function(e,r,n){"use strict";(function(r){var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o="function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?function(e){return void 0===e?"undefined":t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":t(e)};e.exports=function(e,t){var i=n(15),a="",u=[],l=0,c=function e(r){if(r instanceof RegExp)return new RegExp(r);if(r instanceof Date)return new Date(r);var n={};for(var t in r)"object"===o(r[t])?n[t]=e(r[t]):n[t]=r[t];return n},p=function(e){return 1!==e?1:0},s=function(e){return e>1?1:0},f="undefined"!=typeof window?window:r;f.$locutus=f.$locutus||{};var h=f.$locutus;if(h.php=h.php||{},h.php.locales&&h.php.locales.fr_CA&&h.php.locales.fr_CA.LC_TIME&&h.php.locales.fr_CA.LC_TIME.x||(h.php.locales={},h.php.locales.en={LC_COLLATE:function(e,r){return e===r?0:e>r?1:-1},LC_CTYPE:{an:/^[A-Za-z\d]+$/g,al:/^[A-Za-z]+$/g,ct:/^[\u0000-\u001F\u007F]+$/g,dg:/^[\d]+$/g,gr:/^[\u0021-\u007E]+$/g,lw:/^[a-z]+$/g,pr:/^[\u0020-\u007E]+$/g,pu:/^[\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E]+$/g,sp:/^[\f\n\r\t\v ]+$/g,up:/^[A-Z]+$/g,xd:/^[A-Fa-f\d]+$/g,CODESET:"UTF-8",lower:"abcdefghijklmnopqrstuvwxyz",upper:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"},LC_TIME:{a:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],A:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],b:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],B:["January","February","March","April","May","June","July","August","September","October","November","December"],c:"%a %d %b %Y %r %Z",p:["AM","PM"],P:["am","pm"],r:"%I:%M:%S %p",x:"%m/%d/%Y",X:"%r",alt_digits:"",ERA:"",ERA_YEAR:"",ERA_D_T_FMT:"",ERA_D_FMT:"",ERA_T_FMT:""},LC_MONETARY:{int_curr_symbol:"USD",currency_symbol:"$",mon_decimal_point:".",mon_thousands_sep:",",mon_grouping:[3],positive_sign:"",negative_sign:"-",int_frac_digits:2,frac_digits:2,p_cs_precedes:1,p_sep_by_space:0,n_cs_precedes:1,n_sep_by_space:0,p_sign_posn:3,n_sign_posn:0},LC_NUMERIC:{decimal_point:".",thousands_sep:",",grouping:[3]},LC_MESSAGES:{YESEXPR:"^[yY].*",NOEXPR:"^[nN].*",YESSTR:"",NOSTR:""},nplurals:p},h.php.locales.en_US=c(h.php.locales.en),h.php.locales.en_US.LC_TIME.c="%a %d %b %Y %r %Z",h.php.locales.en_US.LC_TIME.x="%D",h.php.locales.en_US.LC_TIME.X="%r",h.php.locales.en_US.LC_MONETARY.int_curr_symbol="USD ",h.php.locales.en_US.LC_MONETARY.p_sign_posn=1,h.php.locales.en_US.LC_MONETARY.n_sign_posn=1,h.php.locales.en_US.LC_MONETARY.mon_grouping=[3,3],h.php.locales.en_US.LC_NUMERIC.thousands_sep="",h.php.locales.en_US.LC_NUMERIC.grouping=[],h.php.locales.en_GB=c(h.php.locales.en),h.php.locales.en_GB.LC_TIME.r="%l:%M:%S %P %Z",h.php.locales.en_AU=c(h.php.locales.en_GB),h.php.locales.C=c(h.php.locales.en),h.php.locales.C.LC_CTYPE.CODESET="ANSI_X3.4-1968",h.php.locales.C.LC_MONETARY={int_curr_symbol:"",currency_symbol:"",mon_decimal_point:"",mon_thousands_sep:"",mon_grouping:[],p_cs_precedes:127,p_sep_by_space:127,n_cs_precedes:127,n_sep_by_space:127,p_sign_posn:127,n_sign_posn:127,positive_sign:"",negative_sign:"",int_frac_digits:127,frac_digits:127},h.php.locales.C.LC_NUMERIC={decimal_point:".",thousands_sep:"",grouping:[]},h.php.locales.C.LC_TIME.c="%a %b %e %H:%M:%S %Y",h.php.locales.C.LC_TIME.x="%m/%d/%y",h.php.locales.C.LC_TIME.X="%H:%M:%S",h.php.locales.C.LC_MESSAGES.YESEXPR="^[yY]",h.php.locales.C.LC_MESSAGES.NOEXPR="^[nN]",h.php.locales.fr=c(h.php.locales.en),h.php.locales.fr.nplurals=s,h.php.locales.fr.LC_TIME.a=["dim","lun","mar","mer","jeu","ven","sam"],h.php.locales.fr.LC_TIME.A=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],h.php.locales.fr.LC_TIME.b=["jan","fév","mar","avr","mai","jun","jui","aoû","sep","oct","nov","déc"],h.php.locales.fr.LC_TIME.B=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],h.php.locales.fr.LC_TIME.c="%a %d %b %Y %T %Z",h.php.locales.fr.LC_TIME.p=["",""],h.php.locales.fr.LC_TIME.P=["",""],h.php.locales.fr.LC_TIME.x="%d.%m.%Y",h.php.locales.fr.LC_TIME.X="%T",h.php.locales.fr_CA=c(h.php.locales.fr),h.php.locales.fr_CA.LC_TIME.x="%Y-%m-%d"),!h.php.locale&&(h.php.locale="en_US","undefined"!=typeof window&&window.document)){var m=window.document,y="http://www.w3.org/1999/xhtml",g="http://www.w3.org/XML/1998/namespace";m.getElementsByTagNameNS&&m.getElementsByTagNameNS(y,"html")[0]?m.getElementsByTagNameNS(y,"html")[0].getAttributeNS&&m.getElementsByTagNameNS(y,"html")[0].getAttributeNS(g,"lang")?h.php.locale=m.getElementsByTagName(y,"html")[0].getAttributeNS(g,"lang"):m.getElementsByTagNameNS(y,"html")[0].lang&&(h.php.locale=m.getElementsByTagNameNS(y,"html")[0].lang):m.getElementsByTagName("html")[0]&&m.getElementsByTagName("html")[0].lang&&(h.php.locale=m.getElementsByTagName("html")[0].lang)}if(h.php.locale=h.php.locale.replace("-","_"),h.php.locale in h.php.locales||h.php.locale.replace(/_[a-zA-Z]+$/,"")in h.php.locales&&(h.php.locale=h.php.locale.replace(/_[a-zA-Z]+$/,"")),h.php.localeCategories||(h.php.localeCategories={LC_COLLATE:h.php.locale,LC_CTYPE:h.php.locale,LC_MONETARY:h.php.locale,LC_NUMERIC:h.php.locale,LC_TIME:h.php.locale,LC_MESSAGES:h.php.locale}),null===t||""===t)t=i(e)||i("LANG");else if("[object Array]"===Object.prototype.toString.call(t))for(l=0;l<t.length;l++){if(t[l]in h.php.locales){t=t[l];break}if(l===t.length-1)return!1}if("0"===t||0===t){if("LC_ALL"===e){for(a in h.php.localeCategories)u.push(a+"="+h.php.localeCategories[a]);return u.join(";")}return h.php.localeCategories[e]}if(!(t in h.php.locales))return!1;if("LC_ALL"===e)for(a in h.php.localeCategories)h.php.localeCategories[a]=t;else h.php.localeCategories[e]=t;return t}}).call(r,n(0))},function(e,r,n){"use strict";(function(r){e.exports=function(e){return!(void 0!==r||!r.env||!r.env[e])&&r.env[e]}}).call(r,n(16))},function(e,r,n){"use strict";function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(s===setTimeout)return setTimeout(e,0);if((s===t||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(r){try{return s.call(null,e,0)}catch(r){return s.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(r){try{return f.call(null,e)}catch(r){return f.call(this,e)}}}function u(){g&&m&&(g=!1,m.length?y=m.concat(y):d=-1,y.length&&l())}function l(){if(!g){var e=i(u);g=!0;for(var r=y.length;r;){for(m=y,y=[];++d<r;)m&&m[d].run();d=-1,r=y.length}m=null,g=!1,a(e)}}function c(e,r){this.fun=e,this.array=r}function p(){}var s,f,h=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:t}catch(e){s=t}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var m,y=[],g=!1,d=-1;h.nextTick=function(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)r[n-1]=arguments[n];y.push(new c(e,r)),1!==y.length||g||i(l)},c.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=p,h.addListener=p,h.once=p,h.off=p,h.removeListener=p,h.removeAllListeners=p,h.emit=p,h.prependListener=p,h.prependOnceListener=p,h.listeners=function(e){return[]},h.binding=function(e){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(e){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},function(e,r,n){"use strict";e.exports=function(e){var r=[" ","\n","\r","\t","\f","\v"," "," "," "," "," "," "," "," "," "," "," "," ","​","\u2028","\u2029","　"].join("");return("number"==typeof e||"string"==typeof e&&-1===r.indexOf(e.slice(-1)))&&""!==e&&!isNaN(e)}},function(e,r,n){"use strict";function t(e){if(!e)return"";for(var r="",n=e.replace(/>/gi,"").replace(/Ø/gi,"").split(""),t=0;t<n.length;t+=1){var i=n[t],a=n[t+1],u=n[t+2];if("i"===i)null!=a?("e"===a?r+="ਇ":"R"===u||"H"===u||"Í"===u||"ç"===u||"†"===u||"œ"===u||"~"===u||"®"===u?(r+=o[a],r+=o[u],r+="ਿ",t+=1):(r+=o[a],r+="ਿ"),t+=1):r+=o[i];else if("a"===i)switch(a){case"u":r+="ਉ",t+=1;break;case"U":r+="ਊ",t+=1;break;default:r+=o[i]}else if("A"===i)switch(a){case"w":r+="ਆ",t+=1;break;case"W":r+="ਆਂ",t+=1;break;case"Y":r+="ਐ",t+=1;break;case"O":r+="ਔ",t+=1;break;default:r+=o[i]}else if("e"===i)switch(a){case"I":r+="ਈ",t+=1;break;case"y":r+="ਏ",t+=1;break;default:r+=o[i]}else"u"===i&&"o"===a?(r+="ੋੁ",t+=1):"@"===i&&"Y"===a||"@"===i&&"y"===a||"@"===i&&"o"===a||"@"===i&&"O"===a?(r+=o[a],r+="੍",t+=1):"@"===i&&"w"===a?(r+="੍ਹ",r+=o[a],t+=1):"N"===i&&"I"===a||"M"===i&&("U"===a||"u"===a||"ü"===a)||"ˆ"===i&&"I"===a||"N"===i&&"y"===a?(r+=o[a],r+=o[i],t+=1):r+=o[i]}return r}var o={a:"ੳ",A:"ਅ",s:"ਸ",S:"ਸ਼",d:"ਦ",D:"ਧ",f:"ਡ",F:"ਢ",g:"ਗ",G:"ਘ",h:"ਹ",H:"੍ਹ",j:"ਜ",J:"ਝ",k:"ਕ",K:"ਖ",l:"ਲ",L:"ਲ਼",q:"ਤ",Q:"ਥ",w:"ਾ",W:"ਾਂ",e:"ੲ",E:"ਓ",r:"ਰ",R:"੍ਰ","®":"੍ਰ",t:"ਟ",T:"ਠ",y:"ੇ",Y:"ੈ",u:"ੁ","ü":"ੁ",U:"ੂ",i:"ਿ",I:"ੀ",o:"ੋ",O:"ੌ",p:"ਪ",P:"ਫ",z:"ਜ਼",Z:"ਗ਼",x:"ਣ",X:"ਯ",c:"ਚ",C:"ਛ",v:"ਵ",V:"ੜ",b:"ਬ",B:"ਭ",n:"ਨ","ƒ":"ਨੂੰ",N:"ਂ","ˆ":"ਂ",m:"ਮ",M:"ੰ","µ":"ੰ","`":"ੱ","~":"ੱ","Í":"੍ਵ","ç":"੍ਚ","†":"੍ਟ","œ":"੍ਤ","˜":"੍ਨ","´":"੍ਯ",1:"੧",2:"੨",3:"੩",4:"੪",5:"੫",6:"੬","^":"ਖ਼",7:"੭","&":"ਫ਼",8:"੮",9:"੯",0:"੦","\\":"ਞ","|":"ਙ","[":"।","]":"॥","<":"ੴ","Ú":"ਃ","@":"੍ਹ","‚":"❁"," ":" "};e.exports=t}])});