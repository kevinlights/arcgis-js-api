// COPYRIGHT © 2016 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.

define(["require","module","dojo/_base/array","dojo/_base/lang","dojo/has","dojo/Deferred","dojo/DeferredList","dojo/promise/all","dojo/when","dojo/on","../kernel","../Color","../numberUtils","../promiseList","../lang","../styles/type","../styles/size","../styles/choropleth","../styles/heatmap","../styles/predominance","../symbols/SimpleMarkerSymbol","../symbols/SimpleLineSymbol","../symbols/SimpleFillSymbol","./UniqueValueRenderer","./ClassBreaksRenderer","./HeatmapRenderer","./BlendRenderer","./utils","dojo/i18n!../nls/jsapi"],function(e,n,a,t,i,r,s,o,l,u,c,d,p,m,f,g,h,v,y,b,w,S,x,z,I,C,M,V,F){function R(a){return e.toAbsMid?e.toAbsMid(a):n.id.replace(/\/[^\/]*$/gi,"/")+a}function k(e,n){e.reject(new Error(n))}function O(e,n){e.loaded?n.call():u.once(e,"load",n)}function T(e,n,a,t){var i,r;switch(a){case"point":i=new w,i.setColor(n),i.setSize(null!=t?t:e.size),r=new S,r.setColor(e.outline.color),r.setWidth(e.outline.width),i.setOutline(r);break;case"line":i=new S,i.setColor(n),i.setWidth(null!=t?t:e.width);break;case"polygon":i=new x,i.setColor(n),r=new S,r.setColor(e.outline.color),r.setWidth(e.outline.width),i.setOutline(r)}return i}function E(e){var n=e.geometryType;return"esriGeometryPoint"===n||"esriGeometryMultipoint"===n?n="point":"esriGeometryPolyline"===n?n="line":"esriGeometryPolygon"===n&&(n="polygon"),n}function P(e,n){var a=e.scheme;return a?a=g.cloneScheme(a):(a=g.getSchemes({theme:e.theme||Cn,basemap:e.basemap,geometryType:n}),a=a&&a.primaryScheme),a}function D(e,n){var a;return a=e.label<n.label?-1:e.label>n.label?1:0}function q(e,n){var a;return a=e.value<n.value?-1:e.value>n.value?1:0}function B(e,n){var a=n.count-e.count;return 0===a&&(a=D(e,n)),a}function j(e,n){var a=n.count-e.count;return 0===a&&(a=q(e,n)),a}function _(e,n,a){var i;t.isFunction(n)?i=n:"count"===n?(i=j,a&&a.codedValues&&(i=B)):"value"===n&&(i=q,a&&a.codedValues&&(i=D)),i&&e.sort(i)}function L(e,n,i){var r,s,o,l,u,c,d=i.layer,p=i.field,m=t.isFunction(p),f=p&&!m?d.getField(p):null,g=f?d.getDomain(f.name):null,h=-1,v=null==i.numTypes?10:-1===i.numTypes?e.length:i.numTypes,y=null==i.showOthers?!0:i.showOthers,w=null==i.sortBy?"count":i.sortBy,S=i&&i.labelCallback,x=E(d),I=P(i,x),C=new z(null,p),M=i.predominanceScheme,F=i.useSizeInfo;if(M){var R="polygon"===x,k=R&&F,O=M.sizeInfo,D=F?R?O.marker:O:null,q=k&&O?O.background:null;q&&(C.backgroundFillSymbol=T(q,q.color,"polygon")),c=R?k?D.size:null:"line"===x?M.width:M.size,u=c,I=M,x=k?"point":x}var B={domain:g,fieldInfo:f};for(a.forEach(e,function(e,n){B.value=e.value,e.label=V.createUniqueValueLabel(B),S&&(e.label=S(e)),null===e.value&&(h=n)}),h>-1&&(l=e.splice(h,1)[0]),_(e,w,g),f&&f.type===Pn&&(B.dateFormatInterval=V.calculateDateFormatInterval(a.map(a.filter(e,function(e,n){return v>n}),function(e){return e.value}))),o=xn.createColors(I.colors,e.length),a.forEach(e,function(e,n){B.value=e.value,e.label=V.createUniqueValueLabel(B),S&&(e.label=S(e)),e.symbol=T(I,o[n],x,c)}),i.valueExpression&&C.setValueExpression(i.valueExpression),o=xn.createColors(I.colors,v),r=0;v>r;r++)s=e[r],s&&C.addValue({value:s.value,label:s.label,symbol:T(I,o[r],x,c)});return y&&(C.defaultSymbol=T(I,I.noDataColor,x,u),C.defaultLabel=In.other),l&&(l.symbol=T(I,I.noDataColor,x,u),e.push(l)),n&&n.widthInfo&&C.setVisualVariables([n.widthInfo]),{renderer:C,uniqueValueInfos:e,othersStartIndex:C.infos.length===e.length?-1:C.infos.length,scheme:M?b.cloneScheme(M):P(i,x)}}function W(e,n,a,t){var i=L(e.uniqueValueInfos,n,a);i.source=e.source,t.resolve(i)}function A(e,n,a){var t=e.scheme;return t?t=v.cloneScheme(t):(t=v.getSchemes({theme:a||e.theme||Mn,basemap:e.basemap,geometryType:n}),t=t&&t.primaryScheme),t}function H(e){var n,a=e.avg,t=a-e.stddev,i=a+e.stddev;return t<e.min&&(t=e.min),i>e.max&&(i=e.max),n=p.round([t,i],{strictBounds:!0}),t=n[0],i=n[1],n=[t,t+(a-t)/2,a,a+(i-a)/2,i],p.round(n,{strictBounds:!0})}function U(e,n,a){var t,i=(n-e)/(a-1),r=[e];for(t=1;a-2>=t;t++)r.push(e+t*i);return r.push(n),p.round(r,{strictBounds:!0})}function G(e,n,a,t){var i,r,s=e.statisticsPlugin.getSuggestedDataRange({statistics:n,isDate:a});return s.defaultStatistics?(i=s.min,r=s.max):!t||null!=n.avg&&n.stddev||(i=n.min,r=n.max),null!=i?[i,r]:null}function Q(e,n,i,r,s){var o=null==r.useDefaultStatistics?!0:r.useDefaultStatistics;if(e&&!e.count&&!o)return void k(s,"smartMapping.createColorInfo: cannot create renderer when statistics.count is 0.");var l,u,c,m=r.layer,f=r.field,g=t.isFunction(f),h=f&&!g?m.getField(f):null,v=h&&h.type===Pn,y=E(m),b=A(r,y),w=r.semiContinuous,S=n&&n.classBreakInfos,x=S&&S.length,z=n?x:5;if(!b)return void k(s,"smartMapping.createColorInfo: unable to find the specified scheme.");var I=n&&b.id.indexOf("seq-")>-1?nn(b,{length:z}):xn.createColors(b.colors,z);if(I.length<z)return void k(s,"smartMapping.createColorInfo: not enough colors in the scheme.");if(n){l=[];var C;1===x?(u=[S[0].minValue,S[0].maxValue],l=[0,1],C=xn.createColors(I,z)[0],c=[C,new d(C)]):w?(u=[],c=[],a.forEach(S,function(e,n){var a=e.maxValue-e.minValue,t=.1*a;u.push(0===n?e.minValue:e.minValue+t),u.push(n===x-1?e.maxValue:e.maxValue-t),C=new d(I[n]),c.push(C),c.push(new d(C)),l.push(2*n),l.push(2*n+1)})):(u=a.map(S,function(e,n){return l.push(n),(e.minValue+e.maxValue)/2}),c=xn.createColors(I,z)),u=p.round(u,{strictBounds:!0})}else{var M=o?G(m,e,v,!0):null;u=M?U(M[0],M[1],5):H(e),l=[0,2,4],c=xn.createColors(I,z)}var F={type:"colorInfo",field:f,valueExpression:r.valueExpression,normalizationField:i,stops:V.createColorStops({values:u,isDate:v,dateFormatOptions:v?V.timelineDateFormatOptions:null,colors:c,labelIndexes:l}),legendOptions:r.legendOptions};s.resolve({colorInfo:F,statistics:e,classBreaks:n,scheme:A(r,y)})}function N(e,n,a,t,i,r){var s=i.layer,o=i.field,l=E(s),u=null==i.showOthers?!0:i.showOthers,c=v.cloneScheme(e.scheme),d=new I(null,o);i.valueExpression&&d.setValueExpression(i.valueExpression),u&&(d.defaultSymbol=T(c,c.noDataColor,l),d.defaultLabel=In.other),d.addBreak({minValue:-zn,maxValue:zn,symbol:T(c,c.noDataColor,l)}),d.normalizationType=a,d.normalizationField=t;var p=[V.cloneColorInfo(e.colorInfo)];n&&n.widthInfo&&p.push(n.widthInfo),d.setVisualVariables(p),r.resolve({renderer:d,colorInfo:V.cloneColorInfo(e.colorInfo),statistics:e.statistics,classBreaks:e.classBreaks,scheme:v.cloneScheme(e.scheme)})}function $(e,n,a,i){var r=null==a.useDefaultStatistics?!0:a.useDefaultStatistics;if(e&&!e.count&&!r)return void k(i,"smartMapping.createOpacityInfo: cannot create opacityInfo when statistics.count is 0.");var s=a.layer,o=a.field,l=o&&!t.isFunction(o)?s.getField(o):null,u=l&&l.type===Pn,c=a.useStdDev,d=c?H(e):null,p=r?G(s,e,u,c):null,m=p||(c?[d[0],d[4]]:[e.min,e.max]),f={type:"opacityInfo",field:o,normalizationField:n,stops:[{value:m[0],opacity:.3},{value:m[1],opacity:.7}]};i.resolve({opacityInfo:f,statistics:e,defaultStatistics:!!p})}function J(e,n){var a=e.scheme;return a?a=h.cloneScheme(a):(a=h.getSchemes({theme:e.theme||Vn,basemap:e.basemap,geometryType:n}),a=a&&a.primaryScheme),a}function K(e,n){var a;switch(n){case"point":a=[e.minSize,e.maxSize];break;case"line":a=[e.minWidth,e.maxWidth];break;case"polygon":a=[e.marker.minSize,e.marker.maxSize]}return a}function X(e,n,a,i,r){var s=null==i.useDefaultStatistics?!0:i.useDefaultStatistics,o=n&&[n.minSize,n.maxSize];if(e&&!e.count&&!s)return void k(r,"smartMapping.createSizeInfo: cannot create renderer when statistics.count is 0.");var l=i.layer,u=i.field,c=u&&!t.isFunction(u)?l.getField(u):null,d=c&&c.type===Pn,p=E(l),m=J(i,p),f=o||K(m,p),g=i.useStdDev,h=g?H(e):null,v=s?G(l,e,d,g):null,y=v||(g?[h[0],h[4]]:[e.min,e.max]),b={type:"sizeInfo",field:u,valueExpression:i.valueExpression,valueUnit:"unknown",normalizationField:a,legendOptions:i.legendOptions,minSize:f[0],maxSize:f[1],minDataValue:y[0],maxDataValue:y[1]};r.resolve({sizeInfo:b,statistics:e,defaultStatistics:!!v,suggestedSizeRange:n,scheme:J(i,p)})}function Y(e,n,a,t,i,r){var s=i.layer,o=i.field,l=E(s),u=null==i.showOthers?!0:i.showOthers,c=h.cloneScheme(e.scheme),d="polygon"===l,p=d?c.marker:c,m=d?c.background:null,f="line"===l?p.noDataWidth:p.noDataSize,g=new I(null,o);i.valueExpression&&g.setValueExpression(i.valueExpression),u&&(g.defaultSymbol=T(p,p.noDataColor,d?"point":l,f),g.defaultLabel=In.other),g.addBreak({minValue:-zn,maxValue:zn,symbol:T(p,p.color,d?"point":l)}),m&&(g.backgroundFillSymbol=T(m,m.color,l)),g.normalizationType=a,g.normalizationField=t;var v=[V.cloneSizeInfo(e.sizeInfo)];n&&n.widthInfo&&v.push(n.widthInfo),g.setVisualVariables(v),r.resolve({renderer:g,sizeInfo:V.cloneSizeInfo(e.sizeInfo),statistics:e.statistics,defaultStatistics:e.defaultStatistics,suggestedSizeRange:e.suggestedSizeRange,scheme:h.cloneScheme(e.scheme)})}function Z(e,n,a){var t,i=[],r=1/(a+1);for(t=1;a>=t;t++)i.push(d.blendColors(e,n,r*t));return i}function en(e,n){var a=[];if(1===n)a=[e[0]];else if(2===n)a=[e[0],e[2]];else if(3===n)a=e;else{var t,i,r=n-e.length,s=r/2;r%2===0?(t=Z(e[0],e[1],s),i=Z(e[1],e[2],s)):(t=Z(e[0],e[1],Math.floor(s)),i=Z(e[1],e[2],Math.ceil(s))),a=[e[0]].concat(t).concat([e[1]]).concat(i).concat([e[2]])}return a}function nn(e,n,t){var i,r=n.length,s=-1;if(t&&a.some(n,function(e,n){return e.hasAvg&&(s=n),s>-1}),s>-1){var o=e.colors,l=s+1,u=r-s,c=o.slice(0,3),d=o.slice(2);c.reverse(),c=en(c,l),d=en(d,u),c.reverse(),i=[].concat(c).concat(d.slice(1))}else{var p=e.colorsForClassBreaks;if(p&&p.length>0&&(a.some(p,function(e){return e.numClasses===r&&(i=e.colors),!!i}),!i)){var m=p[p.length-1],f=r-m.numClasses;if(f>0){var g,h=m.colors[m.numClasses-1];for(i=m.colors.splice(0),g=1;f>=g;g++)i.push(h)}}}return i&&(i=xn.createColors(i,i.length)),i}function an(e,n,t,i){var r,s,o,l=t.layer,u=t.field,c=E(l),d=null==t.showOthers?!0:t.showOthers,p=t.classificationMethod||"equal-interval",m="standard-deviation"===p,f=t.normalizationType,g="high-to-low",h=e.classBreakInfos;return(r=A(t,c,g))?(s=nn(r,h),s&&s.length==h.length?(o=new I(null,u),o.classificationMethod=p,o.normalizationType=f,o.normalizationField="field"===f?t.normalizationField:void 0,o.normalizationTotal="percent-of-total"===f?e.normalizationTotal:void 0,d&&(o.defaultSymbol=T(r,r.noDataColor,c),o.defaultLabel=In.other),a.forEach(h,function(e,n){o.addBreak({minValue:e.minValue,maxValue:e.maxValue,symbol:T(r,s[n],c),label:e.label})}),m||V.setLabelsForClassBreaks({classBreaks:o.infos,classificationMethod:p,normalizationType:f,round:!0}),n&&n.widthInfo&&o.setVisualVariables([n.widthInfo]),e.renderer=o,e.scheme=A(t,c,g),void i.resolve(e)):void k(i,"smartMapping.createClassedColorRenderer: unable to find suitable colors for number of classes.")):void k(i,"smartMapping.createClassedColorRenderer: unable to find suitable style scheme.")}function tn(e,n){return n.layer.statisticsPlugin.getClassBreaks(t.mixin(n,{classificationMethod:"equal-interval",numClasses:1,analyzeData:!1,minValue:e[0],maxValue:e[1],normalizationTotal:e[0]+e[1]}))}function rn(e){var n=new r,a=e.layer,t=null==e.useDefaultBreaks?!0:e.useDefaultBreaks,i=e.optimizeOutline,o=[a.statisticsPlugin.getClassBreaks(e)];return i&&o.push(a.statisticsPlugin.getSuggestedOutline("object"==typeof i?i:null)),new s(o).then(function(r){var s=r[0],o=r[1],u=i&&o[0]?o[1]:null;if(s[0]||t&&!a.graphics.length){var c=s[1],d=t?G(a,c?{min:c.minValue,max:c.maxValue}:{}):null;d&&(c=tn(d,e)),l(c).then(function(e){e.defaultStatistics=!!d,n.resolve({cbResponse:e,suggestedOutline:u})}).otherwise(function(){k(n,"smartMapping: error when calculating default class breaks.")})}else k(n,"smartMapping: error when calculating class breaks.")}),n.promise}function sn(e,n,a,t){var i,r=t||K(e,n),s=r[0],o=r[1],l=(o-s)/(a>=4?a-1:a),u=[];for(i=0;a>i;i++)u.push(s+l*i);return u}function on(e,n,t,i,r){var s,o=i.layer,l=i.field,u=E(o),c=null==i.showOthers?!0:i.showOthers,d=i.classificationMethod||"equal-interval",p=i.normalizationType,m=e.classBreakInfos,f=J(i,u),g=sn(f,u,m.length,n),h="polygon"===u,v=h?f.marker:f,y=h?f.background:null;s=new I(null,l),s.classificationMethod=d,s.normalizationType=p,s.normalizationField="field"===p?i.normalizationField:void 0,s.normalizationTotal="percent-of-total"===p?e.normalizationTotal:void 0,c&&(s.defaultSymbol=T(v,v.noDataColor,h?"point":u),s.defaultLabel=In.other),y&&(s.backgroundFillSymbol=T(y,y.color,u)),a.forEach(m,function(e,n){s.addBreak({minValue:e.minValue,maxValue:e.maxValue,symbol:T(v,v.color,h?"point":u,g[n]),label:e.label})}),"standard-deviation"!==d&&V.setLabelsForClassBreaks({classBreaks:s.infos,classificationMethod:d,normalizationType:p,round:!0}),t&&t.widthInfo&&s.setVisualVariables([t.widthInfo]),e.renderer=s,e.scheme=J(i,u),r.resolve(e)}function ln(e){var n=e.scheme;return n?n=y.cloneScheme(n):(n=y.getSchemes({theme:e.theme||Fn,basemap:e.basemap}),n=n&&n.primaryScheme),n}function un(e,n,t){var i=null==n.useDefaultStatistics?!0:n.useDefaultStatistics;if(!e.count&&!i)return void k(t,"smartMapping.createHeatmapRenderer: cannot create renderer when statistics.count is 0.");var r=e.fieldOffset,s=null==n.blurRadius?10:n.blurRadius,o=null==n.minRatio?.01:n.minRatio,l=null==n.maxRatio?1:n.maxRatio,u=null==n.fadeToTransparent?!0:n.fadeToTransparent,c=ln(n),p=c.colors,m=p.length,f=!e.count&&i,g=f?[0,100]:[e.min,e.max],h=new C;h.setBlurRadius(s),h.setField(n.field),null!=r&&h.setFieldOffset(r),h.setMinPixelIntensity(g[0]),h.setMaxPixelIntensity(g[1]);var v=p[0],y=[{ratio:0,color:new d([v.r,v.g,v.b,0])},{ratio:Rn,color:new d([v.r,v.g,v.b,0])},{ratio:u?o:Rn,color:v}],b=(l-o)/(m-1);p=xn.createColors(p,m),a.forEach(p,function(e,n){y.push({ratio:o+b*n,color:e})}),h.setColorStops(y),t.resolve({renderer:h,statistics:e,defaultStatistics:f,scheme:ln(n)})}function cn(e,n){var a=e.scheme;return a?a=b.cloneScheme(a):(a=b.getSchemes({theme:e.theme||Cn,basemap:e.basemap,geometryType:n}),a=a&&a.primaryScheme),a}function dn(e,n){var t={};return a.forEach(e,function(e){var a=n.getField(e.name);t[e.name]=e.label||a&&a.alias||e.name}),function(e){return t[e.value]}}function pn(e){return function(n,t){var i=a.indexOf(e,n.value),r=a.indexOf(e,t.value);return i-r}}function mn(e,n,t,i,s){var o=new r,l=e.layer;return l.statisticsPlugin.getPredominantCategories({fields:n}).always(function(r){r&&r.predominantCategoryInfos||(r={predominantCategoryInfos:a.map(n,function(e){return{value:e,count:0}})});var u=L(r.predominantCategoryInfos,s,{layer:l,valueExpression:i.valueExpression,labelCallback:dn(e.fields,l),numTypes:-1,showOthers:e.showOthers,sortBy:pn(n),predominanceScheme:t,useSizeInfo:e.includeSizeInfo});u.predominantCategoryInfos=u.uniqueValueInfos,delete u.uniqueValueInfos,u.source=r.source,o.resolve(u)}),o.promise}function fn(e,n,a,t){var i=new r;return xn.createSizeInfo({layer:e.layer,valueExpression:t.valueExpression,sqlExpression:t.statisticsQuery.sqlExpression,sqlWhere:t.statisticsQuery.sqlWhere,scheme:a,optimizeForScale:e.optimizeForScale}).then(function(e){e.sizeInfo.legendOptions={title:In.sumOfCategories},i.resolve(e)}).otherwise(function(){k(i,"smartMapping.createPredominanceRenderer: error when calculating statistics for visual variable(size).")}),i.promise}function gn(e,n,a){var t=new r;return e.layer.statisticsPlugin.getFieldStatistics({valueExpression:a.valueExpression,sqlExpression:a.statisticsQuery.sqlExpression,sqlWhere:a.statisticsQuery.sqlWhere}).then(function(e){var i=null==e.avg||null==e.stddev,r=1/n.length*100,s=i?100:e.avg+1.285*e.stddev;s>100&&(s=100);var o=p.round([r,s],{strictBounds:!0});t.resolve({opacityInfo:{type:"opacityInfo",valueExpression:a.valueExpression,stops:[{value:o[0],opacity:.15},{value:o[1],opacity:1}],legendOptions:{title:In.strengthOfPredominance}},statistics:e,defaultStatistics:i})}).otherwise(function(){k(t,"smartMapping.createPredominanceRenderer: error when calculating statistics for visual variable(opacity).")}),t.promise}function hn(e,n,a,t){var i=E(e.layer),r=cn(e,i);e.layer.statisticsPlugin.getPredominanceExpressions({fields:n}).then(function(i){var s,o,l=mn(e,n,r,i.predominantCategory,a);e.includeSizeInfo&&(s=fn(e,n,r.sizeInfo,i.size)),e.includeOpacityInfo&&(o=gn(e,n,i.opacity)),m([l,s,o]).then(function(e){var n,a=e[0],i=e[1],r=e[2],l=[];if(a instanceof Error)k(t,"smartMapping.createPredominanceRenderer: unable to create unique-value renderer.");else{if(n=a,s){if(i instanceof Error)return void k(t,"smartMapping.createPredominanceRenderer: unable to create visual variable for symbol size.");l.push(V.cloneSizeInfo(i.sizeInfo)),delete i.scheme,n.size=i}if(o){if(r instanceof Error)return void k(t,"smartMapping.createPredominanceRenderer: unable to create visual variable for symbol opacity.");l.push(V.cloneOpacityInfo(r.opacityInfo)),n.opacity=r}if(l.length){var u=n.renderer.visualVariables;u&&(Array.prototype.push.apply(u,l),l=u),n.renderer.setVisualVariables(l)}t.resolve(n)}})}).otherwise(function(){k(t,"smartMapping.createPredominanceRenderer: unable to generate expressions.")})}function vn(e,n,t){var i=e;if("string"==typeof e){var r=t.getField(e);r&&r.type===Pn&&(i=t.getFieldLabel(r.name))}else if("number"==typeof e||e instanceof Date){var s=a.indexOf(qn,n)>-1?null:"date";i=V.formatDate(e,{selector:s})}return i}function yn(e,n,a){var i=n.startTime,r=n.endTime,s=n.layer;s.statisticsPlugin.getAgeExpressions({startTime:i,endTime:r,units:e.units}).then(function(n){var o=e,l=o.units,u="ageInfo_"+l;o.legendOptions={title:f.substitute({units:l,startTime:vn(i,l,s),endTime:vn(r,l,s)},In[u])},t.mixin(o,n),a.resolve(o)}).otherwise(function(){k(a,"smartMapping.createAgeInfo: unable to generate expressions to calculate age.")})}function bn(e,n){var t,i,r,s,o,l,u,c,d={};return t=a.filter(e,function(e){return i=e.name,r=i.toLowerCase(),l=i!==n&&-1===a.indexOf(On,r),l&&(u=u||(a.indexOf(Dn,e.type)>-1?i:null),c=c||("esriFieldTypeString"===e.type?i:null)),l}),a.forEach(t,function(e){i=e.name,r=i.toLowerCase(),s=a.indexOf(Dn,e.type)>-1,s&&(d=wn(i,r,Tn,d,"number")),d.rank&&"string"!==d.fieldType||(o="esriFieldTypeString"===e.type,o&&(d=wn(i,r,En,d,"string")))}),d.fieldName||u||c}function wn(e,n,a,t,i){var r=Sn(n,a);return r.exactRank>-1&&(!t.rank||t.fieldType!==i||"exact"===t.matchType&&t.fieldType===i&&t.rank>r.exactRank)?t={rank:r.exactRank,matchType:"exact",fieldType:i,fieldName:e}:r.containRank>-1&&(!t.rank||t.fieldType===i&&"contains"===t.matchType&&t.rank>r.containRank)&&(t={rank:r.containRank,matchType:"contains",fieldType:i,fieldName:e}),t}function Sn(e,n){var t,i=-1,r=-1;for(i=a.indexOf(n,e),t=0;t<n.length;t++)if(e.indexOf(n[t])>-1){r=t;break}return{exactRank:i,containRank:r}}var xn={},zn=Math.pow(2,53)-1,In=F.smartMapping,Cn="default",Mn="high-to-low",Vn="default",Fn="default",Rn=.01,kn=/(https?:)?\/\/services.*\.arcgis\.com/i,On=["id","fips","fid","objectid","_objectid","__objectid","x","y","lat","long","latitude","longitude","shape","shape_length","shape_leng","shape_area","perimeter","stretched_value","fnode_","tnode_","lpoly_","rpoly_","poly_","subclass","rings_ok","rings_nok","st_length(shape)","st_area(shape)"],Tn=["count","percent","sum","elevation","value","valore","valoare","total","gesamt","score","income","age","expected","average","median","size","cost","expenditure","revenue","profit","growth","sale","quantity","population","price","unit","length","width","difference","distance"],En=["type","name","status","class","category","code","value","label","zone","symbol","color","owner","district","group","species","rating","score","party"],Pn="esriFieldTypeDate",Dn=["esriFieldTypeInteger","esriFieldTypeDouble","esriFieldTypeSingle","esriFieldTypeSmallInteger"],qn=["hours","minutes","seconds"],Bn=R("../plugins/FeatureLayerStatistics");return t.mixin(xn,{createColors:function(e,n){var a,t=[],i=e.length;for(a=0;n>a;a++)t.push(new d(e[a%i]));return t},createTypeRenderer:function(e){var n=new r;if(!(e&&e.layer&&e.field&&(e.scheme||e.basemap)))return k(n,"smartMapping.createTypeRenderer: missing parameters."),n.promise;var a=e.layer,t=e.optimizeOutline;return a.addPlugin(Bn).then(function(){var i=[a.statisticsPlugin.getUniqueValues({field:e.field,includeAllCodedValues:e.includeAllCodedValues})];t&&i.push(a.statisticsPlugin.getSuggestedOutline("object"==typeof t?t:null)),new s(i).then(function(a){var i=a[0],r=a[1],s=t&&r[0]?r[1]:null;i[0]?W(i[1],s,e,n):k(n,"smartMapping.createTypeRenderer: error when calculating unique values.")})}).otherwise(function(){k(n,"smartMapping.createTypeRenderer: error when adding feature layer statistics plugin.")}),n.promise},createColorInfo:function(e){var n=new r;if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return k(n,"smartMapping.createColorInfo: missing parameters."),n.promise;var a=e.layer,t=e.normalizationField,i=t?"field":void 0;return e.statistics?Q(e.statistics,null,t,e,n):a.addPlugin(Bn).then(function(){var r="group-similar"===e.theme||e.scheme&&0===e.scheme.id.indexOf("group-similar/"),s=r?a.statisticsPlugin.getClassBreaks({field:e.field,classificationMethod:"natural-breaks",numClasses:e.numGroups||5,normalizationType:i,normalizationField:t,minValue:e.minValue,maxValue:e.maxValue}):a.statisticsPlugin.getFieldStatistics({field:e.field,valueExpression:e.valueExpression,sqlExpression:e.sqlExpression,sqlWhere:e.sqlWhere,normalizationType:i,normalizationField:t,minValue:e.minValue,maxValue:e.maxValue});s.then(function(a){var i,s;r?i=a:s=a,Q(s,i,t,e,n)}).otherwise(function(){k(n,r?"smartMapping.createColorInfo: error when calculating class breaks.":"smartMapping.createColorInfo: error when calculating field statistics.")})}).otherwise(function(){k(n,"smartMapping.createColorInfo: error when adding feature layer statistics plugin.")}),n.promise},createColorRenderer:function(e){var n=new r;if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return k(n,"smartMapping.createColorRenderer: missing parameters."),n.promise;var a=e.layer,t=e.normalizationField,i=t?"field":void 0,o=e.optimizeOutline;return a.addPlugin(Bn).then(function(){var r=[xn.createColorInfo(e)];o&&r.push(a.statisticsPlugin.getSuggestedOutline("object"==typeof o?o:null)),new s(r).then(function(a){var r=a[0],s=a[1],l=o&&s[0]?s[1]:null;r[0]?N(r[1],l,i,t,e,n):k(n,"smartMapping.createColorRenderer: error when calculating colorInfo.")})}).otherwise(function(){k(n,"smartMapping.createColorRenderer: error when adding feature layer statistics plugin.")}),n.promise},createOpacityInfo:function(e){var n=new r;if(!(e&&e.layer&&e.field))return k(n,"smartMapping.createOpacityInfo: missing parameters."),n.promise;var a=e.layer,t=e.normalizationField,i=t?"field":void 0;return e.statistics?$(e.statistics,t,e,n):a.addPlugin(Bn).then(function(){a.statisticsPlugin.getFieldStatistics({field:e.field,normalizationType:i,normalizationField:t,minValue:e.minValue,maxValue:e.maxValue,features:e.features}).then(function(a){$(a,t,e,n)}).otherwise(function(){k(n,"smartMapping.createOpacityInfo: error when calculating field statistics.")})}).otherwise(function(){k(n,"smartMapping.createOpacityInfo: error when adding feature layer statistics plugin.")}),n.promise},createBlendRenderer:function(e){var n,t,i=new r,s=this,l=[],u={},c=[],p=[],m=e.opacityValueCombinationMethod||"avg",f={};return e&&e.layer&&e.blendedFields?(e.basemap=e.basemap||"topo",t=E(e.layer),n=P({basemap:e.basemap},t),n.colors=[new d("#e60000"),new d("#0000e6"),new d("#00e600"),new d("#e67300"),new d("#a900e6")],f.fields=[],f.normalizationField=e.normalizationField,f.blendMode=e.blendMode||"source-over",f.symbol=T(n,n.noDataColor,e.markers?"point":t),u.layer=e.layer,u.normalizationField=e.normalizationField,u.useStdDev=e.useStdDev||!1,l=a.map(e.blendedFields,function(e,a){return f.fields.push({field:e,color:n.colors[a]}),u.field=e,s.createOpacityInfo(u)}),o(l).then(function(t){p[0]=t[0].opacityInfo.stops[0].value,p[1]=t[1].opacityInfo.stops[1].value,a.forEach(t.slice(0,1),function(e){var n=e.opacityInfo.stops[0].value,a=e.opacityInfo.stops[1].value;"union"===m?(p[0]=n<p[0]?n:p[0],p[1]=a>p[1]?a:p[1]):"avg"===m&&(p[0]+=e.opacityInfo.stops[0].value,p[1]+=e.opacityInfo.stops[1].value)}),c[0]={value:"avg"===m?p[0]/t.length:p[0],opacity:e.minOpacity?e.minOpacity:t[0].opacityInfo.stops[0].opacity},c[1]={value:"avg"===m?p[1]/t.length:p[1],opacity:e.maxOpacity?e.maxOpacity:t[0].opacityInfo.stops[1].opacity},f.opacityStops=c,i.resolve({renderer:new M(f),scheme:n,opacityInfos:t})}),i.promise):(k(i,"smartMapping.createBlendRenderer: missing parameters."),i.promise)},createSizeInfo:function(e){var n=new r;if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return k(n,"smartMapping.createSizeInfo: missing parameters."),n.promise;var a=e.layer,t=e.normalizationField,i=t?"field":void 0,o=e.optimizeForScale;return e.statistics?X(e.statistics,null,t,e,n):a.addPlugin(Bn).then(function(){var r=[a.statisticsPlugin.getFieldStatistics({field:e.field,valueExpression:e.valueExpression,sqlExpression:e.sqlExpression,sqlWhere:e.sqlWhere,normalizationType:i,normalizationField:t,minValue:e.minValue,maxValue:e.maxValue})];o&&r.push(a.statisticsPlugin.getSuggestedSizeRange({optimizeForScale:o===!0?"map-scale":o})),new s(r).then(function(a){var i=a[0],r=o&&a[1],s=o&&r[0]?r[1]:null;i[0]?X(i[1],s,t,e,n):k(n,"smartMapping.createSizeInfo: error when calculating field statistics.")})}).otherwise(function(){k(n,"smartMapping.createSizeInfo: error when adding feature layer statistics plugin.")}),n.promise},createSizeRenderer:function(e){var n=new r;if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return k(n,"smartMapping.createSizeRenderer: missing parameters."),n.promise;var a=e.layer,t=e.normalizationField,i=t?"field":void 0,o=e.optimizeOutline;return a.addPlugin(Bn).then(function(){var r=[xn.createSizeInfo(e)];o&&r.push(a.statisticsPlugin.getSuggestedOutline("object"==typeof o?o:null)),new s(r).then(function(a){var r=a[0],s=a[1],l=o&&s[0]?s[1]:null;r[0]?Y(r[1],l,i,t,e,n):k(n,"smartMapping.createSizeRenderer: error when calculating sizeInfo.")})}).otherwise(function(){k(n,"smartMapping.createSizeRenderer: error when adding feature layer statistics plugin.")}),n.promise},createClassedColorRenderer:function(e){var n,a=new r,i=e.minValue,s=e.maxValue;if(!(e&&e.layer&&e.field))return k(a,"smartMapping.createClassedColorRenderer: missing parameters."),a.promise;if(n=null!=i&&null!=s,!n&&(null!=i||null!=s))return k(a,"smartMapping.createClassedColorRenderer: both minValue and maxValue are required when specifying custom data range."),a.promise;e=t.mixin({analyzeData:!n},e);var o=e.layer;return o.addPlugin(Bn).then(function(){rn(e).then(function(n){an(n.cbResponse,n.suggestedOutline,e,a)}).otherwise(function(){k(a,"smartMapping.createClassedColorRenderer: error when calculating class breaks.")})}).otherwise(function(){k(a,"smartMapping.createClassedColorRenderer: error when adding feature layer statistics plugin.")}),a.promise},createClassedSizeRenderer:function(e){var n,a=new r,i=e.minValue,s=e.maxValue;if(!(e&&e.layer&&e.field))return k(a,"smartMapping.createClassedSizeRenderer: missing parameters."),a.promise;if(n=null!=i&&null!=s,!n&&(null!=i||null!=s))return k(a,"smartMapping.createClassedColorRenderer: both minValue and maxValue are required when specifying custom data range."),a.promise;e=t.mixin({analyzeData:!n},e);var o=e.layer;return o.addPlugin(Bn).then(function(){rn(e).then(function(n){e.optimizeForScale?o.statisticsPlugin.getSuggestedSizeRange().then(function(t){var i=[t.minSize,t.maxSize];on(n.cbResponse,i,n.suggestedOutline,e,a)}).otherwise(function(){on(n.cbResponse,null,n.suggestedOutline,e,a)}):on(n.cbResponse,null,n.suggestedOutline,e,a)}).otherwise(function(){k(a,"smartMapping.createClassedSizeRenderer: error when calculating class breaks.")})}).otherwise(function(){k(a,"smartMapping.createClassedSizeRenderer: error when adding feature layer statistics plugin.")}),a.promise},createHeatmapRenderer:function(e){var n=new r;if(!e||!e.layer)return k(n,"smartMapping.createHeatmapRenderer: missing parameters."),n.promise;var a=e.layer;return e.statistics?un(e.statistics,e,n):a.addPlugin(Bn).then(function(){a.statisticsPlugin.getHeatmapStatistics(e).then(function(a){un(a,e,n)}).otherwise(function(){k(n,"smartMapping.createHeatmapRenderer: error when calculating heatmap statistics.")})}).otherwise(function(){k(n,"smartMapping.createHeatmapRenderer: error when adding feature layer statistics plugin.")}),n.promise},applyHeatmapScheme:function(e){if(!(e&&e.renderer&&e.scheme))return void console.log("smartMapping.applyHeatmapScheme: missing parameters.");var n=ln({scheme:e.scheme}),i=e.renderer,r=i.colorStops,s=n.colors;if(r.length!==s.length+3)return void console.log("smartMapping.applyHeatmapScheme: incompatible number of colors in 'colors' and 'renderer.colorStops'.");var o,l=new d(s[0]),u=a.map(r,function(e){return t.mixin({},e)});for(u[0].color=new d([l.r,l.g,l.b,0]),u[1].color=new d([l.r,l.g,l.b,0]),u[2].color=l,o=3;o<u.length;o++)u[o].color=s[o-3];i.setColorStops(u)},sampleSize:500,createPredominanceRenderer:function(e){var n=new r;if(!(e&&e.layer&&e.fields&&e.fields.length>1))return k(n,"smartMapping.createPredominanceRenderer: missing parameters."),n.promise;if(e.fields.length>5)return k(n,"smartMapping.createPredominanceRenderer: too many fields. Maximum supported is 5."),n.promise;var t=e.layer;return t.addPlugin(Bn).then(function(){var i=(e.sampleSize||xn.sampleSize,a.map(e.fields,function(e){return e.name}));O(t,function(){var r=t.getOutFields()||[],s=-1!==a.indexOf(r,"*"),o=e.optimizeOutline,u=s?null:a.filter(i,function(e){return-1===a.indexOf(r,e)});if(t.url&&!kn.test(t.url))k(n,"smartMapping.createPredominanceRenderer: predominance renderer is not supported for this layer. Make sure the layer supports advanced SQL expressions and standardized queries.");else if(u&&u.length)k(n,"smartMapping.createPredominanceRenderer: make sure the layer is configured to fetch all fields specified in parameters.");else{var c=o?t.statisticsPlugin.getSuggestedOutline("object"==typeof o?o:null):null;l(c).always(function(a){a&&!a.widthInfo&&(a=null),hn(e,i,a,n)})}})}).otherwise(function(){k(n,"smartMapping.createPredominanceRenderer: error when adding feature layer statistics plugin.")}),n.promise},createAgeInfo:function(e){var n=new r;if(!(e&&e.layer&&e.startTime&&e.endTime))return k(n,"smartMapping.createAgeInfo: missing parameters."),n.promise;var a=e.layer;return a.addPlugin(Bn).then(function(){var t=e.units?{units:e.units}:a.statisticsPlugin.getSuggestedAgeUnits({startTime:e.startTime,endTime:e.endTime});l(t).then(function(a){yn(a,e,n)}).otherwise(function(){k(n,"smartMapping.createAgeInfo: unable to calculate age units.")})}).otherwise(function(){k(n,"smartMapping.createAgeInfo: error when adding feature layer statistics plugin.")}),n.promise},excludedFields:On,getSuggestedField:function(e){var n=new r;return e&&(e.layer||e.fields&&e.objectIdField)?(e.layer?O(e.layer,function(){n.resolve(bn(e.layer.fields,e.layer.objectIdField))}):n.resolve(bn(e.fields,e.objectIdField)),n.promise):(k(n,"smartMapping.getSuggestedField: missing parameters."),n.promise)}}),i("extend-esri")&&t.setObject("renderer.smartMapping",xn,c),xn});