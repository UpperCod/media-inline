!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.aduana={})}(this,function(e){function n(e,n){var t,i=[];e.split(/([\d]+w(?:\!){0,1})/).reduce(function(e,n){var t=n.match(/(\d+)w(\!){0,1}/);if(t){var u=Number(t[1]);return i.push({width:u,value:e.replace(/^(\s+)|(\s+)$/g,""),media:window.matchMedia("("+(t[2]?"max":"min")+"-width : "+u+"px)")}),""}return n}),i=i.sort(function(e,n){return e.width>n.width?-1:1}),t=function(){i.some(function(e){var t=e.media;if(t.matches)return n(e.value,t),!0})},i.forEach(function(e){return e.media.addListener(t)}),t()}e.media=n,e.srcSet=function(e,t){n(t,function(n,t){e.src=n})},e.imageSet=function(e,t){n(t,function(n,t){/\)(.+)$/.test(n)?e.style.background=n:e.style.backgroundImage=n})}});
//# sourceMappingURL=media-inline.umd.js.map