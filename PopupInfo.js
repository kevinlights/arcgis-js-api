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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/i18n","dojo/has","dojo/Deferred","dojo/sniff","dojo/promise/all","./lang","./kernel","./request","./tasks/query","./tasks/QueryTask","./tasks/StatisticDefinition","dojo/i18n!dojo/cldr/nls/number"],function(e,t,i,r,a,s,n,o,l,d,f,h,u,c,m,p){var _=e(null,{declaredClass:"esri.PopupInfo",initialize:function(e,r){if(e){t.mixin(this,r),this.info=e,this.title=this.getTitle,this.content=this.getContent;var a=this._fieldLabels={},s=this._fieldsMap={};e.fieldInfos&&i.forEach(e.fieldInfos,function(e){var t=e.fieldName.toLowerCase();a[t]=e.label,s[t]=e}),this._relatedFieldPrefix="relationships/",this.titleHasRelatedFields=!(!e.title||-1===e.title.indexOf("{"+this._relatedFieldPrefix))}},toJson:function(){return r.fromJson(r.toJson(this.info))},getTitle:function(){},getContent:function(){},getFieldInfo:function(e){var t,r=this.info&&this.info.fieldInfos;return i.some(r,function(i){return i.fieldName===e&&(t=i),!!t}),t},getComponents:function(e){var r,a,s=this.info,o=new n;return s.fieldInfos&&(a=i.filter(s.fieldInfos,function(e){return-1!==e.fieldName.indexOf(this._relatedFieldPrefix)},this)),a&&a.length>0&&(r=this._getRelatedRecords({graphic:e,fieldsInfo:a})),r?r.always(t.hitch(this,function(){o.resolve(this._getPopupValues(e))})):o.resolve(this._getPopupValues(e)),o.promise},getAttachments:function(e){var t=e.getLayer(),i=e.attributes;if(this.info.showAttachments&&t&&t.hasAttachments&&t.objectIdField){var r=i&&i[t.objectIdField];if(r)return t.queryAttachmentInfos(r)}},_getPopupValues:function(e,r){var a,s,n,o,l,f=this.info,h=e.getLayer(),u=t.clone(e.attributes)||{},c=t.clone(u),m=f.fieldInfos,p="",_="",y=h&&h._getDateOpts&&h._getDateOpts().properties;y=y&&y.slice(0);var g={dateFormat:{properties:y,formatter:"DateFormat"+this._insertOffset(this._dateFormats.shortDateShortTime)}};if(this._relatedInfo)for(o in this._relatedInfo)if(this._relatedInfo.hasOwnProperty(o)){var F=this._relatedInfo[o],I=this._relatedLayersInfo[o];F&&(i.forEach(F.relatedFeatures,function(e){for(l in e.attributes)if(e.attributes.hasOwnProperty(l)&&"esriRelCardinalityOneToOne"===I.relation.cardinality){var t=this._toRelatedFieldName([I.relation.id,l]);u[t]=c[t]=e.attributes[l]}},this),i.forEach(F.relatedStatsFeatures,function(e){for(l in e.attributes)if(e.attributes.hasOwnProperty(l)){var t=this._toRelatedFieldName([I.relation.id,l]);u[t]=c[t]=e.attributes[l]}},this))}if(m&&i.forEach(m,function(e){s=e.fieldName;var t=this._getLayerFieldInfo(h,s);t&&(s=e.fieldName=t.name);var r=c[s];if(c[s]=this._formatValue(r,s,g),y&&e.format&&e.format.dateFormat){var a=i.indexOf(y,s);a>-1&&y.splice(a,1)}},this),h){var L=h.types,v=h.typeIdField,P=v&&u[v];for(s in u)if(u.hasOwnProperty(s)&&-1===s.indexOf(this._relatedFieldPrefix)&&(n=u[s],d.isDefined(n))){var b=this._getDomainName(h,e,L,P,s,n);if(d.isDefined(b))c[s]=b;else if(s===v){var R=this._getTypeName(h,e,n);d.isDefined(R)&&(c[s]=R)}}}if(f.title&&(p=this._processFieldsInLinks(this._fixTokens(f.title,h),u),p=t.trim(d.substitute(c,p,g)||"")),r)return{title:p};f.description&&(_=this._processFieldsInLinks(this._fixTokens(f.description,h),u),_=t.trim(d.substitute(c,_,g)||"")),m&&(a=[],i.forEach(m,function(e){s=e.fieldName,s&&e.visible&&a.push([e.label||s,d.substitute(c,"${"+s+"}",g)||""])}));var T,M;return f.mediaInfos&&(T=[],i.forEach(f.mediaInfos,function(e){switch(M=0,n=e.value,e.type){case"image":var r=n.sourceURL;r=r&&t.trim(d.substitute(u,this._fixTokens(r,h))),M=!!r;break;case"piechart":case"linechart":case"columnchart":case"barchart":var a,s=n.normalizeField;n.fields=i.map(n.fields,function(e){return a=this._getLayerFieldInfo(h,e),a?a.name:e},this),s&&(a=this._getLayerFieldInfo(h,s),n.normalizeField=a?a.name:s),M=i.some(n.fields,function(e){return d.isDefined(u[e])||-1!==e.indexOf(this._relatedFieldPrefix)&&this._relatedInfo},this);break;default:return}if(M){e=t.clone(e),n=e.value;var o=e.title?this._processFieldsInLinks(this._fixTokens(e.title,h),u):"",l=e.caption?this._processFieldsInLinks(this._fixTokens(e.caption,h),u):"";if(e.title=o?t.trim(d.substitute(c,o,g)||""):"",e.caption=l?t.trim(d.substitute(c,l,g)||""):"","image"===e.type)n.sourceURL=d.substitute(u,this._fixTokens(n.sourceURL,h)),n.linkURL&&(n.linkURL=t.trim(d.substitute(u,this._fixTokens(n.linkURL,h))||""));else{var f,m;i.forEach(n.fields,function(e,t){if(-1!==e.indexOf(this._relatedFieldPrefix))m=this._getRelatedChartInfos(e,n,u,g),m instanceof Array?n.fields=m:n.fields[t]=m;else{var i=u[e];i=void 0===i?null:i,f=u[n.normalizeField]||0,i&&f&&(i/=f),n.fields[t]={y:i,tooltip:(this._fieldLabels[e.toLowerCase()]||e)+":<br/>"+this._formatValue(i,e,g,!!f)}}},this)}T.push(e)}},this)),{title:p,description:_,hasDescription:!!f.description,fields:a&&a.length?a:null,mediaInfos:T&&T.length?T:null,formatted:c,editSummary:h&&h.getEditSummary?h.getEditSummary(e):""}},_getRelatedChartInfos:function(e,t,r,a){var s,n,o,l,d,f,h,u;return s=[],u=this._fromRelatedFieldName(e),f=u[0],n=this._relatedInfo[f],h=this._relatedLayersInfo[f],n&&i.forEach(n.relatedFeatures,function(i){var n,o,f=i.attributes;for(o in f)if(f.hasOwnProperty(o)&&o===u[1]){if(n={},d=f[o],t.normalizeField&&(l=-1!==t.normalizeField.indexOf(this._relatedFieldPrefix)?f[this._fromRelatedFieldName(t.normalizeField)[1]]:r[t.normalizeField]),d&&l&&(d/=l),t.tooltipField)if(-1!==t.tooltipField.indexOf(this._relatedFieldPrefix)){var h=this._fromRelatedFieldName(t.tooltipField)[1];n.tooltip=f[h]&&"string"==typeof f[h]?f[h]+":<br/>"+this._formatValue(d,f[h],a,!!l):h+":<br/>"+this._formatValue(d,h,a,!!l)}else n.tooltip=(this._fieldLabels[e.toLowerCase()]||e)+":<br/>"+this._formatValue(d,t.tooltipField,a,!!l);else n.tooltip=d;n.y=d,s.push(n)}},this),o="esriRelCardinalityOneToMany"===h.relation.cardinality||"esriRelCardinalityManyToMany"===h.relation.cardinality?s:s[0]},_dateFormats:{shortDate:"(datePattern: 'M/d/y', selector: 'date')",shortDateLE:"(datePattern: 'd/M/y', selector: 'date')",longMonthDayYear:"(datePattern: 'MMMM d, y', selector: 'date')",dayShortMonthYear:"(datePattern: 'd MMM y', selector: 'date')",longDate:"(datePattern: 'EEEE, MMMM d, y', selector: 'date')",shortDateShortTime:"(datePattern: 'M/d/y', timePattern: 'h:mm a', selector: 'date and time')",shortDateLEShortTime:"(datePattern: 'd/M/y', timePattern: 'h:mm a', selector: 'date and time')",shortDateShortTime24:"(datePattern: 'M/d/y', timePattern: 'H:mm', selector: 'date and time')",shortDateLEShortTime24:"(datePattern: 'd/M/y', timePattern: 'H:mm', selector: 'date and time')",shortDateLongTime:"(datePattern: 'M/d/y', timePattern: 'h:mm:ss a', selector: 'date and time')",shortDateLELongTime:"(datePattern: 'd/M/y', timePattern: 'h:mm:ss a', selector: 'date and time')",shortDateLongTime24:"(datePattern: 'M/d/y', timePattern: 'H:mm:ss', selector: 'date and time')",shortDateLELongTime24:"(datePattern: 'd/M/y', timePattern: 'H:mm:ss', selector: 'date and time')",longMonthYear:"(datePattern: 'MMMM y', selector: 'date')",shortMonthYear:"(datePattern: 'MMM y', selector: 'date')",year:"(datePattern: 'y', selector: 'date')"},_reHref:/href\s*=\s*\"([^\"]+)\"/gi,_reHrefApos:/href\s*=\s*\'([^\']+)\'/gi,_fixTokens:function(e,t){var i=this;return e.replace(/(\{([^\{\r\n]+)\})/g,function(e,r,a){var s=i._getLayerFieldInfo(t,a);return"$"+(s?"{"+s.name+"}":r)})},_encodeAttributes:function(e){var i,r,a,s=t.clone(e)||{};for(i in s)r=s[i],r&&"string"==typeof r&&(a=encodeURIComponent(r).replace(/\'/g,"&apos;"),s[i]=a);return s},_processFieldsInLinks:function(e,t){var i=this._encodeAttributes(t),r=this;return e&&(e=e.replace(this._reHref,function(e,a){return r._addValuesToHref(e,a,t,i)}).replace(this._reHrefApos,function(e,a){return r._addValuesToHref(e,a,t,i)})),e},_addValuesToHref:function(e,i,r,a){return i=i&&t.trim(i),d.substitute((i?0!==i.indexOf("${"):1)?a:r,e)},_getLayerFieldInfo:function(e,t){return e&&e.getField?e.getField(t):null},_formatValue:function(e,r,a,s){var n=this._fieldsMap[r.toLowerCase()],o=n&&n.format,l=-1!==i.indexOf(a.dateFormat.properties,r),f=!("number"!=typeof e||l||o&&o.dateFormat);if(!d.isDefined(e)||!n||!d.isDefined(o))return f?this._forceLTR(e):e;var h="",u=[],c=o.hasOwnProperty("places")||o.hasOwnProperty("digitSeparator"),m=o.hasOwnProperty("digitSeparator")?o.digitSeparator:!0;if(c&&!l)h="NumberFormat",u.push("places: "+(d.isDefined(o.places)&&(!s||o.places>0)?Number(o.places):"Infinity")),u.length&&(h+="("+u.join(",")+")");else{if(!o.dateFormat)return f?this._forceLTR(e):e;h="DateFormat"+this._insertOffset(this._dateFormats[o.dateFormat]||this._dateFormats.shortDateShortTime)}var _=this._applyFormatting(e,h,a);return c&&e.constructor.toString().indexOf("Array")>-1&&(_="",i.forEach(e,t.hitch(this,function(e){_=_+this._applyFormatting(e,h,a)+" "}))),c&&!m&&p.group&&(_=_.replace(new RegExp("\\"+p.group,"g"),"")),f?this._forceLTR(_):_},_applyFormatting:function(e,t,i){return d.substitute({myKey:e},"${myKey:"+t+"}",i)||""},_forceLTR:function(e){var t=o("ie");return t&&10>=t?e:"<span class='esriNumericValue'>"+e+"</span>"},_insertOffset:function(e){return e&&(e=d.isDefined(this.utcOffset)?e.replace(/\)\s*$/,", utcOffset:"+this.utcOffset+")"):e),e},_getDomainName:function(e,t,i,r,a,s){var n=e.getDomain&&e.getDomain(a,{feature:t});return n&&n.codedValues?n.getName(s):null},_getTypeName:function(e,t){var i=e.getType&&e.getType(t);return i&&i.name},_getRelatedRecords:function(e){var i,r=e.graphic,a=new n;return this._relatedLayersInfo?this._queryRelatedLayers(r).then(t.hitch(this,function(e){this._setRelatedRecords(r,e),a.resolve(e)}),t.hitch(this,this._handlerErrorResponse,a)):this._getRelatedLayersInfo(e).then(t.hitch(this,function(e){for(i in e)e.hasOwnProperty(i)&&e[i]&&(this._relatedLayersInfo[i].relatedLayerInfo=e[i]);this._queryRelatedLayers(r).then(t.hitch(this,function(e){this._setRelatedRecords(r,e),a.resolve(e)}),t.hitch(this,this._handlerErrorResponse,a))}),t.hitch(this,this._handlerErrorResponse,a)),a.promise},_getRelatedLayersInfo:function(e){var t,r,a=e.graphic,s=e.fieldsInfo,n={};t=a.getLayer(),this._relatedLayersInfo||(this._relatedLayersInfo={}),i.forEach(s,function(e){var r,a,s,n,o;r=this._fromRelatedFieldName(e.fieldName),a=r[0],s=r[1],a&&(this._relatedLayersInfo[a]||(i.some(t.relationships,function(e){return e.id==a?(o=e,!0):void 0}),o&&(this._relatedLayersInfo[a]={relation:o,relatedFields:[],outStatistics:[]})),this._relatedLayersInfo[a]&&(this._relatedLayersInfo[a].relatedFields.push(s),e.statisticType&&(n=new m,n.statisticType=e.statisticType,n.onStatisticField=s,n.outStatisticFieldName=s,this._relatedLayersInfo[a].outStatistics.push(n))))},this);for(r in this._relatedLayersInfo)if(this._relatedLayersInfo.hasOwnProperty(r)){var o,d;this._relatedLayersInfo[r]&&(o=this._relatedLayersInfo[r].relation,d=t.url.replace(/[0-9]+$/,o.relatedTableId),this._relatedLayersInfo[r].relatedLayerUrl=d,n[r]=h({url:d,content:{f:"json"},callbackParamName:"callback"}))}return l(n)},_queryRelatedLayers:function(e){var t,i={};for(t in this._relatedLayersInfo)this._relatedLayersInfo.hasOwnProperty(t)&&(i[t]=this._queryRelatedLayer({graphic:e,relatedInfo:this._relatedLayersInfo[t]}));return l(i)},_queryRelatedLayer:function(e){var t,r,a,s,n,o,d,f,h,m,p,_,y,g;return t=e.graphic,r=t.getLayer(),a=r.url.match(/[0-9]+$/g)[0],_=e.relatedInfo,m=_.relatedLayerInfo,y=_.relatedLayerUrl,g=_.relation,i.some(m.relationships,function(e){return e.relatedTableId===parseInt(a,10)?(s=e,!0):void 0},this),s&&(n=new u,i.some(m.fields,function(e){return e.name===s.keyField?(f=-1!==i.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],e.type)?"number":"string",!0):void 0}),d="string"===f?s.keyField+"='"+t.attributes[g.keyField]+"'":s.keyField+"="+t.attributes[g.keyField],n.where=d,n.outFields=_.relatedFields,_.outStatistics&&_.outStatistics.length>0&&m.supportsStatistics&&(h=new u,h.where=n.where,h.outFields=n.outFields,h.outStatistics=_.outStatistics),o=new c(y),p=[],p.push(o.execute(n)),h&&p.push(o.execute(h))),l(p)},_setRelatedRecords:function(e,t){this._relatedInfo=[];var i;for(i in t)if(t.hasOwnProperty(i)&&t[i]){var r=t[i];this._relatedInfo[i]={},this._relatedInfo[i].relatedFeatures=r[0].features,d.isDefined(r[1])&&(this._relatedInfo[i].relatedStatsFeatures=r[1].features)}},_handlerErrorResponse:function(e,t){e.reject(t)},_fromRelatedFieldName:function(e){var t,i=[];return-1!==e.indexOf(this._relatedFieldPrefix)&&(t=e.split("/"),i=t.slice(1)),i},_toRelatedFieldName:function(e){var t="";return e&&e.length>0&&(t=this._relatedFieldPrefix+e[0]+"/"+e[1]),t}});return s("extend-esri")&&(f.PopupInfo=f.PopupInfoTemplate=_),_});