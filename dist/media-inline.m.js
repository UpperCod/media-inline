function n(n,t){var e,i=[];n.split(/([\d]+w(?:\!){0,1})/).reduce(function(n,t){var e=t.match(/(\d+)w(\!){0,1}/);if(e){var r=Number(e[1]);return i.push({width:r,value:n.replace(/^(\s+)|(\s+)$/g,""),media:window.matchMedia("("+(e[2]?"max":"min")+"-width : "+r+"px)")}),""}return t}),i=i.sort(function(n,t){return n.width>t.width?-1:1}),e=function(){i.some(function(n){var e=n.media;if(e.matches)return t(n.value,e),!0})},i.forEach(function(n){return n.media.addListener(e)}),e()}function t(t,e){n(e,function(n,e){t.src=n})}function e(t,e){n(e,function(n,e){/\)(.+)$/.test(n)?t.style.background=n:t.style.backgroundImage=n})}export{n as media,t as srcSet,e as imageSet};
//# sourceMappingURL=media-inline.m.js.map
