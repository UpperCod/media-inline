function t(t,e){var n,r=[];t.split(/([\d]+w(?:\!){0,1})/).reduce(function(t,e){var n=e.match(/(\d+)w(\!){0,1}/);if(n){var i=Number(n[1]);return r.push({width:i,value:t.replace(/^(\s+)|(\s+)$/g,""),media:window.matchMedia("("+(n[2]?"max":"min")+"-width : "+i+"px)")}),""}return e}),r=r.sort(function(t,e){return t.width>e.width?-1:1}),n=function(){r.some(function(t){var n=t.media;if(n.matches)return e(t.value,n),!0})},r.forEach(function(t){return t.media.addListener(n)}),n()}exports.media=t,exports.srcSet=function(e,n){t(n,function(t,n){e.src=t})},exports.imageSet=function(e,n){t(n,function(t,n){/\)(.+)$/.test(t)?e.style.background=t:e.style.backgroundImage=t})};
//# sourceMappingURL=media-inline.js.map
